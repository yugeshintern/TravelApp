/**
 * TrainBookingScreen.js
 *
 * HOW TO USE YOUR JSON:
 * 1. Place `list_of_stations.json` in:  src/data/list_of_stations.json
 * 2. The file must be an array:
 *    [
 *      { "station_code": "MAS", "station_name": "CHENNAI CENTRAL", "region_code": "SR" },
 *      ...
 *    ]
 * 3. That's it — no API key, no network call. Instant local search.
 *
 * FLOW:
 *   TrainBookingScreen → (inline suggestions) → Date Picker (modal) → TrainList → TrainAvailability → AddPassengers
 */

import React, { useState, useCallback, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  FlatList,
  Modal,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

// ─── Import your local station list ──────────────────────────────────────────
// Make sure the path matches where you placed the file.
const ALL_STATIONS = require("../../../data/list_of_stations.json");
// ─────────────────────────────────────────────────────────────────────────────

// ─── Tiny helpers ─────────────────────────────────────────────────────────────
const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];

function formatDate(date) {
  return `${date.getDate()} ${MONTHS[date.getMonth()]}, ${date.getFullYear()}`;
}

function todayFormatted() {
  return formatDate(new Date());
}

/** Search stations: matches code OR name, returns top 10 */
function searchStations(query) {
  if (!query || query.trim().length < 1) return [];
  const q = query.trim().toUpperCase();
  const results = ALL_STATIONS.filter(
    (s) =>
      s.station_code.toUpperCase().startsWith(q) ||
      s.station_name.toUpperCase().includes(q)
  );
  return results.slice(0, 10);
}

/** Format suggestion label: "MAS - Chennai Central" */
function stationLabel(s) {
  return `${s.station_code} - ${toTitleCase(s.station_name)}`;
}

function toTitleCase(str) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
// ─────────────────────────────────────────────────────────────────────────────

// ─── Calendar Modal ───────────────────────────────────────────────────────────
function CalendarModal({ visible, currentDate, onSelect, onClose }) {
  const today = new Date();
  // parse currentDate string back to Date, fallback to today
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDay = new Date(viewYear, viewMonth, 1).getDay(); // 0=Sun

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleDay = (day) => {
    const picked = new Date(viewYear, viewMonth, day);
    if (picked < new Date(today.getFullYear(), today.getMonth(), today.getDate())) return; // no past
    onSelect(formatDate(picked));
    onClose();
  };

  // Build grid: blanks + days
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const isPast = (day) => {
    const d = new Date(viewYear, viewMonth, day);
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableOpacity style={cal.overlay} activeOpacity={1} onPress={onClose}>
        <TouchableOpacity activeOpacity={1} style={cal.sheet}>
          {/* Month Nav */}
          <View style={cal.nav}>
            <TouchableOpacity onPress={prevMonth} style={cal.navBtn}>
              <Text style={cal.navArrow}>‹</Text>
            </TouchableOpacity>
            <Text style={cal.monthLabel}>
              {MONTHS[viewMonth]} {viewYear}
            </Text>
            <TouchableOpacity onPress={nextMonth} style={cal.navBtn}>
              <Text style={cal.navArrow}>›</Text>
            </TouchableOpacity>
          </View>

          {/* Day headers */}
          <View style={cal.weekRow}>
            {["Su","Mo","Tu","We","Th","Fr","Sa"].map((d) => (
              <Text key={d} style={cal.weekDay}>{d}</Text>
            ))}
          </View>

          {/* Date grid */}
          <View style={cal.grid}>
            {cells.map((day, i) => (
              <TouchableOpacity
                key={i}
                style={[cal.cell, day && isPast(day) && cal.pastCell]}
                onPress={() => day && !isPast(day) && handleDay(day)}
                disabled={!day || isPast(day)}
              >
                <Text style={[cal.dayText, day && isPast(day) && cal.pastText]}>
                  {day || ""}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={cal.closeBtn} onPress={onClose}>
            <Text style={cal.closeTxt}>Cancel</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

// ─── Main Screen ─────────────────────────────────────────────────────────────
const TrainBookingScreen = ({ navigation, route }) => {
  const [fromStation, setFromStation] = useState({ code: "", name: "", label: "" });
  const [toStation, setToStation]     = useState({ code: "", name: "", label: "" });
  const [journeyDate, setJourneyDate] = useState(todayFormatted());

  // Which text input is active: "from" | "to" | null
  const [activeField, setActiveField] = useState(null);
  const [fromQuery, setFromQuery]     = useState("");
  const [toQuery, setToQuery]         = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const [showCal, setShowCal] = useState(false);
  const [error, setError]     = useState("");

  const fromRef = useRef(null);
  const toRef   = useRef(null);

  // ── Restore from navigation params (e.g. back-navigation from TrainList) ──
  useFocusEffect(
    useCallback(() => {
      const p = route?.params || {};
      if (p.fromStation)  setFromStation(p.fromStation);
      if (p.toStation)    setToStation(p.toStation);
      if (p.journeyDate)  setJourneyDate(p.journeyDate);
      if (p.fromStation)  setFromQuery(p.fromStation.label || "");
      if (p.toStation)    setToQuery(p.toStation.label || "");
    }, [route?.params])
  );

  // ── Station search ──────────────────────────────────────────────────────────
  const handleFromChange = (text) => {
    setFromQuery(text);
    setFromStation({ code: "", name: "", label: text });
    setSuggestions(searchStations(text));
    setActiveField("from");
    setError("");
  };

  const handleToChange = (text) => {
    setToQuery(text);
    setToStation({ code: "", name: "", label: text });
    setSuggestions(searchStations(text));
    setActiveField("to");
    setError("");
  };

  const selectStation = (station) => {
    const obj = {
      code:  station.station_code,
      name:  toTitleCase(station.station_name),
      label: stationLabel(station),
    };
    if (activeField === "from") {
      setFromStation(obj);
      setFromQuery(obj.label);
      // auto-focus To after picking From
      setTimeout(() => {
        toRef.current?.focus();
        setActiveField("to");
        setSuggestions([]);
      }, 100);
    } else {
      setToStation(obj);
      setToQuery(obj.label);
      setSuggestions([]);
      setActiveField(null);
      Keyboard.dismiss();
    }
  };

  const swapStations = () => {
    const tmpStation = fromStation;
    const tmpQuery   = fromQuery;
    setFromStation(toStation);
    setFromQuery(toQuery);
    setToStation(tmpStation);
    setToQuery(tmpQuery);
    setSuggestions([]);
  };

  const closeSuggestions = () => {
    setSuggestions([]);
    setActiveField(null);
    Keyboard.dismiss();
  };

  // ── Search trains ───────────────────────────────────────────────────────────
  const handleSearch = () => {
    if (!fromStation.code) { setError("Please select a valid From station."); return; }
    if (!toStation.code)   { setError("Please select a valid To station.");   return; }
    if (fromStation.code === toStation.code) { setError("From and To stations cannot be the same."); return; }
    setError("");
    navigation.navigate("TrainList", { fromStation, toStation, journeyDate });
  };

  // ── Suggestion item ─────────────────────────────────────────────────────────
  const renderSuggestion = ({ item }) => (
    <TouchableOpacity style={s.suggItem} onPress={() => selectStation(item)}>
      <View style={s.suggCode}>
        <Text style={s.suggCodeTxt}>{item.station_code}</Text>
      </View>
      <View style={s.suggInfo}>
        <Text style={s.suggName}>{toTitleCase(item.station_name)}</Text>
        <Text style={s.suggRegion}>{item.region_code} Railway</Text>
      </View>
    </TouchableOpacity>
  );

  const showSugg = suggestions.length > 0 && activeField !== null;

  return (
    <SafeAreaView style={s.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={s.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* ── HEADER ─────────────────────────────────────────────────── */}
          <View style={s.header}>
            <TouchableOpacity style={s.backBtn} onPress={() => navigation.goBack()}>
              <Image
                source={require("../../../assets/back.png")}
                style={s.backIcon}
              />
            </TouchableOpacity>
            <Text style={s.headerTitle}>Train Ticket</Text>
            <View style={s.placeholder} />
          </View>

          {/* ── INPUT CARD ─────────────────────────────────────────────── */}
          <View style={s.inputCard}>

            {/* FROM */}
            <View style={s.inputRow}>
              <Image source={require("../../../assets/from.png")} style={s.inputIcon} />
              <TextInput
                ref={fromRef}
                style={s.textInput}
                placeholder="Enter From Station"
                placeholderTextColor="#AAAAAA"
                value={fromQuery}
                onChangeText={handleFromChange}
                onFocus={() => {
                  setActiveField("from");
                  setSuggestions(searchStations(fromQuery));
                }}
                autoCorrect={false}
                autoCapitalize="characters"
                returnKeyType="next"
                onSubmitEditing={() => toRef.current?.focus()}
              />
              <TouchableOpacity style={s.swapBtn} onPress={swapStations}>
                <Image source={require("../../../assets/swap.png")} style={s.swapIcon} />
              </TouchableOpacity>
            </View>

            <View style={s.divider} />

            {/* TO */}
            <View style={s.inputRow}>
              <Image source={require("../../../assets/to.png")} style={s.inputIcon} />
              <TextInput
                ref={toRef}
                style={s.textInput}
                placeholder="Enter To Station"
                placeholderTextColor="#AAAAAA"
                value={toQuery}
                onChangeText={handleToChange}
                onFocus={() => {
                  setActiveField("to");
                  setSuggestions(searchStations(toQuery));
                }}
                autoCorrect={false}
                autoCapitalize="characters"
                returnKeyType="done"
                onSubmitEditing={closeSuggestions}
              />
            </View>

            <View style={s.divider} />

            {/* DATE */}
            <TouchableOpacity style={s.inputRow} onPress={() => setShowCal(true)}>
              <Image source={require("../../../assets/calender.png")} style={s.inputIcon} />
              <View style={s.dateContainer}>
                <Text style={s.dateLabel}>Date of Journey</Text>
                <Text style={s.dateText}>{journeyDate}</Text>
              </View>
              <Text style={s.calIcon}>📅</Text>
            </TouchableOpacity>

          </View>

          {/* ── SUGGESTIONS DROPDOWN ───────────────────────────────────── */}
          {showSugg && (
            <View style={s.suggBox}>
              <FlatList
                data={suggestions}
                keyExtractor={(item) => item.station_code}
                renderItem={renderSuggestion}
                keyboardShouldPersistTaps="handled"
                scrollEnabled={false}
                ItemSeparatorComponent={() => <View style={s.suggDivider} />}
              />
            </View>
          )}

          {/* ── ERROR ─────────────────────────────────────────────────── */}
          {!!error && <Text style={s.error}>{error}</Text>}

          {/* ── SEARCH BUTTON ─────────────────────────────────────────── */}
          <TouchableOpacity style={s.searchBtn} onPress={handleSearch}>
            <Image
              source={require("../../../assets/search-icon.png")}
              style={s.searchIcon}
            />
            <Text style={s.searchText}>Search Trains</Text>
          </TouchableOpacity>

          {/* ── PROMO CARD ────────────────────────────────────────────── */}
          <View style={s.promoCard}>
            <View style={s.promoLeft}>
              <Text style={s.travelLogo}>TRAVEL</Text>
              <Text style={s.offerText}>100% OFF</Text>
              <Text style={s.offerSubText}>On service Charge</Text>
            </View>
            <Text style={s.cornerText}>RIDE MORE{"\n"}PAY LESS</Text>
          </View>

          {/* ── FESTIVAL BANNER ───────────────────────────────────────── */}
          <Image
            source={require("../../../assets/festivalBanner.png")}
            style={s.festivalBanner}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* ── CALENDAR MODAL ──────────────────────────────────────────────── */}
      <CalendarModal
        visible={showCal}
        currentDate={journeyDate}
        onSelect={setJourneyDate}
        onClose={() => setShowCal(false)}
      />
    </SafeAreaView>
  );
};

export default TrainBookingScreen;

// ─── Styles ───────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  container:    { flex: 1, backgroundColor: "#F4F4F4" },
  scrollContent: { paddingBottom: 40 },

  /* Header */
  header: {
  marginTop: 50,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 20,
},
  backBtn: {
    width: 42, height: 42, borderRadius: 21,
    backgroundColor: "#E9E9E9",
    justifyContent: "center", alignItems: "center",
  },
  backIcon:    { width: 18, height: 18, resizeMode: "contain" },
  headerTitle: { fontSize: 20, fontWeight: "700", color: "#111111" },
  placeholder: { width: 42 },

  /* Input card */
  inputCard: {
    marginTop: 28,
    marginHorizontal: 20,
    backgroundColor: "#E9ECEF",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  inputRow: { flexDirection: "row", alignItems: "center" },
  inputIcon: { width: 20, height: 20, resizeMode: "contain" },
  textInput: {
    flex: 1,
    marginLeft: 14,
    fontSize: 16,
    color: "#1A1A1A",
    fontWeight: "500",
    paddingVertical: 4,
    minHeight: 36,
  },
  divider: {
    height: 1,
    backgroundColor: "#D1D1D1",
    marginVertical: 18,
    marginLeft: 34,
  },
  swapBtn: {
    width: 42, height: 42, borderRadius: 21,
    borderWidth: 1, borderColor: "#AFAFAF",
    justifyContent: "center", alignItems: "center",
  },
  swapIcon: { width: 20, height: 20, resizeMode: "contain" },
  dateContainer: { marginLeft: 14, flex: 1 },
  dateLabel:     { fontSize: 13, color: "#777777", marginBottom: 4 },
  dateText:      { fontSize: 18, fontWeight: "700", color: "#111111" },
  calIcon:       { fontSize: 18 },

  /* Suggestions */
  suggBox: {
    marginHorizontal: 20,
    marginTop: 4,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  suggItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  suggCode: {
    width: 52, height: 32,
    borderRadius: 8,
    backgroundColor: "#EAF2FF",
    justifyContent: "center", alignItems: "center",
    marginRight: 12,
  },
  suggCodeTxt: { fontSize: 12, fontWeight: "700", color: "#1565C0" },
  suggInfo:    { flex: 1 },
  suggName:    { fontSize: 15, fontWeight: "600", color: "#1A1A1A" },
  suggRegion:  { fontSize: 12, color: "#888888", marginTop: 2 },
  suggDivider: { height: 1, backgroundColor: "#F0F0F0", marginLeft: 80 },

  /* Error */
  error: {
    marginHorizontal: 24,
    marginTop: 8,
    fontSize: 13,
    color: "#D32F2F",
    fontWeight: "500",
  },

  /* Search button */
  searchBtn: {
    marginTop: 22,
    marginHorizontal: 20,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: { width: 18, height: 18, resizeMode: "contain", marginRight: 10 },
  searchText: { fontSize: 18, color: "#333333", fontWeight: "500" },

  /* Promo */
  promoCard: {
    marginTop: 26,
    marginHorizontal: 20,
    backgroundColor: "#F7DC82",
    borderRadius: 24,
    paddingLeft: 18,
    paddingRight: 6,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  promoLeft:   { flex: 1 },
  travelLogo:  { fontSize: 20, fontWeight: "700", color: "#0C7A6A" },
  offerText:   { marginTop: 14, fontSize: 22, fontWeight: "700", color: "#000000" },
  offerSubText:{ marginTop: 4, fontSize: 15, color: "#4D4D4D" },
  cornerText: {
    position: "absolute", top: 14, right: 14,
    fontSize: 12, fontWeight: "700", color: "#FFFFFF",
    textAlign: "right", lineHeight: 16,
  },

  /* Festival banner */
  festivalBanner: {
    marginTop: 28,
    marginHorizontal: 20,
    width: "90%",
    height: 210,
    borderRadius: 24,
    resizeMode: "cover",
    alignSelf: "center",
  },
});

// ─── Calendar styles ──────────────────────────────────────────────────────────
const cal = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 36,
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  navBtn: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: "#F0F0F0",
    justifyContent: "center", alignItems: "center",
  },
  navArrow:  { fontSize: 22, color: "#333", fontWeight: "700" },
  monthLabel:{ fontSize: 18, fontWeight: "700", color: "#111" },

  weekRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 8,
  },
  weekDay: { width: 36, textAlign: "center", fontSize: 13, color: "#888", fontWeight: "600" },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  cell: {
    width: `${100 / 7}%`,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  pastCell: { opacity: 0.3 },
  dayText:  { fontSize: 15, color: "#111", fontWeight: "500" },
  pastText: { color: "#AAAAAA" },

  closeBtn: {
    marginTop: 20,
    alignSelf: "center",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
    backgroundColor: "#F0F0F0",
  },
  closeTxt: { fontSize: 15, fontWeight: "600", color: "#333" },
});
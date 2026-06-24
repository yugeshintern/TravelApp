/**
 * TrainListScreen.js
 *
 * Receives from TrainBookingScreen via route.params:
 *   fromStation  → { code, name, label }   e.g. { code:"MAS", name:"Chennai Central", label:"MAS - Chennai Central" }
 *   toStation    → { code, name, label }
 *   journeyDate  → string  e.g. "26 Feb, 2026"
 */

import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";

// ─── Date helpers ─────────────────────────────────────────────────────────────
const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];
const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

/** Parse "26 Feb, 2026" → Date object */
function parseDate(str) {
  if (!str) return new Date();
  // "26 Feb, 2026"
  const [d, mStr, y] = str.replace(",", "").split(" ");
  const month = MONTHS.findIndex((m) => m.toLowerCase() === mStr?.toLowerCase());
  return new Date(parseInt(y), month, parseInt(d));
}

/** Format Date → "Fri, 26" */
function formatTab(date) {
  return `${DAYS[date.getDay()]}, ${date.getDate()}`;
}

/** Format Date → full string for navigation */
function formatFull(date) {
  return `${date.getDate()} ${MONTHS[date.getMonth()]}, ${date.getFullYear()}`;
}

/** Add N days to a date */
function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/** Get month abbreviation from date */
function getMonth(date) {
  return MONTHS[date.getMonth()].toUpperCase();
}
// ─────────────────────────────────────────────────────────────────────────────

// ─── Mock trains data (replace with API later) ────────────────────────────────
const MOCK_TRAINS = [
  {
    id: "1",
    number: "20605",
    name: "Ms Tcn Sf Exp",
    depTime: "16:00",
    arrTime: "06:00",
    duration: "14h",
    classes: [
      { cls: "SL", price: 465,  status: "WL 62", type: "waitlist", chance: "52% Chance" },
      { cls: "3A", price: 1190, status: "WL 20", type: "waitlist", chance: "78% Chance" },
      { cls: "1A", price: 2770, status: "AVL 1", type: "available", chance: "Available"  },
    ],
    alt: [465, 1065],
  },
  {
    id: "2",
    number: "12163",
    name: "Chennai Express",
    depTime: "08:30",
    arrTime: "22:45",
    duration: "14h 15m",
    classes: [
      { cls: "SL", price: 430,  status: "AVL 12", type: "available", chance: "Available" },
      { cls: "3A", price: 1150, status: "WL 5",   type: "waitlist",  chance: "91% Chance" },
      { cls: "2A", price: 1640, status: "AVL 4",  type: "available", chance: "Available"  },
    ],
    alt: [430, 980],
  },
  {
    id: "3",
    number: "16101",
    name: "Boat Mail Express",
    depTime: "21:00",
    arrTime: "11:30",
    duration: "14h 30m",
    classes: [
      { cls: "SL", price: 445,  status: "WL 88", type: "waitlist",  chance: "38% Chance" },
      { cls: "3A", price: 1175, status: "WL 31", type: "waitlist",  chance: "65% Chance" },
      { cls: "2A", price: 1675, status: "AVL 2", type: "available", chance: "Available"  },
    ],
    alt: [445, 1050],
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const TrainListScreen = ({ navigation, route }) => {
  // ── Pull params ─────────────────────────────────────────────────────────────
  const {
    fromStation,
    toStation,
    journeyDate,
  } = route.params || {};

  // Handle both object { code, name, label } and plain string (safety net)
  const fromLabel = fromStation?.label || fromStation || "From";
  const toLabel   = toStation?.label   || toStation   || "To";
  const fromCode  = fromStation?.code  || "";
  const toCode    = toStation?.code    || "";

  // ── Date tabs: selected date + 4 surrounding days ──────────────────────────
  const baseDate = useMemo(() => parseDate(journeyDate), [journeyDate]);
  const [selectedDate, setSelectedDate] = useState(baseDate);

  // Build 5-day tab window centred on baseDate: base-0, base+1, base+2, base+3, base+4
  const dateTabs = useMemo(
    () => Array.from({ length: 5 }, (_, i) => addDays(baseDate, i)),
    [baseDate]
  );

  // Month label: from the selected date
  const monthLabel = getMonth(selectedDate);

  // ── Navigate to TrainAvailability ───────────────────────────────────────────
  const goToAvailability = (train) => {
    navigation.navigate("TrainAvailability", {
      train,
      fromStation,
      toStation,
      journeyDate: formatFull(selectedDate), // carry updated selected date
    });
  };

  // ── Availability status color logic ────────────────────────────────────────
  const boxStyle  = (type) => type === "available" ? styles.greenBox  : styles.orangeBox;
  const statStyle = (type) => type === "available" ? styles.statGreen  : styles.statOrange;
  const chanceStyle=(type) => type === "available" ? styles.chanceGreen: styles.chanceOrange;

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <SafeAreaView style={styles.container}>

      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../../assets/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        {/* FROM → TO  (show code + name, truncated nicely) */}
        <View style={styles.headerCenter}>
          <View style={styles.routeRow}>
            <View style={styles.stationBlock}>
              <Text style={styles.stationCode}>{fromCode}</Text>
              <Text style={styles.stationName} numberOfLines={1}>
                {fromStation?.name || fromLabel}
              </Text>
            </View>

            <Text style={styles.arrow}>→</Text>

            <View style={[styles.stationBlock, { alignItems: "flex-end" }]}>
              <Text style={styles.stationCode}>{toCode}</Text>
              <Text style={styles.stationName} numberOfLines={1}>
                {toStation?.name || toLabel}
              </Text>
            </View>
          </View>

          <Text style={styles.dateSubtitle}>
            {formatFull(selectedDate)} · {DAYS[selectedDate.getDay()]}
          </Text>
        </View>
      </View>

      {/* ── DATE TABS ───────────────────────────────────────────────────── */}
      <View style={styles.tabsWrapper}>
        {/* Rotating month label */}
        <View style={styles.monthStrip}>
          <Text style={styles.monthText}>{monthLabel}</Text>
        </View>

        {/* Scrollable date tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsScroll}
        >
          {dateTabs.map((date, idx) => {
            const isActive =
              date.toDateString() === selectedDate.toDateString();
            // Mock availability indicator per tab
            const availTypes = ["available", "few", "fast", "few", "available"];
            const avType = availTypes[idx];
            return (
              <TouchableOpacity
                key={idx}
                style={[styles.tab, isActive && styles.activeTab]}
                onPress={() => setSelectedDate(date)}
              >
                <Text style={[styles.tabDate, isActive && styles.activeTabText]}>
                  {formatTab(date)}
                </Text>
                <Text
                  style={[
                    styles.tabAvail,
                    avType === "available" && styles.availGreen,
                    avType === "few"       && styles.availRed,
                    avType === "fast"      && styles.availOrange,
                  ]}
                >
                  {avType === "available" ? "• Available"
                    : avType === "few"    ? "• Few Seats"
                    :                       "• Filling Fast"}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* ── TRAIN LIST ──────────────────────────────────────────────────── */}
      <FlatList
        data={MOCK_TRAINS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => goToAvailability(item)}
          >
            <TrainCard
              item={item}
              fromCode={fromCode}
              toCode={toCode}
              boxStyle={boxStyle}
              statStyle={statStyle}
              chanceStyle={chanceStyle}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default TrainListScreen;

// ─── Train Card ───────────────────────────────────────────────────────────────
const TrainCard = ({ item, fromCode, toCode, boxStyle, statStyle, chanceStyle }) => (
  <View style={styles.card}>
    <Text style={styles.trainNumber}>{item.number}</Text>
    <Text style={styles.trainName}>{item.name}</Text>

    <Text style={styles.timing}>
      {item.depTime} {fromCode} · {item.duration} · {item.arrTime} {toCode}
    </Text>

    {/* Class boxes */}
    <View style={styles.classRow}>
      {item.classes.map((c) => (
        <View key={c.cls} style={[styles.classBox, boxStyle(c.type)]}>
          <View style={styles.classPriceRow}>
            <Text style={styles.clsText}>{c.cls}</Text>
            <Text style={styles.priceText}>₹{c.price}</Text>
          </View>
          <Text style={[styles.statusText, statStyle(c.type)]}>{c.status}</Text>
          <Text style={[styles.chanceText, chanceStyle(c.type)]}>{c.chance}</Text>
        </View>
      ))}
    </View>

    {/* Alternate stations */}
    <View style={styles.altRow}>
      <Text style={styles.altText}>Alternate Station ₹{item.alt[0]}</Text>
      <Text style={styles.altText}>Alternate Station ₹{item.alt[1]}</Text>
    </View>
  </View>
);

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#F4F5F7",
  paddingTop: 20,
},

  /* Header */
  header: {
    marginTop: 36,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  backBtn: {
    width: 38, height: 38, borderRadius: 19,
    backgroundColor: "#EDEDED",
    justifyContent: "center", alignItems: "center",
    marginRight: 12,
  },
  backIcon: { width: 18, height: 18, resizeMode: "contain" },

  headerCenter: { flex: 1 },

  routeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stationBlock: { flex: 1 },
  stationCode: {
    fontSize: 18, fontWeight: "800", color: "#111",
  },
  stationName: {
    fontSize: 11, color: "#777", marginTop: 1,
  },
  arrow: {
    fontSize: 20, color: "#1E88E5", fontWeight: "700",
    marginHorizontal: 8,
  },
  dateSubtitle: {
    marginTop: 4, fontSize: 13, color: "#888",
  },

  /* Date tabs */
  tabsWrapper: {
    flexDirection: "row",
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  monthStrip: {
    width: 36,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
  },
  monthText: {
    transform: [{ rotate: "-90deg" }],
    fontSize: 11, fontWeight: "700", color: "#555",
    letterSpacing: 1,
  },
  tabsScroll: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  tab: {
    marginRight: 20,
    paddingBottom: 6,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#1E88E5",
  },
  tabDate: {
    fontSize: 13, fontWeight: "500", color: "#444",
  },
  activeTabText: {
    color: "#1E88E5", fontWeight: "700",
  },
  tabAvail: { fontSize: 11, marginTop: 2 },
  availGreen:  { color: "#2E7D32" },
  availRed:    { color: "#8B0000" },
  availOrange: { color: "#E65100" },

  /* Card */
  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginTop: 14,
    padding: 16,
    borderRadius: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  trainNumber: { fontSize: 13, color: "#888", fontWeight: "500" },
  trainName:   { fontSize: 16, fontWeight: "700", color: "#111", marginTop: 1 },
  timing:      { fontSize: 13, color: "#666", marginTop: 4 },

  /* Class boxes */
  classRow: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "space-between",
  },
  classBox: {
    flex: 1,
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 3,
  },
  orangeBox: { borderWidth: 1, borderColor: "#F4A261", backgroundColor: "#FFF4EA" },
  greenBox:  { borderWidth: 1, borderColor: "#43A047", backgroundColor: "#EAF7EA" },

  classPriceRow: { flexDirection: "row", justifyContent: "space-between" },
  clsText:   { fontSize: 13, fontWeight: "700", color: "#333" },
  priceText: { fontSize: 13, fontWeight: "700", color: "#111" },

  statusText: { fontSize: 12, marginTop: 6, fontWeight: "600" },
  statOrange: { color: "#E65100" },
  statGreen:  { color: "#2E7D32" },

  chanceText:   { fontSize: 11, marginTop: 4 },
  chanceOrange: { color: "#E65100" },
  chanceGreen:  { color: "#2E7D32", fontWeight: "600" },

  /* Alternate row */
  altRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  altText: { color: "#2E7D32", fontSize: 12 },
});
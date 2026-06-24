/**
 * TrainAvailabilityScreen.js
 *
 * Receives from TrainListScreen via route.params:
 *   train        → { id, number, name, depTime, arrTime, duration, classes, alt }
 *   fromStation  → { code, name, label }
 *   toStation    → { code, name, label }
 *   journeyDate  → string  e.g. "26 Feb, 2026"
 */

import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";

// ─── Date helpers ─────────────────────────────────────────────────────────────
const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];
const DAYS_SHORT = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function parseDate(str) {
  if (!str) return new Date();
  // "26 Feb, 2026"
  const [d, mStr, y] = str.replace(",", "").split(" ");
  const month = MONTHS.findIndex(
    (m) => m.toLowerCase() === mStr?.toLowerCase()
  );
  return new Date(parseInt(y), month, parseInt(d));
}

function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/** "26 Feb" */
function fmtDate(date) {
  return `${String(date.getDate()).padStart(2, "0")} ${MONTHS[date.getMonth()]}`;
}

/** "Thu" */
function fmtDay(date) {
  return DAYS_SHORT[date.getDay()];
}

/** Full string for navigation */
function fmtFull(date) {
  return `${date.getDate()} ${MONTHS[date.getMonth()]}, ${date.getFullYear()}`;
}
// ─────────────────────────────────────────────────────────────────────────────

// ─── Mock availability generator ─────────────────────────────────────────────
// In a real app you'd fetch this per train/class/date.
// Here we generate 8 days of mock data from the selected date.
const MOCK_AVAIL_PATTERNS = [
  { status: "AVL 1",  sub: "Available",  type: "available", alt: false },
  { status: "WL 4",   sub: "89% Chance", type: "wl",        alt: true  },
  { status: "WL 4",   sub: "89% Chance", type: "wl",        alt: true  },
  { status: "WL 1",   sub: "90% Chance", type: "wl",        alt: false },
  { status: "AVL 1",  sub: "Available",  type: "available", alt: false },
  { status: "WL 20",  sub: "78% Chance", type: "wl",        alt: true  },
  { status: "AVL 1",  sub: "Available",  type: "available", alt: false },
  { status: "AVL 1",  sub: "Available",  type: "available", alt: false },
];
// ─────────────────────────────────────────────────────────────────────────────

const TrainAvailabilityScreen = ({ navigation, route }) => {
  const {
    train,
    fromStation,
    toStation,
    journeyDate,
  } = route.params || {};

    // Safe label reads
  const fromCode  = fromStation?.code  || "FROM";
  const toCode    = toStation?.code    || "TO";
  const fromName  = fromStation?.name  || fromStation?.label || fromCode;
  const toName    = toStation?.name    || toStation?.label   || toCode;

  const trainNumber   = train?.number   || "—";
  const trainName     = train?.name     || "Train";
  const depTime       = train?.depTime  || "--:--";
  const arrTime       = train?.arrTime  || "--:--";
  const duration      = train?.duration || "—";

  // ── Build 8-day rows starting from journeyDate ────────────────────────────
  const baseDate = useMemo(() => parseDate(journeyDate), [journeyDate]);

  const generalData = useMemo(() =>
    MOCK_AVAIL_PATTERNS.map((p, i) => ({
      ...p,
      date: fmtDate(addDays(baseDate, i)),
      day:  fmtDay(addDays(baseDate, i)),
      dateObj: addDays(baseDate, i),
    })),
    [baseDate]
  );

  // Senior & Ladies: 5 days, all "Not Available"
  const disabledData = useMemo(() =>
    Array.from({ length: 5 }, (_, i) => ({
      date: fmtDate(addDays(baseDate, i)),
      day:  fmtDay(addDays(baseDate, i)),
    })),
    [baseDate]
  );

  // Price from selected class (use first class as default, or pass from TrainList)
  const basePrice = train?.classes?.[0]?.price ?? 2770;
  const altPrice  = Math.round(basePrice * 1.42 / 10) * 10;

  // ── Navigate to AddPassengers carrying everything ─────────────────────────
  const goToBook = (dateObj, isAlt = false) => {
  navigation.navigate("AddPassengers", {
    train,
    fromStation,
    toStation,
    journeyDate: fmtFull(dateObj),
    isAlternate: isAlt,
    price: isAlt ? altPrice : basePrice,

    trainNumber: train?.number,
    trainName: train?.name,
    depTime: train?.depTime,
    arrTime: train?.arrTime,
  });
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 20 }}>

        {/* ── HEADER ──────────────────────────────────────────────────── */}
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

          {/* Train info */}
          <Text style={styles.trainNumber}>{trainNumber}</Text>
          <Text style={styles.trainName}>{trainName}</Text>

          {/* Route row */}
          <View style={styles.routeRow}>
            <View style={styles.stationBlock}>
              <Text style={styles.stCode}>{fromCode}</Text>
              <Text style={styles.stName}>{fromName}</Text>
              <Text style={styles.stTime}>{depTime}</Text>
            </View>

            <View style={styles.durationBlock}>
              <Text style={styles.durationLine}>──────</Text>
              <Text style={styles.durationText}>{duration}</Text>
            </View>

            <View style={[styles.stationBlock, { alignItems: "flex-end" }]}>
              <Text style={styles.stCode}>{toCode}</Text>
              <Text style={styles.stName}>{toName}</Text>
              <Text style={styles.stTime}>{arrTime}</Text>
            </View>
          </View>
        </View>

        {/* ── GENERAL ─────────────────────────────────────────────────── */}
        <Text style={styles.sectionTitle}>General</Text>
        {generalData.map((item, index) => (
          <Row
            key={index}
            item={item}
            basePrice={basePrice}
            altPrice={altPrice}
            onBook={() => goToBook(item.dateObj, false)}
            onAlt={() => goToBook(item.dateObj, true)}
          />
        ))}

        {/* ── SENIOR CITIZEN ──────────────────────────────────────────── */}
        <Text style={styles.sectionTitle}>Senior Citizen</Text>
        {disabledData.map((item, index) => (
          <DisabledRow key={index} item={item} basePrice={basePrice} />
        ))}

        {/* ── LADIES ──────────────────────────────────────────────────── */}
        <Text style={styles.sectionTitle}>Ladies</Text>
        {disabledData.map((item, index) => (
          <DisabledRow key={index} item={item} basePrice={basePrice} />
        ))}

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrainAvailabilityScreen;

// ─── Row component ────────────────────────────────────────────────────────────
const Row = ({ item, basePrice, altPrice, onBook, onAlt }) => {
  const isAvailable = item.type === "available";
  return (
    <View style={styles.row}>

      {/* Date */}
      <View style={styles.dateCol}>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.dayText}>{item.day}</Text>
      </View>

      {/* Status */}
      <View style={styles.statusCol}>
        <Text style={[styles.statusText, isAvailable ? styles.green : styles.green]}>
          {item.status}
        </Text>
        <Text style={[styles.subText, isAvailable ? styles.green : styles.green]}>
          {item.sub}
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.bookBtn} onPress={onBook}>
          <Text style={styles.bookLabel}>Book</Text>
          <Text style={styles.bookPrice}>₹{basePrice}</Text>
        </TouchableOpacity>

        {item.alt && (
          <TouchableOpacity style={styles.altBtn} onPress={onAlt}>
            <Text style={styles.altLabel}>Alternate</Text>
            <Text style={styles.altPrice}>₹{altPrice}</Text>
          </TouchableOpacity>
        )}
      </View>

    </View>
  );
};

// ─── Disabled Row ─────────────────────────────────────────────────────────────
const DisabledRow = ({ item, basePrice }) => (
  <View style={styles.row}>
    <View style={styles.dateCol}>
      <Text style={styles.dateText}>{item.date}</Text>
      <Text style={styles.dayText}>{item.day}</Text>
    </View>
    <View style={styles.statusCol}>
      <Text style={styles.notAvail}>Not Available</Text>
    </View>
    <View style={styles.disabledBtn}>
      <Text style={styles.disabledLabel}>Book</Text>
      <Text style={styles.disabledLabel}>₹{basePrice}</Text>
    </View>
  </View>
);

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#F5F6F8",
  paddingTop: 20,
},

  /* Header */
  header: {
    marginTop: 36,
    paddingHorizontal: 20,
    paddingBottom: 16,
    alignItems: "center",
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  backBtn: {
    position: "absolute",
    left: 16,
    top: 12,
    width: 38, height: 38, borderRadius: 19,
    backgroundColor: "#EDEDED",
    justifyContent: "center", alignItems: "center",
  },
  backIcon: { width: 18, height: 18, resizeMode: "contain" },

  trainNumber: { fontSize: 13, color: "#888", fontWeight: "600", marginTop: 8 },
  trainName:   { fontSize: 17, fontWeight: "700", color: "#111", marginTop: 2 },

  routeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    width: "100%",
    justifyContent: "space-between",
  },
  stationBlock: { flex: 1 },
  stCode: { fontSize: 22, fontWeight: "800", color: "#111" },
  stName: { fontSize: 11, color: "#777", marginTop: 1 },
  stTime: { fontSize: 15, fontWeight: "700", color: "#1E88E5", marginTop: 4 },

  durationBlock: { alignItems: "center", flex: 1 },
  durationLine:  { color: "#CCC", fontSize: 14, letterSpacing: -2 },
  durationText:  { fontSize: 12, color: "#999", marginTop: 2 },

  /* Section */
  sectionTitle: {
    marginTop: 22,
    marginLeft: 16,
    fontSize: 16,
    color: "#1E6BF1",
    fontWeight: "700",
  },

  /* Row */
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    backgroundColor: "#FFF",
    marginHorizontal: 0,
  },

  dateCol: { width: 60 },
  dateText: { fontSize: 14, fontWeight: "700", color: "#111" },
  dayText:  { fontSize: 12, color: "#888", marginTop: 2 },

  statusCol: { flex: 1, marginLeft: 16 },
  statusText: { fontSize: 15, fontWeight: "700" },
  subText:    { fontSize: 12, marginTop: 2 },
  green:      { color: "#2E7D32" },

  notAvail: { color: "#D32F2F", fontWeight: "600", fontSize: 13 },

  /* Buttons */
  btnGroup: { flexDirection: "row", gap: 8 },

  bookBtn: {
    borderWidth: 1.5,
    borderColor: "#2E7D32",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: "center",
    minWidth: 62,
  },
  bookLabel: { color: "#2E7D32", fontWeight: "700", fontSize: 13 },
  bookPrice: { color: "#2E7D32", fontSize: 11, marginTop: 2 },

  altBtn: {
    borderWidth: 1.5,
    borderColor: "#2E7D32",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: "center",
    minWidth: 72,
  },
  altLabel: { color: "#2E7D32", fontWeight: "700", fontSize: 12 },
  altPrice: { color: "#2E7D32", fontSize: 11, marginTop: 2 },

  disabledBtn: {
    borderWidth: 1.5,
    borderColor: "#CCC",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: "center",
    minWidth: 62,
  },
  disabledLabel: { color: "#AAAAAA", fontSize: 12 },
});
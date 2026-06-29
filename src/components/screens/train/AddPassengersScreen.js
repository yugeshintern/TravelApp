/**
 * AddPassengersScreen.js
 *
 * Receives from TrainAvailabilityScreen via route.params:
 *   train        → { id, number, name, depTime, arrTime, duration, classes, alt }
 *   fromStation  → { code, name, label }
 *   toStation    → { code, name, label }
 *   journeyDate  → string  e.g. "26 Feb, 2026"
 *   isAlternate  → boolean
 *   price        → number
 *   trainNumber, trainName, depTime, arrTime → flattened convenience fields
 */

import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// ─── Date helpers ─────────────────────────────────────────────────────────────
const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];
const DAYS_SHORT = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

/** Parse "26 Feb, 2026" → Date object */
function parseDate(str) {
  if (!str) return new Date();
  const [d, mStr, y] = str.replace(",", "").split(" ");
  const month = MONTHS.findIndex(
    (m) => m.toLowerCase() === mStr?.toLowerCase()
  );
  return new Date(parseInt(y), month, parseInt(d));
}

/** "Thu, 26 Feb" */
function fmtDayDate(date) {
  return `${DAYS_SHORT[date.getDay()]}, ${date.getDate()} ${MONTHS[date.getMonth()]}`;
}
// ─────────────────────────────────────────────────────────────────────────────

const AddPassengersScreen = ({ navigation, route }) => {
  const {
    train,
    fromStation,
    toStation,
    journeyDate,
    isAlternate,
    price,
    trainNumber,
    trainName,
    depTime,
    arrTime,
  } = route.params || {};

  // ── Safe reads with fallbacks ──────────────────────────────────────────────
  const fromCode = fromStation?.code || "FROM";
  const toCode   = toStation?.code   || "TO";
  const fromName = fromStation?.name || fromStation?.label || fromCode;
  const toName   = toStation?.name   || toStation?.label   || toCode;

  const tNumber      = trainNumber || train?.number || "—";
  const tName        = trainName   || train?.name   || "Train";
  const boardingTime = depTime     || train?.depTime || "--:--";
  const selectedClass = train?.classes?.[0]?.cls || "SL";

  // ── Journey date, formatted for header + boarding box ──────────────────────
  const journeyDateObj = useMemo(() => parseDate(journeyDate), [journeyDate]);
  const dateLabel = fmtDayDate(journeyDateObj); // e.g. "Thu, 26 Feb"

  // ── Carry everything forward to the next screens ───────────────────────────
  const goToPassengerDetails = () => {
    navigation.navigate("PassengerBookingDetails", {
      train,
      fromStation,
      toStation,
      journeyDate,
      isAlternate,
      price,
    });
  };

  const goToPayments = () => {
    navigation.navigate("Payments", {
      train,
      fromStation,
      toStation,
      journeyDate,
      isAlternate,
      price,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >

        {/* HEADER */}
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

          <Text style={styles.title}>{tNumber} {tName}</Text>
          <Text style={styles.subTitle}>
            {selectedClass} - GN - {dateLabel}
          </Text>

          {/* Route row — continuation of from/to shown on TrainAvailabilityScreen */}
          <View style={styles.routeRow}>
            <View style={styles.stationBlock}>
              <Text style={styles.stCode}>{fromCode}</Text>
              <Text style={styles.stName} numberOfLines={1}>{fromName}</Text>
            </View>

            <Text style={styles.arrow}>→</Text>

            <View style={[styles.stationBlock, { alignItems: "flex-end" }]}>
              <Text style={styles.stCode}>{toCode}</Text>
              <Text style={styles.stName} numberOfLines={1}>{toName}</Text>
            </View>
          </View>

          {/* Fare badge, carried forward from TrainAvailabilityScreen */}
          {price ? (
            <View style={styles.fareRow}>
              <Text style={styles.fareLabel}>
                {isAlternate ? "Alternate Fare" : "Fare"}
              </Text>
              <Text style={styles.farePrice}>₹{price}</Text>
            </View>
          ) : null}
        </View>

        {/* BOARDING */}
        <Text style={styles.sectionTitle}>Boarding Station</Text>
        <Text style={styles.label}>Boarding Details</Text>

        <View style={styles.inputBox}>
          <Text style={styles.inputText}>
            {fromCode} – {fromName} ({dateLabel}, {boardingTime})
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            You are booking this train from ({fromCode} – {fromName}) to ({toCode} – {toName})
          </Text>
        </View>

        {/* PASSENGERS */}
        <Text style={styles.sectionTitle}>Select Passengers</Text>

        <TouchableOpacity style={styles.addBtn} onPress={goToPassengerDetails}>
          <Text style={styles.addBtnText}>+ Add New Passengers</Text>
        </TouchableOpacity>

        {/* CONTACT */}
        <Text style={styles.sectionTitle}>Contact Details</Text>

        <View style={styles.contactRow}>
          <Image
            source={require('../../../assets/msg.png')}
            style={styles.contactIcon}
          />
          <Text style={styles.contactText}>
            Your booking details will be sent here
          </Text>
        </View>

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          value="+91 99880 08899"
          editable={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#999"
        />

      </ScrollView>

      {/* BOTTOM BUTTON */}
      <TouchableOpacity style={styles.payBtn} onPress={goToPayments}>
        <Text style={styles.payText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddPassengersScreen;

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
  },

  /* Header */
  header: {
  marginTop: 50, // Increased top padding
  paddingHorizontal: 20,
  paddingBottom: 18,
  alignItems: 'center',
  backgroundColor: '#FFF',
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.07,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 2 },
},

  backBtn: {
  position: 'absolute',
  left: 16,
  top: 50, // Match the header spacing
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: '#EDEDED',
  justifyContent: 'center',
  alignItems: 'center',
},
  backIcon: { width: 18, height: 18, resizeMode: 'contain' },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginTop: 8,
  },

  subTitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#777',
  },

  /* Route row, mirrors TrainAvailabilityScreen */
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    width: '100%',
    justifyContent: 'space-between',
  },
  stationBlock: { flex: 1 },
  stCode: { fontSize: 18, fontWeight: '800', color: '#111' },
  stName: { fontSize: 11, color: '#777', marginTop: 1 },
  arrow: {
    fontSize: 18,
    color: '#1E88E5',
    fontWeight: '700',
    marginHorizontal: 8,
  },

  /* Fare badge */
  fareRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: '#EAF7EA',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  fareLabel: { fontSize: 12, color: '#2E7D32', fontWeight: '600', marginRight: 6 },
  farePrice: { fontSize: 13, color: '#2E7D32', fontWeight: '800' },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 30,
    marginHorizontal: 20,
    color: '#333',
  },

  label: {
    marginTop: 16,
    marginHorizontal: 20,
    color: '#888',
    fontSize: 14,
  },

  inputBox: {
    marginHorizontal: 20,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderRadius: 14,
    padding: 16,
    backgroundColor: '#fff',
  },

  inputText: {
    fontSize: 15,
    color: '#666',
  },

  infoBox: {
    marginHorizontal: 20,
    marginTop: 14,
    backgroundColor: '#F3E5C4',
    padding: 14,
    borderRadius: 14,
  },

  infoText: {
    fontSize: 13,
    color: '#444',
    lineHeight: 18,
  },

  addBtn: {
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: '#0B7A00',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },

  addBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 16,
  },

  contactIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  contactText: {
    marginLeft: 10,
    color: '#444',
    fontSize: 14,
  },

  input: {
    marginHorizontal: 20,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderRadius: 14,
    padding: 16,
    fontSize: 15,
    backgroundColor: '#fff',
  },

  payBtn: {
    margin: 20,
    backgroundColor: '#0F7C7C',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
  },

  payText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ParcelLookingRiderScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* MAP */}
      <View style={styles.map}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>
      </View>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        {/* DRAG BAR */}
        <View style={styles.dragBar} />

        {/* HEADER */}
        <View style={styles.row}>
          <Icon name="truck" size={18} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.small}>Looking for your</Text>
            <Text style={styles.bold}>Bike ride</Text>
          </View>
        </View>

        {/* LOCATION DETAILS */}
        <Text style={styles.section}>Location Details</Text>

        <View style={styles.locationCard}>
          <View style={styles.row}>
            {/* DOTS */}
            <View style={styles.lineBox}>
              <View style={styles.greenDot} />
              <View style={styles.dashedLine} />
              <View style={styles.redDot} />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.locTitle}>
                Egmore Railway Station
              </Text>
              <Text style={styles.locSub}>
                Gandhi Irwin Road, Chennai...
              </Text>

              <Text style={[styles.locTitle, { marginTop: 10 }]}>
                Koyambedu Bus Stand
              </Text>
              <Text style={styles.locSub}>
                Koyambedu bus terminus...
              </Text>
            </View>
          </View>
        </View>

        {/* FARE */}
        <View style={styles.fareCard}>
          <View style={styles.rowBetween}>
            <Text style={styles.bold}>Total Fare</Text>
            <Text style={styles.bold}>₹287.0</Text>
          </View>

          <View style={styles.row}>
            <Icon name="credit-card" size={14} />
            <Text style={styles.subText}> Paying via cash</Text>
          </View>
        </View>

        {/* BUTTONS */}
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.outlineBtn}>
          <Text style={styles.outlineText}>Cancel Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  map: {
    height: 260,
    backgroundColor: "#ddd",
  },

  backBtn: {
    position: "absolute",
    top: 20,
    left: 15,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    elevation: 3,
  },

  sheet: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15,
    marginTop: -20,
  },

  dragBar: {
    width: 40,
    height: 4,
    backgroundColor: "#ccc",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  small: { fontSize: 12, color: "#555" },
  bold: { fontSize: 15, fontWeight: "600" },

  section: {
    marginTop: 15,
    fontSize: 13,
    fontWeight: "600",
  },

  locationCard: {
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 12,
    marginTop: 10,
  },

  lineBox: {
    alignItems: "center",
    marginRight: 10,
  },

  greenDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: "green",
  },

  redDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: "darkred",
  },

  dashedLine: {
    height: 35,
    borderLeftWidth: 1,
    borderStyle: "dashed",
    marginVertical: 2,
  },

  locTitle: {
    fontSize: 13,
    fontWeight: "600",
  },

  locSub: {
    fontSize: 11,
    color: "#666",
  },

  fareCard: {
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 12,
    marginTop: 15,
  },

  subText: {
    fontSize: 12,
    color: "#555",
    marginLeft: 5,
  },

  primaryBtn: {
    backgroundColor: "#0f766e",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 15,
  },

  primaryText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  outlineBtn: {
    borderWidth: 1.5,
    borderColor: "red",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },

  outlineText: {
    color: "red",
    fontSize: 15,
    fontWeight: "600",
  },
});
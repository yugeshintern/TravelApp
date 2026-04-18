import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ParcelAddExtraMoneyScreen({ navigation }) {
  const [selected, setSelected] = useState(null);

  const amounts = [20, 30, 40, 50];

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
        <View style={styles.dragBar} />

        {/* HEADER */}
        <View style={styles.row}>
          <Icon name="truck" size={18} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.small}>Looking for your</Text>
            <Text style={styles.bold}>Bike ride</Text>
          </View>
        </View>

        {/* RIDE CARD */}
        <View style={styles.rideCard}>
          <View>
            <Text style={styles.bold}>Bike ride</Text>
            <Text style={styles.subText}>₹287.0</Text>
          </View>

          <TouchableOpacity style={styles.tripBtn}>
            <Text style={styles.tripText}>Trip Details</Text>
          </TouchableOpacity>
        </View>

        {/* BOOST CARD */}
        <View style={styles.boostCard}>
          <Text style={styles.bold}>
            Captains aren’t accepting at ₹287.
          </Text>
          <Text style={styles.subText}>Try adding more</Text>

          <View style={styles.chipRow}>
            {amounts.map((amt) => (
              <TouchableOpacity
                key={amt}
                style={[
                  styles.chip,
                  selected === amt && styles.chipSelected,
                ]}
                onPress={() => setSelected(amt)}
              >
                <Text
                  style={[
                    styles.chipText,
                    selected === amt && { color: "#fff" },
                  ]}
                >
                  +₹{amt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* FOOT TEXT */}
        <Text style={styles.footerText}>
          Almost there! Add a little more so a captain can pick you faster...
        </Text>
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

  small: { fontSize: 12, color: "#555" },
  bold: { fontSize: 15, fontWeight: "600" },

  /* RIDE CARD */
  rideCard: {
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 12,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  subText: {
    fontSize: 12,
    color: "#555",
    marginTop: 2,
  },

  tripBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  tripText: {
    fontSize: 12,
    color: "#333",
  },

  /* BOOST CARD */
  boostCard: {
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
  },

  chipRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  chip: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
  },

  chipSelected: {
    backgroundColor: "#0f766e",
    borderColor: "#0f766e",
  },

  chipText: {
    fontSize: 12,
    color: "#333",
  },

  footerText: {
    marginTop: 20,
    fontSize: 12,
    color: "#555",
  },
});
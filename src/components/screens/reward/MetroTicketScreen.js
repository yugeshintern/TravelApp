import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function MetroTicketScreen({ navigation }) {
  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>

        <Text style={styles.header}>Proceed to Pay</Text>
      </View>

      {/* ROUTE CARD */}
      <View style={styles.routeCard}>
        <View style={styles.row}>
          <View style={styles.greenDot} />
          <Text style={styles.station}>Guindy</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.row}>
          <View style={styles.redDot} />
          <Text style={styles.station}>Ekkattuthangal</Text>
        </View>
      </View>

      {/* PASSENGERS */}
      <View style={styles.passengerCard}>
        <View style={styles.rowBetween}>
          <Text style={styles.passTitle}>Passengers</Text>

          <View style={styles.counter}>
            <TouchableOpacity
              onPress={() => count > 1 && setCount(count - 1)}
              style={styles.circleBtn}
            >
              <Text>-</Text>
            </TouchableOpacity>

            <Text style={styles.count}>{count}</Text>

            <TouchableOpacity
              onPress={() => count < 6 && setCount(count + 1)}
              style={styles.circleBtn}
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.dashed} />

        <Text style={styles.note}>
          Chennai metro allows to purchase up to 6 QR tickets per user at a time.
        </Text>
      </View>

      {/* COUPON */}
      <TouchableOpacity style={styles.couponRow}>
        <Text style={styles.couponText}>METRO Applied</Text>
        <Icon name="chevron-right" size={18} />
      </TouchableOpacity>

      {/* BOTTOM BAR */}
      <View style={styles.bottom}>
        <View style={styles.rowBetween}>
          <Text style={styles.total}>Total Fare</Text>
          <Text style={styles.amount}>₹100</Text>
        </View>

        <TouchableOpacity style={styles.payBtn}>
          <Text style={styles.payText}>Proceed to Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 15,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  backBtn: {
    backgroundColor: "#e5e7eb",
    padding: 8,
    borderRadius: 20,
    marginRight: 10,
  },

  header: {
    fontSize: 16,
    fontWeight: "600",
  },

  routeCard: {
    backgroundColor: "#e5e7eb",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  station: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "500",
  },

  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "green",
  },

  redDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "darkred",
  },

  line: {
    height: 20,
    borderLeftWidth: 1,
    borderColor: "#aaa",
    marginLeft: 4,
    marginVertical: 5,
  },

  passengerCard: {
    backgroundColor: "#e5e7eb",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  passTitle: {
    fontSize: 14,
    fontWeight: "500",
  },

  counter: {
    flexDirection: "row",
    alignItems: "center",
  },

  circleBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  count: {
    marginHorizontal: 10,
    fontSize: 16,
  },

  dashed: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "#aaa",
    marginVertical: 10,
  },

  note: {
    fontSize: 12,
    color: "#555",
  },

  couponRow: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  couponText: {
    fontSize: 13,
    fontWeight: "500",
  },

  bottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  total: {
    fontSize: 14,
  },

  amount: {
    fontSize: 14,
    fontWeight: "600",
  },

  payBtn: {
    marginTop: 10,
    backgroundColor: "#0f766e",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },

  payText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
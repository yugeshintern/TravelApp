import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function MetroTicketScreen({ navigation, route }) {
  const [count, setCount] = useState(1);

  const { from, to } = route.params || {};

const pricePerTicket = 50;

const totalAmount = count * pricePerTicket;

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
  source={require("../../../assets/back.png")}
  style={styles.backIcon}
/>
        </TouchableOpacity>

        <Text style={styles.header}>Proceed to Pay</Text>
      </View>

      {/* ROUTE CARD */}
      <View style={styles.routeCard}>
        <View style={styles.row}>
          <View style={styles.greenDot} />
          <Text style={styles.station}>
  {from || "From"}
</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.row}>
          <View style={styles.redDot} />
          <Text style={styles.station}>
  {to || "To"}
</Text>
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
        <Image
  source={require("../../../assets/right.png")}
  style={styles.rightIcon}
/>
      </TouchableOpacity>

      {/* BOTTOM BAR */}
      <View style={styles.bottom}>
        <View style={styles.rowBetween}>
          <Text style={styles.total}>Total Fare</Text>
          <Text style={styles.amount}>
  ₹{totalAmount}
</Text>
        </View>

        <TouchableOpacity style={styles.payBtn}
        onPress={()=> navigation.navigate("Payments")}>
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
  paddingHorizontal: 15,
  paddingTop: 55,
},

  headerRow: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 25,
  position: "relative",
},

  backBtn: {
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: "#e5e7eb",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  left: 0,
  zIndex: 10,
},

  header: {
  flex: 1,
  textAlign: "center",
  fontSize: 18,
  fontWeight: "700",
  color: "#222",
},

backIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
},

rightIcon: {
  width: 16,
  height: 16,
  resizeMode: "contain",
  tintColor: "#444",
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
  borderRadius: 14,
  paddingVertical: 18,
  paddingHorizontal: 15,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#d9d9d9",
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
  paddingHorizontal: 15,
  paddingTop: 15,
  paddingBottom: 25,
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
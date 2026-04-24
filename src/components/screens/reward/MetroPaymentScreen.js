import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function MetroPaymentScreen({ navigation }) {
  const [selected, setSelected] = useState("cash");

  const Radio = ({ value }) => (
    <View
      style={[
        styles.radio,
        selected === value && styles.radioActive,
      ]}
    />
  );

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

        <Text style={styles.header}>Payments</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* BOOKING AMOUNT */}
        <View style={styles.rowBetween}>
          <Text style={styles.title}>Pay booking amount</Text>
          <Text style={styles.amount}>₹100</Text>
        </View>

        <Text style={styles.sub}>
          Booking amount of flat Rs.100 needs to be paid for order confirmation
        </Text>

        {/* INFO BOX */}
        <View style={styles.infoBoxTop}>
          <Text style={styles.infoText}>
            After successful movement pay the remaining amount to the partner
          </Text>
        </View>

        <View style={styles.dashed} />

        {/* WALLETS */}
        <Text style={styles.section}>Wallets</Text>

        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.title}>Travel Wallet</Text>
              <Text style={styles.red}>Low Balance: ₹0.0</Text>

              <TouchableOpacity style={styles.addBtn}>
                <Text>+ Add Money</Text>
              </TouchableOpacity>
            </View>

            <Radio value="wallet" />
          </View>

          <View style={styles.divider} />

          <View style={styles.rowBetween}>
            <Text style={styles.title}>AmazonPay</Text>
            <Text style={styles.link}>LINK</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Cashback upto ₹25 | once per month
            </Text>
          </View>
        </View>

        {/* UPI */}
        <Text style={styles.section}>Pay by any UPI app</Text>

        <View style={styles.card}>
          <TouchableOpacity
            style={styles.rowBetween}
            onPress={() => setSelected("paytm")}
          >
            <Text style={styles.title}>Paytm</Text>
            <Radio value="paytm" />
          </TouchableOpacity>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Cashback offers available
            </Text>
          </View>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.rowBetween}
            onPress={() => setSelected("gpay")}
          >
            <Text style={styles.title}>Gpay</Text>
            <Radio value="gpay" />
          </TouchableOpacity>
        </View>

        {/* PAY LATER */}
        <Text style={styles.section}>Pay Later</Text>

        <View style={styles.card}>
          <TouchableOpacity
            style={styles.rowBetween}
            onPress={() => setSelected("paylater")}
          >
            <Text style={styles.title}>Pay at drop</Text>
            <Radio value="paylater" />
          </TouchableOpacity>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Pay by scanning QR after ride
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* BOTTOM CTA */}
      <View style={styles.bottom}>
        <View style={styles.rowBetween}>
          <Text style={styles.total}>Total Fare</Text>
          <Text style={styles.amount}>₹100</Text>
        </View>

        <TouchableOpacity style={styles.payBtn}
        onPress={()=> navigation.navigate("PaymentSuccess")}>
          <Text style={styles.payText}>
            Proceed to Pay ₹100
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#e5e7eb" },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },

  backBtn: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    marginRight: 10,
  },

  header: { fontSize: 16, fontWeight: "600" },

  content: { padding: 15, paddingBottom: 120 },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: { fontSize: 14, fontWeight: "500" },
  sub: { fontSize: 12, color: "#555", marginTop: 5 },

  amount: { fontSize: 14, fontWeight: "600" },

  infoBoxTop: {
    backgroundColor: "#d1d5db",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },

  infoBox: {
    backgroundColor: "#e5e7eb",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },

  infoText: { fontSize: 12, color: "#444" },

  dashed: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    marginVertical: 15,
    borderColor: "#bbb",
  },

  section: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },

  red: { color: "red", fontSize: 12, marginVertical: 5 },

  addBtn: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginTop: 5,
    alignSelf: "flex-start",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
  },

  link: { color: "#2563eb" },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
  },

  radioActive: {
    borderColor: "#0f766e",
    backgroundColor: "#0f766e",
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

  total: { fontSize: 14 },

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
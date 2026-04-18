import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function TravelPaymentScreen({ navigation }) {
  const [selected, setSelected] = useState("cash");

  const Option = ({ id, title, subtitle, rightText }) => (
    <TouchableOpacity
      style={styles.optionCard}
      onPress={() => setSelected(id)}
    >
      <View style={styles.optionRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.optionTitle}>{title}</Text>
          {subtitle && (
            <Text style={styles.optionSub}>{subtitle}</Text>
          )}
        </View>

        {rightText && (
          <Text style={styles.link}>{rightText}</Text>
        )}

        <View
          style={[
            styles.radio,
            selected === id && styles.radioActive,
          ]}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={18} />
          </TouchableOpacity>

          <Text style={styles.title}>Payments</Text>
        </View>

        {/* PAY */}
        <View style={styles.rowBetween}>
          <Text style={styles.payLabel}>Pay</Text>
          <Text style={styles.payAmount}>₹550</Text>
        </View>

        <View style={styles.divider} />

        {/* WALLETS */}
        <Text style={styles.section}>Wallets</Text>

        <View style={styles.card}>
          <Option
            id="wallet"
            title="Travel Wallet"
            subtitle="Low Balance: ₹0.0"
          />

          <TouchableOpacity style={styles.addMoney}>
            <Text>+ Add Money</Text>
          </TouchableOpacity>

          <View style={styles.innerDivider} />

          <Option
            id="amazon"
            title="AmazonPay"
            subtitle="Cashback behind scratch card upto rs.25..."
            rightText="LINK"
          />
        </View>

        {/* UPI */}
        <Text style={styles.section}>Pay by any UPI app</Text>

        <View style={styles.card}>
          <Option
            id="paytm"
            title="Paytm"
            subtitle="Assured ₹25–₹200 Cashback..."
          />

          <View style={styles.innerDivider} />

          <Option id="gpay" title="Gpay" />
        </View>

        {/* PAY LATER */}
        <Text style={styles.section}>Pay Later</Text>

        <View style={styles.card}>
          <Option
            id="paylater"
            title="Pay at drop"
            subtitle="Go cashless, after ride pay by scanning QR code"
          />
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.rowBetween}>
          <Text style={styles.total}>Total Fare</Text>
          <Text style={styles.total}>₹550</Text>
        </View>

        <TouchableOpacity
          style={styles.payBtn}
          onPress={() => navigation.navigate("PaymentSuccess")}
        >
          <Text style={styles.payText}>
            Proceed to Pay ₹550
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eef2f5" },

  header: {
    padding: 15,
    alignItems: "center",
  },

  backBtn: {
    position: "absolute",
    left: 15,
    top: 15,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 15,
  },

  payLabel: {
    fontSize: 16,
    fontWeight: "500",
  },

  payAmount: {
    fontSize: 16,
    fontWeight: "600",
  },

  divider: {
    borderTopWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ccc",
    marginVertical: 15,
  },

  section: {
    marginLeft: 15,
    marginTop: 10,
    fontWeight: "600",
    color: "#555",
  },

  card: {
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 15,
    padding: 10,
    elevation: 3,
  },

  optionCard: {
    padding: 10,
  },

  optionRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  optionTitle: {
    fontWeight: "600",
    fontSize: 14,
  },

  optionSub: {
    fontSize: 11,
    color: "#777",
    marginTop: 3,
  },

  link: {
    color: "#2563eb",
    marginRight: 10,
  },

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

  addMoney: {
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginTop: 5,
  },

  innerDivider: {
    borderTopWidth: 1,
    borderColor: "#eee",
    marginVertical: 8,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
  },

  total: {
    fontSize: 16,
    fontWeight: "600",
  },

  payBtn: {
    backgroundColor: "#0f766e",
    marginTop: 10,
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  payText: {
    color: "#fff",
    fontWeight: "600",
  },
});
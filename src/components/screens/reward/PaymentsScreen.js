import React, { useState } from "react";
import { Linking, Alert } from "react-native";
import {
  View,
 Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function PaymentsScreen({ navigation,route }) {
const {
 bookingData,
 flight,
 traveller,
 selectedSeat,
 meal,
 totalFare
} = route.params || {};

  const [selected, setSelected] = useState("cash");


  const UPI = {
  gpay: "com.google.android.apps.nbu.paisa.user",
  paytm: "net.one97.paytm",
};

const openUPIApp = async (app, amount) => {
  const upiId = "yourupiid@oksbi"; // Replace with your actual UPI ID
  const name = "Travel App";
  const note = "Flight Booking Payment";

  let url = "";

  if (app === "gpay") {
    // Google Pay specific deep link
    url = `tez://upi/pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=${note}`;
  } else if (app === "paytm") {
    // Paytm specific deep link
    url = `paytmmp://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=${note}`;
  }

  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(
        `${app === "gpay" ? "GPay" : "Paytm"} not installed`,
        "Please install the app first."
      );
    }
  } catch (error) {
    Alert.alert("Error", "Something went wrong. Please try again.");
  }
};

  const Radio = ({ value }) => (
    <View style={[styles.radio, selected === value && styles.radioActive]} />
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
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

  <Text style={styles.header}>Payments</Text>
</View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* TOTAL */}
        <View style={styles.rowBetween}>
          <Text style={styles.total}>Total Fare</Text>
          <Text style={styles.amount}>
            ₹{totalFare}
        </Text>
        
        </View>

        <View style={styles.dashed} />

        {/* WALLETS */}
        <Text style={styles.section}>Wallets</Text>

        <View style={styles.card}>
          {/* TRAVEL WALLET */}
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

          {/* AMAZON PAY */}
          <View style={styles.divider} />

          <View style={styles.rowBetween}>
  <View style={styles.paymentRow}>
    <Image
      source={require("../../../assets/amazon.png")}
      style={styles.paymentIcon}
    />

    <Text style={styles.title}>AmazonPay</Text>
  </View>

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
  onPress={() => {
    setSelected("paytm");
    openUPIApp("paytm", totalFare);
}}
>
  <View style={styles.paymentRow}>
    <Image
      source={require("../../../assets/paytm.png")}
      style={styles.paymentIcon}
    />

    <Text style={styles.title}>Paytm</Text>
  </View>

  <Radio value="paytm" />
</TouchableOpacity>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Cashback offer available
            </Text>
          </View>

          <View style={styles.divider} />

          <TouchableOpacity
  style={styles.rowBetween}
  onPress={() => {
    setSelected("gpay");
    openUPIApp("gpay", totalFare);
}}
>
  <View style={styles.paymentRow}>
    <Image
      source={require("../../../assets/gpay.png")}
      style={styles.paymentIcon}
    />

    <Text style={styles.title}>Gpay</Text>
  </View>

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
  <View style={styles.paymentRow}>
    <Image
      source={require("../../../assets/qr.png")}
      style={styles.paymentIcon}
    />

    <Text style={styles.title}>Pay at drop</Text>
  </View>

  <Radio value="paylater" />
</TouchableOpacity>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Pay by scanning QR after ride
            </Text>
          </View>
        </View>

        {/* OTHERS */}
        <Text style={styles.section}>Others</Text>

        <View style={styles.card}>
          <TouchableOpacity
  style={styles.rowBetween}
  onPress={() => setSelected("cash")}
>
  <View style={styles.paymentRow}>
    <Image
      source={require("../../../assets/payment.png")}
      style={styles.paymentIcon}
    />

    <Text style={styles.title}>Cash</Text>
  </View>

  <Radio value="cash" />
</TouchableOpacity>
        </View>

         <TouchableOpacity
  style={styles.payBtn}
  onPress={() => navigation.navigate("PaymentSuccess")}
>
  <Text style={styles.payBtnText}>Proceed to Pay</Text>
</TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#f3f4f6",
  paddingTop: 50,
},

headerRow: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 15,
  marginBottom: 10,
},

backBtn: {
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: "#eef1ef",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 12,
},

header: {
  fontSize: 18,
  fontWeight: "700",
  color: "#111",
},

content: {
  paddingHorizontal: 15,
  paddingBottom: 40,
},

backIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
},

paymentRow: {
  flexDirection: "row",
  alignItems: "center",
},

paymentIcon: {
  width: 22,
  height: 22,
  resizeMode: "contain",
  marginRight: 10,
},

payBtn: {
  backgroundColor: "#0f7c7c",
  paddingVertical: 16,
  borderRadius: 32,
  alignItems: "center",
  marginTop: 10,
  marginBottom: 30,
},

payBtnText: {
  color: "#fff",
  fontSize: 17,
  fontWeight: "700",
},

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  total: { fontSize: 16 },
  amount: { fontSize: 16, fontWeight: "600" },

  dashed: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    marginVertical: 10,
    borderColor: "#ccc",
  },

  section: {
    fontSize: 14,
    marginVertical: 10,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },

  title: { fontSize: 14, fontWeight: "500" },

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

  infoBox: {
    backgroundColor: "#e5e7eb",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },

  infoText: { fontSize: 12, color: "#555" },

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
});
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
export default function PaymentSuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
  source={require("../../../assets/back.png")}
  style={styles.backIcon}
/>
        </TouchableOpacity>
      </View>

      {/* CENTER CONTENT */}
      <View style={styles.center}>
        {/* GREEN CHECK CIRCLE */}
        <View style={styles.circle}>
          <Image
  source={require("../../../assets/done.png")}
  style={styles.tickIcon}
/>
        </View>

        {/* TEXT */}
        <Text style={styles.title}>Payment successful</Text>
        <Text style={styles.subtitle}>Successfully Paid ₹100</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#f3f4f6",
  paddingTop: 55,
},

  headerRow: {
  paddingHorizontal: 15,
},

  backBtn: {
  backgroundColor: "#fff",
  width: 42,
  height: 42,
  borderRadius: 21,
  alignItems: "center",
  justifyContent: "center",
  elevation: 3,
},

backIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
},

tickIcon: {
  width: 52,
  height: 52,
  resizeMode: "contain",
  tintColor: "#fff",
},

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  circle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#15803d", // green tone from UI
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: "#555",
  },
});
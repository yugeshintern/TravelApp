import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function PaymentSuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="arrow-left" size={18} color={"#000"} />
        </TouchableOpacity>
      </View>

      {/* CENTER CONTENT */}
      <View style={styles.center}>
        {/* GREEN CHECK CIRCLE */}
        <View style={styles.circle}>
          <Icon name="check" size={50} color="#fff" />
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
  },

  headerRow: {
    padding: 15,
  },

  backBtn: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    width: 36,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
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
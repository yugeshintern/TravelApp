import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function TravelPaymentSuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.popToTop()}
        >
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>

        <Text style={styles.title}>Payment successful</Text>
      </View>

      {/* CENTER CONTENT */}
      <View style={styles.center}>
        <View style={styles.circle}>
          <Icon name="check" size={40} color="#fff" />
        </View>

        <Text style={styles.mainText}>
          Payment successful
        </Text>

        <Text style={styles.subText}>
          Successfully Paid ₹550
        </Text>
      </View>
    </View>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },

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

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  circle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#16a34a", // green
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  mainText: {
    fontSize: 16,
    fontWeight: "600",
  },

  subText: {
    marginTop: 6,
    fontSize: 13,
    color: "#555",
  },
});
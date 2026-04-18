import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function CouponsEmptyScreen({ navigation }) {
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

        <Text style={styles.header}>Coupons & Offers</Text>
      </View>

      {/* INPUT */}
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Enter coupon code"
          placeholderTextColor="#888"
          style={styles.input}
        />

        <TouchableOpacity style={styles.applyBtn}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>

      {/* EMPTY STATE */}
      <View style={styles.center}>
        {/* ICON */}
        <View style={styles.iconWrap}>
          <Text style={styles.icon}>!</Text>
        </View>

        {/* TEXT */}
        <Text style={styles.title}>No active offers</Text>
        <Text style={styles.sub}>
          Please check back later
        </Text>
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
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
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

  inputRow: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    backgroundColor: "#e5e7eb",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
  },

  applyBtn: {
    marginLeft: 10,
    backgroundColor: "#e5e7eb",
    borderRadius: 25,
    paddingHorizontal: 20,
    justifyContent: "center",
  },

  applyText: {
    fontWeight: "500",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  iconWrap: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#84cc16",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    elevation: 3,
  },

  icon: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#14532d",
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },

  sub: {
    fontSize: 13,
    color: "#666",
  },
});
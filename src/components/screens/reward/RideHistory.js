import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function RideHistory({ navigation }) {
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

        <Text style={styles.header}>Ride History</Text>
      </View>

      {/* EMPTY STATE */}
      <View style={styles.center}>
        {/* ICON / ILLUSTRATION */}
        <Text style={styles.scooter}>🛵</Text>

        {/* TITLE */}
        <Text style={styles.title}>No rides taken yet</Text>

        {/* SUBTEXT */}
        <Text style={styles.sub}>
          Your ride orders in future will appear here
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 15,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
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

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  scooter: {
    fontSize: 90,
    marginBottom: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",
  },

  sub: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
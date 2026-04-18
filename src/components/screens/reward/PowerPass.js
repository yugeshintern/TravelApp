import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function PowerPass({ navigation }) {
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

        <Text style={styles.header}>Power Pass</Text>
      </View>

      {/* TITLE */}
      <Text style={styles.title}>
        Save upto 60% on bike rides with Bike Pass!
      </Text>

      {/* ILLUSTRATION */}
      <View style={styles.imageBox}>
        <Text style={styles.emoji}>🛵</Text>
      </View>

      {/* PROGRESS BAR */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBg} />

        <View style={styles.progressFill} />

        <View style={styles.circleLeft} />
        <View style={styles.circleRight} />
      </View>

      {/* MARKERS */}
      <View style={styles.markerRow}>
        <Text style={styles.marker}>0</Text>
        <Text style={styles.marker}>1</Text>
      </View>

      {/* DESCRIPTION */}
      <Text style={styles.unlock}>Ride to unlock</Text>

      <Text style={styles.sub}>
        Complete 1 bike ride to unlock your power pass
      </Text>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          Continue to Book Ride
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
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

  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 30,
  },

  imageBox: {
    alignItems: "center",
    marginBottom: 20,
  },

  emoji: {
    fontSize: 60,
  },

  progressContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
  },

  progressBg: {
    height: 4,
    backgroundColor: "#d1d5db",
    borderRadius: 2,
  },

  progressFill: {
    position: "absolute",
    height: 4,
    width: "40%",
    backgroundColor: "#facc15",
    borderRadius: 2,
  },

  circleLeft: {
    position: "absolute",
    top: -6,
    left: "35%",
    width: 16,
    height: 16,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 8,
  },

  circleRight: {
    position: "absolute",
    top: -6,
    right: 0,
    width: 16,
    height: 16,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 8,
  },

  markerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 20,
  },

  marker: {
    fontWeight: "600",
  },

  unlock: {
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 5,
  },

  sub: {
    textAlign: "center",
    color: "#555",
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#0f766e",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
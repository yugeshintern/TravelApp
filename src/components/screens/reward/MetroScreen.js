import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const stations = [
  "Anna Nagar East",
  "Anna Nagar Tower",
  "Anna Nagar Alandur",
  "Arignar Anna Alandur",
  "Ashok Nagar",
  "Chennai International Airport",
  "Egmore",
  "Ekkattuthangal",
  "Government Estate",
  "Guindy",
  "High Court",
  "Kaladipet Metro",
  "Kilpauk",
  "Koyambedu",
  "LIC",
  "Little Mount",
];

export default function MetroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* TOP BANNER */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          BOOK YOUR{"\n"}METRO TICKETS
        </Text>

        {/* BACK BUTTON */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* TITLE */}
        <Text style={styles.title}>Select metro stations</Text>

        {/* INPUT CARD */}
        <View style={styles.inputCard}>
          <View style={styles.row}>
            <View style={styles.greenDot} />
            <Text style={styles.placeholder}>From</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <View style={styles.redDot} />
            <Text style={styles.placeholder}>To</Text>
          </View>
        </View>

        {/* STATIONS */}
        {stations.map((item, index) => (
          <TouchableOpacity key={index} style={styles.stationRow}>
            <Icon name="map-pin" size={18} color="#000" />
            <Text style={styles.station}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6" },

  banner: {
    height: 180,
    backgroundColor: "#c7e0e5",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  bannerText: {
    position: "absolute",
    right: 20,
    top: 40,
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
  },

  backBtn: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    elevation: 3,
  },

  content: {
    padding: 15,
    paddingBottom: 40,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },

  inputCard: {
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  placeholder: {
    marginLeft: 10,
    color: "#666",
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
    backgroundColor: "red",
  },

  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },

  stationRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },

  station: {
    marginLeft: 10,
    fontSize: 14,
  },
});
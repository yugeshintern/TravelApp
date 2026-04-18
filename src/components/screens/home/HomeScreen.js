import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";

export default function HomeScreen() {
  const [selected, setSelected] = useState("ride");

  const locations = [
    "Egmore Railway Station",
    "Koyambedu Bus Stand",
    "Phoenix Mall",
  ];

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.toggle}>
          <TouchableOpacity
            style={selected === "ride" ? styles.active : styles.inactive}
            onPress={() => setSelected("ride")}
          >
            <Text>🚗 Ride</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={selected === "porter" ? styles.active : styles.inactive}
            onPress={() => setSelected("porter")}
          >
            <Text>🚚 Porter</Text>
          </TouchableOpacity>
        </View>

        <TextInput placeholder="Where are you going?" style={styles.search} />
      </View>

      <ScrollView style={styles.content}>

        {locations.map((loc, i) => (
          <View key={i} style={styles.location}>
            <Text style={{ fontWeight: "bold" }}>{loc}</Text>
            <Text style={{ color: "gray" }}>Chennai</Text>
          </View>
        ))}

        <Text style={styles.section}>Services</Text>

        <View style={styles.grid}>
          <Text style={styles.box}>🚆 Metro</Text>
          <Text style={styles.box}>🛵 Scooty</Text>
          <Text style={styles.box}>📦 Parcel</Text>
          <Text style={styles.box}>🚐 All</Text>
        </View>

      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.nav}>
        <Text>🏠</Text>
        <Text>🗺️</Text>
        <Text>🌊</Text>
        <Text>📍</Text>
        <Text>👤</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { padding: 15, backgroundColor: "#fff" },
  toggle: { flexDirection: "row", marginBottom: 10 },
  active: { flex: 1, backgroundColor: "#0f766e", padding: 10 },
  inactive: { flex: 1, backgroundColor: "#eee", padding: 10 },
  search: { backgroundColor: "#eee", padding: 12, borderRadius: 20 },
  content: { padding: 15 },
  location: { marginBottom: 10 },
  section: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  grid: { flexDirection: "row", flexWrap: "wrap" },
  box: {
    width: "45%",
    backgroundColor: "#fff",
    margin: 5,
    padding: 15,
    borderRadius: 10,
    textAlign: "center",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#fff",
  },
});
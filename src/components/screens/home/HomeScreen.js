import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";

export default function HomeScreen({ navigation }) {
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
            onPress={() => {
                setSelected("ride");
                navigation.navigate("Home");
              }}
          >
            <Text>🚗 Ride</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={selected === "porter" ? styles.active : styles.inactive}
            onPress={() => {
              setSelected("porter");
              navigation.navigate("PorterHome");
            }}
          
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
  <TouchableOpacity
    style={styles.card}
    onPress={() => navigation.navigate("MetroScreen")}
  >
    <Text style={styles.box}>🚆 Metro</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.card}>
    <Text style={styles.box}>🛵 Scooty</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.card}>
    <Text style={styles.box}>📦 Parcel</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.card}>
    <Text style={styles.box}>🚐 All</Text>
  </TouchableOpacity>
</View>

      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.nav}>
        <TouchableOpacity
        onPress={()=> navigation.navigate("Home")}
        >
        <Text>🏠</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        onPress={()=> navigation.navigate("SearchLocation")}
        >
          <Text>🗺️</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> navigation.navigate("Services")}
        >
          <Text>🌊</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        onPress={()=> navigation.navigate("LocationPin")}
        >
          <Text>📍</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        onPress={()=> navigation.navigate("Profile")}
        >
          <Text>👤</Text>
        </TouchableOpacity>
        
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
  grid: { flexDirection: "row", flexWrap: "wrap",justifyContent: "space-between" },
box: {
  backgroundColor: "#fff",
  padding: 20,
  borderRadius: 12,
  textAlign: "center",
  elevation: 3,
},
nav: {
  flexDirection: "row",
  justifyContent: "space-around",
  paddingVertical: 12,
  backgroundColor: "#fff",
  borderTopWidth: 0.5,
  borderColor: "#ccc",
},
    card: {
  width: "48%",
  marginBottom: 15,
},
  },
);
import React, { useState } from "react";import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

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
    const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [selecting, setSelecting] = useState(null);
  return (
    <View style={styles.container}>
      {/* TOP BANNER */}
      <View style={styles.banner}>
  <Image
    source={require("../../../assets/metro-ban.png")}
    style={styles.bannerImage}
  />

  <Text style={styles.bannerText}>
    BOOK YOUR{"\n"}METRO TICKETS
  </Text>

  {/* BACK BUTTON */}
  <TouchableOpacity
    style={styles.backBtn}
    onPress={() => navigation.goBack()}
  >
    <Image
      source={require("../../../assets/back.png")}
      style={styles.backIcon}
    />
  </TouchableOpacity>
</View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* TITLE */}
        <Text style={styles.title}>Select metro stations</Text>

        {/* INPUT CARD */}
        <View style={styles.inputCard}>

  {/* FROM */}
  <TouchableOpacity
    onPress={() => setSelecting("from")}
  >
    <View style={styles.row}>
      <View style={styles.greenDot} />

      <Text style={styles.placeholder}>
        {fromStation || "From"}
      </Text>
    </View>
  </TouchableOpacity>

  <View style={styles.divider} />

  {/* TO */}
  <TouchableOpacity
    onPress={() => setSelecting("to")}
  >
    <View style={styles.row}>
      <View style={styles.redDot} />

      <Text style={styles.placeholder}>
        {toStation || "To"}
      </Text>
    </View>
  </TouchableOpacity>

  {/* NAVIGATE BUTTON AREA */}
  {fromStation && toStation && (
    <TouchableOpacity
      style={styles.continueArea}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate("MetroTicket", {
          from: fromStation,
          to: toStation,
        })
      }
    >
      <Text style={styles.continueText}>
        Continue
      </Text>
    </TouchableOpacity>
  )}

</View>

        {/* STATIONS */}
        {stations.map((item, index) => (
  <TouchableOpacity
    key={index}
    style={styles.stationRow}
    onPress={() => {

      if (selecting === "from") {
        setFromStation(item);
      }

      if (selecting === "to") {
        setToStation(item);
      }

      setSelecting(null);
    }}
  >
    <Image
      source={require("../../../assets/loc-icon.png")}
      style={styles.pinIcon}
    />

    <Text style={styles.station}>
      {item}
    </Text>
  </TouchableOpacity>
))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6" },

  banner: {
  height: 210,
  overflow: "hidden",
  justifyContent: "center",
},

  bannerText: {
  position: "absolute",
  right: 20,
  top: 38,
  fontSize: 17,
  fontWeight: "800",
  color: "#111",
  textAlign: "right",
  lineHeight: 24,
},

  backBtn: {
  position: "absolute",
  top: 55,
  left: 20,
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
  elevation: 4,
},

  content: {
    padding: 15,
    paddingBottom: 40,
  },

  bannerImage: {
  width: "100%",
  height: "100%",
  position: "absolute",
  resizeMode: "cover",
},

continueArea: {
  marginTop: 16,
  backgroundColor: "#117A7A",
  borderRadius: 12,
  paddingVertical: 12,
  alignItems: "center",
},

continueText: {
  color: "#fff",
  fontSize: 14,
  fontWeight: "700",
},

backIcon: {
  width: 22,
  height: 22,
  resizeMode: "contain",
},

pinIcon: {
  width: 20,
  height: 20,
  resizeMode: "contain",
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
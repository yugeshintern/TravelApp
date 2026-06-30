import React, { useState } from "react";import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const stations = [
  "Anna Nagar East ",
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
  activeOpacity={0.9}
  onPress={() =>
    navigation.navigate("MetroTicket", {
      from: fromStation,
      to: toStation,
    })
  }
>
  <LinearGradient
    colors={["#008FA3", "#00A9B8", "#14C4D4"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.continueArea}
  >
    <Text style={styles.continueText}>
      Continue
    </Text>
  </LinearGradient>
</TouchableOpacity>
  )}

</View>

        {/* STATIONS */}
        {stations.map((item, index) => (
  <TouchableOpacity
  key={index}
  activeOpacity={0.9}
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

<View style={styles.stationRow}>

  <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
    <Image
      source={require("../../../assets/loc-icon.png")}
      style={styles.pinIcon}
    />

    <Text style={styles.station}>
      {item}
    </Text>
  </View>

  <Image
    source={require("../../../assets/right.png")}
    style={styles.stationArrow}
  />

</View>

</TouchableOpacity>
))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#F5F8FC",
},

  banner: {
  height: 210,
  overflow: "hidden",
  justifyContent: "center",
},

  bannerText: {
  position: "absolute",

  right: 20,

  top: 40,

  fontSize: 19,

  fontWeight: "800",

  color: "#111827",

  textAlign: "right",

  lineHeight: 26,
},

  backBtn: {

  position: "absolute",

  top: 55,

  left: 20,

  width: 48,

  height: 48,

  borderRadius: 24,

  backgroundColor: "#FFFFFF",

  justifyContent: "center",

  alignItems: "center",

  shadowColor: "#000",

  shadowOpacity: 0.15,

  shadowRadius: 10,

  shadowOffset: {
      width:0,
      height:4,
  },

  elevation:7,
},

stationArrow: {
  width: 18,

  height: 18,

  tintColor: "#B0B8C5",
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
  marginTop: 18,

  borderRadius: 16,

  paddingVertical: 16,

  justifyContent: "center",
  alignItems: "center",

  shadowColor: "#0891B2",
  shadowOpacity: 0.30,
  shadowRadius: 12,
  shadowOffset: {
    width: 0,
    height: 5,
  },

  elevation: 8,
},

continueText: {
  color: "#FFFFFF",

  fontSize: 16,

  fontWeight: "700",
},

backIcon: {
  width: 22,
  height: 22,
  resizeMode: "contain",
},

pinIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
  marginRight: 12,
},
  title: {
  fontSize: 22,

  fontWeight: "700",

  color: "#1E293B",

  marginBottom: 18,
},

  inputCard: {
  backgroundColor: "#FFFFFF",

  borderRadius: 22,

  padding: 18,

  marginBottom: 20,

  borderWidth: 1,

  borderColor: "#ECECEC",

  shadowColor: "#000",

  shadowOpacity: 0.06,

  shadowRadius: 8,

  shadowOffset: {
    width: 0,
    height: 4,
  },

  elevation: 3,
},

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  placeholder: {
  marginLeft: 14,

  fontSize: 17,

  fontWeight: "600",

  color: "#2F3640",
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

  backgroundColor: "#EEEEEE",

  marginVertical: 16,

  marginLeft: 22,
},

  stationRow: {
  backgroundColor: "#FFFFFF",

  flexDirection: "row",

  alignItems: "center",

  justifyContent: "space-between",

  paddingVertical: 15,

  paddingHorizontal: 18,

  marginBottom: 12,

  borderRadius: 18,

  borderWidth: 1,

  borderColor: "#ECECEC",

  shadowColor: "#000",

  shadowOpacity: 0.05,

  shadowRadius: 6,

  shadowOffset: {
    width: 0,
    height: 3,
  },

  elevation: 2,
},


  station: {
  flex: 1,

  fontSize: 16,

  fontWeight: "600",

  color: "#334155",
},
});
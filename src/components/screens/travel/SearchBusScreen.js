import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
} from "react-native";

export default function SearchBusScreen({
  navigation,
  route,
}) {

    
  const [search, setSearch] = useState("");

  const [fromCity, setFromCity] = useState(
  route?.params?.fromCity || ""
);

const [toCity, setToCity] = useState(
  route?.params?.toCity || ""
);

const [activeField, setActiveField] =
  useState(null);

const [suggestions, setSuggestions] =
  useState([]);

const [showSuggestions, setShowSuggestions] =
  useState(false);

  
  const locations = [
    {
      name: "Egmore Railway Station",
      address:
        "Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu, India",
    },
    {
      name: "Koyambedu Bus Stand",
      address:
        "Koyambedu bus terminus, Koyambedu, Chennai, Tamil N.",
    },
    {
      name: "Phoenix Marketcity",
      address:
        "Velachery Road, Indira Gandhi Nagar, Velachery, Chennai",
    },
  ];

  const searchLocation = async (
  text,
  field
) => {

   if (field === "from") {
    setFromCity(text);
  } else {
    setToCity(text);
  }
  setActiveField(field);

  if (text.length < 3) {
    setSuggestions([]);
    return;
  }

  try {

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        text
      )}&format=json&addressdetails=1&limit=8`,
      {
        headers: {
          "User-Agent": "Vibeo-App",
        },
      }
    );

    const data =
      await response.json();

    const filtered = data.filter(
  item =>
    item.type === "city" ||
    item.type === "town" ||
    item.type === "administrative" ||
    item.type === "station" ||
    item.type === "bus_stop" ||
    item.type === "railway"
);

setSuggestions(filtered);

  } catch (error) {
    console.log(error);
  }
};

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() =>
              navigation.goBack()
            }
          >
            <Image
              source={require("../../../assets/back.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <Text style={styles.title}>
            Search Boarding &{"\n"}
            Dropping Point
          </Text>
        </View>

        {/* FROM TO CARD */}
        <View style={styles.card}>
          {/* FROM */}
          <View style={styles.row}>
            <View style={styles.greenDot} />

            <TextInput
  value={fromCity}
  style={styles.inputText}
  placeholder="From"
  placeholderTextColor="#777"
  onFocus={() =>
    setActiveField("from")
  }
  onChangeText={(text) =>
    searchLocation(text, "from")
  }
/>
          </View>

          <View style={styles.divider} />

          {/* TO */}
          <View style={styles.row}>
            <View style={styles.redDot} />

            <TextInput
  value={toCity}
  style={styles.inputText}
  placeholder="To"
  placeholderTextColor="#777"
  onFocus={() =>
    setActiveField("to")
  }
  onChangeText={(text) =>
    searchLocation(text, "to")
  }
/>
          </View>
        </View>

        {/* MAP BUTTONS */}
        <View style={styles.mapRow}>
          <TouchableOpacity
            style={styles.mapBtn}
          >
            <Image
              source={require("../../../assets/loc-icon.png")}
              style={styles.mapIcon}
            />

            <Text style={styles.mapText}>
              Select on map
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mapBtn}
          >
            <Image
              source={require("../../../assets/directions.png")}
              style={styles.mapIcon}
            />

            <Text style={styles.mapText}>
              Directions
            </Text>
          </TouchableOpacity>
        </View>

        {/* SEARCH BAR */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {

  if (
    !fromCity ||
    !toCity 
  ) {

    Alert.alert(
      "Alert",
      "Please select From and To from suggestions"
    );

    return;
  }

  navigation.navigate("BusList", {
    fromCity,
    toCity,
    
    journeyDate:
      route?.params?.journeyDate,
  });

}}
        >
          <View style={styles.searchBar}>
            <Image
              source={require("../../../assets/search-icon.png")}
              style={styles.searchIcon}
            />

            <TextInput
              placeholder="Search Buses"
              placeholderTextColor="#9ca3af"
              value={search}
              onChangeText={setSearch}
              style={styles.searchInput}
            />
          </View>
        </TouchableOpacity>

        {/* LIST */}
        <FlatList
  data={
    suggestions.length > 0
      ? suggestions
      : locations
  }
  keyExtractor={(item, index) =>
    item.place_id
      ? item.place_id.toString()
      : index.toString()
  }
  renderItem={({ item }) => {

    const title =
      item.display_name
        ? item.display_name.split(",")[0]
        : item.name;

    const address =
      item.display_name ||
      item.address;

    return (

      <TouchableOpacity
        style={styles.listItem}
        onPress={() => {

  if (activeField === "from") {

    setFromCity(title);

    

  } else {

    setToCity(title);

   

  }

  setSuggestions([]);
}}
      >

        <Image
          source={require("../../../assets/timer-icon.png")}
          style={
            styles.historyIcon
          }
        />

        <View
          style={{
            marginLeft: 12,
            flex: 1,
          }}
        >
          <Text
            style={
              styles.locName
            }
          >
            {title}
          </Text>

          <Text
            style={
              styles.locAddress
            }
            numberOfLines={1}
          >
            {address}
          </Text>
        </View>

      </TouchableOpacity>
    );
  }}
/>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    paddingTop: 55,
  },

  /* HEADER */
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 26,
  },

  backBtn: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 42,
    height: 42,
    borderRadius: 22,
    backgroundColor: "#eef1ef",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  title: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    color: "#111",
    lineHeight: 30,
  },

  /* CARD */
  card: {
    backgroundColor: "#e9eceb",
    borderRadius: 28,
    padding: 22,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  greenDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "green",
    backgroundColor: "#fff",
    marginRight: 16,
  },

  redDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "darkred",
    backgroundColor: "#fff",
    marginRight: 16,
  },

  inputText: {
  flex: 1,
  fontSize: 18,
  color: "#333",
  fontWeight: "500",
  paddingVertical: 0,
},

  divider: {
    height: 1,
    backgroundColor: "#c9c9c9",
    marginVertical: 18,
    marginLeft: 36,
  },

  /* MAP BUTTONS */
  mapRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 18,
  },

  mapBtn: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ececec",
  },

  mapIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    marginRight: 8,
  },

  mapText: {
    fontSize: 14,
    color: "#222",
    fontWeight: "500",
  },

  /* SEARCH */
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#e9eceb",
    borderRadius: 25,
    paddingHorizontal: 18,
    alignItems: "center",
    height: 62,
    marginBottom: 22,
  },

  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  searchInput: {
    flex: 1,
    marginLeft: 14,
    fontSize: 16,
    color: "#111",
  },

  /* LIST */
  listItem: {
    flexDirection: "row",
    paddingVertical: 16,
    alignItems: "flex-start",
  },

  historyIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    tintColor: "#9ca3af",
    marginTop: 2,
  },

  locName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111",
  },

  locAddress: {
    fontSize: 13,
    color: "#8b8b8b",
    marginTop: 4,
    lineHeight: 18,
  },
});
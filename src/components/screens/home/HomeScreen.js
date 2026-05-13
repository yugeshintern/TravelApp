import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";


export default function HomeScreen({ navigation }) {
  const [selected, setSelected] = useState("ride");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const locations = [
    {
      name: "Egmore Railway Station",
      sub: "Gandhi Irwin Road, Chennai",
    },
    {
      name: "Koyambedu Bus Stand",
      sub: "Koyambedu, Chennai",
    },
    {
      name: "Phoenix Marketcity",
      sub: "Velachery Road, Chennai",
    },
  ];

  const navItems = [
    {
      icon: require("../../../assets/home.png"),
      screen: "Home",
    },
    {
      icon: require("../../../assets/metro.png"),
      screen: "MetroScreen",
    },
    {
      icon: require("../../../assets/travel.png"),
      screen: "TravelMain",
    },
    {
      icon: require("../../../assets/profile.png"),
      screen: "Profile",
    },
  ];

  const fetchSuggestions = async (text) => {
  setQuery(text);

  if (text.length < 3) {
    setSuggestions([]);
    return;
  }

  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${text}&format=json&addressdetails=1&limit=5`;

    const res = await fetch(url, {
      headers: {
        "User-Agent": "ReactNativeApp",
      },
    });

    const data = await res.json();

    const formatted = data.map((item) => ({
      place_id: item.place_id.toString(),
      description: item.display_name,
      lat: item.lat,
      lon: item.lon,
    }));

    setSuggestions(formatted);
  } catch (error) {
    console.log("Location Error:", error);
  }
};

  const selectPlace = async (placeId, description) => {
  try {
    const selectedPlace = suggestions.find(
      (item) => item.place_id === placeId
    );

    if (!selectedPlace) {
      console.log("No place found");
      return;
    }

    const locationData = {
      address: description,
      latitude: parseFloat(selectedPlace.lat),
      longitude: parseFloat(selectedPlace.lon),
    };

    console.log("NAVIGATING WITH:", locationData);

    setQuery(description);
    setSuggestions([]);

    navigation.navigate("VehicleChoosing", {
      dropLocation: locationData,
    });

  } catch (error) {
    console.log("SELECT PLACE ERROR:", error);
  }
};

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* TOGGLE */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              selected === "ride" && styles.activeToggle,
            ]}
            onPress={() => setSelected("ride")}
          >
            <View style={styles.toggleContent}>
              <Image
                source={require("../../../assets/bike.png")}
                style={styles.topIcon}
              />
              <Text style={styles.toggleText}>RIDE</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleBtn,
              selected === "porter" && styles.activeToggle,
            ]}
            onPress={() => {
              setSelected("porter");
              navigation.navigate("PorterHome");
            }}
          >
            <View style={styles.toggleContent}>
              <Image
                source={require("../../../assets/3w.png")}
                style={styles.topIcon}
              />
              <Text style={styles.toggleText}>PORTER</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* SEARCH */}
        <View style={styles.searchBox}>
          <Image
            source={require("../../../assets/search-icon.png")}
            style={styles.searchIcon}
          />

          <TextInput
            placeholder="Where are you going?"
            style={styles.searchInput}
            value={query}
            onChangeText={fetchSuggestions}
          />
        </View>

        {/* SUGGESTIONS */}
        {suggestions.length > 0 && (
          <View style={styles.suggestionContainer}>
            <FlatList
              data={suggestions}
              keyExtractor={(item) => item.place_id}
              keyboardShouldPersistTaps="handled"
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.suggestionItem}
                  onPress={() =>
                    selectPlace(item.place_id, item.description)
                  }
                >
                  <Text style={styles.suggestionText}>
                    {item.description}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* RECENT LOCATIONS */}
        <View style={styles.locationList}>
          {locations.map((loc, i) => (
            <View key={i} style={styles.locationItem}>
              <Image
                source={require("../../../assets/timer-icon.png")}
                style={styles.clockIcon}
              />

              <View style={styles.locationTextContainer}>
                <Text style={styles.locTitle}>{loc.name}</Text>
                <Text style={styles.locSub}>{loc.sub}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* SECTION TITLE */}
        <Text style={styles.section}>Everything in Minutes</Text>

        {/* SERVICES GRID */}
        <View style={styles.grid}>
          {/* METRO */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("MetroScreen")}
          >
            <Text style={styles.cardTitle}>Metro</Text>
            <Text style={styles.cardSub}>Tickets</Text>
            <Image
              source={require("../../../assets/metro-train.png")}
              style={styles.cardImage}
            />
          </TouchableOpacity>

          {/* SCOOTY */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("SearchLocation")}
          >
            <Text style={styles.cardTitle}>Spacious &</Text>
            <Text style={styles.cardSub}>comfortable Scooty</Text>
            <Image
              source={require("../../../assets/scooty-home.png")}
              style={styles.cardImage}
            />
          </TouchableOpacity>

          {/* PARCEL */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("PackersHome")}
          >
            <Text style={styles.cardTitle}>Send anything</Text>
            <Text style={styles.cardSub}>Parcel</Text>
            <Image
              source={require("../../../assets/parcel-home.png")}
              style={styles.cardImage}
            />
          </TouchableOpacity>

          {/* ALL SERVICES */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Services")}
          >
            <Text style={styles.cardTitle}>All</Text>
            <Text style={styles.cardSub}>Services</Text>
            <Image
              source={require("../../../assets/truck-home.png")}
              style={styles.cardImage}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        {navItems.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.navItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Image source={item.icon} style={styles.navIcon} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

/* 🔹 Reusable Bottom Nav Item */
const NavItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.navItem}>
    <Icon name={icon} size={20} color="#0f766e" />
    <Text style={styles.navText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  header: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 55,
    backgroundColor: "#fff",
    zIndex: 10,
  },

  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 25,
    padding: 5,
    marginBottom: 12,
  },

  toggleBtn: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },

  activeToggle: {
    backgroundColor: "#fff",
    elevation: 2,
  },

  toggleText: {
    fontWeight: "bold",
  },

  toggleContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  topIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 12,
    borderRadius: 25,
  },

  searchIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
    paddingVertical: 10,
  },

  suggestionContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginTop: 5,
    maxHeight: 250,
    elevation: 5,
    overflow: "hidden",
  },

  suggestionItem: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  suggestionText: {
    fontSize: 14,
    color: "#333",
  },

  locationList: {
    padding: 15,
    backgroundColor: "#fff",
  },

  clockIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  locationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  locationTextContainer: {
    marginLeft: 10,
  },

  locTitle: {
    fontWeight: "bold",
  },

  locSub: {
    color: "gray",
    fontSize: 12,
  },

  section: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },

  cardTitle: {
    fontWeight: "bold",
  },

  cardSub: {
    color: "gray",
    fontSize: 12,
  },

  cardImage: {
    width: 50,
    height: 50,
    alignSelf: "flex-end",
    marginTop: 10,
  },

  bottomNav: {
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    backgroundColor: "#0f766e",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
  },

  navItem: {
    alignItems: "center",
  },

  navIcon: {
    width: 20,
    height: 30,
    marginBottom: 2,
  },

  navText: {
    color: "#fff",
    fontSize: 10,
    marginTop: 3,
  },
});
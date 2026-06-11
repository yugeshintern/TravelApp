import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";

export default function SearchLocation({ navigation }) {
  const [selected, setSelected] = useState("ride");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropCoords, setDropCoords] = useState(null);
  const [activeField, setActiveField] = useState(null); // "pickup" | "drop"
  const [suggestions, setSuggestions] = useState([]);

  // ✅ FIX 1: Navigate only when both locations AND coords are set
  

  // ✅ FIX 2: searchLocation only updates text + fetches suggestions (no item ref)
  const searchLocation = async (text, field) => {
    setActiveField(field);

    if (field === "pickup") {
      setPickupLocation(text);
    } else {
      setDropLocation(text);
    }

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
            "User-Agent": "ReactNativeApp",
          },
        }
      );

      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ FIX 3: selectLocation correctly saves coords for the right field
  const selectLocation = item => {
  if (activeField === "pickup") {
    setPickupLocation(item.display_name);

    setPickupCoords({
      lat: parseFloat(item.lat),
      lng: parseFloat(item.lon),
    });
  } else {
    setDropLocation(item.display_name);

    const newDropCoords = {
      lat: parseFloat(item.lat),
      lng: parseFloat(item.lon),
    };

    setDropCoords(newDropCoords);

    if (pickupLocation && pickupCoords) {
      navigation.navigate("VehicleChoosing", {
        pickupLocation,
        dropLocation: item.display_name,

        pickupLat: pickupCoords.lat,
        pickupLng: pickupCoords.lng,

        dropLat: newDropCoords.lat,
        dropLng: newDropCoords.lng,
      });
    }
  }

  setSuggestions([]);
};

  const locations = [
    {
      title: "Egmore Railway Station",
      subtitle:
        "Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu, India",
    },
    {
      title: "Koyambedu Bus Stand",
      subtitle:
        "Koyambedu bus terminus, Koyambedu, Chennai, Tamil Nadu",
    },
    {
      title: "Phoenix Marketcity",
      subtitle: "Velachery Road, Velachery, Chennai",
    },
  ];

  return (
    <View style={styles.container}>
      {/* MAIN CARD */}
      <View style={styles.card}>
        {/* TOP BAR */}
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require("../../../assets/back.png")}
              style={styles.smallIcon}
            />
          </TouchableOpacity>
          <Text style={styles.dropText}>Drop</Text>
        </View>

        {/* TOGGLE */}
        <View style={styles.toggle}>
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
                style={styles.toggleIcon}
              />
              <Text style={styles.toggleText}>Ride</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleBtn,
              selected === "porter" && styles.activeToggle,
            ]}
            onPress={() => setSelected("porter")}
          >
            <View style={styles.toggleContent}>
              <Image
                source={require("../../../assets/3w.png")}
                style={styles.toggleIcon}
              />
              <Text style={styles.toggleText}>Porter</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* LOCATION INPUT */}
        <View style={styles.inputBox}>
          <View style={styles.dotColumn}>
            <View style={styles.greenDot} />
            <View style={styles.line} />
            <View style={styles.redDot} />
          </View>

          <View style={styles.inputContent}>
            {/* ✅ FIX 4: autoCorrect + autoCapitalize on both inputs */}
            <TextInput
              value={pickupLocation}
              placeholder="Your Current Location"
              placeholderTextColor="#7b7b7b"
              style={styles.input}
              autoCorrect={false}
              autoCapitalize="none"
              onFocus={() => setActiveField("pickup")}
              onChangeText={(text) => searchLocation(text, "pickup")}
            />

            <View style={styles.divider} />

            <TextInput
              value={dropLocation}
              placeholder="Drop Location"
              placeholderTextColor="#7b7b7b"
              style={styles.input}
              autoCorrect={false}
              autoCapitalize="none"
              onFocus={() => setActiveField("drop")}
              onChangeText={(text) => searchLocation(text, "drop")}
            />
          </View>
        </View>

        {/* MAP BUTTONS */}
        <View style={styles.mapRow}>
          <TouchableOpacity style={styles.mapBtn}>
            <Image
              source={require("../../../assets/loc-icon.png")}
              style={styles.mapIcon}
            />
            <Text style={styles.mapText}>Select on map</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mapBtn}>
            <Image
              source={require("../../../assets/directions.png")}
              style={styles.mapIcon}
            />
            <Text style={styles.mapText}>Select on map</Text>
          </TouchableOpacity>
        </View>

        {/* SUGGESTIONS DROPDOWN */}
        {suggestions.length > 0 && (
          <View style={styles.suggestionContainer}>
            <FlatList
              keyboardShouldPersistTaps="handled"
              data={suggestions}
              keyExtractor={(item) => item.place_id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.suggestionItem}
                  onPress={() => selectLocation(item)}
                >
                  <Image
                    source={require("../../../assets/loc-icon.png")}
                    style={styles.suggestionIcon}
                  />
                  <View style={{ flex: 1 }}>
                    <Text numberOfLines={1} style={styles.suggestionTitle}>
                      {item.display_name.split(",")[0]}
                    </Text>
                    <Text numberOfLines={2} style={styles.suggestionSubtitle}>
                      {item.display_name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        )}

        {/* RECENT LOCATIONS LIST */}
        <FlatList
          data={locations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.locationItem}
              onPress={() => {
                if (activeField === "pickup") {
                  setPickupLocation(item.title);
                } else {
                  setDropLocation(item.title);
                }
              }}
            >
              <Image
                source={require("../../../assets/timer-icon.png")}
                style={styles.timerIcon}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.locationTitle}>{item.title}</Text>
                <Text style={styles.locationSub}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    fontSize: 18,
    color: "#2563eb",
    margin: 16,
  },

  card: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 16,
  },

  topBar: {
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  backBtn: {
    position: "absolute",
    left: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e5e7eb",
    justifyContent: "center",
    alignItems: "center",
  },

  dropText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
  },

  toggle: {
    flexDirection: "row",
    backgroundColor: "#e5e7eb",
    borderRadius: 10,
    marginVertical: 10,
  },

  toggleBtn: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },

  activeToggle: {
    backgroundColor: "#ffffff",
  },

  toggleText: {
    fontWeight: "600",
  },

  inputBox: {
    flexDirection: "row",
    backgroundColor: "#e5e7eb",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginVertical: 14,
    alignItems: "flex-start",
  },

  suggestionContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 10,
    maxHeight: 260,
    elevation: 5,
    overflow: "hidden",
  },

  suggestionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },

  suggestionIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    marginRight: 10,
  },

  suggestionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
  },

  suggestionSubtitle: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },

  inputContent: {
    flex: 1,
  },

  dotColumn: {
    alignItems: "center",
    marginRight: 14,
    marginTop: 4,
  },

  input: {
    paddingVertical: 8,
    fontSize: 15,
    color: "#222",
  },

  divider: {
    height: 1,
    backgroundColor: "#cfcfcf",
  },

  greenDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "green",
    backgroundColor: "#fff",
  },

  redDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "red",
  },

  line: {
    width: 1.5,
    height: 34,
    backgroundColor: "#999",
    marginVertical: 6,
  },

  mapRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  mapBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 8,
    borderRadius: 20,
  },

  smallIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  toggleContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  toggleIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  mapIcon: {
    width: 14,
    height: 14,
    resizeMode: "contain",
  },

  timerIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    marginTop: 2,
  },

  mapText: {
    marginLeft: 5,
    fontSize: 12,
  },

  locationItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 10,
  },

  locationTitle: {
    fontWeight: "600",
  },

  locationSub: {
    fontSize: 12,
    color: "#777",
  },
});
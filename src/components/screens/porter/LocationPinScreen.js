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
} from "react-native";

export default function DropLocationScreen({ navigation }) {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropLocation, setDropLocation] = useState(null);

  const searchLocation = async (text, field) => {
    setActiveField(field);

    if (field === "pickup") {
      setPickup(text);
    } else {
      setDrop(text);
    }

    if (text.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          text
        )}&format=json&addressdetails=1&limit=10`,
        {
          headers: {
            "User-Agent": "Vibeo-App",
          },
        }
      );

      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const selectLocation = (item) => {
    const cityName = item.display_name.split(",")[0];

    const locationData = {
      name: cityName,
      fullAddress: item.display_name,
      lat: Number(item.lat),
      lng: Number(item.lon),
    };

    if (activeField === "pickup") {
      setPickup(cityName);
      setPickupLocation(locationData);
    }

    if (activeField === "drop") {
      setDrop(cityName);
      setDropLocation(locationData);
    }

    setSuggestions([]);
    setActiveField(null);
  };

  // Navigate to AddressDetails only if both locations are selected
  const handleConfirm = () => {
    if (!pickupLocation || !dropLocation) {
      alert("Please select both pickup and drop locations.");
      return;
    }

    navigation.navigate("AddressDetails", {
      pickup: pickupLocation,
      drop: dropLocation,
    });
  };

  const locations = [
    {
      title: "Egmore Railway Station",
      sub: "Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu, India",
    },
    {
      title: "Koyambedu Bus Stand",
      sub: "Koyambedu bus terminus, Chennai, Tamil Nadu",
    },
    {
      title: "Phoenix Marketcity",
      sub: "Velachery Road, Chennai",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.locRow} activeOpacity={0.8}>
      <Image
        source={require("../../../assets/loc-icon.png")}
        style={styles.locationIcon}
      />
      <View style={{ marginLeft: 12, flex: 1 }}>
        <Text style={styles.locTitle}>{item.title}</Text>
        <Text style={styles.locSub}>{item.sub}</Text>
      </View>
    </TouchableOpacity>
  );

  const INPUT_ROW_HEIGHT = 44;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../../assets/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Drop to</Text>
      </View>

      {/* INPUT CARD */}
      <View style={styles.card}>
        <View style={styles.row}>

          {/* LEFT: dots + dashed line */}
          <View style={styles.lineContainer}>
            <View style={[styles.dotWrapper, { height: INPUT_ROW_HEIGHT }]}>
              <View style={styles.greenDot} />
            </View>
            <View style={styles.dashedLine} />
            <View style={[styles.dotWrapper, { height: INPUT_ROW_HEIGHT }]}>
              <View style={styles.redDot} />
            </View>
          </View>

          {/* RIGHT: inputs */}
          <View style={styles.inputsContainer}>
            <View style={[styles.inputRow, { height: INPUT_ROW_HEIGHT }]}>
              <TextInput
                placeholder="Pickup Location"
                placeholderTextColor="#888"
                value={pickup}
                onFocus={() => setActiveField("pickup")}
                onChangeText={(text) => searchLocation(text, "pickup")}
                style={styles.input}
              />
            </View>

            <View style={styles.separator} />

            <View style={[styles.inputRow, { height: INPUT_ROW_HEIGHT }]}>
              <TextInput
                placeholder="Drop Location"
                placeholderTextColor="#888"
                value={drop}
                onFocus={() => setActiveField("drop")}
                onChangeText={(text) => searchLocation(text, "drop")}
                style={styles.input}
              />
            </View>
          </View>
        </View>
      </View>

      {/* SELECT ON MAP */}
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
                  style={styles.locationIcon}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text numberOfLines={1} style={styles.locTitle}>
                    {item.display_name.split(",")[0]}
                  </Text>
                  <Text numberOfLines={2} style={styles.locSub}>
                    {item.display_name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {/* FAB — navigates with pickup + drop data */}
      <TouchableOpacity style={styles.fab} onPress={handleConfirm}>
        <Image
          source={require("../../../assets/search-icon.png")}
          style={styles.fabIcon}
        />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 15,
    paddingTop: 55,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
    position: "relative",
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    position: "absolute",
    left: 0,
    zIndex: 10,
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  mapIcon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },

  locationIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: "#777",
  },

  fabIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: "#fff",
  },

  header: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  card: {
    backgroundColor: "#e5e7eb",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "stretch",
  },

  lineContainer: {
    alignItems: "center",
    marginRight: 12,
  },

  dotWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },

  greenDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: "green",
    backgroundColor: "#fff",
  },

  redDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: "darkred",
    backgroundColor: "#fff",
  },

  dashedLine: {
    width: 1,
    flex: 1,
    borderLeftWidth: 1.5,
    borderStyle: "dashed",
    borderColor: "#888",
  },

  inputsContainer: {
    flex: 1,
    justifyContent: "center",
  },

  inputRow: {
    justifyContent: "center",
  },

  input: {
    fontSize: 15,
    color: "#333",
    paddingVertical: 0,
  },

  separator: {
    height: 1,
    backgroundColor: "#bbb",
  },

  mapRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  mapBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 25,
    gap: 6,
  },

  mapText: {
    fontSize: 13,
  },

  locRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 20,
  },

  locTitle: {
    fontSize: 14,
    fontWeight: "600",
  },

  locSub: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },

  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#0f766e",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },

  suggestionContainer: {
    backgroundColor: "#fff",
    borderRadius: 18,
    marginTop: 10,
    maxHeight: 250,
    elevation: 4,
  },

  suggestionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
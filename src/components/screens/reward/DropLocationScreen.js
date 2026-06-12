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
  const [drop, setDrop] = useState("");
  const [dropCoords, setDropCoords] = useState(null);
const [suggestions, setSuggestions] = useState([]);

const searchLocation = async (text) => {
  setDrop(text);

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
    console.log("Location Search Error:", error);
  }
};

const selectLocation = (item) => {
  const selectedCoords = {
    lat: parseFloat(item.lat),
    lng: parseFloat(item.lon),
  };

  setDrop(item.display_name);
  setDropCoords(selectedCoords);

  setSuggestions([]);

  navigation.navigate("AddressAdding", {
    selectedPlace: item.display_name.split(",")[0],
    selectedAddress: item.display_name,
    latitude: selectedCoords.lat,
    longitude: selectedCoords.lng,
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
    <TouchableOpacity
      style={styles.locRow}
      activeOpacity={0.8}

      /* DOUBLE CLICK -> UPDATE DROP LOCATION */
      onLongPress={() => {
  setDrop(item.title);

  navigation.navigate("AddressAdding", {
    selectedPlace: item.title,
    selectedAddress: item.sub,
  });
}}

      /* SINGLE CLICK -> NEXT PAGE */
      onPress={() =>
        navigation.navigate("AddressAdding", {
          selectedPlace: item.title,
          selectedAddress: item.sub,
        })
      }
    >
      <Image
        source={require("../../../assets/loc-icon.png")}
        style={styles.locationIcon}
      />

      <View style={{ marginLeft: 12 }}>
        <Text style={styles.locTitle}>{item.title}</Text>
        <Text style={styles.locSub}>{item.sub}</Text>
      </View>
    </TouchableOpacity>
  );

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
      <TouchableOpacity
        activeOpacity={0.9}

        /* FROM-TO COMPONENT -> NEXT PAGE */
        onPress={() => navigation.navigate("AddressAdding")}
      >
        <View style={styles.card}>
          <View style={styles.row}>
            {/* DOTS + LINE */}
            <View style={styles.lineContainer}>
              <View style={styles.greenDot} />
              <View style={styles.dashedLine} />
              <View style={styles.redDot} />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.inputTop}>
                Your Current Location
              </Text>

              <View style={styles.separator} />

              <TextInput
  placeholder="Drop Location"
  placeholderTextColor="#888"
  value={drop}
  autoCorrect={false}
  autoCapitalize="none"
  onChangeText={searchLocation}
  style={styles.input}
/>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
            <Text
              numberOfLines={1}
              style={styles.suggestionTitle}
            >
              {item.display_name.split(",")[0]}
            </Text>

            <Text
              numberOfLines={2}
              style={styles.suggestionSubtitle}
            >
              {item.display_name}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  </View>
)}

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
            source={require("../../../assets/beta.png")}
            style={styles.mapIcon}
          />

          <Text style={styles.mapText}>Select on map</Text>
        </TouchableOpacity>
      </View>

      {/* LIST */}
      <FlatList
        data={locations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: 10 }}
      />

      {/* FLOAT SEARCH BUTTON */}
      <TouchableOpacity style={styles.fab}>
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
  suggestionContainer: {
  backgroundColor: "#fff",
  borderRadius: 16,
  marginTop: 10,
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
    marginTop: 2,
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
    padding: 15,
  },

  row: {
    flexDirection: "row",
  },

  lineContainer: {
    alignItems: "center",
    marginRight: 10,
  },

  greenDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: "green",
  },

  redDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: "darkred",
  },

  dashedLine: {
    height: 35,
    borderLeftWidth: 1,
    borderStyle: "dashed",
    borderColor: "#666",
    marginVertical: 2,
  },

  inputTop: {
    fontSize: 15,
    fontWeight: "600",
  },

  separator: {
    height: 1,
    backgroundColor: "#bbb",
    marginVertical: 8,
  },

  input: {
    fontSize: 15,
    color: "#333",
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
});
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

export default function ParcelScreen({ navigation }) {

  const [dropLocation, setDropLocation] = useState("");
const [suggestions, setSuggestions] = useState([]);

const searchLocation = async (text) => {
  setDropLocation(text);

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
          "User-Agent": "ParcelApp",
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

  setDropLocation(item.display_name);

  setSuggestions([]);

  navigation.navigate("DropLocation", {
    selectedPlace: item.display_name.split(",")[0],
    selectedAddress: item.display_name,
    latitude: selectedCoords.lat,
    longitude: selectedCoords.lng,
  });
};
  return (
    <View style={styles.container}>
      {/* BACK */}
      {/* BACK */}
<TouchableOpacity
  style={styles.backBtn}
  onPress={() => navigation.goBack()}
>
  <Image
    source={require("../../../assets/back.png")}
    style={styles.backIcon}
  />
</TouchableOpacity>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Doorstep pickup and delivery</Text>
        <Text style={styles.parcel}>PARCEL</Text>
      </View>

      {/* HERO IMAGE (replace with your asset later) */}
      <Image
  source={require("../../../assets/parcel-ban.png")}
  style={styles.banner}
  resizeMode="cover"
/>

      {/* PICKUP CARD */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.greenDot} />
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Pickup from current location</Text>
            <Text style={styles.sub}>
              Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu, India
            </Text>

            <View style={styles.dashed} />

            <Text style={styles.phone}>Dexter6625025660</Text>
          </View>
        </View>
      </View>

      {/* DROP CARD */}
      <TouchableOpacity
  style={styles.card}
  activeOpacity={0.9}
  onPress={() => navigation.navigate("DropLocation")}
>
        <View style={styles.row}>
          <View style={styles.redDot} />
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Drop to</Text>

            <View style={styles.searchBox}>
              <Image
  source={require("../../../assets/search-icon.png")}
  style={styles.searchIcon}
/>
              <TextInput
  value={dropLocation}
  placeholder="Search drop address"
  placeholderTextColor="#666"
  autoCorrect={false}
  autoCapitalize="none"
  style={styles.input}
  onChangeText={searchLocation}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#f3f4f6",
  paddingTop: 55,
},

  backBtn: {
  position: "absolute",
  top: 60,
  left: 20,
  zIndex: 100,
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
  elevation: 4,

  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 5,
  shadowOffset: {
    width: 0,
    height: 2,
  },
},

backIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
},

suggestionContainer: {
  backgroundColor: "#fff",
  borderRadius: 16,
  marginHorizontal: 15,
  marginTop: 10,
  maxHeight: 260,
  elevation: 5,

  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 6,
  shadowOffset: {
    width: 0,
    height: 2,
  },

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

banner: {
  width: "100%",
  height: 180,
},

searchIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
  tintColor: "#666",
},

  header: {
  alignItems: "center",
  marginTop: -10,
  paddingHorizontal: 20,
},

  title: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },

  parcel: {
    fontSize: 34,
    fontStyle: "italic",
    fontWeight: "300",
    marginTop: 5,
    color: "#333",
  },

  hero: {
  height: 140,
  marginVertical: 10,
},

  card: {
  backgroundColor: "#e5e7eb",
  borderRadius: 22,
  padding: 18,
  marginHorizontal: 15,
  marginTop: 16,
},

  row: {
    flexDirection: "row",
    gap: 12,
  },

  greenDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: "green",
    marginTop: 4,
  },

  redDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: "darkred",
    marginTop: 4,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },

  sub: {
    fontSize: 13,
    color: "#555",
  },

  dashed: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    marginVertical: 10,
    borderColor: "#999",
  },

  phone: {
    fontSize: 13,
    color: "#333",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#0f766e",
    borderRadius: 25,
    paddingHorizontal: 12,
    marginTop: 10,
  },

  input: {
    flex: 1,
    paddingVertical: 10,
    marginLeft: 8,
    fontSize: 14,
  },
});
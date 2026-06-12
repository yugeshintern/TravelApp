import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function BusBookingScreen({ navigation, route }) {
  const [fromCity, setFromCity] = useState("");
const [toCity, setToCity] = useState("");


const [activeField, setActiveField] = useState(null);

const [search, setSearch] = useState("");
const [suggestions, setSuggestions] = useState([]);

const [showDatePicker, setShowDatePicker] =
  useState(false);

const [journeyDate, setJourneyDate] =
  useState(new Date());

  const searchCity = async (text, field) => {
  setActiveField(field);

  if (field === "from") {
    setFromCity(text);
  } else {
    setToCity(text);
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

const selectCity = (item) => {

  const cityName =
    item.display_name.split(",")[0];

  const coords = {
    lat: Number(item.lat),
    lng: Number(item.lon),
  };

  if (activeField === "from") {
    setFromCity(cityName);
    
  }

  if (activeField === "to") {
    setToCity(cityName);
    
  }

  setSuggestions([]);
  setActiveField(null);
};

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../../assets/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Bus Tickets</Text>
      </View>

      {/* FROM TO CARD */}
      <View      >
        <View style={styles.card}>
          {/* FROM */}
          <View style={styles.row}>
  <View style={styles.greenDot} />

  <TextInput
    value={fromCity}
    placeholder="From"
    placeholderTextColor="#444"
    style={styles.locationInput}
    onFocus={() =>
      setActiveField("from")
    }
    onChangeText={(text) =>
      searchCity(text, "from")
    }
  />
</View>


          <View style={styles.divider} />

          {/* TO */}
          <View style={styles.row}>
  <View style={styles.redDot} />

  <TextInput
    value={toCity}
    placeholder="To"
    placeholderTextColor="#444"
    style={styles.locationInput}
    onFocus={() =>
      setActiveField("to")
    }
    onChangeText={(text) =>
      searchCity(text, "to")
    }
  />
</View>

          <View style={styles.divider} />

          {/* DATE */}
          <TouchableOpacity
            style={styles.row}
            onPress={() => setShowDatePicker(true)}
          >
            <Image
              source={require("../../../assets/calender.png")}
              style={styles.calendarIcon}
            />

            <View style={{ marginLeft: 12 }}>
              <Text style={styles.dateLabel}>Date of Journey</Text>

              <Text style={styles.date}>
                {journeyDate.toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {suggestions.length > 0 && (
  <View style={styles.suggestionContainer}>
    <FlatList
      keyboardShouldPersistTaps="handled"
      data={suggestions}
      keyExtractor={(item) =>
        item.place_id.toString()
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.suggestionItem}
          onPress={() =>
            selectCity(item)
          }
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

      {/* SEARCH BAR */}
      
        <TouchableOpacity
  style={styles.searchBar}
  onPress={() => {

  if (!fromCity.trim()) {
    alert("Please select From location");
    return;
  }

  if (!toCity.trim()) {
    alert("Please select To location");
    return;
  }

  navigation.navigate("SearchBus", {
    fromCity,
    toCity,

    
    journeyDate: journeyDate.toISOString(),
  });
}}
>
  <Image
    source={require("../../../assets/search-icon.png")}
    style={styles.searchIcon}
  />

  <Text style={styles.searchButtonText}>
    Search Buses
  </Text>
</TouchableOpacity>

           

      {/* PROMO CARD */}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate("BusList", {
            fromCity,
            toCity,
            journeyDate,
          })
        }
      >
        <ImageBackground
          source={require("../../../assets/bus-tour-bg.png")}
          style={styles.promoCard}
          imageStyle={styles.promoBg}
        >
        </ImageBackground>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={journeyDate}
          mode="date"
          display="default"
          minimumDate={new Date()}
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);

            if (selectedDate) {
              setJourneyDate(selectedDate);
            }
          }}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  /* HEADER */
  header: {
    paddingTop: 55,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  backBtn: {
    position: "absolute",
    left: 20,
    top: 52,
    width: 42,
    height: 42,
    borderRadius: 22,
    backgroundColor: "#eef1ef",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  locationInput: {
  flex: 1,
  fontSize: 18,
  color: "#222",
  paddingVertical: 0,
},

suggestionContainer: {
  backgroundColor: "#fff",
  marginHorizontal: 20,
  marginTop: 10,
  borderRadius: 16,
  maxHeight: 250,
  elevation: 5,
},

suggestionItem: {
  flexDirection: "row",
  alignItems: "center",
  padding: 14,
  borderBottomWidth: 1,
  borderBottomColor: "#f2f2f2",
},

suggestionIcon: {
  width: 18,
  height: 18,
  marginRight: 10,
  resizeMode: "contain",
},

suggestionTitle: {
  fontSize: 15,
  fontWeight: "600",
},

suggestionSubtitle: {
  fontSize: 12,
  color: "#777",
  marginTop: 2,
},

searchButtonText: {
  marginLeft: 12,
  fontSize: 18,
  fontWeight: "600",
  color: "#222",
},

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2b2b2b",
  },

  /* CARD */
  card: {
    backgroundColor: "#e9eceb",
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 28,
    padding: 20,
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
    marginRight: 16,
    backgroundColor: "#fff",
  },

  redDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "darkred",
    marginRight: 16,
    backgroundColor: "#fff",
  },

  placeholder: {
    color: "#444",
    fontSize: 18,
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: "#c8c8c8",
    marginVertical: 16,
    marginLeft: 46,
  },

  calendarIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  dateLabel: {
    fontSize: 16,
    color: "#444",
  },

  date: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginTop: 4,
  },

  /* SEARCH */
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#e9eceb",
    marginHorizontal: 20,
    marginTop: 22,
    borderRadius: 25,
    paddingHorizontal: 18,
    height: 64,
    alignItems: "center",
  },

  searchIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  searchInput: {
    marginLeft: 14,
    flex: 1,
    fontSize: 16,
    color: "#111",
  },

  /* PROMO CARD */
  promoCard: {
    marginHorizontal: 20,
    marginTop: 28,
    borderRadius: 26,
    overflow: "hidden",
    padding: 18,
    height: 300,
    justifyContent: "space-between",
    elevation: 5,
    backgroundColor: "#fff",
  },

  promoBg: {
    borderRadius: 26,
  },

  promoLeft: {
    width: "52%",
    zIndex: 2,
  },

  promoTitle: {
    fontSize: 30,
    fontWeight: "800",
    color: "#444",
    lineHeight: 38,
  },

  promoDesc: {
    marginTop: 12,
    fontSize: 9,
    lineHeight: 14,
    color: "#8b5e5e",
  },

  learnBtn: {
    marginTop: 14,
    backgroundColor: "#f59e0b",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  learnText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
  },

  busImg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 140,
  },
});
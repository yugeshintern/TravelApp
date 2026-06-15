import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";

export default function AddressAddingScreen({ navigation,route}) {
  const [selected, setSelected] = useState("home");
  const [useMyNumber, setUseMyNumber] = useState(false);

  const { pickup, drop } = route.params;

  const Chip = ({ label, value, icon }) => (
  <TouchableOpacity
    style={[
      styles.chip,
      selected === value && styles.chipActive,
    ]}
    onPress={() => setSelected(value)}
  >
    <Image source={icon} style={styles.chipIcon} />

    <Text
      style={[
        styles.chipText,
        selected === value && { color: "#0f766e" },
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

  return (
    <View style={styles.container}>
      {/* MAP PLACEHOLDER */}
      {/* MAP BACKGROUND */}
<ImageBackground
  source={require("../../../assets/city_map.png")}
  style={styles.map}
  resizeMode="cover"
>
  <TouchableOpacity
    style={styles.backBtn}
    onPress={() => navigation.goBack()}
  >
    <Image
      source={require("../../../assets/back.png")}
      style={styles.backIcon}
    />
  </TouchableOpacity>
</ImageBackground>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* LOCATION */}
          <View style={styles.rowBetween}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
  source={require("../../../assets/loc-icon.png")}
  style={styles.locationIcon}
/>
              <View style={{ marginLeft: 8 }}>
                <Text>{drop.name}</Text>
                <Text style={styles.sub}>{drop.fullAddress}</Text>
                <Text style={styles.sub}>Lat: {drop.lat}, Lng: {drop.lng}</Text>
              </View>
            </View>

            <Text style={styles.change}>Change</Text>
          </View>

          {/* INPUTS */}
          <TextInput
            placeholder="House / Apartment / Shop (optional)"
            style={styles.input}
          />

          <TextInput
            placeholder="Receiver’s Name"
            style={styles.input}
          />

          <TextInput
            placeholder="Receiver’s Mobile Number"
            keyboardType="number-pad"
            style={styles.input}
          />

          {/* CHECKBOX */}
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setUseMyNumber(!useMyNumber)}
          >
            <View
              style={[
                styles.checkbox,
                useMyNumber && styles.checkboxActive,
              ]}
            />
            <Text style={styles.checkboxText}>
              Use my mobile number: 99880 08899
            </Text>
          </TouchableOpacity>

          {/* SAVE AS */}
          <Text style={styles.saveText}>Save as (optional)</Text>

          <View style={styles.chipRow}>
  <Chip
    label="Home"
    value="home"
    icon={require("../../../assets/home-fill.png")}
  />

  <Chip
    label="Shop"
    value="shop"
    icon={require("../../../assets/shop.png")}
  />

  <Chip
    label="Other"
    value="other"
    icon={require("../../../assets/fav.png")}
  />
</View>

          {/* BUTTON */}
          <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate("SelectVehicle",{
    pickup: pickup,
    drop: drop,
  })}
>
            <Text style={styles.buttonText}>
              Confirm drop details
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  map: {
  height: 290,
  paddingTop: 55,
  paddingHorizontal: 15,
},
  backBtn: {
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
  elevation: 4,
},
backIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
},

locationIcon: {
  width: 20,
  height: 20,
  resizeMode: "contain",
  tintColor: "#8b2c2c",
},

chipIcon: {
  width: 16,
  height: 16,
  resizeMode: "contain",
  marginRight: 8,
},


  sheet: {
    flex: 1,
    backgroundColor: "#f9fafb",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15,
    marginTop: -20,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: { fontSize: 15, fontWeight: "600" },
  sub: { fontSize: 12, color: "#666" },

  change: {
    color: "#2563eb",
    fontSize: 13,
    fontWeight: "500",
  },

  input: {
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 25,
  paddingHorizontal: 18,
  paddingVertical: 14,
  marginTop: 14,
  fontSize: 15,
  color: "#111",
  backgroundColor: "#fff",
},

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1.5,
    borderColor: "#888",
    borderRadius: 4,
    marginRight: 8,
  },

  checkboxActive: {
    backgroundColor: "#0f766e",
    borderColor: "#0f766e",
  },

  checkboxText: { fontSize: 13 },

  saveText: {
    marginTop: 15,
    fontSize: 13,
    color: "#444",
  },

  chipRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },

  chip: {
  borderWidth: 1,
  borderColor: "#ddd",
  paddingHorizontal: 16,
  paddingVertical: 10,
  borderRadius: 22,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff",
},

  chipActive: {
    borderColor: "#0f766e",
    backgroundColor: "#e6fffa",
  },

  chipText: {
  fontSize: 15,
  color: "#111",
  fontWeight: "500",
},

  button: {
    marginTop: 20,
    backgroundColor: "#0f766e",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
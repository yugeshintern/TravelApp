import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

export default function CancelReasonScreen({ navigation }) {
  const [selected, setSelected] = useState(null);

  const reasons = [
    "Selected Wrong Pickup Location",
    "Selected Wrong Drop Location",
    "Booked by mistake",
    "Selected different service/vehicle",
    "Taking too long to confirm the ride",
    "Got a ride elsewhere",
    "Others",
  ];

  return (
    <View style={styles.container}>
      {/* MAP BACKGROUND (FAKE) */}
      {/* MAP BACKGROUND */}
        

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

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        <Text style={styles.title}>
          Why do you want to cancel?
        </Text>

        <Text style={styles.subtitle}>
          Please provide the reason for cancellation
        </Text>

        <View style={styles.dashed} />

        {/* LIST */}
        <FlatList
          data={reasons}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
  style={styles.item}
  onPress={() => {
    setSelected(item);
    navigation.navigate("SearchLocation");
  }}
>
              <Text style={styles.itemText}>{item}</Text>

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
  backgroundColor: "#ddd",
},

map: {
  width: "100%",
  height: "100%",
  position: "absolute",
  resizeMode: "cover",
},

backBtn: {
  position: "absolute",
  top: 55,
  left: 20,
  width: 48,
  height: 48,
  borderRadius: 24,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
  elevation: 4,
},

sheet: {
  position: "absolute",
  bottom: 0,
  width: "100%",
  backgroundColor: "#fff",
  borderTopLeftRadius: 28,
  borderTopRightRadius: 28,
  padding: 22,
  maxHeight: "68%",
},

backIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
},

  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },

  dashed: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ccc",
    marginBottom: 10,
  },

  item: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemText: {
    fontSize: 14,
    color: "#333",
  },
});
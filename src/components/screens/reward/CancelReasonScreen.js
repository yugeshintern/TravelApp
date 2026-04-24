import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

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
      <View style={styles.map}>
        <Text style={{ fontSize: 60 }}>📍</Text>

        {/* BACK BUTTON */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>
      </View>

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
              onPress={() => setSelected(item)}
              onPress={()=> navigation.navigate("SearchLocation")}
            >
              <Text style={styles.itemText}>{item}</Text>

              {selected === item && (
                <Icon name="check" size={18} color="#0f766e" />
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ddd" },

  map: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d1d5db",
  },

  backBtn: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    elevation: 3,
  },

  sheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: "65%",
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
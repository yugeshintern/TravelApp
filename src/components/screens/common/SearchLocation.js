import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function SearchLocation({navigation}) {
  const [selected, setSelected] = useState("ride");

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
      subtitle:
        "Velachery Road, Velachery, Chennai",
    },
  ];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Text style={styles.header}>Search for location</Text>

      {/* MAIN CARD */}
      <View style={styles.card}>
        {/* TOP BAR */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backBtn}
          onPress={()=> navigation.goBack()}>
            <Icon name="arrow-left" size={18} />
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
            <Text style={styles.toggleText}>🏍 Ride</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleBtn,
              selected === "porter" && styles.activeToggle,
            ]}
            onPress={() => setSelected("porter")}
          >
            <Text style={styles.toggleText}>🚚 Porter</Text>
          </TouchableOpacity>
        </View>

        {/* LOCATION INPUT */}
        <View style={styles.inputBox}>
          <TouchableOpacity
          onPress={()=> navigation.navigate("VehicleChoosing")}>
          <View style={styles.dotColumn}>
            <View style={styles.greenDot} />
            <View style={styles.line} />
            <View style={styles.redDot} />
          </View>

          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Your Current Location"
              style={styles.input}
            />
            <View style={styles.divider} />
            <TextInput
              placeholder="Drop Location"
              style={styles.input}
            />
          </View>
          </TouchableOpacity>
        </View>

        {/* MAP BUTTONS */}
        <View style={styles.mapRow}>
          <TouchableOpacity style={styles.mapBtn}>
            <Icon name="map-pin" size={14} />
            <Text style={styles.mapText}>Select on map</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mapBtn}>
            <Icon name="navigation" size={14} />
            <Text style={styles.mapText}>Select on map</Text>
          </TouchableOpacity>
        </View>

        {/* LIST */}
        <FlatList
          data={locations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.locationItem}>
              <Icon name="clock" size={16} color="#999" />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.locationTitle}>
                  {item.title}
                </Text>
                <Text style={styles.locationSub}>
                  {item.subtitle}
                </Text>
              </View>
            </View>
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  backBtn: {
    backgroundColor: "#e5e7eb",
    padding: 8,
    borderRadius: 20,
  },

  dropText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "600",
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
    borderRadius: 15,
    padding: 12,
    marginVertical: 10,
  },

  dotColumn: {
    alignItems: "center",
    marginRight: 10,
  },

  greenDot: {
    width: 10,
    height: 10,
    backgroundColor: "green",
    borderRadius: 5,
  },

  redDot: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },

  line: {
    height: 20,
    width: 1,
    backgroundColor: "#999",
    marginVertical: 4,
  },

  input: {
    paddingVertical: 6,
  },

  divider: {
    height: 1,
    backgroundColor: "#ccc",
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
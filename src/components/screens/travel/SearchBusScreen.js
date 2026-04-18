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
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function SearchBusScreen({ navigation }) {
  const [search, setSearch] = useState("");

  const locations = [
    {
      name: "Egmore Railway Station",
      address:
        "Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu, India",
    },
    {
      name: "Koyambedu Bus Stand",
      address:
        "Koyambedu bus terminus, Koyambedu, Chennai, Tamil N.",
    },
    {
      name: "Phoenix Marketcity",
      address:
        "Velachery Road, Indira Gandhi Nagar, Velachery, Chennai",
    },
  ];

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={18} />
          </TouchableOpacity>

          <Text style={styles.title}>
            Search Boarding &{"\n"}Dropping Point
          </Text>
        </View>

        {/* FROM TO CARD */}
        <View style={styles.card}>
          {/* FROM */}
          <View style={styles.row}>
            <View style={styles.greenDot} />
            <Text style={styles.inputText}>Tambaram</Text>
          </View>

          <View style={styles.divider} />

          {/* TO */}
          <View style={styles.row}>
            <View style={styles.redDot} />
            <Text style={styles.inputText}>Salem</Text>
          </View>
        </View>

        {/* MAP BUTTONS */}
        <View style={styles.mapRow}>
          <TouchableOpacity style={styles.mapBtn}>
            <Icon name="map-pin" size={14} />
            <Text style={styles.mapText}> Select on map</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mapBtn}>
            <Icon name="crosshair" size={14} />
            <Text style={styles.mapText}> Select on map</Text>
          </TouchableOpacity>
        </View>

        {/* SEARCH BAR */}
        <View style={styles.searchBar}>
          <Icon name="search" size={16} color="#888" />
          <TextInput
            placeholder="Search Buses"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>

        {/* LIST */}
        <FlatList
          data={locations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.listItem}>
              <Icon name="clock" size={16} color="#888" />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.locName}>{item.name}</Text>
                <Text style={styles.locAddress}>
                  {item.address}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 15,
  },

  /* HEADER */
  header: {
    alignItems: "center",
    marginBottom: 10,
  },

  backBtn: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
  },

  title: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
  },

  /* CARD */
  card: {
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 15,
    marginTop: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "green",
    marginRight: 10,
  },

  redDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "red",
    marginRight: 10,
  },

  inputText: {
    fontSize: 14,
    color: "#333",
  },

  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },

  /* MAP BUTTONS */
  mapRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  mapBtn: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  mapText: {
    fontSize: 12,
  },

  /* SEARCH */
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#e5e7eb",
    borderRadius: 20,
    paddingHorizontal: 12,
    alignItems: "center",
    marginBottom: 10,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 13,
  },

  /* LIST */
  listItem: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },

  locName: {
    fontSize: 13,
    fontWeight: "600",
  },

  locAddress: {
    fontSize: 11,
    color: "#777",
  },
});
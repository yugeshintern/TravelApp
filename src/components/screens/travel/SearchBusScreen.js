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

export default function SearchBusScreen({
  navigation,
}) {
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
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() =>
              navigation.goBack()
            }
          >
            <Image
              source={require("../../../assets/back.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <Text style={styles.title}>
            Search Boarding &{"\n"}
            Dropping Point
          </Text>
        </View>

        {/* FROM TO CARD */}
        <View style={styles.card}>
          {/* FROM */}
          <View style={styles.row}>
            <View style={styles.greenDot} />

            <Text style={styles.inputText}>
              Tambaram
            </Text>
          </View>

          <View style={styles.divider} />

          {/* TO */}
          <View style={styles.row}>
            <View style={styles.redDot} />

            <Text style={styles.inputText}>
              Salem
            </Text>
          </View>
        </View>

        {/* MAP BUTTONS */}
        <View style={styles.mapRow}>
          <TouchableOpacity
            style={styles.mapBtn}
          >
            <Image
              source={require("../../../assets/loc-icon.png")}
              style={styles.mapIcon}
            />

            <Text style={styles.mapText}>
              Select on map
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mapBtn}
          >
            <Image
              source={require("../../../assets/beta.png")}
              style={styles.mapIcon}
            />

            <Text style={styles.mapText}>
              Select on map
            </Text>
          </TouchableOpacity>
        </View>

        {/* SEARCH BAR */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() =>
            navigation.navigate("BusList")
          }
        >
          <View style={styles.searchBar}>
            <Image
              source={require("../../../assets/search-icon.png")}
              style={styles.searchIcon}
            />

            <TextInput
              placeholder="Search Buses"
              placeholderTextColor="#9ca3af"
              value={search}
              onChangeText={setSearch}
              style={styles.searchInput}
            />
          </View>
        </TouchableOpacity>

        {/* LIST */}
        <FlatList
          data={locations}
          keyExtractor={(item, index) =>
            index.toString()
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listItem}
            >
              <Image
                source={require("../../../assets/timer-icon.png")}
                style={styles.historyIcon}
              />

              <View
                style={{
                  marginLeft: 12,
                  flex: 1,
                }}
              >
                <Text style={styles.locName}>
                  {item.name}
                </Text>

                <Text
                  style={styles.locAddress}
                  numberOfLines={1}
                >
                  {item.address}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={{
            paddingBottom: 80,
          }}
          showsVerticalScrollIndicator={
            false
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    paddingTop: 55,
  },

  /* HEADER */
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 26,
  },

  backBtn: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 42,
    height: 42,
    borderRadius: 22,
    backgroundColor: "#eef1ef",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  title: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    color: "#111",
    lineHeight: 30,
  },

  /* CARD */
  card: {
    backgroundColor: "#e9eceb",
    borderRadius: 28,
    padding: 22,
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
    backgroundColor: "#fff",
    marginRight: 16,
  },

  redDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "darkred",
    backgroundColor: "#fff",
    marginRight: 16,
  },

  inputText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: "#c9c9c9",
    marginVertical: 18,
    marginLeft: 36,
  },

  /* MAP BUTTONS */
  mapRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 18,
  },

  mapBtn: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ececec",
  },

  mapIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    marginRight: 8,
  },

  mapText: {
    fontSize: 14,
    color: "#222",
    fontWeight: "500",
  },

  /* SEARCH */
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#e9eceb",
    borderRadius: 25,
    paddingHorizontal: 18,
    alignItems: "center",
    height: 62,
    marginBottom: 22,
  },

  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  searchInput: {
    flex: 1,
    marginLeft: 14,
    fontSize: 16,
    color: "#111",
  },

  /* LIST */
  listItem: {
    flexDirection: "row",
    paddingVertical: 16,
    alignItems: "flex-start",
  },

  historyIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    tintColor: "#9ca3af",
    marginTop: 2,
  },

  locName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111",
  },

  locAddress: {
    fontSize: 13,
    color: "#8b8b8b",
    marginTop: 4,
    lineHeight: 18,
  },
});
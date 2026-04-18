import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const RECENT = [
  {
    title: "Egmore Railway Station",
    sub: "Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu, India",
  },
  {
    title: "Koyambedu Bus Stand",
    sub: "Koyambedu bus terminus, Koyambedu, Chennai, Tamil N.",
  },
  {
    title: "Phoenix Marketcity",
    sub: "Velachery Road, Indira Gandhi Nagar, Velachery, Chennai",
  },
];

export default function LocationPinScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>

        <Text style={styles.title}>Drop</Text>
      </View>

      {/* TAB SWITCH */}
      <View style={styles.tabs}>
        <View style={styles.tab}>
          <Icon name="activity" size={16} />
          <Text style={styles.tabText}>Ride</Text>
        </View>

        <View style={[styles.tab, styles.activeTab]}>
          <Icon name="truck" size={16} />
          <Text style={styles.tabText}>Porter</Text>
        </View>
      </View>

      {/* LOCATION BOX */}
      <View style={styles.locationBox}>
        <View style={styles.dotRow}>
          <View style={styles.greenDot} />
          <View style={styles.line} />
          <View style={styles.redDot} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.inputTop}>
            Your Current Location
          </Text>

          <TextInput
            placeholder="Drop Location"
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>
      </View>

      {/* MAP OPTIONS */}
      <View style={styles.mapRow}>
        <TouchableOpacity style={styles.mapBtn}>
          <Icon name="map-pin" size={14} />
          <Text style={styles.mapText}>Select on map</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mapBtn}>
          <Icon name="crosshair" size={14} />
          <Text style={styles.mapText}>Select on map</Text>
        </TouchableOpacity>
      </View>

      {/* RECENT */}
      <FlatList
        data={RECENT}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.recentItem}>
            <Icon name="clock" size={16} color="#888" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.recentTitle}>
                {item.title}
              </Text>
              <Text style={styles.recentSub}>
                {item.sub}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* SEARCH BUTTON (FLOATING) */}
      <TouchableOpacity style={styles.searchBtn}>
        <Icon name="search" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 15,
  },

  header: {
    alignItems: "center",
    marginBottom: 10,
  },

  backBtn: {
    position: "absolute",
    left: 0,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
  },

  title: {
    fontWeight: "600",
    fontSize: 16,
  },

  tabs: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
  },

  tab: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 6,
    backgroundColor: "#fff",
  },

  activeTab: {
    backgroundColor: "#eee",
  },

  tabText: {
    fontWeight: "500",
  },

  locationBox: {
    flexDirection: "row",
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  dotRow: {
    alignItems: "center",
    marginRight: 10,
  },

  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "green",
  },

  redDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "darkred",
  },

  line: {
    width: 2,
    height: 25,
    backgroundColor: "#999",
  },

  inputTop: {
    fontSize: 13,
    marginBottom: 5,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: "#aaa",
    paddingBottom: 5,
  },

  mapRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  mapBtn: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: "center",
  },

  mapText: {
    marginLeft: 5,
    fontSize: 12,
  },

  recentItem: {
    flexDirection: "row",
    marginBottom: 15,
  },

  recentTitle: {
    fontWeight: "500",
  },

  recentSub: {
    fontSize: 11,
    color: "#777",
  },

  searchBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#0f766e",
    padding: 15,
    borderRadius: 30,
    elevation: 5,
  },
});
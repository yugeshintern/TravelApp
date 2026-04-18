import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const rideServices = [
  "Bike",
  "Scooty",
  "Auto",
  "Auto Priority",
  "Cab Economy",
  "Cab Premium",
  "Cab XL",
  "Parcel",
];

const porterServices = [
  "Pickup 9ft",
  "Mini 3W",
  "3 Wheeler",
  "Tata Ace",
  "Pickup 8ft",
  "Tata 407",
  "14ft",
  "17ft",
  "Bike",
  "Scooter",
];

export default function ServicesScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.serviceItem}>
      <View style={styles.iconCircle}>
        <Text style={{ fontSize: 20 }}>🚗</Text>
      </View>
      <Text style={styles.label}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* BACKGROUND (FAKE SEARCH SCREEN) */}
      <View style={styles.background}>
        <View style={styles.searchBox}>
          <Text style={{ color: "#888" }}>Where are you going?</Text>
        </View>
      </View>

      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={18} />
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        <Text style={styles.title}>All services</Text>

        {/* RIDE */}
        <Text style={styles.section}>Ride</Text>
        <FlatList
          data={rideServices}
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          scrollEnabled={false}
        />

        {/* PORTER */}
        <Text style={styles.section}>Porter</Text>
        <FlatList
          data={porterServices}
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          scrollEnabled={false}
        />

        {/* BOTTOM NAV */}
        <View style={styles.bottomNav}>
          {["Home", "Ride", "Parcel", "Profile"].map((item, i) => (
            <View key={i} style={styles.navItem}>
              <Icon name="home" size={18} color="#fff" />
              <Text style={styles.navText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ddd" },

  background: {
    flex: 1,
    backgroundColor: "#e5e7eb",
    padding: 20,
  },

  searchBox: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 25,
  },

  backBtn: {
    position: "absolute",
    top: 50,
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },

  section: {
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 10,
  },

  serviceItem: {
    width: "25%",
    alignItems: "center",
    marginBottom: 15,
  },

  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginBottom: 5,
  },

  label: {
    fontSize: 11,
    textAlign: "center",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#0f766e",
    borderRadius: 30,
    paddingVertical: 10,
    marginTop: 10,
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    color: "#fff",
    fontSize: 10,
  },
});
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

const rideServices = [
  {
    name: "Bike",
    icon: require("../../../assets/bike.png"),
  },
  {
    name: "Scooty",
    icon: require("../../../assets/scooty.png"),
  },
  {
    name: "Auto",
    icon: require("../../../assets/auto.png"),
  },
  {
    name: "Auto Priority",
    icon: require("../../../assets/mini3w.png"),
  },
  {
    name: "Cab Economy",
    icon: require("../../../assets/car.png"),
  },
  {
    name: "Cab Premium",
    icon: require("../../../assets/pickup.png"),
  },
  {
    name: "Cab XL",
    icon: require("../../../assets/car.png"),
  },
  {
    name: "Parcel",
    icon: require("../../../assets/3w.png"),
  },
];

const porterServices = [
  {
    name: "Pickup 9ft",
    icon: require("../../../assets/tata407.png"),
  },
  {
    name: "Mini 3W",
    icon: require("../../../assets/3w.png"),
  },
  {
    name: "3 Wheeler",
    icon: require("../../../assets/auto.png"),
  },
  {
    name: "Tata Ace",
    icon: require("../../../assets/tataace.png"),
  },
  {
    name: "Pickup 8ft",
    icon: require("../../../assets/truck.png"),
  },
  {
    name: "Tata 407",
    icon: require("../../../assets/tata407.png"),
  },
  {
    name: "14ft",
    icon: require("../../../assets/truck2.png"),
  },
  {
    name: "17ft",
    icon: require("../../../assets/truck2.png"),
  },
  {
    name: "Bike",
    icon: require("../../../assets/bike-icon.png"),
  },
  {
    name: "Scooter",
    icon: require("../../../assets/scooty.png"),
  },
];

export default function ServicesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* BACKGROUND */}
      <View style={styles.background}>
        <View style={styles.searchBox}>
          <Text style={styles.searchText}>
            Where are you going?
          </Text>
        </View>
      </View>

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
        <Text style={styles.title}>All services</Text>

        {/* RIDE */}
        <Text style={styles.section}>Ride</Text>

        <FlatList
          data={rideServices}
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() =>
                navigation.navigate("SearchLocation")
              }
            >
              <View style={styles.iconCircle}>
                <Image
                  source={item.icon}
                  style={styles.serviceIcon}
                />
              </View>

              <Text style={styles.label}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />

        {/* PORTER */}
        <Text style={styles.section}>Porter</Text>

        <FlatList
          data={porterServices}
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() =>
                navigation.navigate("SearchLocation")
              }
            >
              <View style={styles.iconCircle}>
                <Image
                  source={item.icon}
                  style={styles.serviceIcon}
                />
              </View>

              <Text style={styles.label}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />

        {/* FOOTER */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Image
              source={require("../../../assets/home_black.png")}
              style={styles.footerIcon}
            />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Image
              source={require("../../../assets/bike-icon.png")}
              style={styles.footerIcon}
            />
            <Text style={styles.navText}>Ride</Text>
          </TouchableOpacity>

          <TouchableOpacity
  style={styles.navItem}
  onPress={() => navigation.navigate("Parcel")}
>
  <Image
    source={require("../../../assets/parcel-ic.png")}
    style={styles.footerIcon}
  />
  <Text style={styles.navText}>Parcel</Text>
</TouchableOpacity>7

          <TouchableOpacity style={styles.navItem}>
            <Image
              source={require("../../../assets/profile.png")}
              style={styles.footerIcon}
            />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e7eb",
  },

  background: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  searchBox: {
    backgroundColor: "#fff",
    height: 46,
    borderRadius: 25,
    justifyContent: "center",
    paddingHorizontal: 18,
  },

  searchText: {
    color: "#8b8b8b",
    fontSize: 14,
  },

  backBtn: {
    position: "absolute",
    top: 85,
    left: 28,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  backIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  sheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginBottom: 12,
  },

  section: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 18,
    marginTop: 10,
  },

  serviceItem: {
    width: "25%",
    alignItems: "center",
    marginBottom: 22,
  },

  iconCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    marginBottom: 8,
  },

  serviceIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },

  label: {
    fontSize: 11,
    color: "#333",
    textAlign: "center",
    lineHeight: 15,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#0f7c82",
    borderRadius: 35,
    paddingVertical: 12,
    marginTop: 10,
  },

  navItem: {
    alignItems: "center",
  },

  footerIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: "#fff",
    marginBottom: 4,
  },

  navText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "500",
  },
});
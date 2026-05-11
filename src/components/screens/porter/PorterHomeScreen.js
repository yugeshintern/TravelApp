import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PorterHomeScreen({ navigation }) {
  const [selected, setSelected] = useState("porter");

  const navItems = [
    {
      icon: require("../../../assets/home.png"),
      screen: "Home",
    },
    {
      icon: require("../../../assets/metro.png"),
      screen: "MetroScreen",
    },
    {
      icon: require("../../../assets/travel.png"),
      screen: "TravelMain",
    },
    {
      icon: require("../../../assets/profile.png"),
      screen: "Profile",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* TOP TOGGLE */}
        <View style={styles.toggleContainer}>
          
          {/* RIDE */}
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              selected === "ride" && styles.activeToggle,
            ]}
            onPress={() => {
              setSelected("ride");
              navigation.navigate("Home");
            }}
          >
            <View style={styles.toggleContent}>
              <Image
                source={require("../../../assets/bike.png")}
                style={styles.topToggleIcon}
              />
              <Text style={styles.toggleText}>RIDE</Text>
            </View>
          </TouchableOpacity>

          {/* PORTER */}
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              selected === "porter" && styles.activeToggle,
            ]}
            onPress={() => {
              setSelected("porter");
              navigation.navigate("PorterHome");
            }}
          >
            <View style={styles.toggleContent}>
              <Image
                source={require("../../../assets/truck-homee.png")}
                style={styles.topToggleIcon}
              />
              <Text style={styles.toggleText}>PORTER</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* SEARCH */}
        <TouchableOpacity
  style={styles.search}
  onPress={() => navigation.navigate("LocationPin")}
>
          <Image
            source={require("../../../assets/search-icon.png")}
            style={styles.searchIcon}
          />

          <Text style={styles.searchText}>
            Where is your Pickup?
          </Text>
        </TouchableOpacity>

        {/* PICKUP */}
        <View style={styles.pickupRow}>
          <Image
            source={require("../../../assets/loc-icon.png")}
            style={styles.locationIcon}
          />

          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.pickupTitle}>
              Pick up from
            </Text>

            <Text style={styles.pickupSub}>
              Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu, India
            </Text>

            <TouchableOpacity style={styles.mapBtn}>
              <Image
                source={require("../../../assets/loc-icon.png")}
                style={styles.mapIcon}
              />

              <Text style={styles.mapBtnText}>
                Select on map
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SECTION */}
        <Text style={styles.section}>
          Everything in Minutes
        </Text>

        {/* GRID */}
        <View style={styles.grid}>

          {/* TWO WHEELER */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("LocationPin")}
          >
            <Text style={styles.cardTitle}>
              Two{"\n"}Wheeler
            </Text>

            <Image
              source={require("../../../assets/bike-ban.png")}
              style={styles.cardImg}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* TRUCKS */}
          <TouchableOpacity
  style={styles.card}
  onPress={() => navigation.navigate("LocationPin")}
>
            <Text style={styles.cardTitle}>Trucks</Text>

            <Image
              source={require("../../../assets/truck-home.png")}
              style={styles.truckImg}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* PACKERS */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("PackersHome")}
          >
            <Text style={styles.cardTitle}>
              Packers &{"\n"}Movers
            </Text>

            <Image
              source={require("../../../assets/packers.png")}
              style={styles.packersImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* SECTION */}
        <Text style={styles.section}>
          Shift Faster Go Anywhere
        </Text>

        {/* SMALL IMAGES */}
        <View style={styles.imagesRow}>
          <Image
            source={require("../../../assets/shift1.png")}
            style={styles.smallImg}
          />

          <Image
            source={require("../../../assets/shift2.png")}
            style={styles.smallImg}
          />

          <Image
            source={require("../../../assets/shift3.png")}
            style={styles.smallImg}
          />
        </View>

        {/* BANNER */}
        <Image
          source={require("../../../assets/free-shipping-banner.png")}
          style={styles.bannerImage}
          resizeMode="cover"
        />

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        {navItems.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.navItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Image source={item.icon} style={styles.navIcon} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 10,
  },

  /* TOGGLE */
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#e7e7e7",
    borderRadius: 40,
    padding: 5,
    marginHorizontal: 15,
    marginTop: 8,
    marginBottom: 15,
  },

  toggleBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 35,
    alignItems: "center",
  },

  activeToggle: {
    backgroundColor: "#fff",
    elevation: 3,
  },

  toggleContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  topToggleIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  toggleText: {
    fontWeight: "700",
    fontSize: 15,
    color: "#111",
  },

  /* SEARCH */
  search: {
    flexDirection: "row",
    backgroundColor: "#e5e7eb",
    marginHorizontal: 15,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 25,
    alignItems: "center",
  },

  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  searchText: {
    marginLeft: 12,
    color: "#555",
    fontSize: 16,
    fontWeight: "500",
  },

  /* PICKUP */
  pickupRow: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 25,
  },

  locationIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginTop: 2,
  },

  pickupTitle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#111",
  },

  pickupSub: {
    fontSize: 13,
    color: "#777",
    marginTop: 5,
    lineHeight: 20,
  },

  mapBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#222",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 9,
    marginTop: 15,
    alignSelf: "flex-start",
    backgroundColor: "#fff",
  },

  mapIcon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },

  mapBtnText: {
    marginLeft: 7,
    fontWeight: "500",
    color: "#222",
  },

  /* SECTION */
  section: {
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 18,
    fontWeight: "700",
    fontSize: 18,
    color: "#111",
  },

  /* GRID */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  card: {
    width: "48%",
    backgroundColor: "#e9eceb",
    borderRadius: 22,
    padding: 18,
    marginBottom: 15,
    minHeight: 170,
  },

  cardTitle: {
    fontWeight: "700",
    fontSize: 18,
    color: "#111",
    lineHeight: 28,
  },

  cardImg: {
    width: 120,
    height: 90,
    alignSelf: "center",
    marginTop: 12,
  },

  truckImg: {
    width: 130,
    height: 100,
    alignSelf: "center",
    marginTop: 10,
  },

  packersImg: {
    width: 130,
    height: 95,
    alignSelf: "center",
    marginTop: 15,
  },

  /* SMALL IMAGES */
  imagesRow: {
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },

  smallImg: {
    width: "31%",
    height: 90,
    borderRadius: 20,
  },

  /* BANNER */
  bannerImage: {
    width: "92%",
    height: 170,
    alignSelf: "center",
    borderRadius: 22,
    marginTop: 20,
  },

  /* BOTTOM NAV */
  bottomNav: {
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    backgroundColor: "#0f766e",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 14,
  },

  navItem: {
    alignItems: "center",
  },

  navIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
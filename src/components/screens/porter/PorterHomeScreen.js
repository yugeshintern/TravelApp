import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function PorterHomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TOP TOGGLE */}
        <View style={styles.topRow}>
          <View style={styles.toggle}>
            <Icon name="activity" size={18} />
            <Text style={styles.toggleText}>RIDE</Text>
          </View>

          <View style={styles.toggle}>
            <Icon name="truck" size={18} />
            <Text style={styles.toggleText}>PORTER</Text>
          </View>
        </View>

        {/* SEARCH */}
        <TouchableOpacity style={styles.search}>
          <Icon name="search" size={16} color="#555" />
          <Text style={styles.searchText}>
            Where is your Pickup?
          </Text>
        </TouchableOpacity>

        {/* PICKUP */}
        <View style={styles.pickupRow}>
          <Icon name="map-pin" size={20} color="#8b0000" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.pickupTitle}>
              Pick up from
            </Text>
            <Text style={styles.pickupSub}>
              Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu, India
            </Text>

            <TouchableOpacity style={styles.mapBtn}>
              <Icon name="map" size={14} />
              <Text style={{ marginLeft: 5 }}>
                Select on map
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SECTION TITLE */}
        <Text style={styles.section}>
          Everything in Minutes
        </Text>

        {/* GRID */}
        <View style={styles.grid}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Two{"\n"}Wheeler
            </Text>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
              }}
              style={styles.cardImg}
            />
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Trucks</Text>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1995/1995507.png",
              }}
              style={styles.cardImg}
            />
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Packers &{"\n"}Movers
            </Text>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
              }}
              style={styles.cardImg}
            />
          </View>
        </View>

        {/* SHIFT SECTION */}
        <Text style={styles.section}>
          Shift Faster Go Anywhere
        </Text>

        <View style={styles.imagesRow}>
          {[
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
          ].map((img, i) => (
            <Image key={i} source={{ uri: img }} style={styles.smallImg} />
          ))}
        </View>

        {/* BANNER */}
        <View style={styles.banner}>
          <Text style={styles.bannerBig}>
            FREE SHIPPING
          </Text>
          <Text style={styles.bannerSmall}>
            On Selected Locations!
          </Text>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        {[
          { icon: "home", label: "Home" },
          { icon: "truck", label: "Ride" },
          { icon: "map-pin", label: "Track" },
          { icon: "user", label: "Profile" },
        ].map((item, i) => (
          <TouchableOpacity key={i} style={styles.navItem}>
            <Icon name={item.icon} size={18} color="#fff" />
            <Text style={styles.navText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },

  toggle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  toggleText: {
    fontWeight: "600",
  },

  search: {
    flexDirection: "row",
    backgroundColor: "#e5e7eb",
    margin: 15,
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
  },

  searchText: {
    marginLeft: 10,
    color: "#555",
  },

  pickupRow: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 10,
  },

  pickupTitle: {
    fontWeight: "600",
  },

  pickupSub: {
    fontSize: 12,
    color: "#777",
    marginTop: 3,
  },

  mapBtn: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginTop: 10,
    alignSelf: "flex-start",
  },

  section: {
    margin: 15,
    fontWeight: "600",
    fontSize: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  card: {
    width: "48%",
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  cardTitle: {
    fontWeight: "600",
    fontSize: 14,
  },

  cardImg: {
    width: 60,
    height: 60,
    marginTop: 10,
  },

  imagesRow: {
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },

  smallImg: {
    width: "30%",
    height: 80,
    borderRadius: 15,
  },

  banner: {
    margin: 15,
    backgroundColor: "#2563eb",
    borderRadius: 20,
    padding: 20,
  },

  bannerBig: {
    color: "#93c5fd",
    fontSize: 28,
    fontWeight: "700",
  },

  bannerSmall: {
    color: "#fff",
    marginTop: 5,
    fontStyle: "italic",
  },

  bottomNav: {
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    backgroundColor: "#0f766e",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    color: "#fff",
    fontSize: 10,
    marginTop: 3,
  },
});
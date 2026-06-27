import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

export default function TravelMainScreen({
  navigation,
}) {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* TOP BANNER */}
      <ImageBackground
        source={require("../../../assets/travel_banner.png")}
        style={styles.banner}
        resizeMode="cover"
      >
        {/* OVERLAY */}
        <View style={styles.overlay} />

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

        {/* TEXT */}
        
        
      </ImageBackground>

      {/* TITLE */}
      <Text style={styles.sectionTitle}>
        Travel & Hotel
      </Text>

      {/* GRID */}
      <View style={styles.grid}>
        {/* BUS */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.9}
          onPress={() =>
            navigation.navigate("BusBooking")
          }
        >
          <Text style={styles.offer}>
            💚 Upto ₹4000 Off
          </Text>

          <Text style={styles.desc}>
            Save big on
          </Text>

          <Text style={styles.label}>
            Bus
          </Text>

          <Image
            source={require("../../../assets/bus.png")}
            style={styles.busIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* FLIGHT */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.9}
          onPress={() =>
            navigation.navigate("FlightsHome")
          }
        >
          <Text style={styles.offer}>
            💚 Upto ₹4000 Off
          </Text>

          <Text style={styles.desc}>
            Lowest fare, guaranteed
          </Text>

          <Text style={styles.label}>
            Flight
          </Text>

          <Image
            source={require("../../../assets/flight.png")}
            style={styles.flightIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* HOTEL */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.9}
          onPress={() =>
            navigation.navigate("HotelsHome")
          }
        >
          <Text style={styles.offer}>
            💚 Upto 55% Off
          </Text>

          <Text style={styles.desc}>
            Best room rates
          </Text>

          <Text style={styles.label}>
            Hotel
          </Text>

          <Image
            source={require("../../../assets/hotel.png")}
            style={styles.hotelIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* TRAIN */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.9}
          onPress={() =>
            navigation.navigate("TrainBooking")
          }
        >
          <Text style={styles.offer}>
            💚 Zero Service Fee
          </Text>

          <Text style={styles.desc}>
            Instant booking
          </Text>

          <Text style={styles.label}>
            Train
          </Text>

          <Image
            source={require("../../../assets/train.png")}
            style={styles.trainIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  /* TOP BANNER */
  banner: {
    height: 255,
    justifyContent: "flex-start",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.10)",
  },

  backBtn: {
  position: "absolute",
  top: 58,      // Adjust vertically
  left: 24,     // Adjust horizontally
  width: 52,
  height: 52,
  borderRadius: 26,
  backgroundColor: "#FFFFFF",
  justifyContent: "center",
  alignItems: "center",

  shadowColor: "#000",
  shadowOpacity: 0.12,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowRadius: 6,
  elevation: 6,

  zIndex: 10,
},

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  bannerText: {
    position: "absolute",
    left: 20,
    bottom: 22,
  },

  small: {
    color: "#1f2937",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  big: {
    color: "#1f2937",
    fontSize: 38,
    fontWeight: "800",
    marginTop: 2,
  },

  mid: {
    color: "#1f2937",
    fontSize: 22,
    fontWeight: "800",
    marginTop: 2,
  },

  sub: {
    color: "#374151",
    fontSize: 13,
    fontWeight: "600",
    marginTop: 8,
  },

  /* TITLE */
  sectionTitle: {
    marginTop: 28,
    marginLeft: 20,
    marginBottom: 18,
    fontSize: 20,
    fontWeight: "800",
    color: "#222",
  },

  /* GRID */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  /* CARD */
  card: {
    width: "48%",
    backgroundColor: "#edf1ef",
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
    marginBottom: 16,
    overflow: "hidden",
  },

  offer: {
    fontSize: 13,
    color: "#16a34a",
    fontWeight: "700",
  },

  desc: {
    fontSize: 13,
    color: "#333",
    marginTop: 6,
    fontWeight: "500",
  },

  label: {
    fontSize: 20,
    color: "#222",
    fontWeight: "800",
    marginTop: 4,
  },

  /* ICONS */
  busIcon: {
    width: 95,
    height: 85,
    alignSelf: "flex-end",
    marginTop: -5,
  },

  flightIcon: {
    width: 115,
    height: 90,
    alignSelf: "center",
    marginTop: 8,
  },

  hotelIcon: {
    width: 105,
    height: 95,
    alignSelf: "flex-end",
    marginTop: 4,
  },

  trainIcon: {
    width: 110,
    height: 85,
    alignSelf: "flex-end",
    marginTop: 8,
  },
});
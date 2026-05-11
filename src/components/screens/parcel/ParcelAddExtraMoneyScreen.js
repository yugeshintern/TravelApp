import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

export default function ParcelAddExtraMoneyScreen({
  navigation,
}) {
  const [selected, setSelected] = useState(null);

  const amounts = [20, 30, 40, 50];

  return (
    <View style={styles.container}>
      {/* MAP BG */}
      <ImageBackground
        source={require("../../../assets/review_bg.png")}
        style={styles.map}
        resizeMode="cover"
      >
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
      </ImageBackground>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        {/* DRAG BAR */}
        <View style={styles.dragBar} />

        {/* HEADER */}
        <View style={styles.row}>
          <Image
            source={require("../../../assets/bike.png")}
            style={styles.bikeIcon}
          />

          <View style={{ marginLeft: 12 }}>
            <Text style={styles.small}>
              Looking for your
            </Text>

            <Text style={styles.bold}>
              Bike ride
            </Text>
          </View>
        </View>

        {/* RIDE CARD */}
        <View style={styles.rideCard}>
          <View>
            <Text style={styles.rideTitle}>
              Bike ride
            </Text>

            <Text style={styles.price}>
              ₹287.0
            </Text>
          </View>

          <TouchableOpacity style={styles.tripBtn}>
            <Text style={styles.tripText}>
              Trip Details
            </Text>
          </TouchableOpacity>
        </View>

        {/* BOOST CARD */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.boostCard}
          onPress={() =>
            navigation.navigate("RiderPickup")
          }
        >
          <Text style={styles.boostTitle}>
            Captains aren’t accepting at ₹287.
          </Text>

          <Text style={styles.subText}>
            Try adding more
          </Text>

          <View style={styles.chipRow}>
            {amounts.map((amt) => (
              <TouchableOpacity
                key={amt}
                style={[
                  styles.chip,
                  selected === amt &&
                    styles.chipSelected,
                ]}
                onPress={() => setSelected(amt)}
              >
                <Text
                  style={[
                    styles.chipText,
                    selected === amt && {
                      color: "#fff",
                    },
                  ]}
                >
                  +₹{amt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>

        {/* FOOT TEXT */}
        <Text style={styles.footerText}>
          Almost there! Add a little more so a captain can pick you faster...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* MAP */
  map: {
    height: 340,
    paddingTop: 55,
    paddingHorizontal: 15,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  /* SHEET */
  sheet: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 18,
    marginTop: -25,
  },

  dragBar: {
    width: 70,
    height: 5,
    backgroundColor: "#d4d4d4",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 24,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  bikeIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },

  small: {
    fontSize: 14,
    color: "#555",
  },

  bold: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  /* RIDE CARD */
  rideCard: {
    backgroundColor: "#e9eceb",
    borderRadius: 20,
    padding: 18,
    marginTop: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  rideTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  price: {
    fontSize: 16,
    color: "#444",
    marginTop: 6,
  },

  tripBtn: {
    borderWidth: 1.5,
    borderColor: "#cfcfcf",
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: "#f7f7f7",
  },

  tripText: {
    fontSize: 15,
    color: "#444",
    fontWeight: "500",
  },

  /* BOOST CARD */
  boostCard: {
    backgroundColor: "#e9eceb",
    borderRadius: 22,
    padding: 20,
    marginTop: 18,
  },

  boostTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    lineHeight: 28,
  },

  subText: {
    fontSize: 16,
    color: "#555",
    marginTop: 2,
  },

  chipRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
  },

  chip: {
    borderWidth: 1.5,
    borderColor: "#d0d0d0",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 22,
    backgroundColor: "#fff",
  },

  chipSelected: {
    backgroundColor: "#0f766e",
    borderColor: "#0f766e",
  },

  chipText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },

  footerText: {
    marginTop: 28,
    fontSize: 16,
    color: "#444",
    lineHeight: 26,
    fontWeight: "500",
  },
});
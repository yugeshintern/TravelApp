import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

export default function ParcelLookingRiderScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* MAP */}
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
            source={require("../../../assets/bike-icon.png")}
            style={styles.bikeIcon}
          />

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.small}>Looking for your</Text>
            <Text style={styles.bold}>Bike ride</Text>
          </View>
        </View>

        {/* LOCATION DETAILS */}
        <Text style={styles.section}>Location Details</Text>

        {/* CLICKABLE LOCATION CARD */}
        <TouchableOpacity
          style={styles.locationCard}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("ParcelAddExtraMoney")
          }
        >
          <View style={styles.row}>
            {/* DOTS */}
            <View style={styles.lineBox}>
              <View style={styles.greenDot} />

              <View style={styles.dashedLine} />

              <View style={styles.redDot} />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.locTitle}>
                Egmore Railway Station
              </Text>

              <Text
                style={styles.locSub}
                numberOfLines={1}
              >
                Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu,...
              </Text>

              <Text
                style={[
                  styles.locTitle,
                  { marginTop: 12 },
                ]}
              >
                Koyambedu Bus Stand
              </Text>

              <Text
                style={styles.locSub}
                numberOfLines={1}
              >
                Koyambedu bus terminus, Koyambedu, Chennai,...
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* FARE */}
        <View style={styles.fareCard}>
          <View style={styles.rowBetween}>
            <Text style={styles.fareTitle}>Total Fare</Text>

            <Text style={styles.farePrice}>₹287.0</Text>
          </View>

          <View style={[styles.row, { marginTop: 10 }]}>
            <Image
              source={require("../../../assets/payment.png")}
              style={styles.cashIcon}
            />

            <Text style={styles.subText}>
              Paying via cash
            </Text>
          </View>
        </View>

        {/* BUTTONS */}
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.primaryText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.outlineBtn}>
          <Text style={styles.outlineText}>
            Cancel Ride
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

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
    elevation: 4,
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  sheet: {
    flex: 1,
    backgroundColor: "#f8f8f8",
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
    marginBottom: 22,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bikeIcon: {
    width: 22,
    height: 22,
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

  section: {
    marginTop: 22,
    fontSize: 15,
    fontWeight: "700",
    color: "#111",
  },

  locationCard: {
    backgroundColor: "#e9eceb",
    borderRadius: 18,
    padding: 16,
    marginTop: 14,
  },

  lineBox: {
    alignItems: "center",
    marginRight: 14,
  },

  greenDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: "green",
    backgroundColor: "#fff",
  },

  redDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: "#8b0000",
    backgroundColor: "#fff",
  },

  dashedLine: {
    height: 42,
    borderLeftWidth: 1.5,
    borderStyle: "dashed",
    borderColor: "#000",
    marginVertical: 2,
  },

  locTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },

  locSub: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
    width: "95%",
  },

  fareCard: {
    backgroundColor: "#e9eceb",
    borderRadius: 18,
    padding: 16,
    marginTop: 18,
  },

  fareTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  farePrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  cashIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  subText: {
    fontSize: 15,
    color: "#444",
    marginLeft: 8,
  },

  primaryBtn: {
    backgroundColor: "#0b7f83",
    paddingVertical: 18,
    borderRadius: 35,
    alignItems: "center",
    marginTop: 24,
  },

  primaryText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  outlineBtn: {
    borderWidth: 2,
    borderColor: "#a40000",
    paddingVertical: 18,
    borderRadius: 35,
    alignItems: "center",
    marginTop: 14,
    backgroundColor: "#fff",
  },

  outlineText: {
    color: "#a40000",
    fontSize: 18,
    fontWeight: "700",
  },
});
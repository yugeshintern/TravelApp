import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Slider from "@react-native-community/slider";

export default function PowerPass({ navigation }) {

  const [progress, setProgress] = useState(0.4);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../../assets/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.header}>Power Pass</Text>
      </View>

      {/* TITLE */}
      <Text style={styles.title}>
        Save upto 60% on bike rides with Bike Pass!
      </Text>

      {/* SCOOTY IMAGE */}
      <View style={styles.imageBox}>
        <Image
          source={require("../../../assets/scooty.png")}
          style={styles.scooty}
        />
      </View>

      {/* WORKING SLIDER */}
      <View style={styles.sliderWrapper}>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={0}
          maximumValue={1}
          value={progress}
          onValueChange={(value) => setProgress(value)}
          minimumTrackTintColor="#facc15"
          maximumTrackTintColor="#d1d5db"
          thumbTintColor="#ffffff"
        />

        <View style={styles.markerRow}>
          <Text style={styles.marker}>0</Text>
          <Text style={styles.marker}>1</Text>
        </View>
      </View>

      {/* DESCRIPTION */}
      <Text style={styles.unlock}>Ride to unlock</Text>

      <Text style={styles.sub}>
        Complete 1 bike ride to unlock your power pass
      </Text>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          Continue to Book Ride
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 25,
    paddingTop: 55,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 35,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#e9eceb",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  header: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2b2b2b",
  },

  title: {
    fontSize: 18,
    lineHeight: 32,
    fontWeight: "700",
    color: "#2b2b2b",
    marginBottom: 70,
  },

  imageBox: {
    alignItems: "center",
    marginBottom: 20,
  },

  scooty: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  sliderWrapper: {
    marginBottom: 35,
  },

  markerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -4,
  },

  marker: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2b2b2b",
  },

  unlock: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#2b2b2b",
    marginBottom: 10,
  },

  sub: {
    textAlign: "center",
    fontSize: 15,
    color: "#555",
    lineHeight: 28,
    marginBottom: 70,
  },

  button: {
    backgroundColor: "#0b7f80",
    paddingVertical: 18,
    borderRadius: 40,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },

});
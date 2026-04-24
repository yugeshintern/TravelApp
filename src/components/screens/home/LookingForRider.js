import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function LookingForRider({ navigation }) {
  return (
    <View style={styles.container}>
      {/* MAP */}
      <Image
        source={{
          uri: "https://maps.googleapis.com/maps/api/staticmap?center=Chennai&zoom=14&size=600x300",
        }}
        style={styles.map}
      />

      {/* HEADER */}
      <Text style={styles.header}>Looking_for_rider</Text>

      {/* BACK BUTTON */}
      <TouchableOpacity style={styles.backBtn}
      onPress={()=>navigation.goBack()}>
        <Icon name="arrow-left" size={18} />
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        {/* DRAG LINE */}
        <View style={styles.drag} />

        {/* TITLE */}
        <View style={styles.titleRow}>
          <Text style={styles.titleSmall}>Looking for your</Text>
          <Text style={styles.titleBold}> Bike ride</Text>
        </View>

        {/* LOCATION DETAILS */}
        <Text style={styles.section}>Location Details</Text>

         <TouchableOpacity
          onPress={()=> navigation.navigate("ExtraCash")}>
        <View style={styles.locationBox}>
          <View style={styles.dotColumn}>
            <View style={styles.greenDot} />
            <View style={styles.line} />
            <View style={styles.redDot} />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.locTitle}>
              Egmore Railway Station
            </Text>
            <Text style={styles.locSub}>
              Gandhi Irwin Road, Egmore, Chennai...
            </Text>

            <Text style={styles.locTitle}>
              Koyambedu Bus Stand
            </Text>
            <Text style={styles.locSub}>
              Koyambedu bus terminus, Chennai...
            </Text>
          </View>
        </View>
        </TouchableOpacity>

        {/* FARE BOX */}
        <View style={styles.fareBox}>
          <View style={styles.fareRow}>
            <Text style={styles.fareTitle}>Total Fare</Text>
            <Text style={styles.farePrice}>₹287.0</Text>
          </View>
          <TouchableOpacity
          onPress={()=> navigation.navigate("Payments")}>
          <Text style={styles.payment}>💵 Paying via cash</Text>
          </TouchableOpacity>
        </View>

        {/* BUTTONS */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton}
        onPress={()=> navigation.navigate("CancelReason")}>
          <Text style={styles.cancelText}>Cancel Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  map: {
    width: "100%",
    height: 260,
  },

  header: {
    position: "absolute",
    top: 10,
    left: 16,
    color: "#2563eb",
    fontSize: 18,
  },

  backBtn: {
    position: "absolute",
    top: 70,
    left: 16,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    elevation: 3,
  },

  sheet: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },

  drag: {
    width: 40,
    height: 4,
    backgroundColor: "#ccc",
    alignSelf: "center",
    borderRadius: 2,
    marginBottom: 10,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  titleSmall: {
    color: "#444",
  },

  titleBold: {
    fontWeight: "700",
  },

  section: {
    marginTop: 10,
    fontWeight: "600",
  },

  locationBox: {
    flexDirection: "row",
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 12,
    marginTop: 10,
  },

  dotColumn: {
    alignItems: "center",
    marginRight: 10,
  },

  greenDot: {
    width: 10,
    height: 10,
    backgroundColor: "green",
    borderRadius: 5,
  },

  redDot: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },

  line: {
    height: 30,
    width: 1,
    backgroundColor: "#999",
    marginVertical: 4,
  },

  locTitle: {
    fontWeight: "600",
    marginTop: 5,
  },

  locSub: {
    fontSize: 12,
    color: "#777",
  },

  fareBox: {
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 12,
    marginTop: 15,
  },

  fareRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  fareTitle: {
    fontWeight: "600",
  },

  farePrice: {
    fontWeight: "600",
  },

  payment: {
    marginTop: 5,
    color: "#555",
  },

  backButton: {
    backgroundColor: "#0f766e",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },

  backText: {
    color: "#fff",
    fontWeight: "600",
  },

  cancelButton: {
    borderWidth: 1.5,
    borderColor: "red",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },

  cancelText: {
    color: "red",
    fontWeight: "600",
  },
});
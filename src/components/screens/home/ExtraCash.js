import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ExtraCash({ navigation }) {
  const [selected, setSelected] = useState(null);

  const options = [20, 30, 40, 50];

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
      <Text style={styles.header}>
        extra_cash_adding_for_rider
      </Text>

      {/* BACK BUTTON */}
      <TouchableOpacity style={styles.backBtn}>
        <Icon name="arrow-left" size={18} />
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        {/* DRAG HANDLE */}
        <View style={styles.drag} />

        {/* TITLE */}
        <View style={styles.titleRow}>
          <Text style={styles.titleSmall}>
            Looking for your
          </Text>
          <Text style={styles.titleBold}> Bike ride</Text>
        </View>

        {/* RIDE BOX */}
        <View style={styles.rideBox}>
          <View>
            <Text style={styles.rideTitle}>Bike ride</Text>
            <Text style={styles.price}>₹287.0</Text>
          </View>

          <TouchableOpacity style={styles.tripBtn}>
            <Text style={styles.tripText}>Trip Details</Text>
          </TouchableOpacity>
        </View>

        {/* BOOST BOX */}
        <View style={styles.boostBox}>
          <TouchableOpacity
          onPress={()=> navigation.navigate("RiderPickup")}>
          <Text style={styles.boostText}>
            Captains aren’t accepting at ₹287.{"\n"}
            Try adding more
          </Text>
          </TouchableOpacity>

          <View style={styles.optionsRow}>
            {options.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionBtn,
                  selected === item && styles.selectedOption,
                ]}
                onPress={() => setSelected(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selected === item && { color: "#fff" },
                  ]}
                >
                  +₹{item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* FOOT TEXT */}
        <Text style={styles.footer}>
          Almost there! Add a little more so a captain can pick you faster...
        </Text>
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
    fontSize: 18,
    color: "#2563eb",
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
    marginBottom: 10,
  },

  titleSmall: {
    color: "#444",
  },

  titleBold: {
    fontWeight: "700",
  },

  rideBox: {
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  rideTitle: {
    fontWeight: "600",
  },

  price: {
    marginTop: 3,
    color: "#555",
  },

  tripBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  tripText: {
    fontSize: 12,
  },

  boostBox: {
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 15,
  },

  boostText: {
    marginBottom: 10,
    fontWeight: "500",
  },

  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  optionBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  selectedOption: {
    backgroundColor: "#0f766e",
    borderColor: "#0f766e",
  },

  optionText: {
    fontSize: 12,
  },

  footer: {
    marginTop: 20,
    color: "#555",
    fontSize: 12,
  },
});
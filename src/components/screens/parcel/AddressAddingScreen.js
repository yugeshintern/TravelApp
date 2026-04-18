import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function AddressAddingScreen({ navigation }) {
  const [selected, setSelected] = useState("home");
  const [useMyNumber, setUseMyNumber] = useState(false);

  const Chip = ({ label, value }) => (
    <TouchableOpacity
      style={[
        styles.chip,
        selected === value && styles.chipActive,
      ]}
      onPress={() => setSelected(value)}
    >
      <Text
        style={[
          styles.chipText,
          selected === value && { color: "#0f766e" },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* MAP PLACEHOLDER */}
      <View style={styles.map}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>
      </View>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* LOCATION */}
          <View style={styles.rowBetween}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="map-pin" size={18} color="red" />
              <View style={{ marginLeft: 8 }}>
                <Text style={styles.title}>Sholinganallur</Text>
                <Text style={styles.sub}>
                  Chennai, Tamil Nadu, India
                </Text>
              </View>
            </View>

            <Text style={styles.change}>Change</Text>
          </View>

          {/* INPUTS */}
          <TextInput
            placeholder="House / Apartment / Shop (optional)"
            style={styles.input}
          />

          <TextInput
            placeholder="Receiver’s Name"
            style={styles.input}
          />

          <TextInput
            placeholder="Receiver’s Mobile Number"
            keyboardType="number-pad"
            style={styles.input}
          />

          {/* CHECKBOX */}
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setUseMyNumber(!useMyNumber)}
          >
            <View
              style={[
                styles.checkbox,
                useMyNumber && styles.checkboxActive,
              ]}
            />
            <Text style={styles.checkboxText}>
              Use my mobile number: 99880 08899
            </Text>
          </TouchableOpacity>

          {/* SAVE AS */}
          <Text style={styles.saveText}>Save as (optional)</Text>

          <View style={styles.chipRow}>
            <Chip label="Home" value="home" />
            <Chip label="Shop" value="shop" />
            <Chip label="Other" value="other" />
          </View>

          {/* BUTTON */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Confirm drop details
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  map: {
    height: 250,
    backgroundColor: "#ddd", // replace with Map later
  },

  backBtn: {
    position: "absolute",
    top: 20,
    left: 15,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    elevation: 3,
  },

  sheet: {
    flex: 1,
    backgroundColor: "#f9fafb",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15,
    marginTop: -20,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: { fontSize: 15, fontWeight: "600" },
  sub: { fontSize: 12, color: "#666" },

  change: {
    color: "#2563eb",
    fontSize: 13,
    fontWeight: "500",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 12,
    fontSize: 14,
    backgroundColor: "#fff",
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1.5,
    borderColor: "#888",
    borderRadius: 4,
    marginRight: 8,
  },

  checkboxActive: {
    backgroundColor: "#0f766e",
    borderColor: "#0f766e",
  },

  checkboxText: { fontSize: 13 },

  saveText: {
    marginTop: 15,
    fontSize: 13,
    color: "#444",
  },

  chipRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },

  chip: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  chipActive: {
    borderColor: "#0f766e",
    backgroundColor: "#e6fffa",
  },

  chipText: { fontSize: 13 },

  button: {
    marginTop: 20,
    backgroundColor: "#0f766e",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
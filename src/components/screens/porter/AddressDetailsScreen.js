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

export default function AddressDetailsScreen({ navigation }) {
  const [selected, setSelected] = useState("Home");
  const [useMyNumber, setUseMyNumber] = useState(false);

  return (
    <View style={styles.container}>
      {/* MAP */}
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
          <View style={styles.locationRow}>
            <Icon name="map-pin" size={18} color="#b91c1c" />

            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.locationTitle}>
                Sholinganallur
              </Text>
              <Text style={styles.locationSub}>
                Sholinganallur, Chennai, Tamil Nadu, India
              </Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>

          {/* INPUTS */}
          <TextInput
            placeholder="House / Apartment / Shop(optional)"
            placeholderTextColor="#999"
            style={styles.input}
          />

          <TextInput
            placeholder="Receiver’s Name"
            placeholderTextColor="#999"
            style={styles.input}
          />

          <TextInput
            placeholder="Receiver’s Mobile Number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
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
          <Text style={styles.saveLabel}>Save as (optional)</Text>

          <View style={styles.chipsRow}>
            {["Home", "Shop", "Other"].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.chip,
                  selected === item && styles.activeChip,
                ]}
                onPress={() => setSelected(item)}
              >
                <Text
                  style={[
                    styles.chipText,
                    selected === item && styles.activeChipText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* CTA */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Confirm and Proceed
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  map: {
    height: "40%",
    backgroundColor: "#ddd",
  },

  backBtn: {
    position: "absolute",
    top: 40,
    left: 15,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    elevation: 3,
  },

  sheet: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 18,
    marginTop: -20,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  locationTitle: {
    fontWeight: "600",
    fontSize: 14,
  },

  locationSub: {
    fontSize: 11,
    color: "#777",
  },

  changeText: {
    color: "#2563eb",
    fontSize: 12,
    fontWeight: "500",
  },

  input: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    fontSize: 13,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 4,
    marginRight: 10,
  },

  checkboxActive: {
    backgroundColor: "#0f766e",
    borderColor: "#0f766e",
  },

  checkboxText: {
    fontSize: 12,
    color: "#333",
  },

  saveLabel: {
    fontSize: 12,
    marginBottom: 10,
    color: "#666",
  },

  chipsRow: {
    flexDirection: "row",
    marginBottom: 20,
  },

  chip: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },

  activeChip: {
    borderColor: "#0f766e",
    backgroundColor: "#e6f4f3",
  },

  chipText: {
    fontSize: 12,
  },

  activeChipText: {
    color: "#0f766e",
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#0f766e",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
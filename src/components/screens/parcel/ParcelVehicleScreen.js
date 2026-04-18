import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ParcelVehicleScreen({ navigation }) {
  const [selected, setSelected] = useState("bike");
  const [payAt, setPayAt] = useState("pickup");

  const VehicleCard = ({
    id,
    title,
    subtitle,
    price,
  }) => (
    <TouchableOpacity
      style={[
        styles.card,
        selected === id && styles.selectedCard,
      ]}
      onPress={() => setSelected(id)}
    >
      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.sub}>{subtitle}</Text>
          <Text style={styles.meta}>4 mins away Drop 1:20 pm</Text>
        </View>

        <Text style={styles.price}>₹{price}</Text>
      </View>
    </TouchableOpacity>
  );

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
        {/* VEHICLES */}
        <VehicleCard
          id="bike"
          title="Parcel - Bike or Scooter"
          subtitle="Send upto 20 kgs"
          price="181"
        />

        <VehicleCard
          id="auto"
          title="Parcel - 3 wheeler"
          subtitle="Send upto 50 kgs"
          price="309"
        />

        {/* PAYMENT ROW */}
        <View style={styles.payRow}>
          <TouchableOpacity style={styles.pill}>
            <Text>💵 Cash</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.pill}>
            <Text>% Offers</Text>
          </TouchableOpacity>
        </View>

        {/* PAY AT */}
        <View style={styles.payAtRow}>
          <Text style={styles.payLabel}>PAY AT</Text>

          <View style={styles.toggleRow}>
            <TouchableOpacity
              style={[
                styles.toggle,
                payAt === "pickup" && styles.toggleActive,
              ]}
              onPress={() => setPayAt("pickup")}
            >
              <Text
                style={
                  payAt === "pickup"
                    ? styles.toggleTextActive
                    : styles.toggleText
                }
              >
                Pickup
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.toggle,
                payAt === "drop" && styles.toggleActive,
              ]}
              onPress={() => setPayAt("drop")}
            >
              <Text
                style={
                  payAt === "drop"
                    ? styles.toggleTextActive
                    : styles.toggleText
                }
              >
                Drop
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CTA */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book Bike</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  map: {
    height: 260,
    backgroundColor: "#ddd",
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
    backgroundColor: "#f3f4f6",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15,
    marginTop: -20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },

  selectedCard: {
    borderColor: "#000",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: { fontSize: 14, fontWeight: "600" },
  sub: { fontSize: 12, color: "#555", marginTop: 2 },
  meta: { fontSize: 11, color: "#777", marginTop: 2 },

  price: { fontSize: 14, fontWeight: "600" },

  payRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },

  pill: {
    borderWidth: 1,
    borderColor: "#0f766e",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 25,
  },

  divider: {
    height: 30,
    width: 1,
    backgroundColor: "#ccc",
  },

  payAtRow: {
    marginBottom: 15,
  },

  payLabel: {
    fontSize: 12,
    color: "#555",
    marginBottom: 6,
  },

  toggleRow: {
    flexDirection: "row",
    gap: 10,
  },

  toggle: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },

  toggleActive: {
    backgroundColor: "#0f766e",
    borderColor: "#0f766e",
  },

  toggleText: { fontSize: 12 },
  toggleTextActive: { fontSize: 12, color: "#fff" },

  button: {
    backgroundColor: "#0f766e",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
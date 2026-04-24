import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const VEHICLES = [
  { id: "1", name: "2 Wheeler", sub: "20Kg 12 mins", price: "₹67" },
  { id: "2", name: "Scooter", sub: "20Kg 14 mins", price: "₹77" },
  { id: "3", name: "Mini 3W", sub: "50Kg 17 mins", price: "₹121" },
  { id: "4", name: "Pickup 9ft", sub: "1700Kg 13 mins", price: "₹682" },
  { id: "5", name: "3 Wheeler", sub: "500Kg 16 mins", price: "₹287" },
  { id: "6", name: "Tata Ace (Any)", sub: "750Kg 18 mins", price: "₹337" },
  { id: "7", name: "Pickup 8ft", sub: "1200Kg 18 mins", price: "₹432" },
  { id: "8", name: "Tata 407", sub: "2500Kg", price: "₹1212" },
  { id: "9", name: "14Ft", sub: "3500Kg 28 mins", price: "₹2276" },
  { id: "10", name: "17Ft", sub: "4500Kg 16 mins", price: "₹2076" },
];

export default function SelectVehicleScreen({ navigation }) {
  const [selected, setSelected] = useState("1");

  const renderItem = ({ item }) => {
    const isSelected = selected === item.id;

    return (
      <TouchableOpacity
        style={[styles.card, isSelected && styles.selectedCard]}
        onPress={() => setSelected(item.id)}
      >
        {/* ICON */}
        <View style={styles.iconBox}>
          <Icon name="truck" size={22} />
        </View>

        {/* TEXT */}
        <View style={{ flex: 1 }}>
          <Text style={styles.vehicleName}>{item.name}</Text>
          <Text style={styles.vehicleSub}>{item.sub}</Text>
        </View>

        {/* PRICE */}
        <Text style={styles.price}>{item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Select Vehicle</Text>
      </View>

      {/* ROUTE CARD */}
      <View style={styles.routeCard}>
        <View style={styles.dotColumn}>
          <View style={styles.greenDot} />
          <View style={styles.dashed} />
          <View style={styles.redDot} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>John, 9988008899</Text>
          <Text style={styles.address}>
            Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu...
          </Text>

          <View style={styles.divider} />

          <Text style={styles.name}>Rejna, 8899009988</Text>
          <Text style={styles.address}>
            Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu...
          </Text>
        </View>
      </View>

      {/* ACTION ROW */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.pill}>
          <Icon name="map-pin" size={14} />
          <Text style={styles.pillText}>Select on map</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pill}>
          <Icon name="plus" size={14} />
          <Text style={styles.pillText}>Add Stop</Text>
        </TouchableOpacity>
      </View>

      {/* TITLE */}
      <Text style={styles.sectionTitle}>Choose your vehicle</Text>

      {/* LIST */}
      <FlatList
        data={VEHICLES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      {/* CTA */}
      <TouchableOpacity style={styles.button}
      onPress={()=> navigation.navigate("SelectGoodsType")}>
        <Text style={styles.buttonText}>
          Confirm and Proceed
        </Text>
      </TouchableOpacity>
    </View>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7f9" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },

  backBtn: {
    backgroundColor: "#e5e7eb",
    padding: 8,
    borderRadius: 20,
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 30,
  },

  routeCard: {
    flexDirection: "row",
    backgroundColor: "#eef1f3",
    margin: 16,
    borderRadius: 16,
    padding: 14,
  },

  dotColumn: {
    alignItems: "center",
    marginRight: 10,
  },

  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "green",
  },

  redDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#8b0000",
  },

  dashed: {
    height: 30,
    borderLeftWidth: 1,
    borderStyle: "dashed",
    borderColor: "#999",
    marginVertical: 4,
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
  },

  address: {
    fontSize: 11,
    color: "#777",
  },

  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 8,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 10,
  },

  pill: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  pillText: {
    marginLeft: 6,
    fontSize: 12,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 16,
    marginBottom: 10,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    marginHorizontal: 16,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 14,
    elevation: 2,
  },

  selectedCard: {
    borderWidth: 1.5,
    borderColor: "#0f766e",
  },

  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  vehicleName: {
    fontSize: 14,
    fontWeight: "600",
  },

  vehicleSub: {
    fontSize: 11,
    color: "#777",
  },

  price: {
    fontSize: 14,
    fontWeight: "600",
  },

  button: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: "#0f766e",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
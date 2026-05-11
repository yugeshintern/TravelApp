import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";

const VEHICLES = [
  {
    id: "1",
    name: "2 Wheeler",
    sub: "20Kg 12 mins",
    price: "₹67",
    image: require("../../../assets/bike-icon.png"),
  },
  {
    id: "2",
    name: "Scooter",
    sub: "20Kg 14 mins",
    price: "₹77",
    image: require("../../../assets/scooty.png"),
  },
  {
    id: "3",
    name: "Mini 3W",
    sub: "50Kg 17 mins",
    price: "₹121",
    image: require("../../../assets/mini3w.png"),
  },
  {
    id: "4",
    name: "Pickup 9ft",
    sub: "1700Kg 13 mins",
    price: "₹682",
    image: require("../../../assets/pickup.png"),
  },
  {
    id: "5",
    name: "3 Wheeler",
    sub: "500Kg 16 mins",
    price: "₹287",
    image: require("../../../assets/3w.png"),
  },
  {
    id: "6",
    name: "Tata Ace (Any)",
    sub: "750Kg 18 mins",
    price: "₹337",
    image: require("../../../assets/tataace.png"),
  },
  {
    id: "7",
    name: "Pickup 8ft",
    sub: "1200Kg 18 mins",
    price: "₹432",
    image: require("../../../assets/pickup.png"),
  },
  {
    id: "8",
    name: "Tata 407",
    sub: "2500Kg",
    price: "₹1212",
    image: require("../../../assets/tata407.png"),
  },
  {
    id: "9",
    name: "14Ft",
    sub: "3500Kg 28 mins",
    price: "₹2276",
    image: require("../../../assets/truck.png"),
  },
  {
    id: "10",
    name: "17Ft",
    sub: "4500Kg 16 mins",
    price: "₹2076",
    image: require("../../../assets/truck2.png"),
  },
];

export default function SelectVehicleScreen({ navigation }) {
  const [selected, setSelected] = useState("1");

  const renderItem = ({ item }) => {
    const isSelected = selected === item.id;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.card,
          isSelected && styles.selectedCard,
        ]}
        onPress={() => setSelected(item.id)}
      >
        {/* VEHICLE IMAGE */}
        <View style={styles.iconBox}>
          <Image
            source={item.image}
            style={styles.vehicleImage}
            resizeMode="contain"
          />
        </View>

        {/* TEXT */}
        <View style={{ flex: 1 }}>
          <Text style={styles.vehicleName}>
            {item.name}
          </Text>

          <Text style={styles.vehicleSub}>
            {item.sub}
          </Text>
        </View>

        {/* PRICE */}
        <Text style={styles.price}>{item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../../assets/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Select Vehicle
        </Text>

        <View style={{ width: 45 }} />
      </View>

      {/* ROUTE CARD */}
      <View style={styles.routeCard}>
        <View style={styles.dotColumn}>
          <View style={styles.greenDot} />

          <View style={styles.dashed} />

          <View style={styles.redDot} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>
            John, 9988008899
          </Text>

          <Text style={styles.address}>
            Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu...
          </Text>

          <View style={styles.divider} />

          <Text style={styles.name}>
            Rejna, 8899009988
          </Text>

          <Text style={styles.address}>
            Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu...
          </Text>
        </View>
      </View>

      {/* ACTION ROW */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.pill}>
          <Image
            source={require("../../../assets/loc-icon.png")}
            style={styles.pillIcon}
          />

          <Text style={styles.pillText}>
            Select on map
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pill}>
          <Image
            source={require("../../../assets/beta.png")}
            style={styles.pillIcon}
          />

          <Text style={styles.pillText}>
            Add Stop
          </Text>
        </TouchableOpacity>
      </View>

      {/* TITLE */}
      <Text style={styles.sectionTitle}>
        Choose your vehicle
      </Text>

      {/* LIST */}
      <FlatList
        data={VEHICLES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 140,
          paddingTop: 5,
        }}
      />

      {/* BUTTON */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("SelectGoodsType")
          }
        >
          <Text style={styles.buttonText}>
            Confirm and Proceed
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 10,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 18,
  },

  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#e9eceb",
    alignItems: "center",
    justifyContent: "center",
  },

  backIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  /* ROUTE CARD */
  routeCard: {
    flexDirection: "row",
    backgroundColor: "#edf1f1",
    marginHorizontal: 18,
    borderRadius: 22,
    padding: 18,
  },

  dotColumn: {
    alignItems: "center",
    marginRight: 14,
  },

  greenDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "green",
    backgroundColor: "#fff",
  },

  redDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "#8b0000",
    backgroundColor: "#fff",
  },

  dashed: {
    flex: 1,
    borderLeftWidth: 2,
    borderStyle: "dashed",
    borderColor: "#666",
    marginVertical: 4,
  },

  name: {
    fontSize: 15,
    fontWeight: "700",
    color: "#222",
  },

  address: {
    fontSize: 12,
    color: "#777",
    marginTop: 6,
    lineHeight: 18,
  },

  divider: {
    height: 1,
    backgroundColor: "#d8d8d8",
    marginVertical: 14,
  },

  /* ACTIONS */
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginTop: 16,
    marginBottom: 22,
  },

  pill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e1e1e1",
    borderRadius: 28,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },

  pillIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  pillText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },

  /* TITLE */
  sectionTitle: {
    marginHorizontal: 18,
    marginBottom: 14,
    fontSize: 17,
    fontWeight: "700",
    color: "#222",
  },

  /* VEHICLE CARD */
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 18,
    marginBottom: 14,
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  selectedCard: {
    borderWidth: 2,
    borderColor: "#0f766e",
  },

  iconBox: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  vehicleImage: {
    width: 42,
    height: 42,
  },

  vehicleName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  vehicleSub: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
  },

  price: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222",
  },

  /* BUTTON */
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 20,
  },

  button: {
    backgroundColor: "#0b7d7d",
    borderRadius: 32,
    paddingVertical: 18,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function VehicleChoosing({navigation}) {
  const [selected, setSelected] = useState(0);

  const vehicles = [
    {
      name: "Bike",
      desc: "Quick Bike rides\n4 mins away Drop 1:20 pm",
      price: "₹287",
      old: "₹307",
    },
    {
      name: "Scooty",
      desc: "Spacious & comfortable\nDriven by Men",
      price: "₹309",
      old: "₹329",
    },
    {
      name: "Auto",
      desc: "Hassle-free Auto rides\n2 mins away Drop 1:30 pm",
      price: "₹381",
    },
    {
      name: "Auto Priority",
      desc: "Faster Pickup\n2 mins away Drop 1:30 pm",
      price: "₹462",
    },
    {
      name: "Cab Economy",
      desc: "2 mins Drop 1:30 pm",
      price: "₹460",
    },
    {
      name: "Cab Premium",
      desc: "2 mins Drop 1:30 pm",
      price: "₹560",
    },
    {
      name: "Cab XL",
      desc: "4 mins Drop 1:15 pm",
      price: "₹847",
    },
  ];

  return (
    <View style={styles.container}>
      {/* MAP */}
      <Image
        source={{ uri: "https://maps.googleapis.com/maps/api/staticmap?center=Chennai&zoom=14&size=600x300" }}
        style={styles.map}
      />

      {/* BACK BUTTON */}
      <TouchableOpacity style={styles.backBtn}>
        <Icon name="arrow-left" size={20} />
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        <Text style={styles.offer}>
          You get ₹20 off & 20 coins cashback!
        </Text>

        <FlatList
          data={vehicles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.vehicleCard,
                selected === index && styles.selectedCard,
              ]}
              onPress={() => setSelected(index)}
            >
              {/* ICON */}
              <View style={styles.iconBox}>
                <Icon name="truck" size={20} />
              </View>

              {/* TEXT */}
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
              </View>

              {/* PRICE */}
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.price}>{item.price}</Text>
                {item.old && (
                  <Text style={styles.old}>{item.old}</Text>
                )}
              </View>
            </TouchableOpacity>
          )}
        />

        {/* PAYMENT ROW */}
        <View style={styles.paymentRow}>
          <View style={styles.chip}>
            <Text>💵 Cash</Text>
          </View>

          <View style={styles.chip}>
            <TouchableOpacity
            onPress={()=> navigation.navigate("Coupons")}>
            <Text>% Ride50</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* BOOK BUTTON */}
        <TouchableOpacity style={styles.bookBtn}
        onPress={()=> navigation.navigate("LookingForRider")}>
          <Text style={styles.bookText}>Book Bike</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  map: {
    width: "100%",
    height: 250,
  },

  backBtn: {
    position: "absolute",
    top: 40,
    left: 15,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 25,
    elevation: 3,
  },

  sheet: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },

  offer: {
    textAlign: "center",
    color: "green",
    marginBottom: 10,
    fontWeight: "600",
  },

  vehicleCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 8,
    borderRadius: 10,
  },

  selectedCard: {
    borderWidth: 1,
    borderColor: "#0f766e",
    backgroundColor: "#f0fdfa",
  },

  iconBox: {
    width: 40,
    height: 40,
    backgroundColor: "#eee",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  name: {
    fontWeight: "600",
    fontSize: 14,
  },

  desc: {
    fontSize: 12,
    color: "#666",
  },

  price: {
    fontWeight: "600",
  },

  old: {
    textDecorationLine: "line-through",
    fontSize: 12,
    color: "#999",
  },

  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  chip: {
    borderWidth: 1,
    borderColor: "#0f766e",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },

  bookBtn: {
    backgroundColor: "#0f766e",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },

  bookText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
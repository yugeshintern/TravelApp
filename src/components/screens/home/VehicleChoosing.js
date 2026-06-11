import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import { createOrder } from "../../utils/api";
import { WebView } from "react-native-webview";
export default function VehicleChoosing({ navigation, route }) {
  const [selected, setSelected] = useState(0);

  const dropLocation = route.params?.dropLocation;

  const currentLocation = {
    address: "Current Location",
    latitude: 13.0827,
    longitude: 80.2707,
  };

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

  const handleBookRide = async () => {
    try {
      const selectedVehicle = vehicles[selected];

      const payload = {
        pickupLocation: currentLocation,
        dropLocation: dropLocation,
        vehicleType: selectedVehicle.name,
        fare: selectedVehicle.price,
        paymentMode: "CASH",
      };

      console.log("BOOKING PAYLOAD:", payload);

      const result = await createOrder(payload);

      console.log("ORDER RESULT:", result);

      if (result?.success) {
        navigation.navigate("LookingForRider", {
          orderId: result?.order?._id,
          dropLocation,
        })
      } else {
        navigation.navigate("LookingForRider");
      }
    } catch (error) {
      console.log("BOOK ERROR:", error);

      navigation.navigate("LookingForRider");
    }
  };

  return (
    <View style={styles.container}>
      {/* LIVE MAP */}
      <WebView
  style={styles.map}
  originWhitelist={['*']}
  source={{
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet/dist/leaflet.css"
        />
        <style>
          body {
            margin: 0;
            padding: 0;
          }

          #map {
            width: 100vw;
            height: 100vh;
          }
        </style>
      </head>

      <body>
        <div id="map"></div>

        <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

        <script>
          var map = L.map('map').setView(
            [
              ${Number(dropLocation?.latitude) || 13.0827},
              ${Number(dropLocation?.longitude) || 80.2707}
            ],
            14
          );

          L.tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
              maxZoom: 19,
            }
          ).addTo(map);

          L.marker([
            ${Number(dropLocation?.latitude) || 13.0827},
            ${Number(dropLocation?.longitude) || 80.2707}
          ])
          .addTo(map)
          .bindPopup("${dropLocation?.address || "Selected Location"}")
          .openPopup();
        </script>
      </body>
      </html>
    `,
  }}
/>

      {/* LOCATION OVERLAY */}
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>
          📍 {dropLocation?.address || "Selected Location"}
        </Text>
      </View>

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

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        <Text style={styles.offer}>
          You get ₹20 off & 20 coins cashback!
        </Text>

        {/* LOCATION */}
        <View style={styles.locationBox}>
          <Text style={styles.locationTitle}>
            Drop Location
          </Text>

          <Text style={styles.locationAddress}>
            {dropLocation?.address || "No location selected"}
          </Text>
        </View>

        {/* VEHICLES */}
        <FlatList
          data={vehicles}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
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
                <Image
                  source={
                    item.name === "Bike"
                      ? require("../../../assets/bike-icon.png")
                      : item.name === "Scooty"
                      ? require("../../../assets/scooty.png")
                      : item.name === "Auto"
                      ? require("../../../assets/auto.png")
                      : item.name === "Auto Priority"
                      ? require("../../../assets/3w.png")
                      : item.name === "Cab Economy"
                      ? require("../../../assets/car.png")
                      : item.name === "Cab Premium"
                      ? require("../../../assets/pickup.png")
                      : require("../../../assets/tataace.png")
                  }
                  style={styles.vehicleIcon}
                />
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

        {/* PAYMENT */}
        <View style={styles.paymentRow}>
          <View style={styles.chip}>
            <Text>💵 Cash</Text>
          </View>

          <TouchableOpacity
            style={styles.chip}
            onPress={() => navigation.navigate("Coupons")}
          >
            <Text>% Ride50</Text>
          </TouchableOpacity>
        </View>

        {/* BOOK */}
        <TouchableOpacity
          style={styles.bookBtn}
          onPress={handleBookRide}
        >
          <Text style={styles.bookText}>
            Book {vehicles[selected].name}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: "100%",
    height: 250,
  },

  overlay: {
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 10,
    borderRadius: 12,
  },

  overlayText: {
    color: "#fff",
    fontWeight: "600",
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

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  vehicleIcon: {
    width: 26,
    height: 26,
    resizeMode: "contain",
  },

  offer: {
    textAlign: "center",
    color: "green",
    marginBottom: 10,
    fontWeight: "600",
  },

  locationBox: {
    backgroundColor: "#f3f4f6",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },

  locationTitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },

  locationAddress: {
    fontWeight: "600",
    color: "#111",
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
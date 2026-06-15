import React, {
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  Platform,
} from "react-native";

import Geolocation from "@react-native-community/geolocation";
import { WebView } from "react-native-webview";

import { getSocket } from "../../../utils/socket";

export default function LookingForRider({ navigation, route }) {

  // ✅ Use pickup + drop passed from SelectVehicle/upstream
  const { pickup, drop, orderId } = route.params ?? {};

  // SOCKET
  const socket = typeof getSocket === "function" ? getSocket() : null;

  // CURRENT LOCATION
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 13.0827,
    longitude: 80.2707,
    address: "Fetching current location...",
  });

  const requestLocationPermission = useCallback(async () => {
    try {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        }
      } else {
        getCurrentLocation();
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    requestLocationPermission();
  }, [requestLocationPermission]);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          address: "Current Location",
        });
      },
      (error) => console.log("Location Error:", error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  // SOCKET + TIMER
  useEffect(() => {
    if (!socket || !orderId) return;

    socket.emit("join_order", orderId);

    const driverAssignedHandler = (driverDetails) => {
      navigation.navigate("RiderPickup", { orderId, driverDetails });
    };

    socket.on("driver_assigned", driverAssignedHandler);

    const timer = setTimeout(() => {
      navigation.navigate("ExtraCash", { orderId });
    }, 30000);

    return () => {
      clearTimeout(timer);
      socket.off("driver_assigned", driverAssignedHandler);
    };
  }, [socket, orderId, navigation]);

  // ✅ Map uses drop.lat / drop.lng from the passed drop object
  const dropLat = Number(drop?.lat) || 13.0827;
  const dropLng = Number(drop?.lng) || 80.2707;

  const mapHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
        <style>
          html, body, #map { width: 100%; height: 100%; margin: 0; padding: 0; }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
        <script>
          var map = L.map('map').setView([${dropLat}, ${dropLng}], 13);

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
          }).addTo(map);

          L.marker([${currentLocation.latitude}, ${currentLocation.longitude}])
            .addTo(map)
            .bindPopup('Current Location');

          L.marker([${dropLat}, ${dropLng}])
            .addTo(map)
            .bindPopup('${drop?.name ?? "Destination"}')
            .openPopup();
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      {/* MAP */}
      <WebView
        style={styles.map}
        originWhitelist={["*"]}
        source={{ html: mapHTML }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />

      {/* BACK BUTTON */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Image source={require("../../../assets/back.png")} style={styles.backIcon} />
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        <View style={styles.drag} />

        {/* TITLE */}
        <View style={styles.titleRow}>
          <Image
            source={require("../../../assets/bike-icon.png")}
            style={styles.bikeIcon}
          />
          <View>
            <Text style={styles.titleSmall}>Looking for your</Text>
            <Text style={styles.titleBold}>Bike ride</Text>
          </View>
        </View>

        {/* LOCATION */}
        <Text style={styles.section}>Location Details</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("ExtraCash", { orderId, currentLocation, drop })
          }
        >
          <View style={styles.locationBox}>
            <View style={styles.dotColumn}>
              <View style={styles.greenDot} />
              <View style={styles.line} />
              <View style={styles.redDot} />
            </View>

            <View style={{ flex: 1 }}>
              {/* FROM */}
              <Text style={styles.locTitle}>Current Location</Text>
              <Text style={styles.locSub}>{currentLocation?.address}</Text>

              {/* TO — ✅ drop.name + drop.fullAddress */}
              <Text style={styles.locTitle}>Drop Location</Text>
              <Text style={styles.locSub}>
                {drop?.name ?? "No destination selected"}
              </Text>
              <Text style={styles.locAddress} numberOfLines={1}>
                {drop?.fullAddress ?? ""}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* FARE */}
        <View style={styles.fareBox}>
          <View style={styles.fareRow}>
            <Text style={styles.fareTitle}>Total Fare</Text>
            <Text style={styles.farePrice}>₹287.0</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Payments")}>
            <Text style={styles.payment}>💵 Paying via cash</Text>
          </TouchableOpacity>
        </View>

        {/* BACK BUTTON */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* CANCEL BUTTON */}
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.navigate("CancelReason")}
        >
          <Text style={styles.cancelText}>Cancel Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  map: { width: "100%", height: 260 },

  backBtn: {
    position: "absolute",
    top: 70, left: 16,
    backgroundColor: "#fff",
    padding: 10, borderRadius: 25,
    elevation: 5, zIndex: 100,
  },

  backIcon: { width: 18, height: 18, resizeMode: "contain" },

  bikeIcon: { width: 28, height: 28, resizeMode: "contain", marginRight: 12 },

  sheet: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    marginTop: -10,
  },

  drag: {
    width: 40, height: 4,
    backgroundColor: "#ccc",
    alignSelf: "center",
    borderRadius: 2,
    marginBottom: 15,
  },

  titleRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },

  titleSmall: { color: "#555", fontSize: 14 },

  titleBold: { fontWeight: "700", fontSize: 18, color: "#111" },

  section: { marginTop: 10, fontWeight: "600", fontSize: 15, color: "#111" },

  locationBox: {
    flexDirection: "row",
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 14,
    marginTop: 10,
  },

  dotColumn: { alignItems: "center", marginRight: 12 },

  greenDot: { width: 10, height: 10, backgroundColor: "green", borderRadius: 5 },

  redDot: { width: 10, height: 10, backgroundColor: "red", borderRadius: 5 },

  line: { height: 45, width: 1, backgroundColor: "#999", marginVertical: 4 },

  locTitle: { fontWeight: "600", marginTop: 5, color: "#111" },

  locSub: { fontSize: 13, color: "#333", marginTop: 2 },

  locAddress: { fontSize: 11, color: "#888", marginTop: 1, marginBottom: 8 },

  fareBox: {
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 14,
    marginTop: 15,
  },

  fareRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },

  fareTitle: { fontWeight: "600", fontSize: 15 },

  farePrice: { fontWeight: "700", fontSize: 16 },

  payment: { marginTop: 8, color: "#555", fontSize: 13 },

  backButton: {
    backgroundColor: "#0f766e",
    paddingVertical: 14, borderRadius: 30,
    alignItems: "center", marginTop: 22,
  },

  backText: { color: "#fff", fontWeight: "700", fontSize: 15 },

  cancelButton: {
    borderWidth: 1.5, borderColor: "red",
    paddingVertical: 14, borderRadius: 30,
    alignItems: "center", marginTop: 12,
    backgroundColor: "#fff",
  },

  cancelText: { color: "red", fontWeight: "700", fontSize: 15 },
});
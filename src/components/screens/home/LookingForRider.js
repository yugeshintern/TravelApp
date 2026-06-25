import React, { useEffect, useState, useCallback } from "react";
import {
  View, Text, StyleSheet, TouchableOpacity,
  Image, PermissionsAndroid, Platform,
} from "react-native";
import Geolocation from "@react-native-community/geolocation";
import { WebView } from "react-native-webview";
import { getSocket } from "../../../utils/socket";

export default function LookingForRider({ navigation, route }) {
  const { orderId, dropLocation } = route.params ?? {};
  const socket = getSocket();

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
        if (granted === PermissionsAndroid.RESULTS.GRANTED) getCurrentLocation();
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

  useEffect(() => {
    if (!socket || !orderId) return;

    socket.emit("join_order", orderId);

    const acceptedHandler = (data) => {
      console.log("Order accepted:", data);
      navigation.navigate("RiderPickup", {
        orderId,
        captainId: data.captainId,
        dropLocation,
      });
    };

    const statusHandler = (data) => {
      console.log("Status update:", data);
      if (data.status === "accepted") {
        navigation.navigate("RiderPickup", { orderId, dropLocation });
      }
    };

    socket.on("user:order_accepted", acceptedHandler);
    socket.on("user:order_status", statusHandler);

    const timer = setTimeout(() => {
      navigation.navigate("ExtraCash", { orderId });
    }, 30000);

    return () => {
      clearTimeout(timer);
      socket.off("user:order_accepted", acceptedHandler);
      socket.off("user:order_status", statusHandler);
    };
  }, [socket, orderId]);

  const dropLat = Number(dropLocation?.latitude) || 13.0827;
  const dropLng = Number(dropLocation?.longitude) || 80.2707;

  return (
    <View style={styles.container}>
      <WebView
        style={styles.map}
        originWhitelist={["*"]}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{
          html: `
            <!DOCTYPE html><html><head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
            <style>html,body,#map{width:100%;height:100%;margin:0;padding:0;}</style>
            </head><body><div id="map"></div>
            <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
            <script>
              var map=L.map('map').setView([${dropLat},${dropLng}],13);
              L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19}).addTo(map);
              L.marker([${currentLocation.latitude},${currentLocation.longitude}]).addTo(map).bindPopup('Current Location');
              L.marker([${dropLat},${dropLng}]).addTo(map).bindPopup('${dropLocation?.address ?? "Destination"}').openPopup();
            </script></body></html>
          `,
        }}
      />

      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Image source={require("../../../assets/back.png")} style={styles.backIcon} />
      </TouchableOpacity>

      <View style={styles.sheet}>
        <View style={styles.drag} />

        <View style={styles.titleRow}>
          <Image source={require("../../../assets/bike-icon.png")} style={styles.bikeIcon} />
          <View>
            <Text style={styles.titleSmall}>Looking for your</Text>
            <Text style={styles.titleBold}>Ride</Text>
          </View>
        </View>

        <Text style={styles.section}>Location Details</Text>

        <View style={styles.locationBox}>
          <View style={styles.dotColumn}>
            <View style={styles.greenDot} />
            <View style={styles.line} />
            <View style={styles.redDot} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.locTitle}>Current Location</Text>
            <Text style={styles.locSub}>{currentLocation?.address}</Text>
            <Text style={styles.locTitle}>Drop Location</Text>
            <Text style={styles.locSub}>{dropLocation?.address ?? "No destination selected"}</Text>
          </View>
        </View>

        <View style={styles.fareBox}>
          <View style={styles.fareRow}>
            <Text style={styles.fareTitle}>Total Fare</Text>
            <Text style={styles.farePrice}>₹287.0</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Payments")}>
            <Text style={styles.payment}>💵 Paying via cash</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate("CancelReason")}>
          <Text style={styles.cancelText}>Cancel Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  map: { width: "100%", height: 260 },
  backBtn: { position: "absolute", top: 70, left: 16, backgroundColor: "#fff", padding: 10, borderRadius: 25, elevation: 5, zIndex: 100 },
  backIcon: { width: 18, height: 18, resizeMode: "contain" },
  bikeIcon: { width: 28, height: 28, resizeMode: "contain", marginRight: 12 },
  sheet: { flex: 1, backgroundColor: "#f3f4f6", borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 16, marginTop: -10 },
  drag: { width: 40, height: 4, backgroundColor: "#ccc", alignSelf: "center", borderRadius: 2, marginBottom: 15 },
  titleRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  titleSmall: { color: "#555", fontSize: 14 },
  titleBold: { fontWeight: "700", fontSize: 18, color: "#111" },
  section: { marginTop: 10, fontWeight: "600", fontSize: 15, color: "#111" },
  locationBox: { flexDirection: "row", backgroundColor: "#e5e7eb", borderRadius: 15, padding: 14, marginTop: 10 },
  dotColumn: { alignItems: "center", marginRight: 12 },
  greenDot: { width: 10, height: 10, backgroundColor: "green", borderRadius: 5 },
  redDot: { width: 10, height: 10, backgroundColor: "red", borderRadius: 5 },
  line: { height: 45, width: 1, backgroundColor: "#999", marginVertical: 4 },
  locTitle: { fontWeight: "600", marginTop: 5, color: "#111" },
  locSub: { fontSize: 13, color: "#333", marginTop: 2 },
  fareBox: { backgroundColor: "#e5e7eb", borderRadius: 15, padding: 14, marginTop: 15 },
  fareRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  fareTitle: { fontWeight: "600", fontSize: 15 },
  farePrice: { fontWeight: "700", fontSize: 16 },
  payment: { marginTop: 8, color: "#555", fontSize: 13 },
  backButton: { backgroundColor: "#0f766e", paddingVertical: 14, borderRadius: 30, alignItems: "center", marginTop: 22 },
  backText: { color: "#fff", fontWeight: "700", fontSize: 15 },
  cancelButton: { borderWidth: 1.5, borderColor: "red", paddingVertical: 14, borderRadius: 30, alignItems: "center", marginTop: 12, backgroundColor: "#fff" },
  cancelText: { color: "red", fontWeight: "700", fontSize: 15 },
});
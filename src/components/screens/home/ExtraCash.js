import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { WebView } from "react-native-webview";

export default function ExtraCash({
  navigation,
  route,
}) {
  const [selected, setSelected] = useState(null);

  const options = [20, 30, 40, 50];

  // FETCH DATA FROM PREVIOUS SCREEN
  const currentLocation =
    route?.params?.currentLocation || {
      latitude: 13.0827,
      longitude: 80.2707,
      address: "Current Location",
    };

  const dropLocation =
    route?.params?.dropLocation || {
      latitude: 13.0827,
      longitude: 80.2707,
      address: "Destination",
    };

  // BASE FARE
  const baseFare = 287;

  // TOTAL FARE
  const totalFare = selected
    ? baseFare + selected
    : baseFare;

  // REAL MAP HTML
  const mapHTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet/dist/leaflet.css"
      />

      <style>
        html,
        body,
        #map {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
      </style>
    </head>

    <body>
      <div id="map"></div>

      <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

      <script>
        var map = L.map('map').setView(
          [
            ${
              Number(dropLocation?.latitude) ||
              13.0827
            },
            ${
              Number(dropLocation?.longitude) ||
              80.2707
            }
          ],
          13
        );

        L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 19,
          }
        ).addTo(map);

        // FROM LOCATION
        var fromMarker = L.marker([
          ${
            Number(currentLocation?.latitude) ||
            13.0827
          },
          ${
            Number(currentLocation?.longitude) ||
            80.2707
          }
        ])
        .addTo(map)
        .bindPopup('Current Location');

        // TO LOCATION
        var toMarker = L.marker([
          ${
            Number(dropLocation?.latitude) ||
            13.0827
          },
          ${
            Number(dropLocation?.longitude) ||
            80.2707
          }
        ])
        .addTo(map)
        .bindPopup('Destination')
        .openPopup();

        // LINE BETWEEN BOTH
        var latlngs = [
          [
            ${
              Number(currentLocation?.latitude) ||
              13.0827
            },
            ${
              Number(currentLocation?.longitude) ||
              80.2707
            }
          ],
          [
            ${
              Number(dropLocation?.latitude) ||
              13.0827
            },
            ${
              Number(dropLocation?.longitude) ||
              80.2707
            }
          ]
        ];

        var polyline = L.polyline(
          latlngs,
          {
            color: 'blue',
            weight: 4
          }
        ).addTo(map);

        map.fitBounds(polyline.getBounds());
      </script>
    </body>
  </html>
  `;

  return (
    <View style={styles.container}>
      {/* REAL MAP */}
      <WebView
        style={styles.map}
        originWhitelist={["*"]}
        source={{ html: mapHTML }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />

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
        {/* DRAG HANDLE */}
        <View style={styles.drag} />

        {/* TITLE */}
        <View style={styles.titleRow}>
          <Image
            source={require("../../../assets/bike.png")}
            style={styles.bikeIcon}
          />

          <View>
            <Text style={styles.titleSmall}>
              Looking for your
            </Text>

            <Text style={styles.titleBold}>
              Bike ride
            </Text>
          </View>
        </View>

        {/* RIDE BOX */}
        <View style={styles.rideBox}>
          <View>
            <Text style={styles.rideTitle}>
              Bike ride
            </Text>

            <Text style={styles.price}>
              ₹{totalFare}.0
            </Text>
          </View>

          <TouchableOpacity
            style={styles.tripBtn}
          >
            <Text style={styles.tripText}>
              Trip Details
            </Text>
          </TouchableOpacity>
        </View>

        {/* BOOST BOX */}
        <View style={styles.boostBox}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                "RiderPickup"
              )
            }
          >
            <Text style={styles.boostText}>
              Captains aren’t accepting at ₹
              {totalFare}.
              {"\n"}
              Try adding more
            </Text>
          </TouchableOpacity>

          <View style={styles.optionsRow}>
            {options.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionBtn,
                  selected === item &&
                    styles.selectedOption,
                ]}
                onPress={() =>
                  setSelected(item)
                }
              >
                <Text
                  style={[
                    styles.optionText,
                    selected === item && {
                      color: "#fff",
                    },
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
          Almost there! Add a little more so
          a captain can pick you faster...
        </Text>
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
    height: 260,
  },

  backBtn: {
    position: "absolute",
    top: 70,
    left: 16,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    elevation: 3,
    zIndex: 100,
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
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

  bikeIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 12,
    marginTop: 2,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  titleSmall: {
    color: "#444",
  },

  titleBold: {
    fontWeight: "700",
    fontSize: 18,
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
    fontSize: 16,
  },

  price: {
    marginTop: 3,
    color: "#555",
    fontSize: 16,
    fontWeight: "600",
  },

  tripBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  tripText: {
    fontSize: 13,
    fontWeight: "500",
  },

  boostBox: {
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 15,
  },

  boostText: {
    marginBottom: 14,
    fontWeight: "500",
    fontSize: 15,
    color: "#222",
  },

  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  optionBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },

  selectedOption: {
    backgroundColor: "#0f766e",
    borderColor: "#0f766e",
  },

  optionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },

  footer: {
    marginTop: 20,
    color: "#555",
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "500",
  },
});
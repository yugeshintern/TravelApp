import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function RiderPickup({ navigation }) {
  return (
    <View style={styles.container}>
      {/* MAP */}
      <Image
        source={{
          uri: "https://maps.googleapis.com/maps/api/staticmap?center=Chennai&zoom=14&size=600x300",
        }}
        style={styles.map}
      />

      {/* HEADER */}
      <Text style={styles.header}>Rider_pickup</Text>

      {/* BACK BUTTON */}
      <TouchableOpacity style={styles.backBtn}>
        <Icon name="arrow-left" size={18} />
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        {/* DRAG HANDLE */}
        <View style={styles.drag} />

        {/* TITLE */}
        <Text style={styles.title}>
          Driver on the way to pickup
        </Text>

        {/* ETA BOX */}
        <View style={styles.etaBox}>
          <View>
            <Text style={styles.etaTitle}>
              Pickup in <Text style={{ color: "green" }}>1 min</Text>
            </Text>
            <Text style={styles.etaSub}>
              Captain 500 m away
            </Text>
          </View>

          <View style={styles.iconCircle}>
            <Icon name="truck" size={16} />
          </View>
        </View>

        {/* PIN */}
        <Text style={styles.section}>Start your order with PIN</Text>

        <View style={styles.pinRow}>
          {[0, 0, 0, 7].map((n, i) => (
            <View key={i} style={styles.pinBox}>
              <Text>{n}</Text>
            </View>
          ))}
        </View>

        {/* DRIVER CARD */}
        <View style={styles.driverCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.vehicle}>TN 14 AT 5566</Text>
            <Text style={styles.vehicleSub}>HONDA CB350</Text>
            <Text style={styles.name}>John Franx</Text>

            <TouchableOpacity style={styles.messageBtn}>
              <Text>📩 Message John</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.avatarBox}>
            <View style={styles.avatar} />
            <Text style={styles.rating}>4.8⭐</Text>
          </View>
        </View>

        {/* PICKUP LOCATION */}
        <Text style={styles.section}>Pickup From</Text>

        <Text style={styles.pickupTitle}>
          Koyambedu Bus Stand
        </Text>
        <Text style={styles.pickupSub}>
          Koyambedu bus terminus, Chennai...
        </Text>

        {/* CANCEL */}
        <Text style={styles.cancel}>Cancel Ride</Text>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.issue}>❓ Issue with Pickup?</Text>
          <Text style={styles.feedback}>Share feedback →</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  map: {
    width: "100%",
    height: 260,
  },

  header: {
    position: "absolute",
    top: 10,
    left: 16,
    fontSize: 18,
    color: "#2563eb",
  },

  backBtn: {
    position: "absolute",
    top: 70,
    left: 16,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    elevation: 3,
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

  title: {
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 10,
  },

  etaBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#e5e7eb",
    padding: 12,
    borderRadius: 15,
    marginBottom: 15,
  },

  etaTitle: {
    fontWeight: "600",
  },

  etaSub: {
    fontSize: 12,
    color: "#666",
  },

  iconCircle: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  section: {
    fontWeight: "600",
    marginBottom: 8,
  },

  pinRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  pinBox: {
    width: 40,
    height: 40,
    backgroundColor: "#e5e7eb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },

  driverCard: {
    flexDirection: "row",
    backgroundColor: "#e5e7eb",
    padding: 12,
    borderRadius: 15,
    marginBottom: 15,
  },

  vehicle: {
    fontWeight: "600",
  },

  vehicleSub: {
    fontSize: 12,
    color: "#666",
  },

  name: {
    marginTop: 5,
    fontWeight: "500",
  },

  messageBtn: {
    marginTop: 8,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 10,
  },

  avatarBox: {
    alignItems: "center",
  },

  avatar: {
    width: 50,
    height: 50,
    backgroundColor: "#000",
    borderRadius: 25,
  },

  rating: {
    fontSize: 12,
    marginTop: 4,
  },

  pickupTitle: {
    fontWeight: "600",
  },

  pickupSub: {
    fontSize: 12,
    color: "#666",
  },

  cancel: {
    textAlign: "center",
    color: "red",
    marginVertical: 10,
    fontWeight: "600",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ccc",
    paddingTop: 10,
  },

  issue: {
    fontSize: 12,
  },

  feedback: {
    fontSize: 12,
    color: "#2563eb",
  },
});
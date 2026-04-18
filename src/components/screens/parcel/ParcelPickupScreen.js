import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ParcelPickupScreen({ navigation }) {
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
        <View style={styles.dragBar} />

        {/* TITLE */}
        <Text style={styles.title}>Captain on the way</Text>

        {/* PICKUP TIME */}
        <View style={styles.pickupCard}>
          <View>
            <Text style={styles.pickupText}>
              Pickup in <Text style={styles.green}>1 min</Text>
            </Text>
            <Text style={styles.sub}>Captain 500 m away</Text>
          </View>

          <View style={styles.bikeIcon}>
            <Icon name="truck" size={18} />
          </View>
        </View>

        {/* PIN */}
        <Text style={styles.pinLabel}>Start your order with PIN</Text>
        <View style={styles.pinRow}>
          {["0", "0", "0", "7"].map((n, i) => (
            <View key={i} style={styles.pinBox}>
              <Text style={styles.pinText}>{n}</Text>
            </View>
          ))}
        </View>

        {/* DRIVER CARD */}
        <View style={styles.driverCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.bold}>TN 14 AT 5566</Text>
            <Text style={styles.sub}>HONDA CB350</Text>
            <Text style={styles.bold}>John Franx</Text>

            <TouchableOpacity style={styles.messageBtn}>
              <Icon name="message-circle" size={14} />
              <Text style={styles.messageText}> Message John</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileBox}>
            <Image
              source={{
                uri: "https://i.pravatar.cc/100",
              }}
              style={styles.avatar}
            />
            <View style={styles.rating}>
              <Text style={styles.ratingText}>4.8 ⭐</Text>
            </View>
          </View>
        </View>

        {/* PICKUP LOCATION */}
        <Text style={styles.sectionTitle}>Pickup From</Text>

        <Text style={styles.locationTitle}>Koyambedu Bus Stand</Text>
        <Text style={styles.locationSub}>
          Koyambedu bus terminus, Koyambedu, Chennai, Tamil...
        </Text>

        {/* FOOTER */}
        <View style={styles.footer}>
          <View style={styles.helpRow}>
            <View style={styles.helpIcon}>
              <Text style={{ color: "#fff" }}>?</Text>
            </View>
            <Text style={styles.helpText}>Issue with Pickup?</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.link}>Share feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

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

  dragBar: {
    width: 40,
    height: 4,
    backgroundColor: "#ccc",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 10,
  },

  title: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },

  pickupCard: {
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  pickupText: {
    fontSize: 13,
    fontWeight: "600",
  },

  green: { color: "green" },

  sub: {
    fontSize: 12,
    color: "#555",
    marginTop: 2,
  },

  bikeIcon: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
  },

  pinLabel: {
    marginTop: 15,
    fontSize: 12,
    color: "#444",
  },

  pinRow: {
    flexDirection: "row",
    marginTop: 8,
    gap: 6,
  },

  pinBox: {
    backgroundColor: "#e5e7eb",
    padding: 8,
    borderRadius: 6,
    minWidth: 30,
    alignItems: "center",
  },

  pinText: {
    fontWeight: "600",
  },

  driverCard: {
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 12,
    marginTop: 15,
    flexDirection: "row",
  },

  bold: {
    fontWeight: "600",
    fontSize: 13,
  },

  messageBtn: {
    marginTop: 8,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  messageText: {
    fontSize: 12,
  },

  profileBox: {
    alignItems: "center",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  rating: {
    backgroundColor: "#fff",
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: -10,
  },

  ratingText: {
    fontSize: 10,
  },

  sectionTitle: {
    marginTop: 15,
    fontSize: 12,
    color: "#555",
  },

  locationTitle: {
    fontWeight: "600",
    marginTop: 6,
  },

  locationSub: {
    fontSize: 12,
    color: "#777",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },

  helpRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  helpIcon: {
    backgroundColor: "#2563eb",
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },

  helpText: {
    fontSize: 12,
  },

  link: {
    color: "#2563eb",
    fontSize: 12,
  },
});
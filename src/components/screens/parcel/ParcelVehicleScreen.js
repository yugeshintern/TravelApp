import React, { useState } from "react";
import {
  View,
 Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

export default function ParcelVehicleScreen({ navigation }) {
  const [selected, setSelected] = useState("bike");
  const [payAt, setPayAt] = useState("pickup");

  const VehicleCard = ({
  id,
  title,
  subtitle,
  price,
  image,
}) => (
  <TouchableOpacity
    style={[
      styles.card,
      selected === id && styles.selectedCard,
    ]}
    onPress={() => setSelected(id)}
  >
    <View style={styles.rowBetween}>
      <View style={styles.vehicleLeft}>
        <View style={styles.vehicleCircle}>
          <Image
            source={image}
            style={styles.vehicleImage}
          />
        </View>

        <View style={{ marginLeft: 12 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.sub}>{subtitle}</Text>
          <Text style={styles.meta}>
            4 mins away Drop 1:20 pm
          </Text>
        </View>
      </View>

      <Text style={styles.price}>₹{price}</Text>
    </View>
  </TouchableOpacity>
);

  return (
    <View style={styles.container}>
      {/* MAP */}
      {/* MAP */}
<ImageBackground
  source={require("../../../assets/review_bg.png")}
  style={styles.map}
  resizeMode="cover"
>
  <TouchableOpacity
    style={styles.backBtn}
    onPress={() => navigation.goBack()}
  >
    <Image
      source={require("../../../assets/back.png")}
      style={styles.backIcon}
    />
  </TouchableOpacity>
</ImageBackground>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        {/* VEHICLES */}
        <VehicleCard
  id="bike"
  title="Parcel - Bike or Scooter"
  subtitle="Send upto 20 kgs"
  price="181"
  image={require("../../../assets/parcel-bike.png")}
/>

        <VehicleCard
  id="auto"
  title="Parcel - 3 wheeler"
  subtitle="Send upto 50 kgs"
  price="309"
  image={require("../../../assets/parcel-bike.png")}
/>

        {/* PAYMENT ROW */}
        <View style={styles.payRow}>
          <TouchableOpacity style={styles.pill}>
  <View style={styles.pillRow}>
    <Image
      source={require("../../../assets/payment.png")}
      style={styles.pillIcon}
    />
    <Text style={styles.pillText}>Cash</Text>

    <Image
      source={require("../../../assets/right.png")}
      style={styles.rightIcon}
    />
  </View>
</TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.pill}>
  <View style={styles.pillRow}>
    <Text style={styles.offerText}>% Offers</Text>

    <Image
      source={require("../../../assets/right.png")}
      style={styles.rightIcon}
    />
  </View>
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
        <TouchableOpacity
  style={styles.button}
  onPress={() =>
    navigation.navigate("ParcelLookingRider")
  }
>
          <Text style={styles.buttonText}>Book Bike</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  map: {
  height: 320,
  paddingTop: 55,
  paddingHorizontal: 15,
},

  backBtn: {
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
  elevation: 4,
},

  sheet: {
  flex: 1,
  backgroundColor: "#f8f8f8",
  borderTopLeftRadius: 28,
  borderTopRightRadius: 28,
  padding: 16,
  marginTop: -25,
},

  card: {
  backgroundColor: "#fff",
  padding: 14,
  borderRadius: 16,
  marginBottom: 12,
  borderWidth: 1,
  borderColor: "#eee",
},

  selectedCard: {
  borderColor: "#111",
  borderWidth: 1.5,
},

backIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
},

vehicleLeft: {
  flexDirection: "row",
  alignItems: "center",
},

vehicleCircle: {
  width: 52,
  height: 52,
  borderRadius: 26,
  backgroundColor: "#fff",
  elevation: 3,
  justifyContent: "center",
  alignItems: "center",
},

vehicleImage: {
  width: 40,
  height: 40,
  resizeMode: "contain",
},

pillRow: {
  flexDirection: "row",
  alignItems: "center",
},

pillIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
  marginRight: 8,
},

rightIcon: {
  width: 14,
  height: 14,
  resizeMode: "contain",
  marginLeft: 8,
},

pillText: {
  fontSize: 15,
  fontWeight: "600",
  color: "#333",
},

offerText: {
  fontSize: 15,
  fontWeight: "600",
  color: "#333",
},

payAtTitleRow: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 8,
},

walletIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
  marginRight: 8,
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
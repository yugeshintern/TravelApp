import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

export default function ParcelScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* BACK */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
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
      </TouchableOpacity>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Doorstep pickup and delivery</Text>
        <Text style={styles.parcel}>PARCEL</Text>
      </View>

      {/* HERO IMAGE (replace with your asset later) */}
      <Image
  source={require("../../../assets/parcel-ban.png")}
  style={styles.banner}
  resizeMode="cover"
/>

      {/* PICKUP CARD */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.greenDot} />
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Pickup from current location</Text>
            <Text style={styles.sub}>
              Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu, India
            </Text>

            <View style={styles.dashed} />

            <Text style={styles.phone}>Dexter6625025660</Text>
          </View>
        </View>
      </View>

      {/* DROP CARD */}
      <TouchableOpacity
  style={styles.card}
  activeOpacity={0.9}
  onPress={() => navigation.navigate("DropLocation")}
>
        <View style={styles.row}>
          <View style={styles.redDot} />
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Drop to</Text>

            <View style={styles.searchBox}>
              <Image
  source={require("../../../assets/search-icon.png")}
  style={styles.searchIcon}
/>
              <TextInput
                placeholder="Search drop address"
                placeholderTextColor="#666"
                style={styles.input}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#f3f4f6",
  paddingTop: 55,
},

  backBtn: {
  position: "absolute",
  top: 55,
  left: 20,
  zIndex: 10,
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
  elevation: 3,
},

backIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
},

banner: {
  width: "100%",
  height: 180,
},

searchIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
  tintColor: "#666",
},

  header: {
  alignItems: "center",
  marginTop: -10,
  paddingHorizontal: 20,
},

  title: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },

  parcel: {
    fontSize: 34,
    fontStyle: "italic",
    fontWeight: "300",
    marginTop: 5,
    color: "#333",
  },

  hero: {
  height: 140,
  marginVertical: 10,
},

  card: {
  backgroundColor: "#e5e7eb",
  borderRadius: 22,
  padding: 18,
  marginHorizontal: 15,
  marginTop: 16,
},

  row: {
    flexDirection: "row",
    gap: 12,
  },

  greenDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: "green",
    marginTop: 4,
  },

  redDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: "darkred",
    marginTop: 4,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },

  sub: {
    fontSize: 13,
    color: "#555",
  },

  dashed: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    marginVertical: 10,
    borderColor: "#999",
  },

  phone: {
    fontSize: 13,
    color: "#333",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#0f766e",
    borderRadius: 25,
    paddingHorizontal: 12,
    marginTop: 10,
  },

  input: {
    flex: 1,
    paddingVertical: 10,
    marginLeft: 8,
    fontSize: 14,
  },
});
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ParcelScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* BACK */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={18} />
      </TouchableOpacity>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Doorstep pickup and delivery</Text>
        <Text style={styles.parcel}>PARCEL</Text>
      </View>

      {/* HERO IMAGE (replace with your asset later) */}
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
        }}
        style={styles.hero}
        resizeMode="contain"
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
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.redDot} />
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Drop to</Text>

            <View style={styles.searchBox}>
              <Icon name="search" size={18} color="#666" />
              <TextInput
                placeholder="Search drop address"
                placeholderTextColor="#666"
                style={styles.input}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 15,
  },

  backBtn: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 25,
    width: 36,
    alignItems: "center",
    elevation: 2,
  },

  header: {
    alignItems: "center",
    marginTop: 10,
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
    borderRadius: 20,
    padding: 15,
    marginTop: 15,
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
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function BusBookingScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>

        <Text style={styles.title}>Bus Tickets</Text>
      </View>

      {/* FROM TO CARD */}
      <View style={styles.card}>
        {/* FROM */}
        <View style={styles.row}>
          <View style={styles.greenDot} />
          <Text style={styles.placeholder}>From</Text>
        </View>

        <View style={styles.divider} />

        {/* TO */}
        <View style={styles.row}>
          <View style={styles.redDot} />
          <Text style={styles.placeholder}>To</Text>
        </View>

        <View style={styles.divider} />

        {/* DATE */}
        <View style={styles.row}>
          <Icon name="calendar" size={16} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.dateLabel}>Date of Journey</Text>
            <Text style={styles.date}>26 Feb, 2026</Text>
          </View>
        </View>
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchBar}>
        <Icon name="search" size={16} color="#888" />
        <TextInput
          placeholder="Search Buses"
          style={styles.searchInput}
        />
      </View>

      {/* PROMO CARD */}
      <View style={styles.promoCard}>
        <View style={styles.promoLeft}>
          <Text style={styles.promoTitle}>BUS</Text>
          <Text style={styles.promoTitle}>TOUR</Text>

          <TouchableOpacity style={styles.learnBtn}>
            <Text style={styles.learnText}>Learn ipsum</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/61/61231.png",
          }}
          style={styles.busImg}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },

  /* HEADER */
  header: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  backBtn: {
    position: "absolute",
    left: 15,
    top: 10,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  /* CARD */
  card: {
    backgroundColor: "#e5e7eb",
    margin: 15,
    borderRadius: 15,
    padding: 15,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "green",
    marginRight: 10,
  },

  redDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "red",
    marginRight: 10,
  },

  placeholder: {
    color: "#555",
    fontSize: 13,
  },

  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },

  dateLabel: {
    fontSize: 11,
    color: "#555",
  },

  date: {
    fontSize: 13,
    fontWeight: "600",
  },

  /* SEARCH */
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#e5e7eb",
    marginHorizontal: 15,
    borderRadius: 20,
    paddingHorizontal: 12,
    alignItems: "center",
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 13,
  },

  /* PROMO */
  promoCard: {
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 20,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },

  promoLeft: {
    flex: 1,
  },

  promoTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  learnBtn: {
    marginTop: 10,
    backgroundColor: "#f59e0b",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    alignSelf: "flex-start",
  },

  learnText: {
    fontSize: 10,
    color: "#fff",
  },

  busImg: {
    width: 120,
    height: 80,
  },
});
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

export default function BusBookingScreen({
  navigation,
}) {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../../assets/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          Bus Tickets
        </Text>
      </View>

      {/* FROM TO CARD */}
      <View style={styles.card}>
        {/* FROM */}
        <View style={styles.row}>
          <View style={styles.greenDot} />

          <Text style={styles.placeholder}>
            From
          </Text>
        </View>

        <View style={styles.divider} />

        {/* TO */}
        <View style={styles.row}>
          <View style={styles.redDot} />

          <Text style={styles.placeholder}>
            To
          </Text>
        </View>

        <View style={styles.divider} />

        {/* DATE */}
        <View style={styles.row}>
          <Image
            source={require("../../../assets/calender.png")}
            style={styles.calendarIcon}
          />

          <View style={{ marginLeft: 12 }}>
            <Text style={styles.dateLabel}>
              Date of Journey
            </Text>

            <Text style={styles.date}>
              26 Feb, 2026
            </Text>
          </View>
        </View>
      </View>

      {/* SEARCH BAR */}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate("SearchBus")
        }
      >
        <View style={styles.searchBar}>
          <Image
            source={require("../../../assets/search-icon.png")}
            style={styles.searchIcon}
          />

          <TextInput
            placeholder="Search Buses"
            placeholderTextColor="#6b7280"
            style={styles.searchInput}
          />
        </View>
      </TouchableOpacity>

      {/* PROMO CARD */}
      <ImageBackground
        source={require("../../../assets/bus-tour-bg.png")}
        style={styles.promoCard}
        imageStyle={styles.promoBg}
      >
        
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  /* HEADER */
  header: {
    paddingTop: 55,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  backBtn: {
    position: "absolute",
    left: 20,
    top: 52,
    width: 42,
    height: 42,
    borderRadius: 22,
    backgroundColor: "#eef1ef",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2b2b2b",
  },

  /* CARD */
  card: {
    backgroundColor: "#e9eceb",
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 28,
    padding: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  greenDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "green",
    marginRight: 16,
    backgroundColor: "#fff",
  },

  redDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "darkred",
    marginRight: 16,
    backgroundColor: "#fff",
  },

  placeholder: {
    color: "#444",
    fontSize: 18,
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: "#c8c8c8",
    marginVertical: 16,
    marginLeft: 46,
  },

  calendarIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  dateLabel: {
    fontSize: 16,
    color: "#444",
  },

  date: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginTop: 4,
  },

  /* SEARCH */
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#e9eceb",
    marginHorizontal: 20,
    marginTop: 22,
    borderRadius: 25,
    paddingHorizontal: 18,
    height: 64,
    alignItems: "center",
  },

  searchIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  searchInput: {
    marginLeft: 14,
    flex: 1,
    fontSize: 16,
    color: "#111",
  },

  /* PROMO CARD */
  promoCard: {
    marginHorizontal: 20,
    marginTop: 28,
    borderRadius: 26,
    overflow: "hidden",
    padding: 18,
    height: 300,
    justifyContent: "space-between",
    elevation: 5,
    backgroundColor: "#fff",
  },

  promoBg: {
    borderRadius: 26,
  },

  promoLeft: {
    width: "52%",
    zIndex: 2,
  },

  promoTitle: {
    fontSize: 30,
    fontWeight: "800",
    color: "#444",
    lineHeight: 38,
  },

  promoDesc: {
    marginTop: 12,
    fontSize: 9,
    lineHeight: 14,
    color: "#8b5e5e",
  },

  learnBtn: {
    marginTop: 14,
    backgroundColor: "#f59e0b",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  learnText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
  },

  busImg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 140,
  },
});
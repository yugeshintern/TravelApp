import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

export default function BusListScreen({
  navigation,
  route,
}) {

  const {
    fromCity = "Tambaram",
    toCity = "Salem",
    journeyDate,
  } = route.params || {};

  const buses = [
    {
      id: "1",
      time: "23:30 - 06:15",
      duration:
        "6h 45m 32 seats (5 Single)",
      name: "Swamy Ayyappa Travels",
      type: "6h 45m 32 seats (5 Single)",
      price: "₹400",
      rating: "4.4",
    },
    {
      id: "2",
      time: "00:30 - 05:55",
      duration:
        "6h 45m 32 seats (5 Single)",
      name: "Krish Travels",
      type: "6h 45m 32 seats (5 Single)",
      price: "₹400",
      rating: "4.6",
    },
    {
      id: "3",
      time: "23:30 - 06:15",
      duration:
        "6h 45m 32 seats (5 Single)",
      name: "Namasivaya Travels",
      type: "6h 45m 32 seats (5 Single)",
      price: "₹400",
      rating: "4.4",
    },
    {
      id: "4",
      time: "23:35 - 05:15",
      duration:
        "6h 45m 32 seats (5 Single)",
      name: "Swamy Ayyappa Travels",
      type: "A/C Sleeper (2+1)",
      price: "₹400",
      rating: "4.3",
    },
    {
      id: "5",
      time: "23:15 - 06:25",
      duration:
        "6h 45m 32 seats (5 Single)",
      name: "IntrCity SmartBus",
      type: "A/C Seater / Sleeper (2+1)",
      price: "₹400",
      rating: "4.3",
    },
    {
      id: "6",
      time: "23:30 - 06:15",
      duration:
        "6h 45m 32 seats (5 Single)",
      name: "Rhythm Xpress",
      type: "VE A/C Sleeper (2+1)",
      price: "₹400",
      rating: "4.4",
    },
    {
      id: "7",
      time: "23:30 - 06:15",
      duration:
        "6h 45m 32 seats (5 Single)",
      name: "Sri vijayalakshmi travels",
      type: "A/C Sleeper (2+1)",
      price: "₹400",
      rating: "4.4",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() =>
  navigation.navigate(
    "SeatSelection",
    {
      bus: item,
      fromCity,
      toCity,
      journeyDate,
    }
  )
}
    >
      {/* TOP ROW */}
      <View style={styles.topRow}>
        <View>
          <Text style={styles.time}>
            {item.time}
          </Text>

          <Text style={styles.duration}>
            {item.duration}
          </Text>
        </View>

        <View style={styles.priceBox}>
          <Text style={styles.price}>
            {item.price}
          </Text>

          <Text style={styles.onwards}>
            Onwards
          </Text>
        </View>
      </View>

      {/* BUS NAME */}
      <Text style={styles.name}>
        {item.name}
      </Text>

      <Text style={styles.type}>
        {item.type}
      </Text>

      {/* BOTTOM */}
      <View style={styles.bottomRow}>
        <View style={styles.ratingBox}>
          <Text style={styles.ratingText}>
            ★ {item.rating}
          </Text>
        </View>

        <Text style={styles.offer}>
          Exclusive ₹100 OFF
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() =>
            navigation.goBack()
          }
        >
          <Image
            source={require("../../../assets/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.route}>
  {fromCity}{" "}
  <Text style={styles.arrow}>
    →
  </Text>{" "}
  {toCity}
</Text>

        <View style={styles.subHeader}>
          <Text style={styles.busCount}>
            253 Buses
          </Text>

          <View style={styles.datePill}>
            <Text style={styles.dateText}>
              26 FEB
            </Text>
          </View>
        </View>
      </View>

      {/* BUS LIST */}
      <FlatList
        data={buses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 55,
    paddingHorizontal: 16,
  },

  /* HEADER */
  header: {
    marginBottom: 18,
  },

  backBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#eef1ef",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginBottom: 18,
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  route: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1f1f1f",
    textAlign: "center",
  },

  arrow: {
    fontSize: 22,
    fontWeight: "700",
  },

  subHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 14,
  },

  busCount: {
    fontSize: 16,
    color: "#9b9b9b",
    fontWeight: "500",
    marginRight: 16,
  },

  datePill: {
    backgroundColor: "#0b7f81",
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 25,
  },

  dateText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  /* CARD */
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 22,
    marginBottom: 18,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  time: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },

  duration: {
    fontSize: 13,
    color: "#555",
    marginTop: 5,
  },

  priceBox: {
    alignItems: "flex-end",
  },

  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },

  onwards: {
    fontSize: 13,
    color: "#555",
    marginTop: 5,
  },

  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#333",
    marginTop: 32,
  },

  type: {
    fontSize: 13,
    color: "#555",
    marginTop: 6,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
  },

  ratingBox: {
    backgroundColor: "#12910f",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
  },

  ratingText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },

  offer: {
    fontSize: 15,
    fontWeight: "700",
    color: "#ffbf1c",
  },
});
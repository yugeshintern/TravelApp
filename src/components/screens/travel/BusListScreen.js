import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function BusListScreen({ navigation }) {
  const buses = [
    {
      id: "1",
      time: "23:30 - 06:15",
      duration: "6h 45m 32 seats (5 Single)",
      name: "Swamy Ayyappa Travels",
      type: "6h 45m 32 seats (5 Single)",
      price: "₹400",
      rating: "4.4",
    },
    {
      id: "2",
      time: "00:30 - 05:55",
      duration: "6h 45m 32 seats (5 Single)",
      name: "Krish Travels",
      type: "6h 45m 32 seats (5 Single)",
      price: "₹400",
      rating: "4.6",
    },
    {
      id: "3",
      time: "23:30 - 06:15",
      duration: "6h 45m 32 seats (5 Single)",
      name: "Namasivaya Travels",
      type: "6h 45m 32 seats (5 Single)",
      price: "₹400",
      rating: "4.4",
    },
    {
      id: "4",
      time: "23:35 - 05:15",
      duration: "6h 45m 32 seats (5 Single)",
      name: "Swamy Ayyappa Travels",
      type: "A/C Sleeper (2+1)",
      price: "₹400",
      rating: "4.3",
    },
    {
      id: "5",
      time: "23:15 - 06:25",
      duration: "6h 45m 32 seats (5 Single)",
      name: "IntrCity SmartBus",
      type: "A/C Seater / Sleeper (2+1)",
      price: "₹400",
      rating: "4.3",
    },
    {
      id: "6",
      time: "23:30 - 06:15",
      duration: "6h 45m 32 seats (5 Single)",
      name: "Rhythm Xpress",
      type: "VE A/C Sleeper (2+1)",
      price: "₹400",
      rating: "4.4",
    },
    {
      id: "7",
      time: "23:30 - 06:15",
      duration: "6h 45m 32 seats (5 Single)",
      name: "Sri vijayalakshmi travels",
      type: "A/C Sleeper (2+1)",
      price: "₹400",
      rating: "4.4",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      {/* TOP ROW */}
      <View style={styles.topRow}>
        <View>
          <Text style={styles.time}>{item.time}</Text>
          <Text style={styles.duration}>{item.duration}</Text>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.onwards}>Onwards</Text>
        </View>
      </View>

      {/* NAME */}
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.type}>{item.type}</Text>

      {/* BOTTOM */}
      <View style={styles.bottomRow}>
        <View style={styles.ratingBox}>
          <Text style={styles.ratingText}>★ {item.rating}</Text>
        </View>

        <Text style={styles.offer}>Exclusive ₹100 OFF</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>

        <Text style={styles.route}>
          Tambaram <Text style={{ fontSize: 16 }}>→</Text> Salem
        </Text>

        <View style={styles.subHeader}>
          <Text style={styles.busCount}>253 Buses</Text>
          <View style={styles.datePill}>
            <Text style={styles.dateText}>26 FEB</Text>
          </View>
        </View>
      </View>

      {/* LIST */}
      <FlatList
        data={buses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 15,
  },

  /* HEADER */
  header: {
    marginBottom: 10,
  },

  backBtn: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    width: 36,
    alignItems: "center",
    marginBottom: 10,
  },

  route: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },

  subHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },

  busCount: {
    fontSize: 13,
    color: "#777",
    marginRight: 10,
  },

  datePill: {
    backgroundColor: "#0f766e",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  dateText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  /* CARD */
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginVertical: 8,
    elevation: 3,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  time: {
    fontSize: 14,
    fontWeight: "700",
  },

  duration: {
    fontSize: 11,
    color: "#777",
    marginTop: 2,
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
  },

  onwards: {
    fontSize: 11,
    color: "#777",
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
  },

  type: {
    fontSize: 11,
    color: "#777",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    alignItems: "center",
  },

  ratingBox: {
    backgroundColor: "#16a34a",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
  },

  ratingText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "600",
  },

  offer: {
    color: "#f59e0b",
    fontSize: 12,
    fontWeight: "600",
  },
});
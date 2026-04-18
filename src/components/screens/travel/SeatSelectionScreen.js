import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function SeatSelectionScreen({ navigation }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (id, price) => {
    const exists = selectedSeats.find((s) => s.id === id);

    if (exists) {
      setSelectedSeats(selectedSeats.filter((s) => s.id !== id));
    } else {
      setSelectedSeats([...selectedSeats, { id, price }]);
    }
  };

  const total = selectedSeats.reduce((sum, s) => sum + s.price, 0);

  const renderSeat = (seat) => {
    let style = styles.available;

    if (seat.type === "booked") style = styles.booked;
    if (seat.type === "female") style = styles.female;
    if (seat.type === "male") style = styles.male;
    if (selectedSeats.find((s) => s.id === seat.id))
      style = styles.selected;

    return (
      <TouchableOpacity
        key={seat.id}
        style={[styles.seat, style]}
        disabled={seat.type === "booked"}
        onPress={() => toggleSeat(seat.id, seat.price)}
      >
        <Text style={styles.priceText}>₹{seat.price}</Text>
      </TouchableOpacity>
    );
  };

  const lowerDeck = [
    { id: 1, type: "female", price: 350 },
    { id: 2, type: "booked", price: 350 },
    { id: 3, type: "available", price: 350 },
    { id: 4, type: "available", price: 350 },
    { id: 5, type: "booked", price: 350 },
    { id: 6, type: "available", price: 550 },
    { id: 7, type: "available", price: 550 },
  ];

  const upperDeck = [
    { id: 11, type: "booked", price: 350 },
    { id: 12, type: "available", price: 550 },
    { id: 13, type: "available", price: 550 },
    { id: 14, type: "available", price: 550 },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        </View>

        <Text style={styles.step}>1. Select seats</Text>

        {/* DECKS */}
        <View style={styles.deckRow}>
          {/* LOWER */}
          <View style={styles.deck}>
            <Text style={styles.deckTitle}>Lower deck</Text>
            <View style={styles.grid}>
              {lowerDeck.map(renderSeat)}
            </View>
          </View>

          {/* UPPER */}
          <View style={styles.deck}>
            <Text style={styles.deckTitle}>Upper deck</Text>
            <View style={styles.grid}>
              {upperDeck.map(renderSeat)}
            </View>
          </View>
        </View>

        {/* LEGEND */}
        <Text style={styles.legendTitle}>Know your seat types</Text>

        <View style={styles.legendBox}>
          {renderLegend("Available", styles.available)}
          {renderLegend("Available only for male", styles.male)}
          {renderLegend("Already booked", styles.booked)}
          {renderLegend("Selected by you", styles.selected)}
          {renderLegend("Available only for female", styles.female)}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {selectedSeats.length} Seats
        </Text>
        <Text style={styles.footerPrice}>₹{total}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Select boarding & droping Points
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* LEGEND ITEM */
const renderLegend = (label, colorStyle) => (
  <View style={styles.legendItem} key={label}>
    <View style={[styles.legendSeat, colorStyle]} />
    <Text style={styles.legendText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },

  header: {
    padding: 15,
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
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },

  step: {
    marginLeft: 15,
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
  },

  deckRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  deck: {
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 15,
    padding: 10,
    elevation: 3,
  },

  deckTitle: {
    fontWeight: "600",
    marginBottom: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  seat: {
    width: 40,
    height: 60,
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  priceText: {
    fontSize: 10,
  },

  available: {
    borderColor: "green",
  },

  booked: {
    backgroundColor: "#ccc",
    borderColor: "#ccc",
  },

  selected: {
    backgroundColor: "green",
    borderColor: "green",
  },

  female: {
    borderColor: "pink",
  },

  male: {
    borderColor: "blue",
  },

  legendTitle: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: "600",
  },

  legendBox: {
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 15,
    padding: 10,
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },

  legendSeat: {
    width: 25,
    height: 35,
    borderWidth: 2,
    borderRadius: 6,
    marginRight: 10,
  },

  legendText: {
    fontSize: 13,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
  },

  footerText: {
    fontSize: 14,
  },

  footerPrice: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#0f766e",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
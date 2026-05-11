import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function SeatSelectionScreen({
  navigation,
}) {
  const [selectedSeats, setSelectedSeats] =
    useState([]);

  const toggleSeat = (
    id,
    price,
    type
  ) => {
    if (type === "booked") return;

    const exists = selectedSeats.find(
      (s) => s.id === id
    );

    if (exists) {
      setSelectedSeats(
        selectedSeats.filter(
          (s) => s.id !== id
        )
      );
    } else {
      setSelectedSeats([
        ...selectedSeats,
        { id, price },
      ]);
    }
  };

  const total =
    selectedSeats.reduce(
      (sum, s) => sum + s.price,
      0
    );

  const lowerDeck = [
    {
      id: 1,
      type: "female",
      price: 350,
    },
    {
      id: 2,
      type: "booked",
      price: 350,
    },
    {
      id: 3,
      type: "available",
      price: 350,
    },
    {
      id: 4,
      type: "available",
      price: 350,
    },
    {
      id: 5,
      type: "booked",
      price: 350,
    },
    {
      id: 6,
      type: "available",
      price: 550,
    },
    {
      id: 7,
      type: "available",
      price: 550,
    },
  ];

  const upperDeck = [
    {
      id: 11,
      type: "booked",
      price: 350,
    },
    {
      id: 12,
      type: "available",
      price: 550,
    },
    {
      id: 13,
      type: "available",
      price: 550,
    },
    {
      id: 14,
      type: "available",
      price: 550,
    },
  ];

  const renderSeat = (seat) => {
    const isSelected =
      selectedSeats.find(
        (s) => s.id === seat.id
      );

    let seatStyle = styles.available;

    if (seat.type === "booked") {
      seatStyle = styles.booked;
    }

    if (seat.type === "male") {
      seatStyle = styles.male;
    }

    if (seat.type === "female") {
      seatStyle = styles.female;
    }

    if (isSelected) {
      seatStyle = styles.selected;
    }

    return (
      <TouchableOpacity
        key={seat.id}
        activeOpacity={0.8}
        style={[
          styles.seatContainer,
          seatStyle,
        ]}
        onPress={() =>
          toggleSeat(
            seat.id,
            seat.price,
            seat.type
          )
        }
      >
        <View style={styles.seatTop} />

        <View style={styles.seatBottom}>
          <Text
            style={[
              styles.seatPrice,
              isSelected && {
                color: "#fff",
              },
            ]}
          >
            ₹{seat.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderLegend = (
    label,
    styleType
  ) => (
    <View
      style={styles.legendRow}
      key={label}
    >
      <View
        style={[
          styles.legendSeat,
          styleType,
        ]}
      />

      <Text style={styles.legendText}>
        {label}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 180,
        }}
      >
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
            Tambaram{" "}
            <Text style={styles.arrow}>
              →
            </Text>{" "}
            Salem
          </Text>
        </View>

        {/* STEP */}
        <Text style={styles.step}>
          1. Select seats
        </Text>

        {/* DECKS */}
        <View style={styles.deckRow}>
          {/* LOWER */}
          <View style={styles.deckCard}>
            <View
              style={styles.deckHeader}
            >
              <Text
                style={styles.deckTitle}
              >
                Lower deck
              </Text>

              <Image
                source={require("../../../assets/steering-wheel.png")}
                style={
                  styles.steeringIcon
                }
              />
            </View>

            <View style={styles.grid}>
              {lowerDeck.map(
                renderSeat
              )}
            </View>
          </View>

          {/* UPPER */}
          <View style={styles.deckCard}>
            <Text
              style={styles.deckTitle}
            >
              Upper deck
            </Text>

            <View style={styles.grid}>
              {upperDeck.map(
                renderSeat
              )}
            </View>
          </View>
        </View>

        {/* LEGEND */}
        <Text style={styles.legendTitle}>
          Know your seat types
        </Text>

        <View style={styles.legendBox}>
          {renderLegend(
            "Available",
            styles.available
          )}

          {renderLegend(
            "Available only for male",
            styles.male
          )}

          {renderLegend(
            "Already booked",
            styles.booked
          )}

          {renderLegend(
            "Selected by you",
            styles.selected
          )}

          {renderLegend(
            "Available only for female",
            styles.female
          )}
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View
          style={styles.footerTop}
        >
          <Text
            style={styles.footerSeats}
          >
            {selectedSeats.length} Seats
          </Text>

          <Text
            style={styles.footerPrice}
          >
            ₹{total}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate(
              "BoardingDropping"
            )
          }
        >
          <Text
            style={styles.buttonText}
          >
            Select boarding &
            dropping Points
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },

  /* HEADER */
  header: {
    paddingTop: 55,
    paddingHorizontal: 16,
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
    marginBottom: 22,
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  route: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  arrow: {
    fontSize: 22,
    fontWeight: "700",
  },

  step: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginLeft: 18,
    marginBottom: 18,
  },

  /* DECK */
  deckRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  deckCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 14,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
  },

  deckHeader: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  deckTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },

  steeringIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:
      "space-between",
    rowGap: 18,
  },

  /* SEATS */
  seatContainer: {
    width: 54,
    height: 108,
    borderRadius: 10,
    borderWidth: 3,
    overflow: "hidden",
  },

  seatTop: {
    height: 12,
    backgroundColor:
      "rgba(255,255,255,0.35)",
  },

  seatBottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  seatPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },

  available: {
    borderColor: "#138c13",
    backgroundColor: "#fff",
  },

  male: {
    borderColor: "#3846ff",
    backgroundColor: "#fff",
  },

  female: {
    borderColor: "#f2b4dc",
    backgroundColor: "#fff",
  },

  booked: {
    borderColor: "#cfcfcf",
    backgroundColor: "#cfcfcf",
  },

  selected: {
    borderColor: "#0a8d00",
    backgroundColor: "#0a8d00",
  },

  /* LEGEND */
  legendTitle: {
    marginTop: 28,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  legendBox: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 18,
    borderRadius: 24,
    paddingVertical: 18,
    paddingHorizontal: 18,
  },

  legendRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  legendSeat: {
    width: 42,
    height: 66,
    borderRadius: 10,
    borderWidth: 3,
    marginRight: 18,
  },

  legendText: {
    fontSize: 16,
    color: "#222",
    fontWeight: "500",
    flex: 1,
  },

  /* FOOTER */
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 20,
  },

  footerTop: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  footerSeats: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },

  footerPrice: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  button: {
    backgroundColor: "#0b7f81",
    height: 58,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
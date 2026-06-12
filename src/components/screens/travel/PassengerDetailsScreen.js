import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
  Image,
} from "react-native";

export default function PassengerDetailsScreen({
  navigation,
  route,
}) {

  const {
    fromCity = "Tambaram",
    toCity = "Salem",
    journeyDate,
  } = route.params || {};


  const [whatsapp, setWhatsapp] =
    useState(false);

  const [passengers, setPassengers] =
    useState([
      {
        name: "",
        age: "",
        gender: "",
      },
      {
        name: "",
        age: "",
        gender: "",
      },
    ]);

  const updatePassenger = (
    index,
    field,
    value
  ) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

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
  {fromCity}
</Text>

<Text style={styles.arrow}>
  →
</Text>

<Text style={styles.route}>
  {toCity}
</Text>
        </View>

        {/* STEP */}
        <Text style={styles.step}>
          3. Fill Passenger details
        </Text>

        {/* TRIP CARD */}
        <View style={styles.card}>
          <View style={styles.tripRow}>
            <View>
              <Text style={styles.dateText}>
  {journeyDate}
</Text>

              <Text style={styles.sub}>
  {fromCity}
</Text>
            </View>

            <Text
              style={styles.tripArrow}
            >
              →
            </Text>

            <View>
              <Text style={styles.dateText}>
  {journeyDate}
</Text>

              <Text style={styles.sub}>
  {toCity}
</Text>

              
            </View>
          </View>

          <View style={styles.seatRow}>
            <Image
              source={require("../../../assets/seat-icon.png")}
              style={styles.seatIcon}
            />

            <Text
              style={styles.seatText}
            >
              2 Seats
            </Text>
          </View>
        </View>

        {/* CONTACT DETAILS */}
        <View style={styles.card}>
          <Text
            style={styles.sectionTitle}
          >
            Contact details
          </Text>

          <Text style={styles.desc}>
            Ticket details will be
            sent to
          </Text>

          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#8a8a8a"
            style={styles.input}
          />

          <TextInput
            placeholder="Email ID"
            placeholderTextColor="#8a8a8a"
            style={styles.input}
          />

          <TextInput
            placeholder="State of Residence"
            placeholderTextColor="#8a8a8a"
            style={styles.input}
          />

          <Text
            style={styles.invoiceText}
          >
            Required for GST Tax
            Invoicing
          </Text>

          <View
            style={styles.whatsappRow}
          >
            <View
              style={
                styles.whatsappLeft
              }
            >
              <Image
                source={require("../../../assets/whatsapp.png")}
                style={
                  styles.whatsappIcon
                }
              />

              <Text
                style={
                  styles.whatsappText
                }
              >
                Send booking details
                and trip updates on
                WhatsApp
              </Text>
            </View>

            <Switch
              value={whatsapp}
              onValueChange={
                setWhatsapp
              }
              trackColor={{
                false: "#d6d6d6",
                true: "#cceae7",
              }}
              thumbColor={
                whatsapp
                  ? "#73c8c0"
                  : "#999"
              }
            />
          </View>
        </View>

        {/* PASSENGERS */}
        {passengers.map(
          (p, index) => (
            <View
              key={index}
              style={styles.card}
            >
              <Text
                style={
                  styles.sectionTitle
                }
              >
                Passenger details
              </Text>

              <View
                style={
                  styles.passengerHeader
                }
              >
                <Image
                  source={require("../../../assets/prog.png")}
                  style={
                    styles.passengerIcon
                  }
                />

                <View
                  style={{
                    marginLeft: 12,
                  }}
                >
                  <Text
                    style={
                      styles.passengerTitle
                    }
                  >
                    Passenger{" "}
                    {index + 1}
                  </Text>

                  <Text
                    style={
                      styles.sub
                    }
                  >
                    Seat 6, Lower
                    Deck
                  </Text>
                </View>
              </View>

              <TextInput
                placeholder="Name"
                placeholderTextColor="#8a8a8a"
                style={styles.input}
                value={p.name}
                onChangeText={(
                  val
                ) =>
                  updatePassenger(
                    index,
                    "name",
                    val
                  )
                }
              />

              <TextInput
                placeholder="Age"
                placeholderTextColor="#8a8a8a"
                keyboardType="numeric"
                style={styles.input}
                value={p.age}
                onChangeText={(
                  val
                ) =>
                  updatePassenger(
                    index,
                    "age",
                    val
                  )
                }
              />

              <Text
                style={
                  styles.genderLabel
                }
              >
                Gender
              </Text>

              <View
                style={
                  styles.genderRow
                }
              >
                {[
                  "Male",
                  "Female",
                ].map((g) => (
                  <TouchableOpacity
                    key={g}
                    style={[
                      styles.genderBtn,
                      p.gender ===
                        g &&
                        styles.genderActive,
                    ]}
                    onPress={() =>
                      updatePassenger(
                        index,
                        "gender",
                        g
                      )
                    }
                  >
                    <Text
                      style={[
                        styles.genderText,
                        p.gender ===
                          g && {
                            color:
                              "#0f766e",
                            fontWeight:
                              "700",
                          },
                      ]}
                    >
                      {g}
                    </Text>

                    <View
                      style={[
                        styles.radio,
                        p.gender ===
                          g &&
                          styles.radioActive,
                      ]}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )
        )}
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View
          style={styles.footerRow}
        >
          <View>
            <Text
              style={
                styles.footerSeats
              }
            >
              2 Seats
            </Text>

            <Text
              style={styles.taxText}
            >
              (Tax excluded)
            </Text>
          </View>

          <Text
            style={styles.price}
          >
            ₹550
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate(
              "Payments"
            )
          }
        >
          <Text
            style={styles.buttonText}
          >
            Continue booking
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },

  /* HEADER */
  header: {
    paddingTop: 55,
    paddingHorizontal: 16,
    marginBottom: 12,
  },

  backBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#eef1ef",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginBottom: 20,
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  routeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  route: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  arrow: {
    fontSize: 24,
    fontWeight: "700",
    marginHorizontal: 14,
    color: "#000",
  },

  step: {
    marginHorizontal: 18,
    marginBottom: 14,
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  /* CARD */
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 18,
    borderRadius: 24,
    padding: 18,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
  },

  tripRow: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "flex-start",
  },

  time: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  sub: {
    fontSize: 14,
    color: "#707070",
    marginTop: 4,
  },

  tripArrow: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
    marginTop: 10,
  },

  seatRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },

  seatIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  seatText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },

  /* TEXT */
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginBottom: 10,
  },

  desc: {
    fontSize: 15,
    color: "#707070",
    marginBottom: 10,
  },

  invoiceText: {
    fontSize: 14,
    color: "#707070",
    marginTop: 16,
    marginBottom: 10,
  },

  /* INPUT */
  input: {
    height: 58,
    borderWidth: 1.2,
    borderColor: "#d5d5d5",
    borderRadius: 16,
    paddingHorizontal: 18,
    marginTop: 12,
    fontSize: 16,
    color: "#222",
    backgroundColor: "#fff",
  },

  /* WHATSAPP */
  whatsappRow: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  whatsappLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingRight: 10,
  },

  whatsappIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    marginRight: 10,
  },

  whatsappText: {
    fontSize: 14,
    color: "#222",
    lineHeight: 22,
    flex: 1,
  },

  /* PASSENGER */
  passengerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  passengerIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },

  passengerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  /* GENDER */
  genderLabel: {
    marginTop: 18,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },

  genderRow: {
    flexDirection: "row",
    justifyContent:
      "space-between",
  },

  genderBtn: {
    width: "47%",
    height: 56,
    borderWidth: 1.4,
    borderColor: "#d2d2d2",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:
      "space-between",
    paddingHorizontal: 18,
    backgroundColor: "#fff",
  },

  genderActive: {
    borderColor: "#0f766e",
    backgroundColor: "#e7f6f3",
  },

  genderText: {
    fontSize: 16,
    color: "#333",
  },

  radio: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#c9c9c9",
    backgroundColor: "#fff",
  },

  radioActive: {
    borderColor: "#0f766e",
    backgroundColor: "#0f766e",
  },

  /* FOOTER */
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ececec",
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 20,
  },

  footerRow: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  footerSeats: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  taxText: {
    fontSize: 14,
    color: "#707070",
    marginTop: 2,
  },

  price: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  button: {
    height: 58,
    backgroundColor: "#0b7f81",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});
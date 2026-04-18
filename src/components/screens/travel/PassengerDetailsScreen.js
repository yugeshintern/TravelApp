import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function PassengerDetailsScreen({ navigation }) {
  const [whatsapp, setWhatsapp] = useState(false);

  const [passengers, setPassengers] = useState([
    { name: "", age: "", gender: "" },
    { name: "", age: "", gender: "" },
  ]);

  const updatePassenger = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

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
            Tambaram <Text>→</Text> Salem
          </Text>
        </View>

        <Text style={styles.step}>3. Fill Passenger details</Text>

        {/* TRIP CARD */}
        <View style={styles.card}>
          <View style={styles.tripRow}>
            <View>
              <Text style={styles.time}>26 Feb 00:00</Text>
              <Text style={styles.sub}>Tambaram</Text>
            </View>

            <Text style={{ fontSize: 18 }}>→</Text>

            <View>
              <Text style={styles.time}>26 Feb 05:20</Text>
              <Text style={styles.sub}>
                Near Salem{`\n`}Kondalampatti Bye pass
              </Text>
            </View>
          </View>

          <View style={styles.seatRow}>
            <Icon name="user" size={16} />
            <Text style={{ marginLeft: 6 }}>2 Seats</Text>
          </View>
        </View>

        {/* CONTACT DETAILS */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Contact details</Text>
          <Text style={styles.sub}>
            Ticket details will be sent to
          </Text>

          <TextInput placeholder="Phone Number" style={styles.input} />
          <TextInput placeholder="Email ID" style={styles.input} />
          <TextInput placeholder="State of Residence" style={styles.input} />

          <Text style={styles.smallText}>
            Required for GST Tax Invoicing
          </Text>

          <View style={styles.whatsappRow}>
            <Text style={{ flex: 1 }}>
              Send booking details and trip updates on WhatsApp
            </Text>
            <Switch
              value={whatsapp}
              onValueChange={setWhatsapp}
            />
          </View>
        </View>

        {/* PASSENGERS */}
        {passengers.map((p, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.sectionTitle}>
              Passenger details
            </Text>

            <View style={styles.passengerHeader}>
              <Icon name="user" size={18} />
              <View style={{ marginLeft: 8 }}>
                <Text style={styles.passengerTitle}>
                  Passenger {index + 1}
                </Text>
                <Text style={styles.sub}>
                  Seat 6, Lower Deck
                </Text>
              </View>
            </View>

            <TextInput
              placeholder="Name"
              style={styles.input}
              value={p.name}
              onChangeText={(val) =>
                updatePassenger(index, "name", val)
              }
            />

            <TextInput
              placeholder="Age"
              style={styles.input}
              keyboardType="numeric"
              value={p.age}
              onChangeText={(val) =>
                updatePassenger(index, "age", val)
              }
            />

            <Text style={styles.genderLabel}>Gender</Text>

            <View style={styles.genderRow}>
              {["Male", "Female"].map((g) => (
                <TouchableOpacity
                  key={g}
                  style={[
                    styles.genderBtn,
                    p.gender === g && styles.genderActive,
                  ]}
                  onPress={() =>
                    updatePassenger(index, "gender", g)
                  }
                >
                  <Text>{g}</Text>
                  <View
                    style={[
                      styles.radio,
                      p.gender === g && styles.radioActive,
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <View>
            <Text>2 Seats</Text>
            <Text style={styles.sub}>(Tax excluded)</Text>
          </View>
          <Text style={styles.price}>₹550</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("PaymentScreen")}
        >
          <Text style={styles.buttonText}>
            Continue booking
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f3f3" },

  header: { padding: 15 },

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
    fontWeight: "600",
    fontSize: 16,
  },

  step: {
    marginLeft: 15,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "500",
  },

  card: {
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 15,
    padding: 15,
    elevation: 3,
  },

  tripRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  time: { fontWeight: "600" },

  sub: { fontSize: 12, color: "#777" },

  seatRow: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
  },

  smallText: {
    fontSize: 12,
    color: "#777",
    marginTop: 10,
  },

  whatsappRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  passengerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  passengerTitle: {
    fontWeight: "600",
  },

  genderLabel: {
    marginTop: 10,
    marginBottom: 5,
  },

  genderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  genderBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  genderActive: {
    borderColor: "#0f766e",
  },

  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#ccc",
  },

  radioActive: {
    backgroundColor: "#0f766e",
    borderColor: "#0f766e",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  price: {
    fontWeight: "700",
    fontSize: 16,
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
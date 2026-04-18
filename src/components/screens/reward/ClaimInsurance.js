import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ClaimInsurance({ navigation }) {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>

        <Text style={styles.header}>Claim</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* POLICY COVERAGE */}
        <Text style={styles.section}>POLICY COVERAGE</Text>

        <View style={styles.card}>
          <View style={styles.item}>
            <Icon name="activity" size={18} />
            <View style={styles.textBox}>
              <Text style={styles.title}>
                Personal Accident/Accidental Death
              </Text>
              <Text style={styles.sub}>Up to ₹5,00,000</Text>
            </View>
          </View>

          <View style={styles.item}>
            <Icon name="file-text" size={18} />
            <View style={styles.textBox}>
              <Text style={styles.title}>
                Medical Expense for Hospitalization
              </Text>
              <Text style={styles.sub}>Up to ₹1,00,000</Text>
            </View>
          </View>

          <View style={styles.item}>
            <Icon name="plus-square" size={18} />
            <View style={styles.textBox}>
              <Text style={styles.title}>OPD Treatment</Text>
              <Text style={styles.sub}>Up to ₹3000</Text>
            </View>
          </View>
        </View>

        {/* LEGAL */}
        <Text style={styles.section}>LEGAL</Text>

        <View style={styles.card}>
          <TouchableOpacity style={styles.rowBetween}>
            <Text style={styles.title}>Claim Procedure</Text>
            <Text style={styles.link}>View</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rowBetween}>
            <Text style={styles.title}>Terms and Conditions</Text>
            <Text style={styles.link}>View</Text>
          </TouchableOpacity>
        </View>

        {/* INFO TEXT */}
        <Text style={styles.info}>
          Please provide your correct email-id, date of birth and phone
          number to avoid cancellations of your insurance claim.
        </Text>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Claim Insurance</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },

  backBtn: {
    backgroundColor: "#e5e7eb",
    padding: 8,
    borderRadius: 20,
    marginRight: 10,
  },

  header: {
    fontSize: 16,
    fontWeight: "600",
  },

  content: {
    padding: 15,
    paddingBottom: 40,
  },

  section: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2563eb",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },

  item: {
    flexDirection: "row",
    marginBottom: 15,
  },

  textBox: {
    marginLeft: 10,
    flex: 1,
  },

  title: {
    fontSize: 14,
    fontWeight: "500",
  },

  sub: {
    fontSize: 12,
    color: "#777",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },

  link: {
    color: "#2563eb",
    fontWeight: "500",
  },

  info: {
    fontSize: 13,
    color: "#555",
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#0f766e",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
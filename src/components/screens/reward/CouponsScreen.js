import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const coupons = [
  {
    code: "GOFREE",
    title: "Get 100% OFF upto Rs.100* on FIRST cab/E-Rickshaw ride",
    sub: "Save upto ₹41 on this ride.",
  },
  {
    code: "BHIMUPI",
    title: "Pay via BHIM & get up to ₹20 cashback every day!",
    sub: "Get 1 coins as cashback.",
  },
  {
    code: "RIDE",
    title: "Get Flat Rs. 20 OFF and 10 coins as cashback",
    sub: "Get 1 coins as cashback.",
  },
  {
    code: "RIDE50",
    title: "Get 25% OFF and also get additional cashback",
    sub: "Save upto ₹20 on this ride & get upto 20 coins.",
  },
];

export default function CouponsScreen({ navigation }) {
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

        <Text style={styles.header}>Coupons & Offers</Text>
      </View>

      {/* INPUT */}
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Enter coupon code"
          style={styles.input}
        />
        <TouchableOpacity style={styles.applyBtn}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>

      {/* COUPONS */}
      <ScrollView contentContainerStyle={{ padding: 15 }}>
        {coupons.map((item, index) => (
          <View key={index} style={styles.card}>
            {/* LEFT CIRCLE */}
            <View style={styles.circle} />

            {/* CONTENT */}
            <View style={{ flex: 1 }}>
              <View style={styles.rowBetween}>
                <Text style={styles.code}>{item.code}</Text>

                <TouchableOpacity style={styles.smallBtn}>
                  <Text style={{ color: "#fff", fontSize: 12 }}>
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.title}>{item.title}</Text>

              {/* DASHED */}
              <View style={styles.dashed} />

              <Text style={styles.sub}>{item.sub} ✨</Text>
            </View>

            {/* RIGHT NOTCH */}
            <View style={styles.notch} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6" },

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

  header: { fontSize: 16, fontWeight: "600" },

  inputRow: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  input: {
    flex: 1,
    backgroundColor: "#e5e7eb",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
  },

  applyBtn: {
    marginLeft: 10,
    backgroundColor: "#e5e7eb",
    borderRadius: 25,
    paddingHorizontal: 20,
    justifyContent: "center",
  },

  applyText: { fontWeight: "500" },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    elevation: 3,
    position: "relative",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  code: {
    fontWeight: "700",
    fontSize: 14,
  },

  smallBtn: {
    backgroundColor: "#16a34a",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  title: {
    fontSize: 13,
    color: "#16a34a",
    marginTop: 5,
  },

  sub: {
    fontSize: 12,
    color: "#555",
  },

  dashed: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ccc",
    marginVertical: 8,
  },

  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#16a34a",
    marginRight: 10,
    marginTop: 5,
  },

  notch: {
    position: "absolute",
    right: -8,
    top: "40%",
    width: 16,
    height: 30,
    backgroundColor: "#f3f4f6",
    borderRadius: 10,
  },
});
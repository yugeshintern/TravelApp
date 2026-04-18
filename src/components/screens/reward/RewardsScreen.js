import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function RewardsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* TOP YELLOW HEADER */}
      <View style={styles.header}>
        {/* BACK */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>

        {/* TITLE */}
        <Text style={styles.headerTitle}>Rewards</Text>

        {/* ILLUSTRATION (emoji fallback) */}
        <Text style={styles.gift}>🎁🎁🎁</Text>
      </View>

      {/* FLOATING CARD */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Coins</Text>
            <View style={styles.coinRow}>
              <Text style={styles.value}>0</Text>
              <Text style={styles.coin}>🪙</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.col}>
            <Text style={styles.label}>Vouchers</Text>
            <Text style={styles.value}>0</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  header: {
    height: 220,
    backgroundColor: "#facc15",
    paddingTop: 50,
    paddingHorizontal: 15,
  },

  backBtn: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    width: 36,
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    position: "absolute",
    top: 55,
    alignSelf: "center",
    fontWeight: "600",
    fontSize: 16,
  },

  gift: {
    position: "absolute",
    right: 20,
    bottom: 20,
    fontSize: 60,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -40,
    borderRadius: 15,
    padding: 15,
    elevation: 5,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  col: {
    flex: 1,
    alignItems: "center",
  },

  label: {
    fontSize: 14,
    marginBottom: 5,
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
  },

  coinRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  coin: {
    marginLeft: 5,
  },

  divider: {
    width: 1,
    height: 40,
    backgroundColor: "#ddd",
  },
});
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ReviewRider({navigation}) {
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
      {/* HEADER TEXT */}
      <Text style={styles.header}>Review_for_rider</Text>

      {/* BACKGROUND (FADED HOME UI MOCK) */}
      <View style={styles.bg} />

      {/* SKIP BUTTON */}
      <TouchableOpacity style={styles.skip}
      onPress={()=> navigation.navigate("Home")}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        {/* PAID */}
        <View style={styles.paidRow}>
          <Icon name="check-circle" size={18} color="green" />
          <Text style={styles.paidText}>Paid ₹62</Text>
        </View>

        {/* AVATAR */}
        <View style={styles.avatar} />

        {/* TITLE */}
        <Text style={styles.title}>
          How was your ride with John Franx?
        </Text>

        {/* STARS */}
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map((i) => (
            <TouchableOpacity key={i} onPress={() => setRating(i)}>
              <Icon
                name="star"
                size={28}
                color={i <= rating ? "#facc15" : "#ccc"}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* HELP CARD */}
        <View style={styles.helpCard}>
          <Text style={styles.helpTitle}>Need Help?</Text>
          <Text style={styles.helpSub}>
            We are just a tap away
          </Text>
        </View>

        {/* DONE BUTTON */}
        <TouchableOpacity style={styles.doneBtn}
        onPress={()=> navigation.navigate("Home")}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: {
    position: "absolute",
    top: 10,
    left: 16,
    color: "#2563eb",
    fontSize: 18,
  },

  bg: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    opacity: 0.5,
  },

  skip: {
    position: "absolute",
    right: 20,
    top: "50%",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  skipText: {
    color: "#333",
  },

  sheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },

  paidRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  paidText: {
    marginLeft: 6,
    fontWeight: "600",
  },

  avatar: {
    width: 70,
    height: 70,
    backgroundColor: "#000",
    borderRadius: 35,
    alignSelf: "center",
    marginVertical: 10,
  },

  title: {
    textAlign: "center",
    fontWeight: "500",
    marginBottom: 10,
  },

  stars: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 15,
  },

  helpCard: {
    backgroundColor: "#dbeafe",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
  },

  helpTitle: {
    fontWeight: "600",
  },

  helpSub: {
    fontSize: 12,
    color: "#555",
  },

  doneBtn: {
    backgroundColor: "#e5e7eb",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
  },

  doneText: {
    color: "#999",
    fontWeight: "600",
  },
});
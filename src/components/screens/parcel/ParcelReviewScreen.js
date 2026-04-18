import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ParcelReviewScreen({ navigation }) {
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
      {/* DIM BACKGROUND (HOME MOCK) */}
      <View style={styles.background}>
        <Text style={styles.fakeText}>Everything in Minutes</Text>
      </View>

      {/* SKIP BUTTON */}
      <TouchableOpacity
        style={styles.skipBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        {/* PAID */}
        <View style={styles.paidRow}>
          <Icon name="check-circle" size={18} color="green" />
          <Text style={styles.paidText}> Paid ₹62</Text>
        </View>

        {/* USER */}
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />

        {/* QUESTION */}
        <Text style={styles.question}>
          How was your ride with John Franx?
        </Text>

        {/* STARS */}
        <View style={styles.starRow}>
          {[1, 2, 3, 4, 5].map((i) => (
            <TouchableOpacity key={i} onPress={() => setRating(i)}>
              <Icon
                name="star"
                size={28}
                color={i <= rating ? "#facc15" : "#ccc"}
                style={{ marginHorizontal: 4 }}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* DIVIDER */}
        <View style={styles.divider} />

        {/* HELP CARD */}
        <TouchableOpacity style={styles.helpCard}>
          <View style={styles.helpLeft}>
            <View style={styles.helpIcon}>
              <Text style={{ color: "#fff" }}>?</Text>
            </View>
            <View>
              <Text style={styles.helpTitle}>Need Help?</Text>
              <Text style={styles.helpSub}>We are just a tap away</Text>
            </View>
          </View>

          <Icon name="chevron-right" size={18} />
        </TouchableOpacity>

        {/* DONE BUTTON */}
        <TouchableOpacity
          disabled={rating === 0}
          style={[
            styles.doneBtn,
            rating === 0 && { backgroundColor: "#e5e7eb" },
          ]}
        >
          <Text
            style={[
              styles.doneText,
              rating === 0 && { color: "#999" },
            ]}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  background: {
    flex: 1,
    backgroundColor: "#000",
    opacity: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },

  fakeText: {
    fontSize: 16,
    fontWeight: "600",
  },

  skipBtn: {
    position: "absolute",
    right: 20,
    top: 250,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    elevation: 2,
  },

  skipText: {
    fontSize: 12,
  },

  sheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },

  paidRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  paidText: {
    fontWeight: "600",
    fontSize: 14,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: "center",
    marginVertical: 10,
  },

  question: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },

  starRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
    borderStyle: "dashed",
  },

  helpCard: {
    backgroundColor: "#dbeafe",
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  helpLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  helpIcon: {
    backgroundColor: "#2563eb",
    width: 25,
    height: 25,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  helpTitle: {
    fontWeight: "600",
    fontSize: 13,
  },

  helpSub: {
    fontSize: 11,
    color: "#555",
  },

  doneBtn: {
    marginTop: 15,
    backgroundColor: "#0f766e",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
  },

  doneText: {
    color: "#fff",
    fontWeight: "600",
  },
});
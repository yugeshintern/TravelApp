import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ReviewRider({navigation}) {
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
      

      {/* BACKGROUND (FADED HOME UI MOCK) */}
      <Image
  source={require("../../../assets/review_bg.png")}
  style={styles.bg}
/>

<TouchableOpacity
  style={styles.backBtn}
  onPress={() => navigation.goBack()}
>
  <Image
    source={require("../../../assets/back.png")}
    style={styles.backIcon}
  />
</TouchableOpacity>

      {/* SKIP BUTTON */}
      <TouchableOpacity style={styles.skip}
      onPress={()=> navigation.navigate("Home")}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        {/* PAID */}
        <View style={styles.paidRow}>
          <Image
  source={require("../../../assets/green-tick.png")}
  style={styles.tickIcon}
/>
          <Text style={styles.paidText}>Paid ₹62</Text>
        </View>

        {/* AVATAR */}
        <Image
  source={require("../../../assets/profile.png")}
  style={styles.avatar}
/>

        {/* TITLE */}
        <Text style={styles.title}>
          How was your ride with John Franx?
        </Text>

        {/* STARS */}
        <View style={styles.stars}>
  {[1, 2, 3, 4, 5].map((i) => (
    <TouchableOpacity
      key={i}
      onPress={() => setRating(i)}
    >
      <Image
        source={
          i <= rating
            ? require("../../../assets/star-outline.png")
            : require("../../../assets/star-outline.png")
        }
        style={styles.starIcon}
      />
    </TouchableOpacity>
  ))}
</View>

        {/* HELP CARD */}
        <View style={styles.helpCard}>

  <Image
    source={require("../../../assets/headphones.png")}
    style={styles.helpIcon}
  />

  <View style={{ flex: 1 }}>
    <Text style={styles.helpTitle}>Need Help?</Text>

    <Text style={styles.helpSub}>
      We are just a tap away
    </Text>
  </View>

  <Text style={styles.arrow}>›</Text>

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
  width: "100%",
  resizeMode: "cover",
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
  width: 72,
  height: 72,
  borderRadius: 36,
  resizeMode: "cover",
  alignSelf: "center",
  marginVertical: 12,
},

  title: {
    textAlign: "center",
    fontWeight: "500",
    marginBottom: 10,
  },

  stars: {
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: 18,
},

  helpCard: {
  backgroundColor: "#dbeafe",
  borderRadius: 16,
  padding: 14,
  marginBottom: 18,
  flexDirection: "row",
  alignItems: "center",
},

backBtn: {
  position: "absolute",
  top: 50,
  left: 20,
  zIndex: 10,
},

backIcon: {
  width: 22,
  height: 22,
  resizeMode: "contain",
},

tickIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
},

starIcon: {
  width: 34,
  height: 34,
  resizeMode: "contain",
  marginHorizontal: 4,
},

helpIcon: {
  width: 26,
  height: 26,
  resizeMode: "contain",
  marginRight: 12,
},

arrow: {
  fontSize: 28,
  color: "#444",
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
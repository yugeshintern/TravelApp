import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function ReferFriends({ navigation }) {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>

  <TouchableOpacity
    style={styles.backBtn}
    onPress={() => navigation.goBack()}
  >
    <Image
      source={require("../../../assets/back.png")}
      style={styles.backIcon}
    />
  </TouchableOpacity>

  <Text style={styles.header}>
    Refer Friends
  </Text>

</View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* REFERRAL CARD */}
        <View style={styles.card}>

  <View style={styles.cardRow}>

    <Image
      source={require("../../../assets/refer-banner.png")}
      style={styles.bannerImage}
    />

    <View style={{ flex: 1 }}>

      <Text style={styles.cardText}>
        Earn upto ₹28 per friend you invite to Travel
      </Text>

      <View style={styles.codeRow}>

        <Text style={styles.code}>
          C25VEN01
        </Text>

        

      </View>

    </View>

  </View>

</View>

        {/* INVITE */}
        <TouchableOpacity style={styles.inviteCard}>

  <View style={styles.inviteLeft}>

    <Image
      source={require("../../../assets/refer.png")}
      style={styles.inviteIcon}
    />

    <Text style={styles.inviteText}>
      Invite Friends to Travel
    </Text>

  </View>

  <Text style={styles.inviteBtn}>
    INVITE
  </Text>

</TouchableOpacity>

        {/* HOW IT WORKS */}
        <View style={styles.rowBetween}>
          <Text style={styles.section}>HOW IT WORKS?</Text>
          <Text style={styles.link}>T&Cs</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            Your friend completes 1 order{"\n"}
            <Text style={styles.sub}>
              within 7 days of registration
            </Text>
          </Text>

          <Text style={styles.earn}>
            You earn{"\n"}50 🪙
          </Text>
        </View>

        {/* BUTTONS */}
        <TouchableOpacity style={styles.outlineBtn}>
          <Text style={styles.outlineText}>
            Find Friends to Refer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.primaryText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#f3f4f6",
  paddingTop: 50,
},

  headerRow: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 24,
  marginBottom: 24,
},

  backBtn: {
  width: 44,
  height: 44,
  borderRadius: 22,
  backgroundColor: "#eef1ef",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 18,
},
backIcon: {
  width: 20,
  height: 20,
  resizeMode: "contain",
},

  header: {
  fontSize: 20,
  fontWeight: "700",
  color: "#333",
},

  content: {
    padding: 15,
  },

  card: {
  backgroundColor: "#e9eceb",
  borderRadius: 22,
  padding: 16,
  marginBottom: 18,
},
bannerImage: {
  width: 110,
  height: 110,
  resizeMode: "contain",
  marginRight: 14,
},


  cardRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  emoji: {
    fontSize: 32,
    marginRight: 10,
  },

  cardText: {
  fontSize: 16,
  lineHeight: 25,
  color: "#333",
  fontWeight: "500",
  marginBottom: 14,
},
copyIcon: {
  width: 16,
  height: 16,
  resizeMode: "contain",
  tintColor: "#fff",
},
inviteLeft: {
  flexDirection: "row",
  alignItems: "center",
},
inviteIcon: {
  width: 24,
  height: 24,
  resizeMode: "contain",
  marginRight: 12,
},


  codeRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0f766e",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  code: {
    color: "#fff",
    marginRight: 6,
    fontWeight: "600",
  },

  inviteCard: {
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  inviteText: {
  fontWeight: "600",
  fontSize: 16,
  color: "#222",
},

  inviteBtn: {
    color: "#2563eb",
    fontWeight: "600",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  section: {
    fontSize: 12,
    fontWeight: "600",
  },

  link: {
    fontSize: 12,
    color: "#2563eb",
  },

  infoCard: {
    backgroundColor: "#e5e7eb",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },

  infoText: {
    fontSize: 13,
  },

  sub: {
    fontSize: 11,
    color: "#666",
  },

  earn: {
    color: "green",
    fontWeight: "600",
  },

  outlineBtn: {
    borderWidth: 1.5,
    borderColor: "#0f766e",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
  },

  outlineText: {
    color: "#0f766e",
    fontWeight: "600",
  },

  primaryBtn: {
    backgroundColor: "#0f766e",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },

  primaryText: {
    color: "#fff",
    fontWeight: "600",
  },
});
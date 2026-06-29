import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ProfileScreen({navigation}) {
  const menuItems = [
  {
    id: "help",
    label: "Help",
    screen: "Help",
    icon: require("../../../assets/help.png"),
  },
  {
    id: "payments",
    label: "Payments",
    screen: "Payments",
    icon: require("../../../assets/payment.png"),
  },
  {
    id: "parcel",
    label: "Parcel",
    screen: "Parcel",
    icon: require("../../../assets/parcel-ic.png"),
  },
  {
    id: "rides",
    label: "Ride History",
    screen: "RideHistory",
    icon: require("../../../assets/timer-icon.png"),
  },
  {
    id: "safety",
    label: "Safety",
    screen: "SafetyToolkit",
    icon: require("../../../assets/safety.png"),
  },
  {
    id: "refer",
    label: "Refer and Earn",
    screen: "ReferFriends",
    icon: require("../../../assets/refer.png"),
  },
  {
    id: "rewards",
    label: "My Rewards",
    screen: "Rewards",
    icon: require("../../../assets/rewards.png"),
  },
  {
    id: "powerpass",
    label: "Power Pass",
    screen: "PowerPass",
    icon: require("../../../assets/pass.png"),
  },
  {
    id: "notifications",
    label: "Notifications",
    screen: "Notifications",
    icon: require("../../../assets/bell.png"),
  },
  {
    id: "claims",
    label: "Claims",
    screen: "ClaimInsurance",
    icon: require("../../../assets/safety.png"),
  },
  {
    id: "settings",
    label: "Settings",
    screen: "Settings",
    icon: require("../../../assets/settings.png"),
  },
];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn}
        onPress={()=> navigation.goBack()}>
            <Image
            source={require('../../../assets/back.png')} // 👈 your local image path
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.header}>Profile</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* USER CARD */}
        <View style={styles.card}>
  <View style={styles.userRow}>

    <Image
  source={require("../../../assets/profile-con.png")}
  style={styles.profileIcon}
/>

    <View style={{ marginLeft: 12, flex: 1 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProfileEdit")}
      >
        <Text style={styles.name}>Dexter</Text>
        <Text style={styles.phone}>6625025660</Text>
      </TouchableOpacity>
    </View>

    <Image
      source={require("../../../assets/right.png")}
      style={styles.arrowIcon}
    />
  </View>

  <View style={styles.divider} />

  <View style={styles.userRow}>
    <Image
  source={require("../../../assets/star.png")}
  style={styles.profileIcon}
/>

    <Text style={styles.rating}>5.00 My Rating</Text>

    <View style={{ flex: 1 }} />

    <Image
      source={require("../../../assets/right.png")}
      style={styles.arrowIcon}
    />
  </View>
</View>

        {/* MENU LIST */}

      {menuItems.map((item) => (
  <TouchableOpacity
    key={item.id}
    style={styles.menuItem}
    onPress={() => navigation.navigate(item.screen)}
  >

    <View style={styles.menuLeft}>
      <Image
        source={item.icon}
        style={styles.menuIcon}
      />

      <Text style={styles.menuText}>
        {item.label}
      </Text>
    </View>

    <Image
      source={require("../../../assets/right.png")}
      style={styles.arrowIcon}
    />

  </TouchableOpacity>
))}

        {/* BANNER */}
        <TouchableOpacity
        onPress={()=> navigation.navigate("AdminIntro")}>
        <View style={styles.banner}>
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTitle}>
              Earn money with Travel
            </Text>
            <Text style={styles.bannerSub}>
              Become a Captain!
            </Text>
          </View>

          <Image
  source={require("../../../assets/bike-ban.png")}
  style={styles.bannerImage}
/>
        </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#f3f4f6",
  paddingTop: 45, // adjust between 35-50 as needed
},

  headerRow: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 15,
  paddingTop: 55,   // <-- add this
  paddingBottom: 15,
},

  backBtn: {
    backgroundColor: "#e5e7eb",
    color:"#000",
    borderRadius: 20,
    marginRight: 10,
  },

  backIcon: {
  width: 40,
  height: 40,
  resizeMode: 'contain',
},

  header: {
    fontSize: 18,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginHorizontal: 15,
    padding: 15,
    elevation: 3,
  },
  menuLeft: {
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
},
menuIcon: {
  width: 28,
  height: 28,
  resizeMode: "contain",
  marginRight: 16,
},
arrowIcon: {
  width: 20,
  height: 20,
  resizeMode: "contain",
  tintColor: "#555",
},
bannerImage: {
  width: 75,
  height: 75,
  resizeMode: "contain",
},

profileIcon: {
  width: 34,
  height: 34,
  resizeMode: "contain",
  marginRight: 14,
},

  userRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontWeight: "600",
  },

  phone: {
    fontSize: 12,
    color: "#777",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
  },

  star: {
    marginRight: 8,
  },

  rating: {
    fontWeight: "500",
  },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
    marginHorizontal: 15,
  },

  menuText: {
  fontSize: 18,
  fontWeight: "600",
  color: "#222",
},

  banner: {
    backgroundColor: "#fef3c7",
    margin: 15,
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  bannerTitle: {
    fontWeight: "600",
  },

  bannerSub: {
    fontSize: 12,
    color: "#555",
  },

  emoji: {
    fontSize: 28,
  },
});
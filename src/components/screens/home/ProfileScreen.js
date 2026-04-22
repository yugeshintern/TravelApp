import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ProfileScreen({navigation}) {
  const menuItems = [
    {id:"help", label:"Help", screen:"Help"},
    {id:"payments", label:"Payments", screen:"Payments"},
    {id:"parcel", label:"Parcel", screen:"Parcel"},
    {id:"rides", label:"Ride History", screen:"RideHistory"},
    {id:"safety", label:"Safety", screen:"SafetyToolkit"},
    {id:"refer", label:"Refer and Earn", screen:"ReferFriends"},
    {id:"rewards", label:"My Rewards", screen:"Rewards"},
    {id:"powerpass", label:"Power Pass", screen:"PowerPass"},
    {id:"notifications", label:"Notifications", screen:"Notifications"},
    {id:"claims", label:"Claims", screen:"ClaimInsurance"},
    { id:"settings", label:"Settings", screen:"Settings" },
  ];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn}>
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>

        <Text style={styles.header}>Profile</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* USER CARD */}
        <View style={styles.card}>
          <View style={styles.userRow}>
            <Icon name="user" size={22} />

            <View style={{ marginLeft: 10, flex: 1 }}>
              <Text style={styles.name}>Dexter</Text>
              <Text style={styles.phone}>6625025660</Text>
            </View>

            <Icon name="chevron-right" size={18} />
          </View>

          <View style={styles.divider} />

          <View style={styles.userRow}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.rating}>5.00 My Rating</Text>
            <View style={{ flex: 1 }} />
            <Icon name="chevron-right" size={18} />
          </View>
        </View>

        {/* MENU LIST */}

      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.menuItem}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Text style={styles.menuText}>{item.label}</Text>
          <Icon name="chevron-right" size={18} />
        </TouchableOpacity>
      ))}

        {/* BANNER */}
        <View style={styles.banner}>
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTitle}>
              Earn money with Travel
            </Text>
            <Text style={styles.bannerSub}>
              Become a Captain!
            </Text>
          </View>

          <Text style={styles.emoji}>🛵</Text>
        </View>
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
    fontSize: 14,
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
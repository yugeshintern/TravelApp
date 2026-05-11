import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function SettingsScreen({ navigation }) {
  const general = [
  {
    title: "Profile",
    sub: "+6625025660",
    icon: require("../../../assets/prog.png"),
  },
  {
    title: "Favourites",
    sub: "Manage favourite locations",
    icon: require("../../../assets/fav.png"),
  },
  {
    title: "Preferencec",
    sub: "Manage preferences",
    icon: require("../../../assets/pef.png"),
  },
  {
    title: "App shortcuts",
    sub: "Create shortcuts on home launcher",
    icon: require("../../../assets/opd.png"),
  },
];

  const others = [
  {
    title: "About",
    sub: "8.95.0",
    icon: require("../../../assets/i.png"),
  },
  {
    title: "Subscribe to Beta",
    sub: "Get early access to latest features",
    icon: require("../../../assets/beta.png"),
  },
  {
    title: "Logout",
    sub: "",
    icon: require("../../../assets/logout.png"),
  },
  {
    title: "Delete Account",
    sub: "",
    icon: require("../../../assets/del.png"),
    danger: true,
  },
];

  const renderItem = (item, index) => (
  <TouchableOpacity key={index} style={styles.row}>

    <Image
      source={item.icon}
      style={styles.menuIcon}
    />

    <View style={{ flex: 1 }}>
      <Text
        style={[
          styles.title,
          item.danger && { color: "red" },
        ]}
      >
        {item.title}
      </Text>

      {item.sub !== "" && (
        <Text style={styles.sub}>{item.sub}</Text>
      )}
    </View>

    <Image
      source={require("../../../assets/right.png")}
      style={styles.rightIcon}
    />

  </TouchableOpacity>
);

  return (
    <View style={styles.container}>
      {/* HEADER */}
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

  <Text style={styles.header}>Settings</Text>
</View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* GENERAL */}
        <Text style={styles.section}>GENERAL</Text>

        <View style={styles.card}>
          {general.map(renderItem)}
        </View>

        {/* OTHERS */}
        <Text style={styles.section}>OTHERS</Text>

        <View style={styles.card}>
          {others.map(renderItem)}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#f3f4f6",
  paddingHorizontal: 15,
  paddingTop: 50,
},
backIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
},

menuIcon: {
  width: 20,
  height: 20,
  resizeMode: "contain",
  marginRight: 14,
},

rightIcon: {
  width: 16,
  height: 16,
  resizeMode: "contain",
},

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
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

  section: {
    fontSize: 12,
    fontWeight: "700",
    color: "#14b8a6",
    marginTop: 10,
    marginBottom: 8,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
    overflow: "hidden",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  icon: {
    marginRight: 12,
  },

  title: {
    fontSize: 14,
    fontWeight: "500",
  },

  sub: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },
});
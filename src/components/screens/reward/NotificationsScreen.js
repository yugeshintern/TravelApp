import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function NotificationsScreen({ navigation }) {
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

  <Text style={styles.header}>Notifications</Text>
</View>

      {/* EMPTY STATE */}
      <View style={styles.center}>
        {/* ICON */}
        <View style={styles.iconWrapper}>
          <Text style={styles.bell}>🔔</Text>

          <View style={styles.cross}>
            <Text style={styles.crossText}>✕</Text>
          </View>
        </View>

        {/* TEXT */}
        <Text style={styles.text}>
          You have no new notifications
        </Text>
      </View>
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

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  iconWrapper: {
    position: "relative",
    marginBottom: 20,
  },

  bell: {
    fontSize: 80,
  },

  cross: {
    position: "absolute",
    right: -5,
    top: 10,
    backgroundColor: "#fb7185",
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  crossText: {
    color: "#fff",
    fontWeight: "600",
  },

  text: {
    fontSize: 14,
    color: "#444",
  },
});
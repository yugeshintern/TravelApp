import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function SettingsScreen({ navigation }) {
  const general = [
    {
      title: "Profile",
      sub: "+6625025660",
      icon: "user",
    },
    {
      title: "Favourites",
      sub: "Manage favourite locations",
      icon: "heart",
    },
    {
      title: "Preferencec",
      sub: "Manage preferences",
      icon: "sliders",
    },
    {
      title: "App shortcuts",
      sub: "Create shortcuts on home launcher",
      icon: "grid",
    },
  ];

  const others = [
    {
      title: "About",
      sub: "8.95.0",
      icon: "info",
    },
    {
      title: "Subscribe to Beta",
      sub: "Get early access to latest features",
      icon: "cpu",
    },
    {
      title: "Logout",
      sub: "",
      icon: "log-out",
    },
    {
      title: "Delete Account",
      sub: "",
      icon: "trash-2",
      danger: true,
    },
  ];

  const renderItem = (item, index) => (
    <TouchableOpacity key={index} style={styles.row}>
      <Icon
        name={item.icon}
        size={18}
        color={item.danger ? "red" : "#444"}
        style={styles.icon}
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

      <Icon name="chevron-right" size={18} color="#999" />
    </TouchableOpacity>
  );

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
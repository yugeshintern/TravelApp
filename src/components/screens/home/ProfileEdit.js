import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ProfileEdit({ navigation }) {
  const fields = [
    {
      label: "Name",
      value: "Dexter",
      icon: "user",
      color: "#555",
    },
    {
      label: "Phone Number",
      value: "+91 6625025660",
      icon: "phone",
      color: "#555",
    },
    {
      label: "Email",
      value: "Required",
      icon: "mail",
      color: "red",
    },
    {
      label: "Gender",
      value: "Required",
      icon: "user-check",
      color: "red",
    },
    {
      label: "Date of Birth",
      value: "Required",
      icon: "calendar",
      color: "red",
    },
    {
      label: "Date of Birth",
      value: "Required",
      icon: "award",
      color: "red",
    },
    {
      label: "Emergency contact",
      value: "Add +",
      icon: "alert-circle",
      color: "#999",
    },
  ];

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

        <Text style={styles.header}>Profile</Text>
      </View>

      {/* LIST */}
      {fields.map((item, index) => (
        <TouchableOpacity key={index} style={styles.row}>
          <Icon
            name={item.icon}
            size={18}
            color="#444"
            style={styles.icon}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={[styles.value, { color: item.color }]}>
              {item.value}
            </Text>
          </View>

          <Icon name="chevron-right" size={18} color="#999" />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    fontSize: 18,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  icon: {
    marginRight: 12,
  },

  label: {
    fontSize: 14,
    color: "#333",
  },

  value: {
    fontSize: 13,
    marginTop: 2,
  },
});
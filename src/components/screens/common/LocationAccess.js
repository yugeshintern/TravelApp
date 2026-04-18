import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function LocationAccess() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Allow Location Access</Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          Allow Travel app to access your location?
        </Text>

        <TouchableOpacity style={styles.btn}>
          <Text>While using app</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text>Only this time</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text>Don't allow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, textAlign: "center", marginBottom: 20 },
  card: { backgroundColor: "#ffe4e6", padding: 20, borderRadius: 20 },
  text: { textAlign: "center", marginBottom: 20 },
  btn: {
    backgroundColor: "#fbcfe8",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
});
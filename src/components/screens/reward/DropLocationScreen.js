import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function DropLocationScreen({ navigation }) {
  const [drop, setDrop] = useState("");

  const locations = [
    {
      title: "Egmore Railway Station",
      sub: "Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu, India",
    },
    {
      title: "Koyambedu Bus Stand",
      sub: "Koyambedu bus terminus, Chennai, Tamil Nadu",
    },
    {
      title: "Phoenix Marketcity",
      sub: "Velachery Road, Chennai",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.locRow}>
      <Icon name="clock" size={18} color="#888" />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.locTitle}>{item.title}</Text>
        <Text style={styles.locSub}>{item.sub}</Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>

        <Text style={styles.header}>Drop to</Text>
      </View>

      {/* INPUT CARD */}
      <View style={styles.card}>
        <View style={styles.row}>
          {/* DOTS + LINE */}
          <View style={styles.lineContainer}>
            <View style={styles.greenDot} />
            <View style={styles.dashedLine} />
            <View style={styles.redDot} />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.inputTop}>Your Current Location</Text>

            <View style={styles.separator} />

            <TextInput
              placeholder="Drop Location"
              placeholderTextColor="#888"
              value={drop}
              onChangeText={setDrop}
              style={styles.input}
            />
          </View>
        </View>
      </View>

      {/* SELECT ON MAP */}
      <View style={styles.mapRow}>
        <TouchableOpacity style={styles.mapBtn}>
          <Icon name="map-pin" size={16} />
          <Text style={styles.mapText}>Select on map</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mapBtn}>
          <Icon name="crosshair" size={16} />
          <Text style={styles.mapText}>Select on map</Text>
        </TouchableOpacity>
      </View>

      {/* LIST */}
      <FlatList
        data={locations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: 10 }}
      />

      {/* FLOAT SEARCH BUTTON */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="search" size={20} color="#fff" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6", padding: 15 },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  backBtn: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    elevation: 2,
    marginRight: 10,
  },

  header: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
    marginRight: 40,
  },

  card: {
    backgroundColor: "#e5e7eb",
    borderRadius: 20,
    padding: 15,
  },

  row: {
    flexDirection: "row",
  },

  lineContainer: {
    alignItems: "center",
    marginRight: 10,
  },

  greenDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: "green",
  },

  redDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: "darkred",
  },

  dashedLine: {
    height: 35,
    borderLeftWidth: 1,
    borderStyle: "dashed",
    borderColor: "#666",
    marginVertical: 2,
  },

  inputTop: {
    fontSize: 15,
    fontWeight: "600",
  },

  separator: {
    height: 1,
    backgroundColor: "#bbb",
    marginVertical: 8,
  },

  input: {
    fontSize: 15,
    color: "#333",
  },

  mapRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  mapBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 25,
    gap: 6,
  },

  mapText: {
    fontSize: 13,
  },

  locRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 20,
  },

  locTitle: {
    fontSize: 14,
    fontWeight: "600",
  },

  locSub: {
    fontSize: 12,
    color: "#666",
  },

  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#0f766e",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
});
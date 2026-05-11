import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function ProfileEdit({ navigation }) {

  const fields = [
    {
      label: "Name",
      value: "Dexter",
      icon: require("../../../assets/prog.png"),
      color: "#8b8b8b",
    },
    {
      label: "Phone Number",
      value: "+91 6625025660",
      icon: require("../../../assets/call.png"),
      color: "#8b8b8b",
    },
    {
      label: "Email",
      value: "Required",
      icon: require("../../../assets/msg.png"),
      color: "#ff5c5c",
    },
    {
      label: "Gender",
      value: "Required",
      icon: require("../../../assets/gender.png"),
      color: "#ff5c5c",
    },
    {
      label: "Date of Birth",
      value: "Required",
      icon: require("../../../assets/calender.png"),
      color: "#ff5c5c",
    },
    {
      label: "Date of Birth",
      value: "Required",
      icon: require("../../../assets/reward.png"),
      color: "#ff5c5c",
    },
    {
      label: "Emergency contact",
      value: "Add +",
      icon: require("../../../assets/emergency.png"),
      color: "#b1b1b1",
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
          <Image
            source={require("../../../assets/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.header}>Profile</Text>

      </View>

      {/* LIST */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {fields.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.row}
          >

            <Image
              source={item.icon}
              style={styles.rowIcon}
            />

            <View style={{ flex: 1 }}>

              <Text style={styles.label}>
                {item.label}
              </Text>

              <Text
                style={[
                  styles.value,
                  { color: item.color },
                ]}
              >
                {item.value}
              </Text>

            </View>

            <Image
              source={require("../../../assets/right.png")}
              style={styles.arrowIcon}
            />

          </TouchableOpacity>
        ))}

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 50,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#f1f3f2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  backIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  header: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 26,
    borderBottomWidth: 1,
    borderColor: "#ececec",
  },

  rowIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 18,
  },

  label: {
    fontSize: 17,
    color: "#3b3b3b",
    fontWeight: "500",
  },

  value: {
    fontSize: 14,
    marginTop: 6,
    fontWeight: "400",
  },

  arrowIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    tintColor: "#555",
  },

});
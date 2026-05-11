import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function SearchLocation({navigation}) {
  const [selected, setSelected] = useState("ride");

  const locations = [
    {
      title: "Egmore Railway Station",
      subtitle:
        "Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu, India",
    },
    {
      title: "Koyambedu Bus Stand",
      subtitle:
        "Koyambedu bus terminus, Koyambedu, Chennai, Tamil Nadu",
    },
    {
      title: "Phoenix Marketcity",
      subtitle:
        "Velachery Road, Velachery, Chennai",
    },
  ];

  return (
    <View style={styles.container}>

      {/* MAIN CARD */}
      <View style={styles.card}>
        {/* TOP BAR */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backBtn}
          onPress={()=> navigation.goBack()}>
            <Image
              source={require("../../../assets/back.png")}
              style={styles.smallIcon}
            />
          </TouchableOpacity>
          <Text style={styles.dropText}>Drop</Text>
        </View>

        {/* TOGGLE */}
        <View style={styles.toggle}>
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              selected === "ride" && styles.activeToggle,
            ]}
            onPress={() => setSelected("ride")}
          >
            <View style={styles.toggleContent}>
            <Image
              source={require("../../../assets/bike.png")}
              style={styles.toggleIcon}
            />
            <Text style={styles.toggleText}>Ride</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleBtn,
              selected === "porter" && styles.activeToggle,
            ]}
            onPress={() => setSelected("porter")}
          >
            <View style={styles.toggleContent}>
            <Image
              source={require("../../../assets/3w.png")}
              style={styles.toggleIcon}
            />
            <Text style={styles.toggleText}>Porter</Text>
          </View>
          </TouchableOpacity>
        </View>

        {/* LOCATION INPUT */}
        <TouchableOpacity
          style={styles.inputBox}
          activeOpacity={0.9}
          onPress={() => navigation.navigate("VehicleChoosing")}
        >

          <View style={styles.dotColumn}>
            <View style={styles.greenDot} />

            <View style={styles.line} />

            <View style={styles.redDot} />
          </View>

          <View style={styles.inputContent}>

            <TextInput
              placeholder="Your Current Location"
              placeholderTextColor="#7b7b7b"
              style={styles.input}
            />

            <View style={styles.divider} />

            <TextInput
              placeholder="Drop Location"
              placeholderTextColor="#7b7b7b"
              style={styles.input}
            />

          </View>

        </TouchableOpacity>

        {/* MAP BUTTONS */}
        <View style={styles.mapRow}>
          <TouchableOpacity style={styles.mapBtn}>
            <Image
  source={require("../../../assets/loc-icon.png")}
  style={styles.mapIcon}
/>
            <Text style={styles.mapText}>Select on map</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mapBtn}>
            <Image
  source={require("../../../assets/directions.png")}
  style={styles.mapIcon}
/>
            <Text style={styles.mapText}>Select on map</Text>
          </TouchableOpacity>
        </View>

        {/* LIST */}
        <FlatList
          data={locations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.locationItem}>
              <Image
  source={require("../../../assets/timer-icon.png")}
  style={styles.timerIcon}
/>
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.locationTitle}>
                  {item.title}
                </Text>
                <Text style={styles.locationSub}>
                  {item.subtitle}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    fontSize: 18,
    color: "#2563eb",
    margin: 16,
  },

  card: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 16,
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  backBtn: {
    backgroundColor: "#e5e7eb",
    padding: 8,
    borderRadius: 20,
  },

  dropText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "600",
  },

  toggle: {
    flexDirection: "row",
    backgroundColor: "#e5e7eb",
    borderRadius: 10,
    marginVertical: 10,
  },

  toggleBtn: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },

  activeToggle: {
    backgroundColor: "#ffffff",
  },

  toggleText: {
    fontWeight: "600",
  },

  inputBox: {
  flexDirection: "row",
  backgroundColor: "#e5e7eb",
  borderRadius: 20,
  paddingHorizontal: 16,
  paddingVertical: 14,
  marginVertical: 14,
  alignItems: "flex-start",
},
inputContent: {
  flex: 1,
},
dotColumn: {
  alignItems: "center",
  marginRight: 14,
  marginTop: 4,
},
input: {
  paddingVertical: 8,
  fontSize: 15,
  color: "#222",
},
divider: {
  height: 1,
  backgroundColor: "#cfcfcf",
},
  
  greenDot: {
  width: 16,
  height: 16,
  borderRadius: 8,
  borderWidth: 3,
  borderColor: "green",
  backgroundColor: "#fff",
},

  redDot: {
  width: 16,
  height: 16,
  borderRadius: 8,
  backgroundColor: "red",
},

  line: {
  width: 1.5,
  height: 34,
  backgroundColor: "#999",
  marginVertical: 6,
},

  mapRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  mapBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 8,
    borderRadius: 20,
  },

  smallIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
},

toggleContent: {
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
},

toggleIcon: {
  width: 20,
  height: 20,
  resizeMode: "contain",
},

mapIcon: {
  width: 14,
  height: 14,
  resizeMode: "contain",
},

timerIcon: {
  width: 22,
  height: 22,
  resizeMode: "contain",
  marginTop: 2,
},

  mapText: {
    marginLeft: 5,
    fontSize: 12,
  },

  locationItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 10,
  },

  locationTitle: {
    fontWeight: "600",
  },

  locationSub: {
    fontSize: 12,
    color: "#777",
  },
});
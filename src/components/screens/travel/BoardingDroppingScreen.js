import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function BoardingDroppingScreen({ navigation }) {
  const [selectedBoarding, setSelectedBoarding] = useState(0);
  const [selectedDrop, setSelectedDrop] = useState(0);

  const boardingPoints = [
    {
      time: "00:00",
      title: "Tambaram",
      sub: "Below Bridge (Towards Perungalathur), Opp Hindu Mission Hospital",
      tag: "Your selected Boarding Points(s)",
    },
    {
      time: "23:00",
      title: "Koyambedu Omni Bus Stand",
      sub: "Below Bridge (Towards Perungalathur), Opp Hindu Mission Hospital",
      tag: "Popular boarding Point",
    },
    {
      time: "23:10",
      title: "Koyambedu CMBT Bus Stand",
      sub: "Below Bridge (Towards Perungalathur), Opp Hindu Mission Hospital",
      tag: "Popular boarding Point",
    },
    {
      time: "23:10",
      title: "Vadapalani Kovil Bus stop",
    },
    {
      time: "23:20",
      title: "Ashok pillar",
      sub: "Infront of Shree Mithai",
    },
    {
      time: "23:20",
      title: "Ekkattuthangal Bus Stop",
    },
    {
      time: "23:35",
      title: "Guindy Near Olympia",
    },
  ];

  return (
    <View style={styles.container}>
  <ScrollView showsVerticalScrollIndicator={false}>
    
    {/* HEADER */}
    <View style={styles.header}>
      
      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../../../assets/back.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* ROUTE */}
      <View style={styles.routeContainer}>
        <Text style={styles.routeText}>Tambaram</Text>

        <Text style={styles.arrow}>→</Text>

        <Text style={styles.routeText}>Salem</Text>
      </View>

    </View>

        <Text style={styles.step}>
          2. Select boarding & dropping
        </Text>

        {/* BOARDING CARD */}
        <View style={styles.card}>
          {boardingPoints.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.row}
              onPress={() => setSelectedBoarding(index)}
            >
              {/* TIME */}
              <View style={styles.timeBox}>
                <Text style={styles.time}>{item.time}</Text>
                {index === 0 && (
                  <Text style={styles.date}>26 FEB</Text>
                )}
              </View>

              {/* DETAILS */}
              <View style={styles.details}>
                <Text style={styles.title}>{item.title}</Text>

                {item.sub && (
                  <Text style={styles.sub}>{item.sub}</Text>
                )}

                {item.tag && (
                  <Text style={styles.tag}>{item.tag}</Text>
                )}
              </View>

              {/* RADIO */}
              <View
                style={[
                  styles.radio,
                  selectedBoarding === index && styles.radioActive,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* DROP CARD */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.timeBox}>
              <Text style={styles.time}>05:20</Text>
              <Text style={styles.date}>26 FEB</Text>
            </View>

            <View style={styles.details}>
              <Text style={styles.title}>Dropping points</Text>
              <Text style={styles.titleBold}>
                Salem Kondalampatti Bye pass
              </Text>
              <Text style={styles.sub}>Kondalampatti</Text>
            </View>

            <View style={[styles.radio, styles.radioActive]} />
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <Text style={styles.footerText}>2 Seats</Text>
          <Text style={styles.footerPrice}>₹550</Text>
        </View>

        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate("PassengerDetails")}>
          <Text style={styles.buttonText}>
            Fill Passenger details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },

  header: {
  paddingTop: 55,
  paddingHorizontal: 18,
  marginBottom: 20,
},

backBtn: {
  width: 46,
  height: 46,
  borderRadius: 23,
  backgroundColor: "#eef1ef",
  justifyContent: "center",
  alignItems: "center",
  elevation: 3,
  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowRadius: 4,
},

backIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
},

routeContainer: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: -34,
},

routeText: {
  fontSize: 20,
  fontWeight: "700",
  color: "#2d2d2d",
},

arrow: {
  fontSize: 26,
  fontWeight: "700",
  color: "#000",
  marginHorizontal: 14,
},

  route: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },

  step: {
    marginLeft: 15,
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
  },
  

  card: {
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 15,
    padding: 10,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  timeBox: {
    width: 60,
  },

  time: {
    fontSize: 14,
    fontWeight: "600",
  },

  date: {
    fontSize: 11,
    color: "#777",
  },

  details: {
    flex: 1,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
  },

  titleBold: {
    fontSize: 14,
    fontWeight: "700",
  },

  sub: {
    fontSize: 11,
    color: "#777",
    marginTop: 2,
  },

  tag: {
    color: "#10b981",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "600",
  },

  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#ccc",
  },

  radioActive: {
    borderColor: "#0f766e",
    backgroundColor: "#0f766e",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  footerText: {
    fontSize: 14,
  },

  footerPrice: {
    fontSize: 16,
    fontWeight: "700",
  },

  button: {
    backgroundColor: "#0f766e",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
import React from "react";
import {
  View,
  Text,
 StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function SafetyToolkit({ navigation }) {
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

  <Text style={styles.header}>Safety toolkit</Text>
</View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* INTRO */}
        <Text style={styles.desc}>
          At Travel, your safety comes first. Here are some measures and
          provisions to ensure your safety.
        </Text>

        {/* IMAGE CARD */}
        {/* IMAGE CARD */}
<View style={styles.imageCard}>
  <Image
    source={require("../../../assets/call-banner.png")}
    style={styles.bannerImage}
  />
</View>

        {/* BULLETS */}
        <View style={styles.bullets}>
          <Text style={styles.bullet}>• Proactive safety checks</Text>
          <Text style={styles.bullet}>• Share live location</Text>
          <Text style={styles.bullet}>• Add trusted contacts</Text>
        </View>

        {/* SETTINGS */}
        <Text style={styles.sectionSmall}>Settings</Text>

        <TouchableOpacity style={styles.settingsCard}>
          <View>
            <Text style={styles.settingsTitle}>
              New trusted contacts
            </Text>
            <Text style={styles.settingsSub}>
              Share ride trip details with your loved ones in a single tap
            </Text>
          </View>
          <Image
  source={require("../../../assets/right.png")}
  style={styles.rightIcon}
/>
        </TouchableOpacity>

        {/* WHAT WE OFFER */}
        <Text style={styles.section}>What we offer?</Text>

        {/* ITEM */}
        <View style={styles.item}>
          <Text style={styles.icon}>✨</Text>
          <View style={styles.textBox}>
            <Text style={styles.title}>
              24X7 Proactive Safety Checks
            </Text>
            <Text style={styles.sub}>
              • Drop at different location{"\n"}
              • Unplanned stops / Vehicle not moving{"\n"}
              • Route deviations during the ride
            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <Text style={styles.icon}>📞</Text>
          <View style={styles.textBox}>
            <Text style={styles.title}>24X7 Call masking</Text>
            <Text style={styles.sub}>
              We keep the identity and contact number of women
customers confidential from Captains.
            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <Text style={styles.icon}>🚨</Text>
          <View style={styles.textBox}>
            <Text style={styles.title}>SOS button</Text>
            <Text style={styles.sub}>
              A button that calls our Central Emergency Response Team who then guide you to onground help.
            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <Text style={styles.icon}>🌙</Text>
          <View style={styles.textBox}>
            <Text style={styles.title}>
              Late night ride completion check
            </Text>
            <Text style={styles.sub}>
                            We call you post ride completion for feedback, each time you ride between 10pm - 5am

            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <Text style={styles.icon}>✅</Text>
          <View style={styles.textBox}>
            <Text style={styles.title}>Trip insurance</Text>
            <Text style={styles.sub}>
              From start to finish, all trips are insured by leading insurance players.
            </Text>
          </View>
        </View>

        {/* NOTE */}
        <Text style={styles.note}>
          Please note, all these safety features only work in case of an online
          ride through our app. Do not accept offline rides.
        </Text>

        {/* THINGS YOU CAN DO */}
        <Text style={styles.section}>THINGS YOU CAN DO</Text>

        {[
          {
            title: "Helmet always",
            desc:
              "While riding a Bike-Taxi, always ask for a helmet. In case you don’t receive one, inform us via feedback.",
            icon: "🪖",
          },
          {
            title: "Live location sharing",
            desc:
              "For friends & family to track the live status of your ride.",
            icon: "📡",
          },
          {
            title: "Your ride. Your rules",
            desc:
              "You have every right to ask the captain to drive as per your comfort, within traffic rules.",
            icon: "🏍️",
          },
          {
            title: "Add trusted Contacts",
            desc:
              "Make sure to add contacts of your loved ones as trusted contacts. This will help you reach out to them easily.",
            icon: "🛡️",
          },
          {
            title: "Don’t share personal information",
            desc:
              "Do not share your contact details with the captain. Do not share location via whatsapp or any third party app.Use communication methods available on the app only.",
            icon: "🔒",
          },
          {
            title: "Always share feedback",
            desc:
              "After every ride, help us known about your experiences so we can make our service safer and more pleasant.",
            icon: "💬",
          },
        ].map((item, i) => (
          <View key={i} style={styles.item}>
            <Text style={styles.icon}>{item.icon}</Text>
            <View style={styles.textBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.sub}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#f3f4f6",
  paddingTop: 50,
},

headerRow: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 15,
  marginBottom: 10,
},

backBtn: {
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: "#e9eceb",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 12,
},

header: {
  fontSize: 18,
  fontWeight: "700",
  color: "#222",
},
backIcon: {
  width: 18,
  height: 18,
  resizeMode: "contain",
},

bannerImage: {
  width: 180,
  height: 160,
  resizeMode: "contain",
},

rightIcon: {
  width: 16,
  height: 16,
  resizeMode: "contain",
},

  content: {
    padding: 15,
    paddingBottom: 40,
  },

  desc: {
    fontSize: 14,
    color: "#444",
    marginBottom: 15,
  },

  imageCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    padding: 20,
    marginBottom: 15,
    elevation: 3,
  },

  bullets: {
    marginBottom: 15,
  },

  bullet: {
    fontSize: 14,
    marginBottom: 5,
  },

  sectionSmall: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 10,
  },

  settingsCard: {
    backgroundColor: "#e5e7eb",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  settingsTitle: {
    fontWeight: "600",
  },

  settingsSub: {
    fontSize: 12,
    color: "#666",
  },

  section: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 15,
  },

  item: {
    flexDirection: "row",
    marginBottom: 15,
  },

  icon: {
    fontSize: 20,
    marginRight: 10,
  },

  textBox: {
    flex: 1,
  },

  title: {
    fontWeight: "600",
    marginBottom: 3,
  },

  sub: {
    fontSize: 13,
    color: "#555",
  },

  note: {
    fontSize: 13,
    marginVertical: 15,
    color: "#444",
  },
});
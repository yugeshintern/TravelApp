import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function TravelMainScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* HERO BANNER */}
      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1504198458649-3128b932f49b",
          }}
          style={styles.bannerImg}
        />

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>

        <View style={styles.bannerText}>
          <Text style={styles.small}>SAVE UPTO</Text>
          <Text style={styles.big}>20%</Text>
          <Text style={styles.mid}>BUSINESS CLASS</Text>
          <Text style={styles.sub}>Lasting only few more days</Text>
        </View>
      </View>

      {/* SECTION TITLE */}
      <Text style={styles.sectionTitle}>Travel & Hotel</Text>

      {/* GRID */}
      <View style={styles.grid}>
        {/* BUS */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.offer}>🟢 Upto ₹4000 off</Text>
          <Text style={styles.label}>Bus</Text>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/61/61231.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* FLIGHT */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.offer}>🟢 Upto ₹4000 Off</Text>
          <Text style={styles.label}>Flight</Text>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/34/34627.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* HOTEL */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.offer}>🟢 Upto 55% off</Text>
          <Text style={styles.label}>Hotel</Text>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/139/139899.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* TRAIN */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.offer}>🟢 Zero Service Fee</Text>
          <Text style={styles.label}>Train</Text>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/61/61212.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* BANNER */
  banner: {
    height: 220,
  },

  bannerImg: {
    width: "100%",
    height: "100%",
  },

  backBtn: {
    position: "absolute",
    top: 20,
    left: 15,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
  },

  bannerText: {
    position: "absolute",
    left: 15,
    bottom: 20,
  },

  small: {
    color: "#fff",
    fontSize: 10,
  },

  big: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },

  mid: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  sub: {
    color: "#ddd",
    fontSize: 10,
  },

  /* SECTION */
  sectionTitle: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 14,
    fontWeight: "600",
  },

  /* GRID */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15,
  },

  card: {
    width: "48%",
    backgroundColor: "#f3f4f6",
    borderRadius: 15,
    padding: 12,
    marginBottom: 12,
  },

  offer: {
    fontSize: 10,
    color: "green",
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 5,
  },

  icon: {
    width: 60,
    height: 60,
    alignSelf: "flex-end",
  },
});
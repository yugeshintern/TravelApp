import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";

export default function PaymentSuccessScreen({ navigation }) {

  // Animation values
  const scaleAnim = useRef(new Animated.Value(0.7)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    // Success animation
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        tension: 80,
        useNativeDriver: true,
      }),

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();

    // Auto navigate after 4 seconds
    const timer = setTimeout(() => {
      navigation.navigate("Home");
    }, 4000);

    return () => clearTimeout(timer);

  }, [navigation, scaleAnim, fadeAnim]);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../../../assets/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>

      {/* CENTER CONTENT */}
      <View style={styles.center}>

        {/* Animated Success Circle */}
        <Animated.View
          style={[
            styles.circle,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <Image
            source={require("../../../assets/done.png")}
            style={styles.tickIcon}
          />
        </Animated.View>

        {/* Animated Text */}
        <Animated.View
          style={{
            opacity: fadeAnim,
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>
            Payment successful
          </Text>

          <Text style={styles.subtitle}>
            Successfully Paid ₹100
          </Text>
        </Animated.View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingTop: 55,
  },

  headerRow: {
    paddingHorizontal: 15,
  },

  backBtn: {
    backgroundColor: "#fff",
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  tickIcon: {
    width: 52,
    height: 52,
    resizeMode: "contain",
    tintColor: "#fff",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  circle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#16A34A",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,

    shadowColor: "#16A34A",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 6,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333333",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#666666",
    fontWeight: "500",
  },
});
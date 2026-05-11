import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const ReviewBookingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../../assets/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Review Booking
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* VEHICLE CARD */}
        <View style={styles.card}>
          <View style={styles.vehicleRow}>
            <View style={styles.vehicleIcon}>
              <Image
                source={require("../../../assets/bike-icon.png")}
                style={styles.vehicleImg}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.vehicleTitle}>2 Wheeler</Text>
              <Text style={styles.link}>View Address Details</Text>
            </View>

            <Text style={styles.time}>1 min away</Text>
          </View>

          <View style={styles.loadingRow}>
            <Image
              source={require("../../../assets/timer-icon.png")}
              style={styles.smallIcon}
            />

            <Text style={styles.loadingText}>
              Free{" "}
              <Text style={{ fontWeight: "700" }}>
                25 mins
              </Text>{" "}
              of loading-unloading time included.
            </Text>
          </View>
        </View>

        {/* OFFERS */}
        <Text style={styles.sectionTitle}>
          Offers and Discounts
        </Text>

        <TouchableOpacity style={styles.cardRow}>
          <View style={styles.rowLeft}>
            <Image
              source={require("../../../assets/coupan.png")}
              style={styles.smallIcon}
            />

            <Text style={styles.rowText}>
              Apply Coupon
            </Text>
          </View>

          <Image
            source={require("../../../assets/right.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        {/* FARE SUMMARY */}
        <Text style={styles.sectionTitle}>
          Fare Summary
        </Text>

        <View style={styles.fareCard}>
          <View style={styles.fareRow}>
            <Text style={styles.fareLabel}>
              Trip Fare (incl. Toll)
            </Text>

            <Text style={styles.fareValue}>
              ₹67.33
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.fareRow}>
            <Text style={styles.fareLabel}>
              Net Fare
            </Text>

            <Text style={styles.fareValue}>
              ₹67
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.fareRow}>
            <Text style={styles.bold}>
              Amount Payable (rounded)
            </Text>

            <Text style={styles.bold}>
              ₹67
            </Text>
          </View>
        </View>

        {/* GOODS */}
        <Text style={styles.sectionTitle}>
          Goods Description
        </Text>

        <View style={styles.card}>
          <View style={styles.goodsRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.goodsTitle}>
                Textiles / Garments / Fashion Accessories
              </Text>

              <Text style={styles.goodsSub}>
                20.0 Kg | 01 Package | ₹1500 (Default)
              </Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.change}>
                Change
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.restrictedBox}>
            <Image
              source={require("../../../assets/restricted-box.png")}
              style={styles.restrictedIcon}
            />

            <Text style={styles.restrictedText}>
              Do not send restricted items
            </Text>
          </View>
        </View>

        {/* READ BEFORE BOOKING */}
        <Text style={styles.sectionTitle}>
          Read before Booking
        </Text>

        <View style={styles.card}>
          {[
            "Fare includes 25 mins free loading-unloading time.",
            "₹2.0/min for additional loading/unloading time.",
            "Fare may change if route or location changes.",
            "Parking charges to be paid by customer.",
            "Fare includes toll and permit charges, if any.",
            "We don’t allow overloading.",
          ].map((item, i) => (
            <Text key={i} style={styles.bullet}>
              • {item}
            </Text>
          ))}
        </View>

        <View style={{ height: 150 }} />
      </ScrollView>

      {/* BOTTOM BAR */}
      <View style={styles.bottomBar}>
        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.smallBtn}>
            <Text style={styles.smallText}>
              ₹ Cash
            </Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity style={styles.smallBtn}>
            <Text style={styles.smallText}>
              % Ride50
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.cta}
          onPress={() =>
            navigation.navigate("LookingForRider")
          }
        >
          <Text style={styles.ctaText}>
            Book 2 wheeler
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewBookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF1F4",
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 58,
    paddingHorizontal: 18,
    paddingBottom: 12,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#E9ECEF",
    alignItems: "center",
    justifyContent: "center",
  },

  backIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginLeft: 22,
  },

  /* CARD */
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 22,
    padding: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  vehicleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  vehicleIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  vehicleImg: {
    width: 34,
    height: 34,
    resizeMode: "contain",
  },

  vehicleTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111",
  },

  link: {
    fontSize: 14,
    color: "#666",
    marginTop: 3,
  },

  time: {
    color: "#0F7A6C",
    fontWeight: "700",
    fontSize: 15,
  },

  loadingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },

  loadingText: {
    fontSize: 14,
    color: "#444",
    marginLeft: 8,
    flex: 1,
    lineHeight: 20,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginHorizontal: 16,
    marginBottom: 10,
    color: "#222",
  },

  /* OFFER CARD */
  cardRow: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    padding: 18,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    elevation: 3,
  },

  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  rowText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    marginLeft: 10,
  },

  smallIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  arrowIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  /* FARE */
  fareCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 18,
    elevation: 3,
  },

  fareRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  fareLabel: {
    fontSize: 15,
    color: "#444",
  },

  fareValue: {
    fontSize: 15,
    color: "#222",
  },

  bold: {
    fontWeight: "700",
    fontSize: 15,
    color: "#111",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E5E5",
  },

  /* GOODS */
  goodsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  goodsTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
  },

  goodsSub: {
    fontSize: 13,
    color: "#666",
    marginTop: 5,
  },

  change: {
    color: "#2F80ED",
    fontWeight: "700",
    fontSize: 15,
  },

  restrictedBox: {
    marginTop: 14,
    backgroundColor: "#E9DDB7",
    padding: 14,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  restrictedIcon: {
    width: 26,
    height: 26,
    resizeMode: "contain",
    marginRight: 10,
  },

  restrictedText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },

  /* BULLETS */
  bullet: {
    fontSize: 14,
    marginBottom: 8,
    color: "#444",
    lineHeight: 22,
  },

  /* BOTTOM */
  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#EEF1F4",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 18,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  smallBtn: {
    borderWidth: 1.5,
    borderColor: "#0F7A6C",
    borderRadius: 26,
    paddingHorizontal: 18,
    paddingVertical: 10,
    minWidth: 120,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  smallText: {
    color: "#0F7A6C",
    fontWeight: "700",
    fontSize: 15,
  },

  separator: {
    width: 1,
    height: 24,
    backgroundColor: "#D5D5D5",
  },

  cta: {
    backgroundColor: "#0F7A6C",
    paddingVertical: 18,
    borderRadius: 35,
    alignItems: "center",
  },

  ctaText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
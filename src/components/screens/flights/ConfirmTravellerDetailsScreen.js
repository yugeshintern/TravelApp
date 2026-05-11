import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ConfirmTravellerDetailsScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

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

          <View>
            <Text style={styles.tripLabel}>Trip to</Text>
            <Text style={styles.tripCity}>Chennai</Text>
          </View>
        </View>

        {/* AIRLINE */}
        <View style={styles.airlineRow}>
          <View style={styles.logoContainer}>
  <Image
    source={require("../../../assets/airindia.png")}
    style={styles.airIndiaLogo}
  />
</View>
          <Text style={styles.airline}>Air India | AI-537</Text>
        </View>

        {/* TIME */}
        <View style={styles.timeRow}>
          <View>
            <Text style={styles.time}>15:45</Text>
            <Text style={styles.date}>Thu, 26 Feb 26</Text>
            <Text style={styles.city}>New Delhi</Text>
            <Text style={styles.airport}>
              Indira Gandhi International Airport Terminal T3
            </Text>
          </View>

          <View>
            <Text style={styles.time}>18:35</Text>
            <Text style={styles.date}>Thu, 26 Feb 26</Text>
            <Text style={styles.city}>Chennai</Text>
            <Text style={styles.airport}>
              Chennai International Airport Terminal T4
            </Text>
          </View>
        </View>

        {/* CANCELLATION */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cancellation Refund Policy</Text>

          <View style={styles.policyRow}>
            <Text style={styles.label}>Cancel Between(IST):</Text>
            <Text style={styles.label}>Cancellation Penalty:</Text>
          </View>

          <View style={styles.policyRow}>
            <Text>Now - 26 Feb, 19:30</Text>
            <Text style={styles.bold}>₹ 5,600</Text>
          </View>

          <View style={styles.policyRow}>
            <Text>26 Feb, 19:30 - 21:30</Text>
            <Text style={styles.bold}>₹ 5,718</Text>
          </View>
        </View>

        {/* BAGGAGE */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Baggage Policy</Text>

          <View style={styles.policyRow}>
            <Text>Cabin bag</Text>
            <Text>7 Kgs (1 Piece only) / Adult</Text>
          </View>

          <View style={styles.policyRow}>
            <Text>Check-in bag</Text>
            <Text>15 Kgs / Adult</Text>
          </View>
        </View>

        {/* FLEX */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Unsure of your Travel Plans</Text>
          <Text style={styles.sub}>Select a service to add flexibility to your trip</Text>

          <Text style={styles.flexTitle}>Free Date Change</Text>
          <Text style={styles.green}>Save up to ₹3450 in penalties</Text>

          <TouchableOpacity
            style={styles.option}
            onPress={() => setSelected(!selected)}
          >
            <View style={[styles.radio, selected && styles.radioActive]} />
            <Text style={styles.optionText}>
              Change Date until 2 hrs before departure
            </Text>
            <Text style={styles.bold}>₹99</Text>
          </TouchableOpacity>

          <Text style={styles.tc}>T&C</Text>
        </View>

        {/* TRAVELLER DETAILS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Traveller Details</Text>

          <View style={styles.travellerRow}>
  <Image
    source={require("../../../assets/prog.png")}
    style={styles.smallIcon}
  />
  <Text style={styles.travellerType}>Adult (25 yrs+)</Text>
</View>

          <View style={styles.travellerBox}>
            <View style={styles.tickBox}>
              <Icon name="check" size={14} color="#2F80ED" />
            </View>
            <Text style={styles.travellerName}>Dexter</Text>
          </View>

          <Text style={styles.bookingText}>
            Booking details will be sent to
          </Text>

          <View style={styles.contactRow}>
  <Image
    source={require("../../../assets/msg.png")}
    style={styles.smallIcon}
  />
  <Text style={styles.link}>Add Email ID</Text>
</View>

<View style={styles.contactRow}>
  <Image
    source={require("../../../assets/ph-ic.png")}
    style={styles.smallIcon}
  />
  <Text>99880 08899</Text>
</View>
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.priceRow}>
          <Text>For 1 Adult</Text>
          <Text style={styles.bold}>₹5,718</Text>
        </View>

        <TouchableOpacity style={styles.cta}
        onPress={()=> navigation.navigate("FlightSeatSelection")}>
          <Text style={styles.ctaText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmTravellerDetailsScreen;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F7F9' },

  header: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 64,
  paddingHorizontal: 18,
  marginBottom: 34,
},

  backBtn: {
  width: 46,
  height: 46,
  borderRadius: 23,
  backgroundColor: '#ECEEEE',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 18,
},
  backIcon: {
  width: 22,
  height: 22,
  resizeMode: 'contain',
},

  tripLabel: {
  fontSize: 15,
  color: '#8B8B8B',
  marginBottom: 2,
},

tripCity: {
  fontSize: 19,
  fontWeight: '700',
  color: '#333',
},

  airlineRow: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 18,
  marginBottom: 28,
},

  logoContainer: {
  width: 52,
  height: 52,
  borderRadius: 12,
  overflow: 'hidden',
  marginRight: 14,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},

airIndiaLogo: {
  width: 52,
  height: 52,
  resizeMode: 'cover',
},

  
timeRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 18,
  marginBottom: 28,
},
  airline: {
  fontSize: 16,
  fontWeight: '700',
  color: '#333',
},

  time: { fontSize: 18, fontWeight: '700' },
  date: { fontSize: 12, color: '#777' },
  city: { fontSize: 16, fontWeight: '600', marginTop: 4 },
  airport: { fontSize: 12, color: '#777', width: 150 },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },

  cardTitle: { fontSize: 15, fontWeight: '700', marginBottom: 10 },

  policyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  label: { fontSize: 12, color: '#777' },
  bold: { fontWeight: '700' },

  sub: { fontSize: 12, color: '#777', marginBottom: 8 },
  flexTitle: { fontWeight: '600' },
  green: { color: '#0A8F2F', marginBottom: 10 },

  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    padding: 12,
    justifyContent: 'space-between',
  },

  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#777',
    marginRight: 10,
  },

  radioActive: { backgroundColor: '#0F7A6C' },

  optionText: { flex: 1, fontSize: 13 },
  tc: { color: '#2F80ED', marginTop: 6 },

  travellerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  travellerType: { marginLeft: 6, fontWeight: '600' },

  smallIcon: {
  width: 20,
  height: 20,
  resizeMode: 'contain',
},

  travellerBox: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  tickBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#2F80ED',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  travellerName: { fontSize: 14, fontWeight: '600' },

  bookingText: { fontSize: 12, color: '#777', marginBottom: 10 },

  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  link: { color: '#2F80ED', marginLeft: 8 },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  cta: {
    backgroundColor: '#0F7A6C',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },

  ctaText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
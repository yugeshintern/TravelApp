import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const FlightDetailsScreen = ({ navigation }) => {
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
            <Icon name="arrow-left" size={20} />
          </TouchableOpacity>

          <View>
            <Text style={styles.tripLabel}>Trip to</Text>
            <Text style={styles.tripCity}>Chennai</Text>
          </View>
        </View>

        {/* AIRLINE */}
        <View style={styles.airlineRow}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>AI</Text>
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
          <Text style={styles.cardTitle}>
            Cancellation Refund Policy
          </Text>

          <View style={styles.policyRow}>
            <Text style={styles.policyLabel}>
              Cancel Between(IST):
            </Text>
            <Text style={styles.policyLabel}>
              Cancellation Penalty:
            </Text>
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
          <Text style={styles.cardTitle}>
            Unsure of your Travel Plans
          </Text>
          <Text style={styles.sub}>
            Select a service to add flexibility to your trip
          </Text>

          <Text style={styles.flexTitle}>
            Free Date Change
          </Text>
          <Text style={styles.green}>
            Save up to ₹3450 in penalties
          </Text>

          <TouchableOpacity
            style={styles.option}
            onPress={() => setSelected(!selected)}
          >
            <View
              style={[
                styles.radio,
                selected && styles.radioActive,
              ]}
            />
            <Text style={styles.optionText}>
              Change Date until 2 hrs before departure
            </Text>
            <Text style={styles.price}>₹99</Text>
          </TouchableOpacity>

          <Text style={styles.tc}>T&C</Text>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.total}>
          For 1 Adult <Text style={styles.bold}>₹5,718</Text>
        </Text>

        <TouchableOpacity style={styles.cta}>
          <Text style={styles.ctaText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlightDetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  tripLabel: {
    fontSize: 13,
    color: '#777',
  },

  tripCity: {
    fontSize: 18,
    fontWeight: '700',
  },

  airlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#E21B23',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  logoText: {
    color: '#fff',
    fontWeight: '700',
  },

  airline: {
    fontSize: 15,
    fontWeight: '600',
  },

  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  time: {
    fontSize: 18,
    fontWeight: '700',
  },

  date: {
    fontSize: 12,
    color: '#777',
  },

  city: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },

  airport: {
    fontSize: 12,
    color: '#777',
    width: 150,
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
  },

  policyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  policyLabel: {
    fontSize: 12,
    color: '#777',
  },

  bold: {
    fontWeight: '700',
  },

  sub: {
    fontSize: 12,
    color: '#777',
    marginBottom: 10,
  },

  flexTitle: {
    fontSize: 14,
    fontWeight: '600',
  },

  green: {
    color: '#0A8F2F',
    marginBottom: 10,
  },

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

  radioActive: {
    backgroundColor: '#0F7A6C',
  },

  optionText: {
    flex: 1,
    fontSize: 13,
  },

  price: {
    fontWeight: '700',
  },

  tc: {
    color: '#2F80ED',
    marginTop: 6,
    fontSize: 12,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
  },

  total: {
    marginBottom: 10,
    fontSize: 14,
  },

  cta: {
    backgroundColor: '#0F7A6C',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },

  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
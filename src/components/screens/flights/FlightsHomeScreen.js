import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const FlightsHomeScreen = ({ navigation }) => {
  const [tripType, setTripType] = useState('oneway');

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Icon name="arrow-left" size={20} />
        </TouchableOpacity>

        <Text style={styles.title}>Flights Tickets</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TRIP TYPE */}
        <View style={styles.segment}>
          {['oneway', 'roundtrip', 'multicity'].map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.segmentItem,
                tripType === type && styles.segmentActive,
              ]}
              onPress={() => setTripType(type)}
            >
              <Text
                style={[
                  styles.segmentText,
                  tripType === type && styles.segmentTextActive,
                ]}
              >
                {type === 'oneway'
                  ? 'Oneway'
                  : type === 'roundtrip'
                  ? 'Roundtrip'
                  : 'Multicity'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* FROM / TO */}
        <View style={styles.row}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>From</Text>
            <Text style={styles.value}>Delhi <Text style={styles.code}>DEL</Text></Text>
            <Text style={styles.sub}>Delhi Airport</Text>
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>To</Text>
            <Text style={styles.value}>Chennai <Text style={styles.code}>MAA</Text></Text>
            <Text style={styles.sub}>Chennai International Airport</Text>
          </View>

          {/* SWAP ICON */}
          <View style={styles.swap}>
            <Icon name="repeat" size={16} color="#2F80ED" />
          </View>
        </View>

        {/* DATES */}
        <View style={styles.row}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Departure Date</Text>
            <Text style={styles.value}>26 Feb <Text style={styles.sub}>Thu,2026</Text></Text>
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Return Date</Text>
            <Text style={styles.value}>28 Feb <Text style={styles.sub}>Sat,2026</Text></Text>
          </View>
        </View>

        {/* TRAVELLER */}
        <View style={styles.fullBox}>
          <Text style={styles.label}>Traveller & Class</Text>
          <Text style={styles.value}>1, <Text style={styles.sub}>Eco/Prem. Eco</Text></Text>
        </View>

        {/* SPECIAL FARES */}
        <Text style={styles.section}>Special Fares</Text>

        <View style={styles.chipRow}>
          {[
            'Senior Citizen',
            'Armed Forces',
            'Doctor and Nurses',
          ].map((item, i) => (
            <View key={i} style={styles.chip}>
              <Text style={styles.chipTitle}>{item}</Text>
              <Text style={styles.chipSub}>Up to ₹600 off</Text>
            </View>
          ))}
        </View>

        <View style={styles.chipRow}>
          <View style={styles.blueChip}>
            <Text style={styles.blueTitle}>Travelling for work?</Text>
            <Text style={styles.blueSub}>
              Unlock Extra Savings & Benefits
            </Text>
          </View>

          <View style={styles.chip}>
            <Text style={styles.chipTitle}>Student</Text>
            <Text style={styles.greenSub}>
              Extra discounts/baggage
            </Text>
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* CTA */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cta}>
          <Text style={styles.ctaText}>Search Flights</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlightsHomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
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
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 16,
  },

  segment: {
    flexDirection: 'row',
    marginHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DADADA',
    overflow: 'hidden',
    marginBottom: 20,
  },

  segmentItem: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },

  segmentActive: {
    backgroundColor: '#EDEDED',
  },

  segmentText: {
    fontSize: 14,
    color: '#555',
  },

  segmentTextActive: {
    fontWeight: '600',
    color: '#000',
  },

  row: {
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  inputBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  fullBox: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginBottom: 16,
  },

  label: {
    fontSize: 12,
    color: '#777',
  },

  value: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,
  },

  sub: {
    fontSize: 12,
    color: '#777',
  },

  code: {
    fontSize: 12,
    color: '#999',
  },

  swap: {
    position: 'absolute',
    top: '35%',
    left: '48%',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },

  section: {
    fontSize: 15,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 12,
  },

  chipRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  chip: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  chipTitle: {
    fontSize: 14,
    fontWeight: '600',
  },

  chipSub: {
    fontSize: 12,
    color: '#0A8F2F',
    marginTop: 4,
  },

  greenSub: {
    fontSize: 12,
    color: '#0A8F2F',
    marginTop: 4,
  },

  blueChip: {
    flex: 1,
    borderRadius: 16,
    padding: 12,
    marginHorizontal: 4,
    borderWidth: 1.5,
    borderColor: '#2F80ED',
    backgroundColor: '#F2F7FF',
  },

  blueTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2F80ED',
  },

  blueSub: {
    fontSize: 12,
    color: '#2F80ED',
    marginTop: 4,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: '#F6F7F9',
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
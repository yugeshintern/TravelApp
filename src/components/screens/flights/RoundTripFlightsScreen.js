import React, { useState } from 'react';import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const RoundTripFlightsScreen = ({ navigation }) => {
  const [selectedFare, setSelectedFare] = useState('');
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
        <Text style={styles.title}>Flights Tickets</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ROUNDTRIP LABEL */}
        <Text style={styles.tripLabel}>Roundtrip</Text>

        {/* FROM / TO */}
        <View style={styles.row}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>From</Text>
            <Text style={styles.value}>
              Delhi <Text style={styles.code}>DEL</Text>
            </Text>
            <Text style={styles.sub}>Delhi Airport</Text>
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>To</Text>
            <Text style={styles.value}>
              Chennai <Text style={styles.code}>MAA</Text>
            </Text>
            <Text style={styles.sub}>
              Chennai International Airport
            </Text>
          </View>

          {/* SWAP */}
          <View style={styles.swap}>
  <Image
    source={require("../../../assets/direction.png")}
    style={styles.directionIcon}
  />
</View>
        </View>

        {/* DATES */}
        <View style={styles.row}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Departure Date</Text>
            <Text style={styles.value}>
              26 Feb <Text style={styles.sub}>Thu,2026</Text>
            </Text>
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Return Date</Text>
            <Text style={styles.value}>
              28 Feb <Text style={styles.sub}>Sat,2026</Text>
            </Text>
          </View>
        </View>

        {/* TRAVELLER */}
        <TouchableOpacity
            onPress={()=> navigation.navigate("TravellerClass")}>
        <View style={styles.fullBox}>
          <Text style={styles.label}>Traveller & Class</Text>
          <Text style={styles.value}>
            1, <Text style={styles.sub}>Eco/Prem. Eco</Text>
          </Text>
        </View>
        </TouchableOpacity>

        {/* SPECIAL FARES */}
        {/* SPECIAL FARES */}
<Text style={styles.section}>Special Fares</Text>

<View style={styles.chipRow}>
  {[
    {
      title: 'Senior Citizen',
      sub: 'Up to ₹600 off',
    },
    {
      title: 'Armed Forces',
      sub: 'Up to ₹600 off',
    },
    {
      title: 'Doctor and Nurses',
      sub: 'Up to ₹600 off',
    },
  ].map((item, i) => {
    const isSelected = selectedFare === item.title;

    return (
      <TouchableOpacity
        key={i}
        activeOpacity={0.8}
        onPress={() =>
          setSelectedFare(
            isSelected ? '' : item.title
          )
        }
        style={[
          styles.chip,
          isSelected && styles.activeGreenChip,
        ]}
      >
        <Text
          style={[
            styles.chipTitle,
            isSelected && styles.activeGreenText,
          ]}
        >
          {item.title}
        </Text>

        <Text
          style={[
            styles.green,
            isSelected && styles.activeGreenText,
          ]}
        >
          {item.sub}
        </Text>
      </TouchableOpacity>
    );
  })}
</View>

<View style={styles.chipRow}>
  {[
    {
      title: 'Travelling for work?',
      sub: 'Unlock Extra Savings & Benefits',
    },
    {
      title: 'Student',
      sub: 'Extra discounts/baggage',
    },
  ].map((item, i) => {
    const isSelected = selectedFare === item.title;

    return (
      <TouchableOpacity
        key={i}
        activeOpacity={0.8}
        onPress={() =>
          setSelectedFare(
            isSelected ? '' : item.title
          )
        }
        style={[
          styles.chip,
          isSelected && styles.activeGreenChip,
        ]}
      >
        <Text
          style={[
            styles.chipTitle,
            isSelected && styles.activeGreenText,
          ]}
        >
          {item.title}
        </Text>

        <Text
          style={[
            styles.green,
            isSelected && styles.activeGreenText,
          ]}
        >
          {item.sub}
        </Text>
      </TouchableOpacity>
    );
  })}
</View>
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* CTA */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cta}
        onPress={()=> navigation.navigate("FlightsList")}>
          <Text style={styles.ctaText}>Search Flights</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RoundTripFlightsScreen;
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
  backIcon: {
  width: 20,
  height: 20,
  resizeMode: 'contain',
},

  title: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 16,
  },

  tripLabel: {
    fontSize: 15,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 12,
  },

  activeGreenChip: {
  backgroundColor: '#EAF8EE',
  borderColor: '#22C55E',
},

activeGreenText: {
  color: '#16A34A',
},

activeBlueChip: {
  backgroundColor: '#EEF5FF',
  borderColor: '#2F80ED',
},

activeBlueText: {
  color: '#2F80ED',
},

  row: {
    flexDirection: 'row',
    marginHorizontal: 16,
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

  top: '50%',
  left: '50%',

  transform: [
    { translateX: -18 },
    { translateY: -18 },
  ],

  width: 36,
  height: 36,
  borderRadius: 18,

  backgroundColor: '#FFFFFF',

  alignItems: 'center',
  justifyContent: 'center',

  borderWidth: 1,
  borderColor: '#E3E3E3',

  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 4,
  shadowOffset: {
    width: 0,
    height: 2,
  },

  elevation: 3,
  zIndex: 20,
},

  directionIcon: {
  width: 15,
  height: 15,
  resizeMode: 'contain',
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

  green: {
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
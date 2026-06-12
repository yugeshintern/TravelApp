import React, { useState } from 'react';import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const MultiCityFlightsScreen = ({ navigation }) => {
  const [selectedFare, setSelectedFare] = useState('');
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

          <Text style={styles.headerTitle}>Flights Tickets</Text>
        </View>

        {/* TITLE */}
        <Text style={styles.sectionTitle}>Multicity</Text>

        {/* FROM TO DATE */}
        <View style={styles.row}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>From</Text>
            <Text style={styles.value}>Delhi</Text>
            <Text style={styles.sub}>Delhi</Text>
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>To</Text>
            <Text style={styles.value}>Chennai</Text>
            <Text style={styles.sub}>Chennai</Text>
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>26 Feb</Text>
            <Text style={styles.sub}>Fri</Text>
          </View>
        </View>

        {/* ADD CITY */}
        <TouchableOpacity style={styles.addCity}>
          <Text style={styles.addCityText}>+ Add City</Text>
        </TouchableOpacity>

        {/* TRAVELLER */}
        <TouchableOpacity style={styles.travellerBox}
            onPress={()=> navigation.navigate("TravellerClass")}>
          <Text style={styles.label}>Traveller & Class</Text>
          <Text style={styles.value}>1, Eco/Prem. Eco</Text>
        </TouchableOpacity>

        {/* SPECIAL FARES */}
<Text style={styles.sectionTitle}>Special Fares</Text>

<View style={styles.fareRow}>

  {/* Senior Citizen */}
  <TouchableOpacity
    style={[
      styles.fareChip,
      selectedFare === 'Senior Citizen' &&
        styles.activeGreenChip,
    ]}
    onPress={() =>
      setSelectedFare(
        selectedFare === 'Senior Citizen'
          ? ''
          : 'Senior Citizen'
      )
    }
  >
    <Text
      style={[
        styles.fareTitle,
        selectedFare === 'Senior Citizen' &&
          styles.activeGreenText,
      ]}
    >
      Senior Citizen
    </Text>

    <Text
      style={[
        styles.green,
        selectedFare === 'Senior Citizen' &&
          styles.activeGreenText,
      ]}
    >
      Up to ₹600 off
    </Text>
  </TouchableOpacity>

  {/* Armed Forces */}
  <TouchableOpacity
    style={[
      styles.fareChip,
      selectedFare === 'Armed Forces' &&
        styles.activeGreenChip,
    ]}
    onPress={() =>
      setSelectedFare(
        selectedFare === 'Armed Forces'
          ? ''
          : 'Armed Forces'
      )
    }
  >
    <Text
      style={[
        styles.fareTitle,
        selectedFare === 'Armed Forces' &&
          styles.activeGreenText,
      ]}
    >
      Armed Forces
    </Text>

    <Text
      style={[
        styles.green,
        selectedFare === 'Armed Forces' &&
          styles.activeGreenText,
      ]}
    >
      Up to ₹600 off
    </Text>
  </TouchableOpacity>

  {/* Doctor */}
  <TouchableOpacity
    style={[
      styles.fareChip,
      selectedFare === 'Doctor' &&
        styles.activeGreenChip,
    ]}
    onPress={() =>
      setSelectedFare(
        selectedFare === 'Doctor'
          ? ''
          : 'Doctor'
      )
    }
  >
    <Text
      style={[
        styles.fareTitle,
        selectedFare === 'Doctor' &&
          styles.activeGreenText,
      ]}
    >
      Doctor and Nurses
    </Text>

    <Text
      style={[
        styles.green,
        selectedFare === 'Doctor' &&
          styles.activeGreenText,
      ]}
    >
      Up to ₹600 off
    </Text>
  </TouchableOpacity>

</View>

<View style={styles.fareRow}>

  {/* Travelling for work */}
  <TouchableOpacity
    style={[
      styles.fareChip,
      selectedFare === 'Travelling for work?' &&
        styles.activeGreenChip,
    ]}
    onPress={() =>
      setSelectedFare(
        selectedFare === 'Travelling for work?'
          ? ''
          : 'Travelling for work?'
      )
    }
  >
    <Text
      style={[
        styles.fareTitle,
        selectedFare === 'Travelling for work?' &&
          styles.activeGreenText,
      ]}
    >
      Travelling for work?
    </Text>

    <Text
      style={[
        styles.green,
        selectedFare === 'Travelling for work?' &&
          styles.activeGreenText,
      ]}
    >
      Unlock Extra Savings & Benefits
    </Text>
  </TouchableOpacity>

  {/* Student */}
  <TouchableOpacity
    style={[
      styles.fareChip,
      selectedFare === 'Student' &&
        styles.activeGreenChip,
    ]}
    onPress={() =>
      setSelectedFare(
        selectedFare === 'Student'
          ? ''
          : 'Student'
      )
    }
  >
    <Text
      style={[
        styles.fareTitle,
        selectedFare === 'Student' &&
          styles.activeGreenText,
      ]}
    >
      Student
    </Text>

    <Text
      style={[
        styles.green,
        selectedFare === 'Student' &&
          styles.activeGreenText,
      ]}
    >
      Extra discounts/baggage
    </Text>
  </TouchableOpacity>

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

export default MultiCityFlightsScreen;
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

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginHorizontal: 16,
    marginBottom: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  inputBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 12,
    padding: 12,
    marginRight: 8,
  },

  label: {
    fontSize: 11,
    color: '#888',
  },

  value: {
    fontSize: 14,
    fontWeight: '600',
  },

  sub: {
    fontSize: 11,
    color: '#888',
  },

  addCity: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#2F80ED',
    borderStyle: 'dashed',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
  },

  addCityText: {
    color: '#2F80ED',
    fontWeight: '600',
  },

  travellerBox: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
  },

  fareRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 12,
  },

  fareChip: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 12,
    padding: 12,
    marginRight: 8,
  },

  fareTitle: {
    fontSize: 13,
    fontWeight: '600',
  },

  green: {
    color: '#0A8F2F',
    fontSize: 12,
    marginTop: 4,
  },

  blueChip: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#2F80ED',
    borderRadius: 12,
    padding: 12,
    marginRight: 8,
  },

  blueTitle: {
    color: '#2F80ED',
    fontWeight: '600',
  },

  blueSub: {
    color: '#2F80ED',
    fontSize: 12,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
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
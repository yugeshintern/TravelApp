import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const PassengerDetailsAdding = ({ navigation }) => {
  const [gender, setGender] = useState('male');
  const [berth, setBerth] = useState('none');

  return (
    <SafeAreaView style={styles.container}>

      {/* BACKGROUND FADED CONTENT */}
      <View style={styles.background}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={22} color="#000" />
        </TouchableOpacity>

        <Text style={styles.trainTitle}>20605 Ms Tcn Sf Exp</Text>
        <Text style={styles.trainSub}>1A – GN – Thu, 26 Feb</Text>

        <Text style={styles.bgLabel}>Boarding Station</Text>
      </View>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>

        <ScrollView showsVerticalScrollIndicator={false}>

          {/* TITLE */}
          <Text style={styles.title}>Add Passenger Details</Text>

          {/* NAME */}
          <TextInput
            placeholder="Full name as per Govt. ID"
            placeholderTextColor="#8A8A8A"
            style={styles.input}
          />

          {/* AGE */}
          <TextInput
            placeholder="Age"
            placeholderTextColor="#8A8A8A"
            style={styles.input}
          />

          {/* GENDER */}
          <Text style={styles.label}>Gender</Text>

          <View style={styles.row}>
            <TouchableOpacity
              style={styles.genderBox}
              onPress={() => setGender('male')}
            >
              <Text style={styles.genderText}>Male</Text>

              <View style={[
                styles.radioOuter,
                gender === 'male' && styles.radioActive
              ]}>
                {gender === 'male' && <View style={styles.radioInner} />}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.genderBox}
              onPress={() => setGender('female')}
            >
              <Text style={styles.genderText}>FeMale</Text>

              <View style={[
                styles.radioOuter,
                gender === 'female' && styles.radioActive
              ]}>
                {gender === 'female' && <View style={styles.radioInner} />}
              </View>
            </TouchableOpacity>
          </View>

          {/* BERTH INPUT */}
          <TextInput
            placeholder="Berth Preference"
            placeholderTextColor="#8A8A8A"
            style={styles.input}
          />

          {/* BERTH OPTIONS */}
          <View style={styles.berthRow}>
            {[
              { label: 'No Preference', value: 'none' },
              { label: 'Lower Berth', value: 'lower' },
              { label: 'Upper Berth', value: 'upper' },
            ].map((item) => (
              <TouchableOpacity
                key={item.value}
                style={styles.berthItem}
                onPress={() => setBerth(item.value)}
              >
                <View style={[
                  styles.smallRadio,
                  berth === item.value && styles.smallRadioActive
                ]}>
                  {berth === item.value && <View style={styles.smallInner} />}
                </View>
                <Text style={styles.berthText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.berthRow}>
            {[
              { label: 'Cabin', value: 'cabin' },
              { label: 'Coupe', value: 'coupe' },
            ].map((item) => (
              <TouchableOpacity
                key={item.value}
                style={styles.berthItem}
                onPress={() => setBerth(item.value)}
              >
                <View style={[
                  styles.smallRadio,
                  berth === item.value && styles.smallRadioActive
                ]}>
                  {berth === item.value && <View style={styles.smallInner} />}
                </View>
                <Text style={styles.berthText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* COUNTRY */}
          <TextInput
            placeholder="India"
            placeholderTextColor="#8A8A8A"
            style={styles.input}
          />

          {/* BUTTON */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save Passenger</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>

    </SafeAreaView>
  );
};

export default PassengerDetailsAdding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000030',
  },

  /* BACKGROUND */
  background: {
    paddingTop: 20,
    alignItems: 'center',
    opacity: 0.4,
  },

  backBtn: {
    position: 'absolute',
    left: 20,
    top: 10,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E6E6E6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  trainTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },

  trainSub: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },

  bgLabel: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },

  /* SHEET */
  sheet: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    marginTop: 80,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1.5,
    borderColor: '#CFCFCF',
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 55,
    marginBottom: 15,
    backgroundColor: '#F4F4F4',
  },

  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  genderBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: '#CFCFCF',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginRight: 10,
    alignItems: 'center',
  },

  genderText: {
    fontSize: 16,
    color: '#8A8A8A',
  },

  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#CFCFCF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioActive: {
    borderColor: '#1E6DFF',
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1E6DFF',
  },

  berthRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },

  berthItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 10,
  },

  berthText: {
    marginLeft: 6,
    color: '#777',
  },

  smallRadio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: '#CFCFCF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  smallRadioActive: {
    borderColor: '#1E6DFF',
  },

  smallInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1E6DFF',
  },

  button: {
    backgroundColor: '#0F7A7A',
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
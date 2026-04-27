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

const AddTraveller = ({ navigation }) => {
  const [gender, setGender] = useState(null);
  const [wheelchair, setWheelchair] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={22} color="#000" />
          </TouchableOpacity>

          <Text style={styles.title}>Add Traveller</Text>
        </View>

        {/* INFO CARD */}
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            <Text style={styles.bold}>Important:</Text> Enter name as mentioned on your passport or Government approved IDs.{'\n'}
            Please ensure that the Frequent Flyer No entered here is against the same passenger name otherwise the points will not be updated by the airline.{'\n'}
            *Wheelchair is available for DEL-MAA and request is subject to availability with the Airline. Please check with the Airlines before travel
          </Text>
        </View>

        {/* GENDER */}
        <View style={styles.genderRow}>
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

        {/* INPUTS */}
        <TextInput
          placeholder="Name"
          placeholderTextColor="#8A8A8A"
          style={styles.input}
        />

        <TextInput
          placeholder="Age"
          placeholderTextColor="#8A8A8A"
          style={styles.input}
        />

        {/* FREQUENT TRAVELLER */}
        <Text style={styles.sectionTitle}>Frequent Traveller No</Text>
        <Text style={styles.subText}>Avail extra benefits & earn points</Text>

        <TextInput
          placeholder="Frequent Flyer Airline"
          placeholderTextColor="#8A8A8A"
          style={styles.input}
        />

        <TextInput
          placeholder="Frequent Flyer No"
          placeholderTextColor="#8A8A8A"
          style={styles.input}
        />

        {/* CHECKBOX */}
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setWheelchair(!wheelchair)}
        >
          <View style={[
            styles.checkbox,
            wheelchair && styles.checkboxActive
          ]} />

          <Text style={styles.checkboxText}>
            I require wheelchair <Text style={styles.optional}>(Optional)</Text>
          </Text>
        </TouchableOpacity>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default AddTraveller;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  /* HEADER */
  header: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  backBtn: {
    position: 'absolute',
    left: 20,
    top: 0,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E6E6E6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },

  /* INFO CARD */
  infoCard: {
    backgroundColor: '#E9DDB8',
    marginHorizontal: 20,
    borderRadius: 24,
    padding: 18,
    marginTop: 20,
  },

  infoText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },

  bold: {
    fontWeight: '700',
  },

  /* GENDER */
  genderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingHorizontal: 20,
  },

  genderBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: '#BDBDBD',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginRight: 10,
    alignItems: 'center',
  },

  genderText: {
    fontSize: 16,
    color: '#6F6F6F',
  },

  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#BDBDBD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioActive: {
    borderColor: '#0F7A7A',
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0F7A7A',
  },

  /* INPUT */
  input: {
    borderWidth: 1.5,
    borderColor: '#CFCFCF',
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 55,
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: '#F5F5F5',
    fontSize: 15,
    color: '#333',
  },

  /* SECTION */
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 20,
    marginLeft: 20,
  },

  subText: {
    fontSize: 14,
    color: '#7A7A7A',
    marginLeft: 20,
    marginTop: 4,
  },

  /* CHECKBOX */
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: 20,
  },

  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#8A8A8A',
    marginRight: 12,
  },

  checkboxActive: {
    backgroundColor: '#0F7A7A',
    borderColor: '#0F7A7A',
  },

  checkboxText: {
    fontSize: 16,
    color: '#333',
  },

  optional: {
    color: '#888',
  },

  /* BUTTON */
  button: {
    backgroundColor: '#0F7A7A',
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 40,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
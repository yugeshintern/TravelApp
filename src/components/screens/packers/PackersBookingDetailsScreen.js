import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const categories = [
  'Household items',
  'Electronics',
  'Commercial goods',
  'Others',
];

const PackersBookingDetailsScreen = ({ navigation }) => {
  const [pickupLift, setPickupLift] = useState(false);
  const [dropLift, setDropLift] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

          <Text style={styles.title}>Packers & Movers</Text>
        </View>

        {/* TITLE */}
        <Text style={styles.mainTitle}>Enter booking details</Text>

        {/* PICKUP */}
        <Text style={styles.label}>Pickup Address</Text>
        <TextInput
          style={styles.input}
          value="Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu..."
        />

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setPickupLift(!pickupLift)}
          >
            <View style={[styles.checkbox, pickupLift && styles.checked]} />
            <Text style={styles.checkText}>Has Service Lift?</Text>
          </TouchableOpacity>

          <TextInput style={styles.floorInput} placeholder="Floor No." />
        </View>

        {/* DROP */}
        <Text style={styles.label}>Drop Address</Text>
        <TextInput
          style={styles.input}
          value="Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu..."
        />

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setDropLift(!dropLift)}
          >
            <View style={[styles.checkbox, dropLift && styles.checked]} />
            <Text style={styles.checkText}>Has Service Lift?</Text>
          </TouchableOpacity>

          <TextInput style={styles.floorInput} placeholder="Floor No." />
        </View>

        {/* DATE */}
        <View style={styles.dateInput}>
          <Text style={styles.dateText}>24/02/2026</Text>
          <Icon name="calendar" size={20} />
        </View>

        {/* TIME */}
        <TextInput style={styles.input} placeholder="Pickup time" />

        {/* ITEMS */}
        <Text style={styles.label}>Items to be shifted</Text>

        <View style={styles.grid}>
          {categories.map((item) => {
            const selected = selectedCategory === item;

            return (
              <TouchableOpacity
                key={item}
                style={[
                  styles.chip,
                  selected && styles.chipActive,
                ]}
                onPress={() => setSelectedCategory(item)}
              >
                <Text
                  style={[
                    styles.chipText,
                    selected && { color: '#0F766E' },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default PackersBookingDetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
  },

  header: {
    marginTop: 50,
    alignItems: 'center',
  },

  backBtn: {
    position: 'absolute',
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
  },

  mainTitle: {
    fontSize: 20,
    fontWeight: '600',
    margin: 16,
  },

  label: {
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 6,
    fontWeight: '500',
  },

  input: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 16,
    padding: 14,
    fontSize: 14,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 10,
    justifyContent: 'space-between',
  },

  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1.5,
    borderColor: '#555',
    borderRadius: 6,
    marginRight: 10,
  },

  checked: {
    backgroundColor: '#0F766E',
    borderColor: '#0F766E',
  },

  checkText: {
    fontSize: 14,
  },

  floorInput: {
    width: 110,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
  },

  dateInput: {
    flexDirection: 'row',
    margin: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    padding: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dateText: {
    fontSize: 15,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 10,
  },

  chip: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#fff',
  },

  chipActive: {
    borderColor: '#0F766E',
    backgroundColor: '#E6F4F3',
  },

  chipText: {
    fontSize: 14,
  },

  button: {
    backgroundColor: '#0F766E',
    margin: 20,
    padding: 16,
    borderRadius: 30,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
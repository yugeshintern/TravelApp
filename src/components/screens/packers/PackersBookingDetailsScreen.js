import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';

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
            <Image
              source={require('../../../assets/back.png')}
              style={styles.backIcon}
            />
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
          placeholderTextColor="#000"
        />

        <View style={styles.row}>

          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setPickupLift(!pickupLift)}
          >
            <View
              style={[
                styles.checkbox,
                pickupLift && styles.checked,
              ]}
            />

            <Text style={styles.checkText}>
              Has Service Lift?
            </Text>
          </TouchableOpacity>

          <TextInput
            style={styles.floorInput}
            placeholder="Floor No."
            placeholderTextColor="#555"
          />
        </View>

        {/* DROP */}
        <Text style={styles.label}>Drop Address</Text>

        <TextInput
          style={styles.input}
          value="Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu..."
          placeholderTextColor="#000"
        />

        <View style={styles.row}>

          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setDropLift(!dropLift)}
          >
            <View
              style={[
                styles.checkbox,
                dropLift && styles.checked,
              ]}
            />

            <Text style={styles.checkText}>
              Has Service Lift?
            </Text>
          </TouchableOpacity>

          <TextInput
            style={styles.floorInput}
            placeholder="Floor No."
            placeholderTextColor="#555"
          />
        </View>

        {/* DATE */}
        <View style={styles.dateInput}>

          <Text style={styles.dateText}>
            24/02/2026
          </Text>

          <Image
            source={require('../../../assets/calender.png')}
            style={styles.calendarIcon}
          />

        </View>

        {/* TIME */}
        <TextInput
          style={styles.input}
          placeholder="Pickup time"
          placeholderTextColor="#555"
        />

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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('OrderSummary')}
        >
          <Text style={styles.buttonText}>
            Proceed
          </Text>
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
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },

  mainTitle: {
    fontSize: 20,
    fontWeight: '600',
    margin: 16,
    color: '#000',
  },

  label: {
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 6,
    fontWeight: '600',
    fontSize: 15,
    color: '#000',
  },

  input: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#7A7A7A',
    borderRadius: 16,
    padding: 14,
    fontSize: 14,
    color: '#000',
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
    backgroundColor: '#fff',
  },

  checked: {
    backgroundColor: '#0F766E',
    borderColor: '#0F766E',
  },

  checkText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },

  floorInput: {
    width: 110,
    borderWidth: 1,
    borderColor: '#7A7A7A',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#000',
  },

  dateInput: {
    flexDirection: 'row',
    margin: 16,
    borderWidth: 1,
    borderColor: '#7A7A7A',
    borderRadius: 16,
    padding: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  calendarIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  dateText: {
    fontSize: 15,
    color: '#000',
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
    borderColor: '#7A7A7A',
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
    color: '#000',
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
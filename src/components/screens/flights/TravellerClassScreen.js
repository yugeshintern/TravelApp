import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const TravellerClassScreen = ({ navigation }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabin, setCabin] = useState('eco');

  const Counter = ({ value, setValue, min = 0 }) => (
    <View style={styles.counter}>
      <TouchableOpacity
        onPress={() => value > min && setValue(value - 1)}
      >
        <Text style={styles.counterBtn}>−</Text>
      </TouchableOpacity>

      <Text style={styles.counterValue}>{value}</Text>

      <TouchableOpacity onPress={() => setValue(value + 1)}>
        <Text style={styles.counterBtn}>+</Text>
      </TouchableOpacity>
    </View>
  );

  const CabinBtn = ({ label, value }) => {
    const active = cabin === value;

    return (
      <TouchableOpacity
        style={[styles.cabinBtn, active && styles.cabinActive]}
        onPress={() => setCabin(value)}
      >
        <Text
          style={[
            styles.cabinText,
            active && styles.cabinTextActive,
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.sheet}>
        {/* TITLE */}
        <Text style={styles.title}>Traveller & Class</Text>

        <Text style={styles.subTitle}>
          Add Number of Travellers
        </Text>

        {/* ADULTS */}
        <View style={styles.row}>
          <View>
            <Text style={styles.label}>Adults</Text>
            <Text style={styles.desc}>
              12 yrs & above on the day of travel
            </Text>
          </View>
          <Counter value={adults} setValue={setAdults} min={1} />
        </View>

        {/* CHILDREN */}
        <View style={styles.row}>
          <View>
            <Text style={styles.label}>Children</Text>
            <Text style={styles.desc}>
              2 – 12 yrs on the day of travel
            </Text>
          </View>
          <Counter value={children} setValue={setChildren} />
        </View>

        {/* INFANTS */}
        <View style={styles.row}>
          <View>
            <Text style={styles.label}>Infants</Text>
            <Text style={styles.desc}>
              Under 2 yrs on the day of travel
            </Text>
          </View>
          <Counter value={infants} setValue={setInfants} />
        </View>

        {/* CABIN */}
        <Text style={styles.section}>Choose Cabin Class</Text>

        <View style={styles.cabinRow}>
          <CabinBtn
            label="Economy/Premium Economy"
            value="eco"
          />
          <CabinBtn
            label="Premium Economy"
            value="prem"
          />
        </View>

        <View style={styles.cabinRow}>
          <CabinBtn label="Business" value="bus" />
          <CabinBtn label="First Class" value="first" />
        </View>

        {/* CTA */}
        <TouchableOpacity style={styles.cta}>
          <Text style={styles.ctaText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TravellerClassScreen;
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000040',
    justifyContent: 'flex-end',
  },

  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },

  subTitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
  },

  desc: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },

  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  counterBtn: {
    fontSize: 18,
    width: 24,
    textAlign: 'center',
  },

  counterValue: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 8,
  },

  section: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },

  cabinRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  cabinBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 10,
  },

  cabinActive: {
    borderColor: '#2F80ED',
    backgroundColor: '#F2F7FF',
  },

  cabinText: {
    fontSize: 14,
    color: '#444',
  },

  cabinTextActive: {
    color: '#2F80ED',
    fontWeight: '600',
  },

  cta: {
    marginTop: 20,
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
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';

const TravellerClassScreen = ({ navigation, route }) => {
  // Read initial values passed from FlightsHomeScreen (fallback to defaults)
  const initial = route?.params?.travellers ?? { adults: 1, children: 0, infants: 0, cabin: 'eco' };
  const onDone = route?.params?.onDone;

  const [adults, setAdults] = useState(initial.adults);
  const [children, setChildren] = useState(initial.children);
  const [infants, setInfants] = useState(initial.infants);
  const [cabin, setCabin] = useState(initial.cabin);

  const handleDone = () => {
    if (onDone) {
      onDone({ adults, children, infants, cabin });
    }
    navigation.goBack();
  };

  const Counter = ({ value, setValue, min = 0, max = 9 }) => (
    <View style={styles.counter}>
      <TouchableOpacity
        onPress={() => value > min && setValue(value - 1)}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Text style={[styles.counterBtn, value <= min && styles.counterBtnDisabled]}>−</Text>
      </TouchableOpacity>

      <Text style={styles.counterValue}>{value}</Text>

      <TouchableOpacity
        onPress={() => value < max && setValue(value + 1)}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Text style={[styles.counterBtn, value >= max && styles.counterBtnDisabled]}>+</Text>
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
        <Text style={[styles.cabinText, active && styles.cabinTextActive]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  const totalTravellers = adults + children + infants;

  return (
    <Pressable style={styles.overlay} onPress={() => navigation.goBack()}>
      <Pressable style={styles.sheet} onPress={(e) => e.stopPropagation()}>
        {/* Handle bar */}
        <View style={styles.handle} />

        {/* TITLE */}
        <Text style={styles.title}>Traveller & Class</Text>
        <Text style={styles.subTitle}>Add Number of Travellers</Text>

        {/* ADULTS */}
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Text style={styles.label}>Adults</Text>
            <Text style={styles.desc}>12 yrs & above on the day of travel</Text>
          </View>
          <Counter value={adults} setValue={setAdults} min={1} />
        </View>

        {/* CHILDREN */}
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Text style={styles.label}>Children</Text>
            <Text style={styles.desc}>2 – 12 yrs on the day of travel</Text>
          </View>
          <Counter value={children} setValue={setChildren} />
        </View>

        {/* INFANTS */}
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Text style={styles.label}>Infants</Text>
            <Text style={styles.desc}>Under 2 yrs on the day of travel</Text>
          </View>
          <Counter value={infants} setValue={setInfants} max={adults} />
        </View>

        {/* Infants rule hint */}
        {infants >= adults && (
          <Text style={styles.hint}>
            ⚠️ Infants cannot exceed the number of adults
          </Text>
        )}

        {/* CABIN */}
        <Text style={styles.section}>Choose Cabin Class</Text>

        <View style={styles.cabinRow}>
          <CabinBtn label="Economy/Prem. Economy" value="eco" />
          <CabinBtn label="Premium Economy" value="prem" />
        </View>

        <View style={styles.cabinRow}>
          <CabinBtn label="Business" value="bus" />
          <CabinBtn label="First Class" value="first" />
        </View>

        {/* CTA */}
        <TouchableOpacity style={styles.cta} onPress={handleDone}>
          <Text style={styles.ctaText}>
            Done · {totalTravellers} Traveller{totalTravellers > 1 ? 's' : ''}
          </Text>
        </TouchableOpacity>
      </Pressable>
    </Pressable>
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
    paddingBottom: 36,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#DEDEDE',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  subTitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rowLeft: {
    flex: 1,
    paddingRight: 16,
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
    borderColor: '#DADADA',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  counterBtn: {
    fontSize: 20,
    width: 24,
    textAlign: 'center',
    color: '#0F7A6C',
    fontWeight: '600',
  },
  counterBtnDisabled: {
    color: '#CCC',
  },
  counterValue: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 10,
    minWidth: 16,
    textAlign: 'center',
  },
  section: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
    marginTop: 4,
  },
  cabinRow: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 10,
  },
  cabinBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  cabinActive: {
    borderColor: '#0F7A6C',
    backgroundColor: '#EAF5F3',
  },
  cabinText: {
    fontSize: 13,
    color: '#444',
    textAlign: 'center',
  },
  cabinTextActive: {
    color: '#0F7A6C',
    fontWeight: '600',
  },
  hint: {
    fontSize: 12,
    color: '#E07B00',
    marginTop: -12,
    marginBottom: 14,
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
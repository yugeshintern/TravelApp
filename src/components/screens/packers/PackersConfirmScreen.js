import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const dates = ['24 Tue', '25 Wed', '26 Thu', '27 Fri', '28 Sat'];

const PackersConfirmScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('24 Tue');
  const [addons, setAddons] = useState([]);

  const toggleAddon = (name) => {
    if (addons.includes(name)) {
      setAddons(addons.filter(a => a !== name));
    } else {
      setAddons([...addons, name]);
    }
  };

  const basePrice = 917;

  const addonPrices = {
    'Single-layer packing': 399,
    'Multi-layer packing': 799,
    'Unpacking': 399,
  };

  const total =
    basePrice +
    addons.reduce((sum, item) => sum + addonPrices[item], 0);

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

        {/* STEPPER */}
        <View style={styles.stepRow}>
          <View style={styles.done}><Icon name="check" size={14} color="#fff" /></View>
          <View style={styles.line} />
          <View style={styles.done}><Icon name="check" size={14} color="#fff" /></View>
          <View style={styles.line} />
          <View style={styles.active}><Icon name="calendar" size={14} color="#fff" /></View>
        </View>

        {/* DATE */}
        <Text style={styles.section}>Select shifting date</Text>
        <Text style={styles.month}>FEB 2026</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dates.map((d) => {
            const active = selectedDate === d;

            return (
              <TouchableOpacity
                key={d}
                style={[styles.dateBox, active && styles.activeDate]}
                onPress={() => setSelectedDate(d)}
              >
                <Text style={styles.dateText}>{d}</Text>
                <Text style={styles.price}>₹917</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* ADDONS */}
        <Text style={styles.section}>Recommended add-ons</Text>

        {[
          'Single-layer packing',
          'Multi-layer packing',
          'Unpacking',
        ].map((item) => {
          const selected = addons.includes(item);

          return (
            <View key={item} style={styles.addonRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.addonTitle}>{item}</Text>
                <Text style={styles.addonPrice}>
                  ₹{addonPrices[item]}
                </Text>
                <Text style={styles.desc}>
                  Incl. protective material for essential safety
                </Text>
              </View>

              <TouchableOpacity
                style={[
                  styles.addBtn,
                  selected && styles.addedBtn,
                ]}
                onPress={() => toggleAddon(item)}
              >
                <Text style={[
                  styles.addText,
                  selected && { color: '#fff' }
                ]}>
                  {selected ? 'Added' : 'Add'}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}

        {/* COUPON */}
        <Text style={styles.section}>Coupons & offers</Text>

        <View style={styles.couponRow}>
          <TextInput
            placeholder="Enter code here"
            style={styles.input}
          />
          <TouchableOpacity style={styles.applyBtn}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>

        {/* SUMMARY CARD */}
        <View style={styles.summaryCard}>
          <Icon name="calendar" size={18} />
          <Text style={styles.summaryText}>
            Shifting on: <Text style={styles.highlight}>28 Feb</Text> / 11:00 AM – 12:00 PM
          </Text>
        </View>

      </ScrollView>

      {/* BOTTOM */}
      <View style={styles.bottom}>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total Amount</Text>
          <Text style={styles.totalPrice}>₹{total}</Text>
        </View>

        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate("PackersBookingDetails")}>
          <Text style={styles.buttonText}>Confirm Your Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PackersConfirmScreen;
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

  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },

  done: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#0F766E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  active: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#0F766E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  line: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
  },

  section: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 16,
    marginTop: 10,
  },

  month: {
    marginHorizontal: 16,
    color: '#777',
    marginTop: 6,
  },

  dateBox: {
    marginLeft: 16,
    marginTop: 10,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },

  activeDate: {
    borderColor: '#0F766E',
    backgroundColor: '#E6F4F3',
  },

  dateText: {
    fontWeight: '600',
  },

  price: {
    marginTop: 4,
  },

  addonRow: {
    flexDirection: 'row',
    margin: 16,
  },

  addonTitle: {
    fontSize: 15,
    fontWeight: '600',
  },

  addonPrice: {
    marginTop: 6,
    fontWeight: '600',
  },

  desc: {
    marginTop: 6,
    color: '#666',
  },

  addBtn: {
    borderWidth: 1,
    borderColor: '#0F766E',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'flex-start',
  },

  addedBtn: {
    backgroundColor: '#0F766E',
  },

  addText: {
    color: '#0F766E',
    fontWeight: '600',
  },

  couponRow: {
    flexDirection: 'row',
    margin: 16,
  },

  input: {
    flex: 1,
    backgroundColor: '#EDEDED',
    borderRadius: 25,
    paddingHorizontal: 16,
  },

  applyBtn: {
    marginLeft: 10,
    backgroundColor: '#EDEDED',
    borderRadius: 25,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  applyText: {
    fontWeight: '600',
  },

  summaryCard: {
    flexDirection: 'row',
    backgroundColor: '#EAF0F8',
    margin: 16,
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  summaryText: {
    marginLeft: 10,
    fontSize: 14,
  },

  highlight: {
    color: '#1E3A8A',
    fontWeight: '600',
  },

  bottom: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  totalText: {
    fontSize: 16,
    fontWeight: '600',
  },

  totalPrice: {
    fontSize: 16,
    fontWeight: '700',
  },

  button: {
    backgroundColor: '#0F766E',
    padding: 16,
    borderRadius: 30,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
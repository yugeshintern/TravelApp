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

const dates = [
  { id: 1, label: '24 Tue', price: 917 },
  { id: 2, label: '25 Wed', price: 917 },
  { id: 3, label: '26 Thu', price: 917 },
  { id: 4, label: '27 Fri', price: 917 },
  { id: 5, label: '28 Sat', price: 917 },
];

const addonsData = [
  {
    id: 1,
    title: 'Single-layer packing',
    price: 399,
    desc: 'Incl. single layer of protective material like foam or corrugated sheets for essential protection',
  },
  {
    id: 2,
    title: 'Multi-layer packing',
    price: 799,
    desc: 'Incl. single layer of protective material like foam or corrugated sheets for essential protection',
  },
  {
    id: 3,
    title: 'Unpacking all the packed items',
    price: 399,
    desc: 'Unpacking of all items packed by us',
  },
];

const PackersDateScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleAddon = (item) => {
    if (selectedAddons.includes(item.id)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== item.id));
    } else {
      setSelectedAddons([...selectedAddons, item.id]);
    }
  };

  const getTotal = () => {
    let total = selectedDate.price;

    addonsData.forEach((item) => {
      if (selectedAddons.includes(item.id)) {
        total += item.price;
      }
    });

    return total;
  };

  return (
    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} />
          </TouchableOpacity>
          <Text style={styles.title}>Packers & Movers</Text>
        </View>

        {/* STEP INDICATOR */}
        <View style={styles.stepRow}>
          <View style={styles.doneStep}><Icon name="check" size={16} color="#fff" /></View>
          <View style={styles.line} />
          <View style={styles.doneStep}><Icon name="check" size={16} color="#fff" /></View>
          <View style={styles.line} />
          <View style={styles.activeStep}><Icon name="calendar" size={16} color="#fff" /></View>
        </View>

        {/* DATE */}
        <Text style={styles.sectionTitle}>Select shifting date</Text>
        <Text style={styles.month}>FEB 2026</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dates.map((item) => {
            const isSelected = selectedDate.id === item.id;

            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.dateBox,
                  isSelected && styles.selectedDateBox,
                ]}
                onPress={() => setSelectedDate(item)}
              >
                <Text style={styles.dateText}>{item.label}</Text>
                <Text style={styles.datePrice}>₹{item.price}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* ADDONS */}
        <Text style={styles.sectionTitle}>Recommended add-ons</Text>

        {addonsData.map((item) => {
          const selected = selectedAddons.includes(item.id);

          return (
            <View key={item.id} style={styles.addonCard}>
              <View style={{ flex: 1 }}>
                <Text style={styles.addonTitle}>{item.title}</Text>
                <Text style={styles.price}>₹{item.price}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
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
        <Text style={styles.sectionTitle}>Coupons & offers</Text>

        <View style={styles.couponRow}>
          <TextInput
            placeholder="Enter code here"
            style={styles.input}
          />
          <TouchableOpacity style={styles.applyBtn}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* BOTTOM */}
      <View style={styles.bottom}>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total Amount</Text>
          <Text style={styles.totalPrice}>₹{getTotal()}</Text>
        </View>

        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate("PackersSlot")}>
          <Text style={styles.buttonText}>Select pickup slot</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default PackersDateScreen;
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
    width: 38,
    height: 38,
    borderRadius: 19,
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

  doneStep: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#0F766E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeStep: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#0F766E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  line: {
    flex: 1,
    height: 1,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 16,
    marginTop: 10,
  },

  month: {
    marginHorizontal: 16,
    marginTop: 10,
    color: '#777',
    fontWeight: '600',
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

  selectedDateBox: {
    borderColor: '#0F766E',
    backgroundColor: '#E6F4F3',
  },

  dateText: {
    fontWeight: '600',
  },

  datePrice: {
    marginTop: 4,
  },

  addonCard: {
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
  },

  addonTitle: {
    fontSize: 15,
    fontWeight: '600',
  },

  price: {
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

  bottom: {
    borderTopWidth: 1,
    borderColor: '#eee',
    padding: 16,
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
    fontSize: 16,
    fontWeight: '600',
  },
});
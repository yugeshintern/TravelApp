import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const slots = {
  morning: [
    '6:00AM-7:00AM',
    '7:00AM-8:00AM',
    '8:00AM-9:00AM',
    '9:00AM-10:00AM',
    '10:00AM-11:00AM',
    '11:00AM-12:00PM',
  ],
  afternoon: [
    '12:00PM-1:00PM',
    '1:00PM-2:00PM',
    '2:00PM-3:00PM',
    '3:00PM-4:00PM',
  ],
  evening: [
    '4:00PM-5:00PM',
    '5:00PM-6:00PM',
    '6:00PM-7:00PM',
  ],
};

const PackersSlotScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('morning');
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <View style={styles.container}>

      {/* BACK */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} />
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>

        <Text style={styles.title}>Select pickup slot</Text>

        {/* DATE */}
        <View style={styles.dateRow}>
          <Icon name="chevron-left" size={20} />
          <Text style={styles.date}>24 Feb 2026</Text>
          <Icon name="chevron-right" size={20} />
        </View>

        {/* TABS */}
        <View style={styles.tabRow}>

          {['morning', 'afternoon', 'evening'].map((item) => {
            const active = selectedTab === item;

            return (
              <TouchableOpacity
                key={item}
                style={[styles.tab, active && styles.activeTab]}
                onPress={() => setSelectedTab(item)}
              >
                <Icon
                  name={item === 'morning' ? 'cloud' : item === 'afternoon' ? 'sun' : 'sunset'}
                  size={16}
                  color={active ? '#0F766E' : '#777'}
                />
                <Text style={[styles.tabText, active && { color: '#0F766E' }]}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Text>
                <Text style={styles.subText}>
                  {item === 'morning'
                    ? '8AM-12PM'
                    : item === 'afternoon'
                    ? '12PM-4PM'
                    : '4PM-7PM'}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* SLOT LIST */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {slots[selectedTab].map((time, index) => {
            const isSelected = selectedSlot === time;

            return (
              <TouchableOpacity
                key={index}
                style={styles.slotRow}
                onPress={() => setSelectedSlot(time)}
              >
                <Text style={styles.slotText}>{time}</Text>

                {/* RADIO BUTTON */}
                <View style={[
                  styles.radio,
                  isSelected && styles.radioSelected
                ]}>
                  {isSelected && <View style={styles.innerDot} />}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirm slot</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default PackersSlotScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000040',
    justifyContent: 'flex-end',
  },

  backBtn: {
    position: 'absolute',
    top: 50,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    padding: 16,
    maxHeight: '85%',
  },

  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },

  dateRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  date: {
    marginHorizontal: 10,
    fontWeight: '600',
  },

  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  tab: {
    flex: 1,
    marginHorizontal: 4,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },

  activeTab: {
    borderColor: '#0F766E',
    backgroundColor: '#E6F4F3',
  },

  tabText: {
    fontWeight: '600',
    marginTop: 4,
  },

  subText: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },

  slotRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#F7F7F7',
    marginBottom: 10,
  },

  slotText: {
    fontSize: 14,
    fontWeight: '500',
  },

  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioSelected: {
    borderColor: '#0F766E',
  },

  innerDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0F766E',
  },

  button: {
    backgroundColor: '#0F766E',
    padding: 16,
    borderRadius: 30,
    marginTop: 10,
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

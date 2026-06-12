import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

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

  const handleSlotSelect = (time) => {
    setSelectedSlot(time);

    navigation.navigate('PackersConfirm', {
      selectedSlot: time,
      selectedTab,
      selectedDate: '24 Feb 2026',
    });
  };

  return (
    <View style={styles.container}>

      {/* TOP OVERLAY CLICK */}
      <TouchableOpacity
        activeOpacity={1}
        style={styles.overlayArea}
        onPress={() => navigation.goBack()}
      />

      {/* BACK */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../../assets/back.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>

        <Text style={styles.title}>Select pickup slot</Text>

        {/* DATE */}
        <View style={styles.dateRow}>

          <TouchableOpacity>
            <Image
              source={require('../../../assets/left.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

          <Text style={styles.date}>24 Feb 2026</Text>

          <TouchableOpacity>
            <Image
              source={require('../../../assets/right.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

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

                <Image
                  source={
                    item === 'morning'
                      ? require('../../../assets/morning.png')
                      : item === 'afternoon'
                      ? require('../../../assets/afternoon.png')
                      : require('../../../assets/evening.png')
                  }
                  style={[
                    styles.tabIcon,
                    {
                      tintColor: active ? '#0F766E' : '#777',
                    },
                  ]}
                />

                <Text
                  style={[
                    styles.tabText,
                    active && { color: '#0F766E' },
                  ]}
                >
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
                onPress={() => handleSlotSelect(time)}
              >
                <Text style={styles.slotText}>{time}</Text>

                {/* RADIO BUTTON */}
                <View
                  style={[
                    styles.radio,
                    isSelected && styles.radioSelected,
                  ]}
                >
                  {isSelected && <View style={styles.innerDot} />}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('PackersConfirm', {
              selectedSlot,
              selectedTab,
              selectedDate: '24 Feb 2026',
            })
          }
        >
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

  overlayArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '25%',
  },

  backBtn: {
    position: 'absolute',
    top: 50,
    left: 16,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  arrowIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  tabIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginBottom: 4,
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
    fontSize: 16,
  },

  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  tab: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 12,
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
    fontSize: 16,
    color: '#000',
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
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },

  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
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
    fontSize: 18,
  },
});
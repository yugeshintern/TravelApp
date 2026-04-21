import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const generalData = [
  { date: '26 Feb', day: 'Thu', status: 'AVL 1', sub: 'Available', type: 'available' },
  { date: '27 Feb', day: 'Fri', status: 'WL 4', sub: '89% Chance', type: 'wl', alt: true },
  { date: '28 Feb', day: 'Sat', status: 'WL 4', sub: '89% Chance', type: 'wl', alt: true },
  { date: '28 Feb', day: 'Sat', status: 'WL 1', sub: '90% Chance', type: 'wl' },
  { date: '01 Mar', day: 'Sun', status: 'AVL 1', sub: 'Available', type: 'available' },
  { date: '02 Mar', day: 'Mon', status: 'WL 20', sub: '78% Chance', type: 'wl', alt: true },
  { date: '02 Mar', day: 'Mon', status: 'AVL 1', sub: 'Available', type: 'available' },
  { date: '03 Mar', day: 'Tue', status: 'AVL 1', sub: 'Available', type: 'available' },
];

const disabledData = [
  { date: '26 Feb', day: 'Thu' },
  { date: '27 Feb', day: 'Fri' },
  { date: '28 Feb', day: 'Sat' },
  { date: '01 Mar', day: 'Sun' },
  { date: '02 Mar', day: 'Mon' },
];

const TrainAvailabilityScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} />
          </TouchableOpacity>

          <Text style={styles.title}>20605 Ms Tcn Sf Exp</Text>
          <Text style={styles.subtitle}>16:00 MS – 14h – 06:00 TCN</Text>
        </View>

        {/* GENERAL */}
        <Text style={styles.section}>General</Text>
        {generalData.map((item, index) => (
          <Row item={item} key={index} />
        ))}

        {/* SENIOR */}
        <Text style={styles.section}>Senior Citizen</Text>
        {disabledData.map((item, index) => (
          <DisabledRow item={item} key={index} />
        ))}

        {/* LADIES */}
        <Text style={styles.section}>Ladies</Text>
        {disabledData.map((item, index) => (
          <DisabledRow item={item} key={index} />
        ))}

      </ScrollView>
    </View>
  );
};

export default TrainAvailabilityScreen;
const Row = ({ item }) => {
  return (
    <View style={styles.row}>

      {/* DATE */}
      <View>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.day}>{item.day}</Text>
      </View>

      {/* STATUS */}
      <View style={{ flex: 1, marginLeft: 20 }}>
        <Text style={styles.status}>{item.status}</Text>
        <Text style={[
          styles.sub,
          item.type === 'available' ? styles.green : styles.green
        ]}>
          {item.sub}
        </Text>
      </View>

      {/* BUTTONS */}
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <TouchableOpacity style={styles.bookBtn}>
          <Text style={styles.bookText}>Book</Text>
          <Text style={styles.price}>₹2770</Text>
        </TouchableOpacity>

        {item.alt && (
          <TouchableOpacity style={styles.altBtn}>
            <Text style={styles.altText}>Alternate</Text>
            <Text style={styles.price}>₹3920</Text>
          </TouchableOpacity>
        )}
      </View>

    </View>
  );
};
const DisabledRow = ({ item }) => {
  return (
    <View style={styles.row}>

      <View>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.day}>{item.day}</Text>
      </View>

      <View style={{ flex: 1, marginLeft: 20 }}>
        <Text style={styles.notAvailable}>Not Available</Text>
      </View>

      <View style={styles.disabledBtn}>
        <Text style={styles.disabledText}>Book</Text>
        <Text style={styles.disabledText}>₹2770</Text>
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },

  header: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  backBtn: {
    position: 'absolute',
    left: 16,
    top: 0,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  subtitle: {
    marginTop: 4,
    color: '#777',
  },

  section: {
    marginTop: 20,
    marginLeft: 16,
    fontSize: 16,
    color: '#1E6BF1',
    fontWeight: '600',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },

  date: {
    fontSize: 15,
    fontWeight: '600',
  },

  day: {
    fontSize: 13,
    color: '#777',
  },

  status: {
    fontSize: 15,
    fontWeight: '600',
    color: 'green',
  },

  sub: {
    fontSize: 13,
    marginTop: 2,
  },

  green: {
    color: 'green',
  },

  notAvailable: {
    color: 'red',
    fontWeight: '500',
  },

  /* BUTTONS */
  bookBtn: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignItems: 'center',
  },

  altBtn: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignItems: 'center',
  },

  bookText: {
    color: 'green',
    fontWeight: '600',
  },

  altText: {
    color: 'green',
    fontWeight: '600',
  },

  price: {
    color: 'green',
    fontSize: 12,
  },

  disabledBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignItems: 'center',
  },

  disabledText: {
    color: '#999',
    fontSize: 12,
  },
});
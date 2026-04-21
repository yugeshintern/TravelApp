import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HotelsHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Hotels Booking</Text>
      </View>

      {/* ICON + TITLE */}
      <View style={styles.titleRow}>
        <Icon name="home" size={28} />
        <Text style={styles.title}>Hotels & Homestays</Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>

        {/* LOCATION */}
        <View style={styles.locationRow}>
          <View>
            <Text style={styles.label}>City, Area or Property Name</Text>
            <Text style={styles.city}>Chennai</Text>
          </View>

          <TouchableOpacity style={styles.mapBtn}>
            <Icon name="plus" size={14} color="#2D3A8C" />
            <Text style={styles.mapText}> Select on map</Text>
          </TouchableOpacity>
        </View>

        {/* DIVIDER */}
        <View style={styles.divider} />

        {/* DATE + ROOM */}
        <View style={styles.rowSplit}>
          
          {/* LEFT */}
          <View style={styles.leftBlock}>
            <Text style={styles.date}>26 Feb – 27 Feb</Text>
            <Text style={styles.sub}>1 Night</Text>

            <TouchableOpacity style={styles.todayBtn}>
              <Text style={styles.todayText}>Today</Text>
            </TouchableOpacity>
          </View>

          {/* RIGHT */}
          <View style={styles.rightBlock}>
            <Text style={styles.room}>1 Room</Text>
            <Text style={styles.sub}>2 Adults</Text>
          </View>

        </View>
      </View>

      {/* CTA BUTTON */}
      <TouchableOpacity style={styles.searchBtn}>
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>

    </View>
  );
};

export default HotelsHomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 16,
  },

  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 38,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 30,
    borderRadius: 18,
    padding: 16,
    elevation: 5,
  },

  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  label: {
    fontSize: 12,
    color: '#777',
  },

  city: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 2,
  },

  mapBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  mapText: {
    fontSize: 12,
    color: '#2D3A8C',
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 14,
  },

  rowSplit: {
    flexDirection: 'row',
  },

  leftBlock: {
    flex: 1,
  },

  rightBlock: {
    flex: 1,
    alignItems: 'flex-end',
  },

  date: {
    fontSize: 16,
    fontWeight: '600',
  },

  room: {
    fontSize: 16,
    fontWeight: '600',
  },

  sub: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },

  todayBtn: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#3B82F6',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 18,
    alignSelf: 'flex-start',
    backgroundColor: '#EAF2FF',
  },

  todayText: {
    color: '#3B82F6',
    fontWeight: '600',
  },

  searchBtn: {
    backgroundColor: '#0F7A6C',
    marginHorizontal: 60,
    marginTop: 30,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 4,
  },

  searchText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
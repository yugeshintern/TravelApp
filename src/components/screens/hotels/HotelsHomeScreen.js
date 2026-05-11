import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const HotelsHomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <TouchableOpacity
  style={styles.backBtn}
  onPress={() => navigation.goBack()}
>
  <Image
    source={require("../../../assets/back.png")}
    style={styles.backIcon}
  />
</TouchableOpacity>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Hotels Booking
        </Text>

        <View style={{ width: 52 }} />
      </View>

      {/* HOTEL TITLE */}
      <View style={styles.titleRow}>

        {/* HOTEL ICON */}
        <View style={styles.hotelIconWrap}>
          <Image
            source={require('../../../assets/hotel-ic.png')}
            style={styles.hotelIcon}
          />
        </View>

        <Text style={styles.title}>
          Hotels & Homestays
        </Text>
      </View>

      {/* MAIN CARD */}
      <View style={styles.card}>

        {/* TOP LOCATION ROW */}
        <View style={styles.locationRow}>

          <View style={styles.locationLeft}>
            <Text style={styles.label}>
              City, Area or Property Name
            </Text>

            <Text style={styles.city}>
              Chennai
            </Text>
          </View>

          {/* MAP BUTTON */}
          <TouchableOpacity style={styles.mapBtn}>

            <Image
              source={require('../../../assets/beta.png')}
              style={styles.mapIcon}
            />

            <Text style={styles.mapText}>
              Select on map
            </Text>

          </TouchableOpacity>
        </View>

        {/* DIVIDER */}
        <View style={styles.divider} />

        {/* BOTTOM ROW */}
        <View style={styles.bottomRow}>

          {/* LEFT SIDE */}
          <View style={styles.leftSection}>

            <Text style={styles.date}>
              26 Feb – 27 Feb
            </Text>

            <Text style={styles.sub}>
              1 Night
            </Text>

            <TouchableOpacity style={styles.todayBtn}>
              <Text style={styles.todayText}>
                Today
              </Text>
            </TouchableOpacity>
          </View>

          {/* VERTICAL DIVIDER */}
          <View style={styles.verticalDivider} />

          {/* RIGHT SIDE */}
          <View style={styles.rightSection}>

            <Text style={styles.room}>
              1 Room
            </Text>

            <Text style={styles.subRight}>
              2 Adults
            </Text>
          </View>

        </View>
      </View>

      {/* SEARCH BUTTON */}
      <TouchableOpacity
        style={styles.searchBtn}
        onPress={() => navigation.navigate('HotelsList')}
      >
        <Text style={styles.searchText}>
          Search
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default HotelsHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 24,
    marginTop: 58,
  },

  backBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,

    backgroundColor: '#EEF1F1',

    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },

  /* TITLE ROW */
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 54,
    paddingHorizontal: 28,
  },

  hotelIconWrap: {
    width: 44,
    height: 44,

    alignItems: 'center',
    justifyContent: 'center',
  },

  hotelIcon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',

    marginLeft: 14,
  },

  /* CARD */
  card: {
    backgroundColor: '#FFFFFF',

    marginHorizontal: 26,
    marginTop: 38,

    borderRadius: 28,

    paddingTop: 26,
    paddingBottom: 24,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
  },

  /* LOCATION ROW */
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 28,
  },

  locationLeft: {
    flex: 1,
  },

  label: {
    fontSize: 14,
    color: '#7A7A7A',
    marginBottom: 8,
  },

  city: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },

  /* MAP BTN */
  mapBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#D7D7D7',

    borderRadius: 26,

    paddingHorizontal: 18,
    paddingVertical: 12,

    backgroundColor: '#FFF',
  },

  mapIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginRight: 8,
  },

  mapText: {
    fontSize: 14,
    color: '#2C318F',
    fontWeight: '600',
  },

  /* DIVIDER */
  divider: {
    height: 1,
    backgroundColor: '#ECECEC',

    marginTop: 24,
  },

  /* BOTTOM ROW */
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },

  /* LEFT */
  leftSection: {
    flex: 1,
    paddingTop: 28,
    paddingHorizontal: 28,
  },

  date: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },

  sub: {
    marginTop: 10,

    fontSize: 15,
    color: '#7B7B7B',
  },

  /* TODAY BTN */
  todayBtn: {
    marginTop: 24,

    borderWidth: 1.5,
    borderColor: '#4D8DFF',

    backgroundColor: '#EDF4FF',

    borderRadius: 14,

    alignSelf: 'flex-start',

    paddingHorizontal: 32,
    paddingVertical: 12,
  },

  todayText: {
    color: '#4D8DFF',
    fontSize: 15,
    fontWeight: '700',
  },

  /* VERTICAL DIVIDER */
  verticalDivider: {
    width: 1,
    backgroundColor: '#ECECEC',
  },

  /* RIGHT */
  rightSection: {
    width: 150,

    alignItems: 'flex-end',

    paddingTop: 28,
    paddingHorizontal: 24,
  },

  room: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },

  subRight: {
    marginTop: 10,

    fontSize: 15,
    color: '#7B7B7B',
  },

  /* SEARCH BUTTON */
  searchBtn: {
    backgroundColor: '#087F86',

    marginHorizontal: 70,
    marginTop: -28,

    borderRadius: 36,

    paddingVertical: 20,

    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 6,
  },

  searchText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '700',
  },
});
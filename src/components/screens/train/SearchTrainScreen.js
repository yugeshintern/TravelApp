import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
} from 'react-native';

const stations = [
  { code: 'MS', name: 'Chennai Egmore', state: 'Chennai - Tamilnadu' },
  { code: 'TCN', name: 'Tiruchendur', state: 'Tiruchendur - Tamilnadu' },
  { code: 'PUNE', name: 'Pune Jn', state: 'Pune - Maharashtra' },
  { code: 'ST', name: 'Surat', state: 'Surat - Gujarat' },
];

const SearchTrainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

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

        <Text style={styles.headerTitle}>
          Search Trains
        </Text>

        <View style={styles.placeholder} />

      </View>

      {/* ROUTE CARD */}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('TrainList')}
      >
        <View style={styles.routeCard}>

          <View style={styles.routeRow}>

            {/* LEFT INDICATOR */}
            <View style={styles.leftIndicator}>

              <View style={styles.greenDot} />

              <View style={styles.dashedLine} />

              <View style={styles.redDot} />

            </View>

            {/* INPUTS */}
            <View style={styles.inputContainer}>

              <TextInput
                placeholder="MS - Chennai Egmore"
                placeholderTextColor="#333333"
                style={styles.input}
              />

              <View style={styles.divider} />

              <TextInput
                placeholder="TCN - Tiruchendur"
                placeholderTextColor="#333333"
                style={styles.input}
              />

            </View>

          </View>

        </View>
      </TouchableOpacity>

      {/* NEARBY HEADER */}
      <View style={styles.nearbyHeader}>

        <Image
          source={require('../../../assets/location-icon.png')}
          style={styles.locationIcon}
        />

        <Text style={styles.nearbyText}>
          Nearby Railway Stations
        </Text>

        <Image
          source={require('../../../assets/sendArrow.png')}
          style={styles.sendIcon}
        />

      </View>

      <View style={styles.line} />

      {/* STATIONS LIST */}
      <FlatList
        data={stations}
        keyExtractor={(item) => item.code}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.stationItem}>

            <Image
              source={require('../../../assets/location-icon.png')}
              style={styles.stationIcon}
            />

            <View style={styles.stationTextContainer}>

              <Text style={styles.stationTitle}>
                {item.code} - {item.name}
              </Text>

              <Text style={styles.stationSub}>
                {item.state}
              </Text>

            </View>

          </TouchableOpacity>
        )}
      />

      {/* FLOAT SEARCH BUTTON */}
      <TouchableOpacity style={styles.fab}>

        <Image
          source={require('../../../assets/search-icon.png')}
          style={styles.searchFabIcon}
        />

      </TouchableOpacity>

    </View>
  );
};

export default SearchTrainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  /* HEADER */
  header: {
    marginTop: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#ECECEC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111111',
  },

  placeholder: {
    width: 42,
  },

  /* ROUTE CARD */
  routeCard: {
    marginTop: 28,
    marginHorizontal: 20,
    backgroundColor: '#E9ECEF',
    borderRadius: 26,
    paddingHorizontal: 18,
    paddingVertical: 20,
  },

  routeRow: {
    flexDirection: 'row',
  },

  leftIndicator: {
    width: 24,
    alignItems: 'center',
    marginRight: 14,
  },

  greenDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: '#0B8A00',
    backgroundColor: '#FFFFFF',
  },

  dashedLine: {
    width: 2,
    height: 48,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#000000',
    marginVertical: 4,
  },

  redDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: '#8B0000',
    backgroundColor: '#FFFFFF',
  },

  inputContainer: {
    flex: 1,
  },

  input: {
    fontSize: 17,
    color: '#222222',
    paddingVertical: 2,
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: '#CFCFCF',
    marginVertical: 16,
  },

  /* NEARBY */
  nearbyHeader: {
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  locationIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  nearbyText: {
    flex: 1,
    marginLeft: 14,
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
  },

  sendIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  line: {
    height: 1,
    backgroundColor: '#D0D0D0',
    marginTop: 18,
  },

  /* STATIONS */
  stationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  stationIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginTop: 2,
  },

  stationTextContainer: {
    marginLeft: 16,
  },

  stationTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
  },

  stationSub: {
    marginTop: 4,
    fontSize: 15,
    color: '#6A6A6A',
  },

  /* FAB */
  fab: {
    position: 'absolute',
    bottom: 28,
    right: 28,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#0C8A78',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 6,
  },

  searchFabIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
});
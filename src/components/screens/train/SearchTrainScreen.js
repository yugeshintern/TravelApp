import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

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
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Search Trains</Text>
      </View>

      {/* ROUTE CARD */}
      <View style={styles.routeCard}>
        <View style={styles.routeRow}>
          <View style={styles.leftIndicator}>
            <View style={styles.greenDot} />
            <View style={styles.dashedLine} />
            <View style={styles.redDot} />
          </View>

          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="MS - Chennai Egmore"
              placeholderTextColor="#333"
              style={styles.input}
            />
            <View style={styles.divider} />
            <TextInput
              placeholder="TCN - Tiruchendur"
              placeholderTextColor="#333"
              style={styles.input}
            />
          </View>
        </View>
      </View>

      {/* NEARBY HEADER */}
      <View style={styles.nearbyHeader}>
        <Icon name="map-pin" size={20} />
        <Text style={styles.nearbyText}>Nearby Railway Stations</Text>
        <Icon name="navigation" size={20} />
      </View>

      <View style={styles.line} />

      {/* STATIONS LIST */}
      <FlatList
        data={stations}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <View style={styles.stationItem}>
            <Icon name="map-pin" size={22} />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.stationTitle}>
                {item.code} - {item.name}
              </Text>
              <Text style={styles.stationSub}>{item.state}</Text>
            </View>
          </View>
        )}
      />

      {/* FLOAT SEARCH BUTTON */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="search" size={20} color="#fff" />
      </TouchableOpacity>

    </View>
  );
};

export default SearchTrainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },

  header: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 38,
  },

  /* ROUTE CARD */
  routeCard: {
    margin: 16,
    backgroundColor: '#E9ECEF',
    borderRadius: 20,
    padding: 16,
  },

  routeRow: {
    flexDirection: 'row',
  },

  leftIndicator: {
    width: 24,
    alignItems: 'center',
    marginRight: 10,
  },

  greenDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: 'green',
    backgroundColor: '#fff',
  },

  dashedLine: {
    width: 1,
    height: 28,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#000',
    marginVertical: 4,
  },

  redDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: '#800000',
    backgroundColor: '#fff',
  },

  input: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 6,
  },

  divider: {
    height: 1,
    backgroundColor: '#CFCFCF',
    marginVertical: 6,
  },

  /* NEARBY */
  nearbyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 10,
    justifyContent: 'space-between',
  },

  nearbyText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
  },

  line: {
    height: 1,
    backgroundColor: '#CFCFCF',
    marginTop: 10,
  },

  /* LIST */
  stationItem: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },

  stationTitle: {
    fontSize: 16,
    fontWeight: '500',
  },

  stationSub: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },

  /* FLOAT BUTTON */
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#0F7A6C',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

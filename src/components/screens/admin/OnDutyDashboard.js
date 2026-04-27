import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OnDutyDashboard = () => {
  const [isOnDuty, setIsOnDuty] = useState(true);

  const toggleDuty = () => {
    setIsOnDuty(!isOnDuty);
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* TOP BAR */}
      <View style={styles.topBar}>
        <Feather name="menu" size={26} color="#333" />
        <Feather name="bell" size={24} color="#333" />
      </View>

      {/* TOGGLE */}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={toggleDuty}
        style={[
          styles.toggleWrapper,
          isOnDuty && styles.toggleWrapperActive,
        ]}
      >
        <Text
          style={[
            styles.toggleText,
            isOnDuty && styles.toggleTextActive,
          ]}
        >
          {isOnDuty ? 'ON DUTY' : 'OFF DUTY'}
        </Text>

        <View
          style={[
            styles.switchTrack,
            isOnDuty && styles.switchTrackActive,
          ]}
        >
          <View
            style={[
              styles.switchThumb,
              isOnDuty && styles.switchThumbActive,
            ]}
          />
        </View>
      </TouchableOpacity>

      {/* MAP IMAGE */}
      <Image
        source={{
          uri: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
        }}
        style={styles.map}
        resizeMode="cover"
      />

      {/* FILTER BUTTONS */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>Super Areas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>High Demand</Text>
        </TouchableOpacity>
      </View>

      {/* BOTTOM TAB */}
      <View style={styles.bottomTab}>
        <View style={styles.tabItem}>
          <MaterialIcons name="home" size={28} color="#117A7A" />
          <Text style={styles.tabTextActive}>Home</Text>
        </View>

        <View style={styles.tabItem}>
          <MaterialIcons name="receipt" size={26} color="#555" />
          <Text style={styles.tabText}>Orders</Text>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default OnDutyDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  /* TOP BAR */
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },

  /* TOGGLE */
  toggleWrapper: {
    alignSelf: 'center',
    marginTop: 20,
    width: 260,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#117A7A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  toggleWrapperActive: {
    borderColor: '#117A7A',
  },

  toggleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#117A7A',
  },

  toggleTextActive: {
    color: '#117A7A',
  },

  /* SWITCH */
  switchTrack: {
    width: 72,
    height: 36,
    borderRadius: 20,
    backgroundColor: '#BDBDBD',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },

  switchTrackActive: {
    backgroundColor: '#10A651', // green like screenshot
  },

  switchThumb: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
  },

  switchThumbActive: {
    alignSelf: 'flex-end',
  },

  /* MAP */
  map: {
    width: '100%',
    height: 260,
    marginTop: 20,
  },

  /* FILTER BUTTONS */
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 16,
  },

  filterBtn: {
    borderWidth: 2,
    borderColor: '#117A7A',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 22,
    backgroundColor: '#fff',
  },

  filterText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },

  /* BOTTOM TAB */
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  tabItem: {
    alignItems: 'center',
  },

  tabText: {
    marginTop: 4,
    fontSize: 14,
    color: '#555',
  },

  tabTextActive: {
    marginTop: 4,
    fontSize: 14,
    color: '#117A7A',
    fontWeight: '600',
  },
});
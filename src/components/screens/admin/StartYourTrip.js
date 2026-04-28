import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const StartYourTrip = ({ navigation }) => {
  const [isOnDuty, setIsOnDuty] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      
      {/* MAP BACKGROUND */}
      <View style={styles.mapContainer}>
        <Image
          source={require('../../../assets/map-placeholder.png')} // replace with your image
          style={styles.map}
          resizeMode="cover"
        />

        {/* PIN MARKER */}
        <View style={styles.pinWrapper}>
          <View style={styles.shadow} />
          <Icon name="map-pin" size={48} color="#E53935" />
        </View>
      </View>

      {/* TOP LEFT BACK BUTTON */}
      <TouchableOpacity style={styles.backBtn}>
        <Icon name="arrow-left" size={22} color="#333333" />
      </TouchableOpacity>

      {/* TOGGLE (ON DUTY / OFF DUTY) */}
      <TouchableOpacity
        style={[
          styles.toggleContainer,
          { backgroundColor: isOnDuty ? '#16A34A' : '#BDBDBD' },
        ]}
        onPress={() => setIsOnDuty(!isOnDuty)}
      >
        <Text style={styles.toggleText}>
          {isOnDuty ? 'ON DUTY' : 'OFF DUTY'}
        </Text>

        <View
          style={[
            styles.toggleCircle,
            { alignSelf: isOnDuty ? 'flex-end' : 'flex-start' },
          ]}
        />
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default StartYourTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  /* MAP */
  mapContainer: {
    flex: 1,
  },

  map: {
    width: '100%',
    height: '100%',
  },

  /* PIN */
  pinWrapper: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: [{ translateX: -24 }, { translateY: -48 }],
    alignItems: 'center',
  },

  shadow: {
    position: 'absolute',
    bottom: -6,
    width: 30,
    height: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  /* BACK BUTTON */
  backBtn: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  /* TOGGLE */
  toggleContainer: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    height: 48,
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },

  toggleText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  toggleCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
  },
});
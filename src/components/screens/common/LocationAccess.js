import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

const LocationPermissionScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7EFEF" />

      <View style={styles.card}>
        
        {/* Pin Icon */}
        <Image
          source={require('../../../assets/location-icon.png')}
          style={styles.pin}
        />

        {/* Title */}
        <Text style={styles.title}>
          Allow Travel to access this device’s location?
        </Text>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <Text style={styles.infoIcon}>🛡️</Text>

          <Text style={styles.infoText}>
            This app stated that it may share
            {'\n'}
            location data with third parties
          </Text>
        </View>

        {/* Location Type */}
        <View style={styles.optionRow}>
          
          <View style={styles.option}>
            <Image
              source={require('../../../assets/location-pin.png')}
              style={styles.mapImage}
            />
            <Text style={styles.optionText}>Precise</Text>
          </View>

          <View style={styles.option}>
            <Image
              source={require('../../../assets/location-map.png')}
              style={styles.mapImage}
            />
            <Text style={styles.optionText}>Approximate</Text>
          </View>

        </View>

        {/* Buttons */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>While using the app</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Only this time</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Don’t allow</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default LocationPermissionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EFEF',
    justifyContent: 'center',
    padding: 8,
  },

  card: {
    backgroundColor: '#F7EFEF',
    borderRadius: 28,
    paddingHorizontal: 24,
    paddingVertical: 30,
  },

  pin: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 18,
  },

  title: {
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
    color: '#2D2D2D',
    lineHeight: 30,
    marginBottom: 22,
  },

  infoBox: {
    borderWidth: 1,
    borderColor: '#D8CACA',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  infoIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  infoText: {
    color: '#555',
    fontSize: 14,
    lineHeight: 20,
  },

  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 28,
  },

  option: {
    alignItems: 'center',
  },

  mapImage: {
    width: 88,
    height: 88,
    borderRadius: 44,
    marginBottom: 8,
  },

  optionText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
  },

  button: {
    backgroundColor: '#F6D7D7',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },

  buttonText: {
    fontSize: 16,
    color: '#222',
    fontWeight: '500',
  },
});
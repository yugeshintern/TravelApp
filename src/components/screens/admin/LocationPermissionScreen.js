import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const LocationPermissionScreen = ({ navigation }) => {
  const [selected, setSelected] = useState('precise');

  return (
    <SafeAreaView style={styles.container}>

      {/* OVERLAY BACKGROUND */}
      <View style={styles.overlay}>

        {/* CARD */}
        <View style={styles.card}>

          {/* ICON */}
          <View style={styles.iconContainer}>
            <Icon name="map-pin" size={26} color="#8B2E2E" />
          </View>

          {/* TITLE */}
          <Text style={styles.title}>
            Allow Travel to access this device’s location?
          </Text>

          {/* INFO BOX */}
          <View style={styles.infoBox}>
            <Icon name="shield" size={16} color="#555" />
            <Text style={styles.infoText}>
              This app stated that it may share location data with third parties
            </Text>
          </View>

          {/* OPTIONS */}
          <View style={styles.optionsRow}>

            {/* PRECISE */}
            <TouchableOpacity
              style={[
                styles.optionCircle,
                selected === 'precise' && styles.selectedCircle,
              ]}
              onPress={() => setSelected('precise')}
            >
              <Image
                source={{ uri: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png' }}
                style={styles.circleImage}
              />
            </TouchableOpacity>

            {/* APPROXIMATE */}
            <TouchableOpacity
              style={[
                styles.optionCircle,
                selected === 'approx' && styles.selectedCircle,
              ]}
              onPress={() => setSelected('approx')}
            >
              <Image
                source={{ uri: 'https://maps.gstatic.com/tactile/basepage/default_marker.png' }}
                style={styles.circleImage}
              />
            </TouchableOpacity>
          </View>

          {/* LABELS */}
          <View style={styles.optionLabels}>
            <Text style={styles.optionText}>Precise</Text>
            <Text style={styles.optionText}>Approximate</Text>
          </View>

          {/* BUTTONS */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>While using the app</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Only this time</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Don’t allow</Text>
          </TouchableOpacity>

        </View>
      </View>

    </SafeAreaView>
  );
};

export default LocationPermissionScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDBDBD', // overlay background
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '85%',
    backgroundColor: '#F2E8E8', // light pinkish card
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
  },

  iconContainer: {
    marginBottom: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
    lineHeight: 24,
    marginBottom: 16,
  },

  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
  },

  infoText: {
    fontSize: 13,
    color: '#555',
    marginLeft: 8,
    flex: 1,
  },

  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 8,
  },

  optionCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedCircle: {
    borderWidth: 2,
    borderColor: '#4A3AFF',
  },

  circleImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  optionLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },

  optionText: {
    fontSize: 14,
    color: '#444',
  },

  button: {
    width: '100%',
    backgroundColor: '#E7C4C4',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
});
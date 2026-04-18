import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const DriverSearchingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* MAP */}
      <Image
        source={require('../../assets/map.png')} // replace with your map image
        style={styles.map}
        resizeMode="cover"
      />

      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={20} />
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        {/* DRAG HANDLE */}
        <View style={styles.dragHandle} />

        {/* TITLE */}
        <View style={styles.headerRow}>
          <Text style={styles.title}>
            Bike Searching fo drivers nearby....
          </Text>
          <Text style={styles.subtitle}>
            Finding partner near you.
          </Text>
        </View>

        {/* LOCATION */}
        <Text style={styles.section}>Location Details</Text>

        <View style={styles.locationCard}>
          <View style={styles.locationRow}>
            <View style={styles.greenDot} />
            <View style={{ flex: 1 }}>
              <Text style={styles.locTitle}>Egmore Railway Station</Text>
              <Text style={styles.locSub}>
                Gandhi Irwin Road, Egmore, Chennai...
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.locationRow}>
            <View style={styles.redDot} />
            <View style={{ flex: 1 }}>
              <Text style={styles.locTitle}>Koyambedu Bus Stand</Text>
              <Text style={styles.locSub}>
                Koyambedu bus terminus, Chennai...
              </Text>
            </View>
          </View>
        </View>

        {/* FARE */}
        <View style={styles.fareCard}>
          <View style={styles.fareRow}>
            <Text style={styles.fareTitle}>Total Fare</Text>
            <Text style={styles.fareAmount}>₹287.0</Text>
          </View>

          <View style={styles.payRow}>
            <Icon name="credit-card" size={16} />
            <Text style={styles.payText}>Paying via cash</Text>
          </View>
        </View>

        {/* BUTTONS */}
        <TouchableOpacity style={styles.backBtnMain}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelBtn}>
          <Text style={styles.cancelText}>Cancel Trip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DriverSearchingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  backBtn: {
    position: 'absolute',
    top: 50,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },

  sheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    elevation: 10,
  },

  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 12,
  },

  headerRow: {
    marginBottom: 12,
  },

  title: {
    fontSize: 15,
    fontWeight: '600',
  },

  subtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },

  section: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 8,
  },

  locationCard: {
    backgroundColor: '#F3F5F7',
    borderRadius: 16,
    padding: 12,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  greenDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'green',
    marginRight: 10,
  },

  redDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'red',
    marginRight: 10,
  },

  locTitle: {
    fontSize: 13,
    fontWeight: '600',
  },

  locSub: {
    fontSize: 11,
    color: '#777',
  },

  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },

  fareCard: {
    backgroundColor: '#F3F5F7',
    borderRadius: 16,
    padding: 12,
    marginTop: 12,
  },

  fareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  fareTitle: {
    fontSize: 13,
    fontWeight: '600',
  },

  fareAmount: {
    fontSize: 14,
    fontWeight: '600',
  },

  payRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  payText: {
    fontSize: 12,
    color: '#555',
  },

  backBtnMain: {
    backgroundColor: '#0F7A6C',
    paddingVertical: 14,
    borderRadius: 26,
    alignItems: 'center',
    marginTop: 16,
  },

  backText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },

  cancelBtn: {
    borderWidth: 1.5,
    borderColor: '#B00020',
    paddingVertical: 14,
    borderRadius: 26,
    alignItems: 'center',
    marginTop: 10,
  },

  cancelText: {
    color: '#B00020',
    fontSize: 15,
    fontWeight: '600',
  },
});
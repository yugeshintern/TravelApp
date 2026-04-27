import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const WhichCityScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      {/* BACK BUTTON */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={22} color="#2E2E2E" />
      </TouchableOpacity>

      {/* ILLUSTRATION */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/city_map.png')} // replace with your asset
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* TITLE */}
      <Text style={styles.title}>
        Which city do you want to ride?
      </Text>

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>You will ride in</Text>

        <View style={styles.cityRow}>
          <View style={styles.leftSection}>
            <MaterialIcons name="location-pin" size={26} color="#117A7A" />
            <Text style={styles.cityText}>Chennai</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.changeText}>CHANGE</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* CTA BUTTON */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirm City</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default WhichCityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 20,
  },

  /* BACK BUTTON */
  backBtn: {
    marginTop: 10,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* IMAGE */
  imageContainer: {
    marginTop: 50,
    alignItems: 'center',
  },

  image: {
    width: 140,
    height: 140,
  },

  /* TITLE */
  title: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: '600',
    color: '#3A3A3A',
    lineHeight: 30,
  },

  /* CARD */
  card: {
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderRadius: 18,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },

  cardTitle: {
    fontSize: 16,
    color: '#6B6B6B',
    marginBottom: 12,
    fontWeight: '500',
  },

  cityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cityText: {
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 8,
    color: '#2E2E2E',
  },

  changeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#117A7A',
    letterSpacing: 0.5,
  },

  /* BUTTON */
  button: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: '#117A7A',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',

    // shadow iOS
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    // elevation Android
    elevation: 3,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const PackersHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={20} />
        </TouchableOpacity>

        <Text style={styles.title}>Packers & Movers</Text>
      </View>

      {/* SUB TITLE */}
      <Text style={styles.subtitle}>Select your shifting service</Text>

      {/* GRID */}
      <View style={styles.grid}>

        {/* CARD 1 */}
        <TouchableOpacity style={styles.card}
        onPress={() => navigation.navigate("PackersLocation")}>
          <Text style={styles.blueTag}>Within city only</Text>
          <Text style={styles.cardTitle}>
            Intracity house shifting
          </Text>

          {/* <Image
            source={require('../../../assets/packers/truck.png')}
            style={styles.image}
            resizeMode="contain"
          /> */}
        </TouchableOpacity>

        {/* CARD 2 */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.greenTag}>Between cities</Text>
          <Text style={styles.cardTitle}>
            Intracity house shifting
          </Text>

          {/* <Image
            source={require('../../../assets/packers/truck.png')}
            style={styles.image}
            resizeMode="contain"
          /> */}
        </TouchableOpacity>

        {/* CARD 3 */}
        <TouchableOpacity style={[styles.card, { width: '48%' }]}>
          <Text style={styles.blueTag}>Within city only</Text>
          <Text style={styles.cardTitle}>
            Mini truck with 2 labor
          </Text>

          {/* <Image
            source={require('../../../assets/packers/truck.png')}
            style={styles.image}
            resizeMode="contain"
          /> */}
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default PackersHomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
    paddingHorizontal: 16,
  },

  /* HEADER */
  header: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backBtn: {
    position: 'absolute',
    left: 0,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },

  subtitle: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
  },

  /* GRID */
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  /* CARD */
  card: {
    width: '48%',
    backgroundColor: '#E9EDF0',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,

    // Shadow (iOS + Android)
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  blueTag: {
    color: '#2F5DA9',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
  },

  greenTag: {
    color: '#0AA64F',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    lineHeight: 20,
    marginBottom: 10,
  },

  image: {
    width: '100%',
    height: 90,
  },
});
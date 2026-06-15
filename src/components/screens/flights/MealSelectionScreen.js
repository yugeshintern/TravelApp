import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const MealSelectionScreen = ({ navigation ,route }) => {

  const {
 bookingData,
 flight,
 traveller,
 selectedSeat,
 totalFare
} = route.params || {};

  const [selected, setSelected] = useState('nonveg');

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
  style={styles.backBtn}
  onPress={() => navigation.goBack()}
>
  <Image
    source={require("../../../assets/back.png")}
    style={styles.backIcon}
  />
</TouchableOpacity>

        <View>
          <Text style={styles.tripLabel}>Trip to</Text>
          <Text style={styles.tripCity}>
             {bookingData?.to?.city}
        </Text>
        </View>
      </View>

      {/* TITLE */}
      <Text style={styles.sectionTitle}>2. Meals</Text>

      {/* NON VEG CARD */}
      <TouchableOpacity
        style={[
          styles.card,
          selected === 'nonveg' && styles.activeCard,
        ]}
        onPress={() => setSelected('nonveg')}
      >
        <View style={styles.cardRow}>

          <View style={styles.iconCircle}>
            <Image
              source={require('../../../assets/veg.png')}
              style={styles.mealIcon}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.mealTitle}>
              Non Vegetarian Meal
            </Text>

            <Text style={styles.price}>
              Free
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addText}>
            {selected === 'nonveg' ? 'Added' : 'Add'}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>

      {/* VEG CARD */}
      <TouchableOpacity
        style={[
          styles.card,
          selected === 'veg' && styles.activeCard,
        ]}
        onPress={() => setSelected('veg')}
      >
        <View style={styles.cardRow}>

          <View style={styles.iconCircle}>
            <Image
              source={require('../../../assets/veg.png')}
              style={styles.mealIcon}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.mealTitle}>
              Vegetarian Meal
            </Text>

            <Text style={styles.price}>
              Free
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addText}>
            {selected === 'veg' ? 'Added' : 'Add'}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>

      {/* FOOTER */}
      <View style={styles.footer}>

        <View style={styles.footerRow}>
          <View>
            <Text style={styles.footerTitle}>
              1 Meal(s) Selected
            </Text>

            <Text style={styles.footerSub}>
              1 of 1 Meal(s) Selected
            </Text>
          </View>

          <View style={styles.footerPriceContainer}>
            <Text style={styles.priceBold}>
              ₹5,718
            </Text>

            <Text style={styles.footerSub}>
              Added to fare
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.cta}
          onPress={() =>
  navigation.navigate("Payments", {
    bookingData,
    flight,
    traveller,
    selectedSeat,
    meal: selected,
    totalFare,
  })
}
        >
          <Text style={styles.ctaText}>
            Continue booking
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default MealSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 72,
    paddingHorizontal: 22,
  },

  backBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#EEF1F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
  },

  tripLabel: {
    fontSize: 15,
    color: '#8B8B8B',
    marginBottom: 4,
    fontWeight: '500',
  },

  tripCity: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },

  sectionTitle: {
    marginTop: 42,
    marginLeft: 22,
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 22,
    marginTop: 24,
    borderRadius: 22,
    padding: 24,

    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  activeCard: {
    borderWidth: 1.5,
    borderColor: '#0F7A6C',
  },

  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
  },

  mealIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  textContainer: {
    flex: 1,
  },

  mealTitle: {
    fontSize: 15,
    color: '#555',
    fontWeight: '500',
  },

  price: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },

  addBtn: {
    marginTop: 18,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#2D74DA',
    borderRadius: 8,
    paddingHorizontal: 22,
    paddingVertical: 8,
  },

  addText: {
    color: '#2D74DA',
    fontWeight: '700',
    fontSize: 14,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',

    paddingTop: 16,
    paddingHorizontal: 22,
    paddingBottom: 28,

    borderTopWidth: 1,
    borderColor: '#ECECEC',
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  footerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  footerSub: {
    marginTop: 4,
    fontSize: 13,
    color: '#777',
  },

  footerPriceContainer: {
    alignItems: 'flex-end',
  },

  priceBold: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },

  cta: {
    backgroundColor: '#0B7F83',
    paddingVertical: 18,
    borderRadius: 34,
    alignItems: 'center',
    marginTop: 4,
  },

  ctaText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
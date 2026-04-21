import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const MealSelectionScreen = ({ navigation }) => {
  const [selected, setSelected] = useState('nonveg');

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>

        <View>
          <Text style={styles.tripLabel}>Trip to</Text>
          <Text style={styles.tripCity}>Chennai</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>2. Meals</Text>

      {/* MEAL CARD */}
      <TouchableOpacity
        style={[
          styles.card,
          selected === 'nonveg' && styles.activeCard
        ]}
        onPress={() => setSelected('nonveg')}
      >
        <View style={styles.cardRow}>
          <Icon name="layers" size={28} color="#000" />

          <View style={{ marginLeft: 12 }}>
            <Text style={styles.mealTitle}>Non Vegetarian Meal</Text>
            <Text style={styles.price}>Free</Text>
          </View>
        </View>

        <View style={styles.addBtn}>
          <Text style={styles.addText}>
            {selected === 'nonveg' ? 'Added' : 'Add'}
          </Text>
        </View>
      </TouchableOpacity>

      {/* SECOND CARD */}
      <TouchableOpacity
        style={[
          styles.card,
          selected === 'veg' && styles.activeCard
        ]}
        onPress={() => setSelected('veg')}
      >
        <View style={styles.cardRow}>
          <Icon name="layers" size={28} color="#000" />

          <View style={{ marginLeft: 12 }}>
            <Text style={styles.mealTitle}>Vegetarian Meal</Text>
            <Text style={styles.price}>Free</Text>
          </View>
        </View>

        <View style={styles.addBtn}>
          <Text style={styles.addText}>
            {selected === 'veg' ? 'Added' : 'Add'}
          </Text>
        </View>
      </TouchableOpacity>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <View>
            <Text style={styles.footerTitle}>1 Meal(s) Selected</Text>
            <Text style={styles.footerSub}>1 of 1 Meal(s) Selected</Text>
          </View>

          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.priceBold}>₹5,718</Text>
            <Text style={styles.footerSub}>Added to fare</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.cta}>
          <Text style={styles.ctaText}>Continue booking</Text>
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
    marginTop: 50,
    paddingHorizontal: 16,
  },

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  tripLabel: {
    fontSize: 13,
    color: '#777',
  },

  tripCity: {
    fontSize: 18,
    fontWeight: '700',
  },

  sectionTitle: {
    marginTop: 20,
    marginLeft: 16,
    fontSize: 15,
    fontWeight: '600',
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 14,
    padding: 16,
    elevation: 3,
  },

  activeCard: {
    borderWidth: 1.5,
    borderColor: '#0F7A6C',
  },

  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  mealTitle: {
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },

  price: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '700',
  },

  addBtn: {
    marginTop: 12,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#2D74DA',
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 4,
  },

  addText: {
    color: '#2D74DA',
    fontWeight: '600',
    fontSize: 13,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  footerTitle: {
    fontWeight: '600',
  },

  footerSub: {
    fontSize: 12,
    color: '#777',
  },

  priceBold: {
    fontSize: 16,
    fontWeight: '700',
  },

  cta: {
    backgroundColor: '#0F7A6C',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },

  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const hotels = [
  {
    name: 'Hotel Halez',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
  },
  {
    name: 'The Leela',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
  },
  {
    name: 'Britannica',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
  },
  {
    name: 'Hotel Hillock',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
  },
];

const HotelsListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Chennai</Text>

        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="search" size={18} />
        </TouchableOpacity>
      </View>

      {/* DATE TEXT */}
      <Text style={styles.subHeader}>26 Feb –27 Feb, 2 Adults</Text>

      {/* TITLE */}
      <Text style={styles.sectionTitle}>Showing Properties in Chennai</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {hotels.map((item, index) => (
          <View key={index} style={styles.card}>
            
            {/* IMAGE */}
            <Image source={{ uri: item.image }} style={styles.image} />

            {/* TAGS */}
            <View style={styles.tagRow}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>4 ★ Hotel</Text>
              </View>

              <View style={styles.rating}>
                <Text style={styles.ratingText}>★ 4.3</Text>
              </View>

              <Text style={styles.ratingCount}>(388 rating)</Text>
            </View>

            {/* TITLE + PRICE */}
            <View style={styles.rowBetween}>
              <Text style={styles.hotelName}>{item.name}</Text>
              <Text style={styles.price}>₹5,718</Text>
            </View>

            {/* SUB PRICE */}
            <Text style={styles.tax}>+ ₹337 Taxes & Fees per night</Text>

            {/* FEATURES */}
            <View style={styles.featureRow}>
              <Text style={styles.feature}>✓ Free Cancelation Included</Text>
              <Text style={styles.featureHeart}>♥ Couple Friendly</Text>
              <Text style={styles.feature}>✓ Breakfast available at extra charges</Text>
            </View>

          </View>
        ))}
      </ScrollView>

    </View>
  );
};

export default HotelsListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    paddingTop: 50,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  subHeader: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 13,
    color: '#777',
  },

  sectionTitle: {
    marginTop: 20,
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '600',
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 12,
    elevation: 5,
  },

  image: {
    width: '100%',
    height: 150,
    borderRadius: 14,
  },

  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  tag: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },

  tagText: {
    fontSize: 11,
    color: '#444',
  },

  rating: {
    backgroundColor: '#0A8F2C',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8,
  },

  ratingText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },

  ratingCount: {
    marginLeft: 6,
    fontSize: 11,
    color: '#777',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    alignItems: 'center',
  },

  hotelName: {
    fontSize: 18,
    fontWeight: '600',
  },

  price: {
    fontSize: 16,
    fontWeight: '600',
  },

  tax: {
    fontSize: 12,
    color: '#777',
    alignSelf: 'flex-end',
    marginTop: 2,
  },

  featureRow: {
    marginTop: 8,
  },

  feature: {
    fontSize: 12,
    color: '#2E7D32',
    marginTop: 2,
  },

  featureHeart: {
    fontSize: 12,
    color: '#D32F2F',
    marginTop: 2,
  },
});
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

const HotelDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Hotel Halez</Text>
        </View>

        {/* HOTEL CARD */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1566073771259-6a8506099945' }}
            style={styles.image}
          />

          <View style={styles.tag}>
            <Text style={styles.tagText}>4 ★ Hotel</Text>
          </View>

          <Text style={styles.hotelName}>Hotel Halez</Text>

          <View style={styles.ratingRow}>
            <View style={styles.ratingBox}>
              <Text style={styles.ratingText}>4.3</Text>
            </View>
            <Text style={styles.ratingSub}>388 ratings and 66 reviews</Text>
          </View>

          <View style={styles.row}>
            <Icon name="map-pin" size={16} color="#0F7A6C" />
            <Text style={styles.location}>Sholinganallur, Chennai</Text>
          </View>

          <Text style={styles.green}>✓ Free Cancelation Included</Text>
          <Text style={styles.red}>♥ Couple Friendly</Text>
          <Text style={styles.green}>✓ Breakfast available at extra charges</Text>
        </View>

        {/* DATE */}
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>04 Mar, Wed – 05 Mar, Thu | 2 Guests</Text>
        </View>

        {/* AMENITIES */}
        <Text style={styles.sectionTitle}>Amenities</Text>
        <Text style={styles.sub}>Rated <Text style={styles.greenText}>3.2</Text> by guests</Text>

        <View style={styles.amenitiesRow}>
          <Text style={styles.amenity}>✓ Spa</Text>
          <Text style={styles.amenity}>✓ Swimming Pool</Text>
        </View>

        <View style={styles.amenitiesRow}>
          <Text style={styles.amenity}>✓ Gym</Text>
          <Text style={styles.amenity}>✓ Restaurant</Text>
        </View>

        <View style={styles.amenitiesRow}>
          <Text style={styles.amenity}>✓ Indoor Games</Text>
          <Text style={styles.amenity}>✓ Butler Services</Text>
        </View>

        {/* FOOD */}
        <Text style={styles.sectionTitle}>Food & Dining</Text>
        <Text style={styles.foodTitle}>Coriander</Text>
        <Text style={styles.sub}>Both Vegetarian & Non-Vegetarian food</Text>

        {/* RULES */}
        <Text style={styles.sectionTitle}>Hotel Rules</Text>
        <Text style={styles.rulesHeader}>Check-In: 2pm    Check-Out: 12pm</Text>

        <Text style={styles.rule}>• Unmarried couples allowed</Text>
        <Text style={styles.rule}>• Primary Guest should be atleast 18 years of age.</Text>
        <Text style={styles.rule}>• Passport, Aadhaar, Driving License accepted</Text>
        <Text style={styles.rule}>• Pets are not allowed</Text>
        <Text style={styles.rule}>• Smoking not allowed</Text>
        <Text style={styles.rule}>• Outside food not allowed</Text>

        {/* MAP */}
        <Text style={styles.sectionTitle}>Location</Text>
        <Image
          source={{ uri: 'https://maps.googleapis.com/maps/api/staticmap?center=Chennai&zoom=13&size=600x300&key=YOUR_API_KEY' }}
          style={styles.map}
        />

        <View style={styles.row}>
          <Icon name="map-pin" size={16} color="#C62828" />
          <Text style={styles.address}>
            102, Hotel Halez, Rajiv Gandhi Salai, Sholinganallur, Tamil Nadu 600119
          </Text>
        </View>

      </ScrollView>

      {/* BOTTOM BAR */}
      <View style={styles.bottom}>
        <View>
          <Text style={styles.offer}>1 offer applied</Text>
          <Text style={styles.tax}>+ ₹337 Taxes & Fees</Text>
        </View>

        <View>
          <Text style={styles.price}>₹5,718</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Select Room</Text>
      </TouchableOpacity>

    </View>
  );
};

export default HotelDetailsScreen;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6F8' },

  header: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 38,
  },

  card: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    elevation: 5,
  },

  image: {
    height: 160,
    borderRadius: 14,
  },

  tag: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 6,
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
  },

  tagText: { fontSize: 11 },

  hotelName: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 8,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  ratingBox: {
    backgroundColor: '#0A8F2C',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  ratingText: { color: '#fff', fontWeight: '600' },

  ratingSub: { marginLeft: 8, color: '#777', fontSize: 12 },

  row: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },

  location: { marginLeft: 6, color: '#555' },

  green: { color: '#2E7D32', marginTop: 4 },
  red: { color: '#D32F2F', marginTop: 4 },

  dateBox: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 14,
    borderRadius: 12,
    elevation: 4,
  },

  dateText: { fontWeight: '600', textAlign: 'center' },

  sectionTitle: {
    marginTop: 20,
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '600',
  },

  sub: { marginLeft: 16, color: '#777', marginTop: 4 },

  greenText: { color: '#2E7D32', fontWeight: '600' },

  amenitiesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 8,
  },

  amenity: { color: '#333' },

  foodTitle: { marginLeft: 16, fontWeight: '600', marginTop: 6 },

  rulesHeader: { marginLeft: 16, marginTop: 6 },

  rule: { marginLeft: 16, marginTop: 4, fontSize: 12, color: '#555' },

  map: {
    height: 160,
    borderRadius: 12,
    margin: 16,
  },

  address: { marginLeft: 6, flex: 1 },

  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#EEE',
  },

  offer: { color: '#1976D2', fontWeight: '600' },
  tax: { color: '#777', fontSize: 12 },
  price: { fontSize: 18, fontWeight: '600' },

  button: {
    backgroundColor: '#0F7A6C',
    margin: 16,
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
  },

  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const HotelDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 180 }}
      >

        {/* HEADER */}
        <View style={styles.header}>

          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../../../assets/back.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Hotel Halez
          </Text>

          <View style={{ width: 46 }} />

        </View>

        {/* HOTEL CARD */}
        <View style={styles.card}>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
            }}
            style={styles.image}
          />

          {/* TAG */}
          <View style={styles.tag}>
            <Text style={styles.tagText}>4 ★ Hotel</Text>
          </View>

          {/* NAME */}
          <Text style={styles.hotelName}>
            Hotel Halez
          </Text>

          {/* RATING */}
          <View style={styles.ratingRow}>

            <View style={styles.ratingBox}>
              <Text style={styles.ratingText}>4.3</Text>
            </View>

            <Text style={styles.ratingSub}>
              388 ratings and 66 reviews
            </Text>

          </View>

          {/* LOCATION */}
          <View style={styles.locationRow}>

            <Image
              source={require('../../../assets/loc-icon.png')}
              style={styles.locationIcon}
            />

            <Text style={styles.location}>
              Sholinganallur, Chennai
            </Text>

          </View>

          {/* FEATURES */}
          <Text style={styles.greenText}>
            ✓ Free Cancelation Included
          </Text>

          <Text style={styles.redText}>
            ♥ Couple Friendly
          </Text>

          <Text style={styles.greenText}>
            ✓ Breakfast available at extra charges
          </Text>

        </View>

        {/* DATE BOX */}
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>
            04 Mar, Wed – 05 Mar, Thu | 2 Guests
          </Text>
        </View>

        {/* AMENITIES */}
        <Text style={styles.sectionTitle}>
          Amenities
        </Text>

        <Text style={styles.subText}>
          Rated <Text style={styles.greenNumber}>3.2</Text> by guests
        </Text>

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
        <Text style={styles.sectionTitle}>
          Food & Dining
        </Text>

        <Text style={styles.foodTitle}>
          Coriander
        </Text>

        <Text style={styles.subText}>
          Both Vegetarian & Non-Vegetarian food
        </Text>

        {/* RULES */}
        <Text style={styles.sectionTitle}>
          Hotel Rules
        </Text>

        <Text style={styles.rulesHeader}>
          Check-In: 2pm    Check-Out: 12pm
        </Text>

        <Text style={styles.rule}>
          • Unmarried couples allowed
        </Text>

        <Text style={styles.rule}>
          • Primary Guest should be atleast 18 years of age.
        </Text>

        <Text style={styles.rule}>
          • Passport, Aadhaar, Driving License accepted
        </Text>

        <Text style={styles.rule}>
          • Pets are not allowed
        </Text>

        <Text style={styles.rule}>
          • Smoking not allowed
        </Text>

        <Text style={styles.rule}>
          • Outside food not allowed
        </Text>

        {/* LOCATION */}
        <Text style={styles.sectionTitle}>
          Location
        </Text>

        <Image
          source={require('../../../assets/city_map.png')}
          style={styles.map}
        />

        {/* ADDRESS */}
        <View style={styles.addressRow}>

          <Image
            source={require('../../../assets/location-icon.png')}
            style={styles.locationBottomIcon}
          />

          <Text style={styles.address}>
            102, Hotel Halez, Rajiv Gandhi Salai,
            Sholinganallur, Tamil Nadu 600119
          </Text>

        </View>

      </ScrollView>

      {/* BOTTOM BAR */}
      <View style={styles.bottomBar}>

        <View>

          <Text style={styles.offerText}>
            1 offer applied
          </Text>

          <Text style={styles.taxText}>
            + ₹337 Taxes & Fees
          </Text>

          <Text style={styles.perNight}>
            per night
          </Text>

        </View>

        <Text style={styles.price}>
          ₹5,718
        </Text>

      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RoomSelection')}
      >
        <Text style={styles.buttonText}>
          Select Room
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default HotelDetailsScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    paddingTop: 58,
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 22,
  },

  backBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,

    backgroundColor: '#EEF1F1',

    alignItems: 'center',
    justifyContent: 'center',
  },

  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },

  /* CARD */
  card: {
    marginHorizontal: 16,
    marginTop: 24,

    backgroundColor: '#fff',

    borderRadius: 22,
    padding: 14,

    elevation: 5,
  },

  image: {
    width: '100%',
    height: 170,

    borderRadius: 18,
  },

  tag: {
    marginTop: 14,

    borderWidth: 1,
    borderColor: '#D9D9D9',

    borderRadius: 6,

    paddingHorizontal: 10,
    paddingVertical: 4,

    alignSelf: 'flex-start',
  },

  tagText: {
    fontSize: 13,
    color: '#333',
  },

  hotelName: {
    marginTop: 14,

    fontSize: 22,
    fontWeight: '700',

    color: '#222',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 12,
  },

  ratingBox: {
    backgroundColor: '#148C1F',

    borderRadius: 8,

    paddingHorizontal: 12,
    paddingVertical: 5,
  },

  ratingText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  ratingSub: {
    marginLeft: 12,

    color: '#777',
    fontSize: 15,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 16,
  },

  locationIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  location: {
    marginLeft: 10,

    fontSize: 16,
    color: '#555',
  },

  greenText: {
    marginTop: 12,

    color: '#2E7D32',
    fontSize: 16,
  },

  redText: {
    marginTop: 12,

    color: '#D32F2F',
    fontSize: 16,
  },

  /* DATE BOX */
  dateBox: {
    marginHorizontal: 16,
    marginTop: 20,

    backgroundColor: '#fff',

    borderRadius: 18,

    paddingVertical: 20,

    elevation: 4,
  },

  dateText: {
    textAlign: 'center',

    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  /* TITLES */
  sectionTitle: {
    marginTop: 28,
    marginHorizontal: 16,

    fontSize: 18,
    fontWeight: '700',

    color: '#222',
  },

  subText: {
    marginTop: 10,
    marginHorizontal: 16,

    color: '#777',
    fontSize: 15,
  },

  greenNumber: {
    color: '#2E7D32',
    fontWeight: '700',
  },

  /* AMENITIES */
  amenitiesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 16,
    marginTop: 18,
  },

  amenity: {
    width: '48%',

    fontSize: 16,
    color: '#333',
  },

  /* FOOD */
  foodTitle: {
    marginTop: 14,
    marginHorizontal: 16,

    fontSize: 16,
    fontWeight: '700',

    color: '#222',
  },

  /* RULES */
  rulesHeader: {
    marginTop: 14,
    marginHorizontal: 16,

    fontSize: 16,
    color: '#222',
  },

  rule: {
    marginTop: 10,
    marginHorizontal: 16,

    fontSize: 14,
    color: '#555',

    lineHeight: 22,
  },

  /* MAP */
  map: {
    height: 190,
    borderRadius: 18,

    marginHorizontal: 16,
    marginTop: 18,

    width: '92%',
    alignSelf: 'center',
  },

  /* ADDRESS */
  addressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',

    marginHorizontal: 16,
    marginTop: 20,
  },

  locationBottomIcon: {
    width: 22,
    height: 22,

    resizeMode: 'contain',

    marginTop: 2,
  },

  address: {
    flex: 1,

    marginLeft: 10,

    fontSize: 16,
    color: '#333',

    lineHeight: 24,
  },

  /* BOTTOM */
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 20,
    paddingTop: 16,

    borderTopWidth: 1,
    borderColor: '#E5E5E5',

    backgroundColor: '#fff',
  },

  offerText: {
    color: '#1976D2',
    fontSize: 15,
    fontWeight: '700',
  },

  taxText: {
    marginTop: 4,

    color: '#777',
    fontSize: 14,
  },

  perNight: {
    color: '#777',
    fontSize: 14,
  },

  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },

  /* BUTTON */
  button: {
    backgroundColor: '#0B7D80',

    marginHorizontal: 16,
    marginTop: 14,
    marginBottom: 16,

    borderRadius: 32,

    paddingVertical: 18,

    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',

    fontSize: 18,
    fontWeight: '700',
  },

});
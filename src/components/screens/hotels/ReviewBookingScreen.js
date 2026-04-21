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

const ReviewBookingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Review Booking</Text>
        </View>

        <Text style={styles.subHeader}>26 Feb –27 Feb, 2 Adults</Text>

        {/* HOTEL CARD */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1566073771259-6a8506099945' }}
            style={styles.hotelImage}
          />

          <View style={styles.rowBetween}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>4 ★ Hotel</Text>
            </View>

            <View style={styles.ratingBox}>
              <Text style={styles.rating}>★ 4.3</Text>
              <Text style={styles.ratingText}>388 ratings</Text>
            </View>
          </View>

          <View style={styles.rowBetween}>
            <Text style={styles.hotelName}>Hotel Halez</Text>
            <Text style={styles.roomInfo}>Room, 2 Adults</Text>
          </View>

          {/* DATE */}
          <View style={styles.dateRow}>
            <View>
              <Text style={styles.date}>26 Feb, Thu</Text>
              <Text style={styles.time}>2 PM</Text>
            </View>

            <Text style={styles.night}>1 Night</Text>

            <View>
              <Text style={styles.date}>27 Feb, Fri</Text>
              <Text style={styles.time}>12 PM</Text>
            </View>
          </View>

          {/* ROOM */}
          <View style={styles.roomRow}>
            <View>
              <Text style={styles.roomTitle}>Deluxe Twin Room</Text>
              <Text style={styles.green}>✓ Free Cancellation Included</Text>
            </View>

            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b' }}
              style={styles.smallImage}
            />
          </View>
        </View>

        {/* ADDONS */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Addons</Text>
          <Text style={styles.sub}>Price inclusive of taxes and for all guests</Text>

          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.bold}>Add Breakfast for ₹560 for all guests</Text>
              <Text style={styles.sub}>Includes taxes and fees</Text>
            </View>

            <Text style={styles.apply}>APPLY</Text>
          </View>
        </View>

        {/* RULES */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Property Rules & Property Policies</Text>

          <Text style={styles.rule}>• Unmarried couples allowed</Text>
          <Text style={styles.rule}>• Primary Guest should be atleast 18 years of age.</Text>
          <Text style={styles.rule}>• Govt ID accepted</Text>
          <Text style={styles.rule}>• Pets are not allowed</Text>
          <Text style={styles.rule}>• Smoking not allowed</Text>
          <Text style={styles.rule}>• No outside food</Text>
        </View>

        {/* PRICE SUMMARY */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Price Summary</Text>

          <View style={styles.rowBetween}>
            <Text style={styles.sub}>Base Price</Text>
            <Text style={styles.value}>₹5,718</Text>
          </View>

          <Text style={styles.sub}>1 room x 1 night</Text>

          <View style={styles.rowBetween}>
            <Text style={styles.green}>Total Discount</Text>
            <Text style={styles.green}>-₹791</Text>
          </View>

          <View style={styles.rowBetween}>
            <Text style={styles.sub}>Price after Discount</Text>
            <Text style={styles.value}>₹5,959</Text>
          </View>

          <View style={styles.rowBetween}>
            <Text style={styles.sub}>Hotel Taxes</Text>
            <Text style={styles.value}>₹337</Text>
          </View>

          <View style={styles.rowBetween}>
            <Text style={styles.total}>Total Amount to be paid</Text>
            <Text style={styles.total}>₹6,296</Text>
          </View>

          <Text style={styles.sub}>Includes taxes and fees</Text>
        </View>

      </ScrollView>

      {/* BOTTOM */}
      <View style={styles.bottom}>
        <View>
          <Text style={styles.sub}>for 1 room 1 night</Text>
          <Text style={styles.sub}>incl. of ₹337 for taxes & fees</Text>
        </View>

        <View>
          <Text style={styles.total}>₹6,292</Text>
          <Text style={styles.sub}>1 Room | Fits 2 Adults</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Payments')}
      >
        <Text style={styles.buttonText}>Proceed to Payment</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ReviewBookingScreen;
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

  subHeader: {
    textAlign: 'center',
    color: '#777',
    marginTop: 8,
  },

  card: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 16,
    padding: 12,
    elevation: 4,
  },

  hotelImage: {
    width: '100%',
    height: 150,
    borderRadius: 14,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  tag: {
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  tagText: { fontSize: 12 },

  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  rating: {
    backgroundColor: '#1B5E20',
    color: '#fff',
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 12,
  },

  ratingText: { fontSize: 12, color: '#777' },

  hotelName: { fontSize: 18, fontWeight: '600' },

  roomInfo: { color: '#777' },

  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },

  date: { fontWeight: '600' },

  time: { color: '#777' },

  night: { color: '#777' },

  roomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },

  roomTitle: { fontWeight: '600' },

  smallImage: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },

  sectionCard: {
    marginHorizontal: 16,
    marginTop: 14,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
  },

  sectionTitle: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 6,
  },

  sub: { color: '#777', fontSize: 12 },

  bold: { fontWeight: '600' },

  apply: { color: '#1976D2', fontWeight: '600' },

  rule: { marginTop: 6, color: '#555' },

  value: { fontWeight: '600' },

  total: {
    fontWeight: '700',
    fontSize: 16,
    marginTop: 6,
  },

  green: { color: '#2E7D32', marginTop: 4 },

  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#EEE',
  },

  button: {
    backgroundColor: '#0F7A6C',
    margin: 16,
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
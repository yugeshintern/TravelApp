import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ReviewBooking = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={22} color="#333333" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Review Booking</Text>
          <Text style={styles.headerSubtitle}>
            26 Feb –27 Feb, 2 Adults
          </Text>
        </View>

        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >

        {/* HOTEL CARD */}
        <View style={styles.hotelCard}>

          {/* HOTEL IMAGE */}
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
            }}
            style={styles.hotelImage}
          />

          {/* BADGES */}
          <View style={styles.badgeRow}>
            <View style={styles.hotelBadge}>
              <Text style={styles.hotelBadgeText}>4 ⭐ Hotel</Text>
            </View>

            <View style={styles.ratingWrapper}>
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>★ 4.3</Text>
              </View>

              <Text style={styles.ratingCount}>388 ratings</Text>
            </View>
          </View>

          {/* TITLE ROW */}
          <View style={styles.hotelTitleRow}>
            <Text style={styles.hotelName}>Hotel Halez</Text>
            <Text style={styles.roomText}>Room, 2 Adults</Text>
          </View>

          {/* DATE ROW */}
          <View style={styles.dateRow}>

            <View>
              <Text style={styles.dateTitle}>26 Feb, Thu</Text>
              <Text style={styles.dateTime}>2 PM</Text>
            </View>

            <View style={styles.nightWrapper}>
              <View style={styles.line} />
              <Text style={styles.nightText}>1 Night</Text>
              <View style={styles.line} />
            </View>

            <View>
              <Text style={styles.dateTitle}>27 Feb, Fri</Text>
              <Text style={styles.dateTime}>12 PM</Text>
            </View>

          </View>

          {/* ROOM DETAILS */}
          <View style={styles.roomDetailRow}>

            <View style={styles.roomLeft}>
              <Text style={styles.roomType}>Deluxe Twin Room</Text>

              <View style={styles.cancellationRow}>
                <Icon name="check" size={18} color="#16A34A" />
                <Text style={styles.cancellationText}>
                  Free Cancelation Included
                </Text>
              </View>
            </View>

            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
              }}
              style={styles.roomImage}
            />

          </View>

        </View>

        {/* ADDONS */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Addons</Text>

          <Text style={styles.sectionSubText}>
            Price inclusive of taxes and for all guests
          </Text>

          <View style={styles.addonRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.addonText}>
                Add <Text style={styles.bold}>Breakfast</Text> for ₹560 for all guests
              </Text>

              <Text style={styles.addonSub}>
                Includes taxes and fees
              </Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.applyText}>APPLY</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* PROPERTY RULES */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Property Rules & Property Policies
          </Text>

          <Text style={styles.ruleText}>
            • Unmarried couples allowed
          </Text>

          <Text style={styles.ruleText}>
            • Primary Guest should be atleast 18 years of age.
          </Text>

          <Text style={styles.ruleText}>
            • Passport, Aadhaar, Driving License and Govt. ID are accepted as ID proofs.
          </Text>

          <Text style={styles.ruleText}>
            • Pets are not allowed.
          </Text>

          <Text style={styles.ruleText}>
            • Smoking within the premises is not allowed
          </Text>

          <Text style={styles.ruleText}>
            • Outside food is not allowed / Food delivery service is not available at the property
          </Text>

          <Text style={styles.ruleText}>
            • Guests are requested not to invite outside visitors in the room during their stay.
          </Text>

          <Text style={styles.ruleText}>
            • 1 infant (0–2 yrs) per room included without counting in total room capacity
          </Text>

          <Text style={styles.ruleText}>
            • No extra bed will be provided to accommodated any child included in the booking / No extra bed will be provided to accommodate any additional guest included in the booking.
          </Text>
        </View>

        {/* PRICE SUMMARY */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Price Summary</Text>

          <View style={styles.priceRow}>
            <View>
              <Text style={styles.priceLabel}>Base Price</Text>
              <Text style={styles.priceSub}>1 room x 1 night</Text>
            </View>

            <Text style={styles.priceValue}>₹5,718</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.discountLabel}>Total Discount</Text>
            <Text style={styles.discountValue}>-₹791</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Price after Discount</Text>
            <Text style={styles.priceValue}>₹5,959</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Hotel Taxes</Text>
            <Text style={styles.priceValue}>₹337</Text>
          </View>

          <View style={styles.totalRow}>
            <View>
              <Text style={styles.totalTitle}>Total Amount to be paid</Text>
              <Text style={styles.totalSub}>
                Includes taxes and fees
              </Text>
            </View>

            <Text style={styles.totalAmount}>₹6,296</Text>
          </View>
        </View>

      </ScrollView>

      {/* BOTTOM PAYMENT BAR */}
      <View style={styles.bottomBar}>

        <View style={styles.bottomLeft}>
          <Text style={styles.bottomRoom}>
            for 1 room 1 night
          </Text>

          <Text style={styles.bottomTax}>
            incl. of ₹337 for taxes & fees
          </Text>
        </View>

        <View style={styles.bottomRight}>
          <Text style={styles.bottomPrice}>₹6,292</Text>
          <Text style={styles.bottomFits}>
            1 Room | Fits 2 Adults
          </Text>
        </View>

      </View>

      {/* PAYMENT BUTTON */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
  style={styles.paymentButton}
  onPress={() => navigation.navigate('Payments')}
>
  <Text style={styles.paymentButtonText}>
    Proceed to Payment
  </Text>
</TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default ReviewBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerCenter: {
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333333',
  },

  headerSubtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#999999',
  },

  headerPlaceholder: {
    width: 44,
  },

  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 180,
  },

  /* CARD */
  hotelCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',

    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  hotelImage: {
    width: '100%',
    height: 170,
    borderRadius: 20,
  },

  badgeRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  hotelBadge: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  hotelBadgeText: {
    fontSize: 13,
    color: '#444444',
  },

  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingBadge: {
    backgroundColor: '#1E8E3E',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  ratingText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  ratingCount: {
    marginLeft: 8,
    color: '#777777',
    fontSize: 13,
  },

  hotelTitleRow: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  hotelName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
  },

  roomText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444444',
  },

  dateRow: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dateTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
  },

  dateTime: {
    marginTop: 6,
    fontSize: 14,
    color: '#666666',
  },

  nightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  line: {
    width: 36,
    height: 1,
    backgroundColor: '#CCCCCC',
  },

  nightText: {
    marginHorizontal: 8,
    fontSize: 14,
    color: '#777777',
  },

  roomDetailRow: {
    marginTop: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  roomLeft: {
    flex: 1,
    marginRight: 16,
  },

  roomType: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
  },

  cancellationRow: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cancellationText: {
    marginLeft: 8,
    color: '#999999',
    fontSize: 14,
  },

  roomImage: {
    width: 122,
    height: 82,
    borderRadius: 14,
  },

  /* COMMON CARD */
  card: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333333',
  },

  sectionSubText: {
    marginTop: 14,
    fontSize: 15,
    color: '#888888',
    lineHeight: 22,
  },

  addonRow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  addonText: {
    fontSize: 15,
    color: '#666666',
    lineHeight: 22,
  },

  bold: {
    fontWeight: '700',
    color: '#333333',
  },

  addonSub: {
    marginTop: 4,
    fontSize: 14,
    color: '#999999',
  },

  applyText: {
    color: '#4A90FF',
    fontWeight: '700',
    fontSize: 15,
  },

  ruleText: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 24,
    color: '#555555',
  },

  priceRow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  priceLabel: {
    fontSize: 16,
    color: '#888888',
  },

  priceSub: {
    marginTop: 4,
    fontSize: 14,
    color: '#AAAAAA',
  },

  priceValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444444',
  },

  discountLabel: {
    fontSize: 16,
    color: '#16A34A',
    fontWeight: '600',
  },

  discountValue: {
    fontSize: 16,
    color: '#16A34A',
    fontWeight: '700',
  },

  totalRow: {
    marginTop: 26,
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
  },

  totalSub: {
    marginTop: 4,
    fontSize: 14,
    color: '#999999',
  },

  totalAmount: {
    fontSize: 30,
    fontWeight: '700',
    color: '#333333',
  },

  /* BOTTOM BAR */
  bottomBar: {
    position: 'absolute',
    bottom: 88,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bottomLeft: {
    flex: 1,
  },

  bottomRoom: {
    fontSize: 14,
    color: '#666666',
  },

  bottomTax: {
    marginTop: 4,
    fontSize: 13,
    color: '#999999',
  },

  bottomRight: {
    alignItems: 'flex-end',
  },

  bottomPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
  },

  bottomFits: {
    marginTop: 4,
    fontSize: 13,
    color: '#888888',
  },

  /* BUTTON */
  buttonContainer: {
    position: 'absolute',
    bottom: 18,
    left: 16,
    right: 16,
  },

  paymentButton: {
    height: 58,
    borderRadius: 999,
    backgroundColor: '#117A7A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  paymentButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});
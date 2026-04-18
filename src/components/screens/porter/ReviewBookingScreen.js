import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ReviewBookingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Review Booking</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* VEHICLE CARD */}
        <View style={styles.card}>
          <View style={styles.vehicleRow}>
            <View style={styles.vehicleIcon}>
              <Text style={{ fontSize: 20 }}>🏍️</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.vehicleTitle}>2 Wheeler</Text>
              <Text style={styles.link}>View Address Details</Text>
            </View>

            <Text style={styles.time}>1 min away</Text>
          </View>

          <View style={styles.loadingRow}>
            <Icon name="clock" size={16} color="#444" />
            <Text style={styles.loadingText}>
              Free <Text style={{ fontWeight: '600' }}>25 mins</Text> of loading-unloading time included.
            </Text>
          </View>
        </View>

        {/* OFFERS */}
        <Text style={styles.sectionTitle}>Offers and Discounts</Text>

        <TouchableOpacity style={styles.cardRow}>
          <View style={styles.rowLeft}>
            <Icon name="percent" size={18} color="#0F7A6C" />
            <Text style={styles.rowText}>Apply Coupon</Text>
          </View>
          <Icon name="chevron-right" size={20} />
        </TouchableOpacity>

        {/* FARE SUMMARY */}
        <Text style={styles.sectionTitle}>Fare Summary</Text>

        <View style={styles.fareCard}>
          <View style={styles.fareRow}>
            <Text style={styles.fareLabel}>Trip Fare (incl. Toll)</Text>
            <Text style={styles.fareValue}>₹67.33</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.fareRow}>
            <Text style={styles.fareLabel}>Net Fare</Text>
            <Text style={styles.fareValue}>₹67</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.fareRow}>
            <Text style={styles.bold}>Amount Payable (rounded)</Text>
            <Text style={styles.bold}>₹67</Text>
          </View>
        </View>

        {/* GOODS */}
        <Text style={styles.sectionTitle}>Goods Description</Text>

        <View style={styles.card}>
          <View style={styles.goodsRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.goodsTitle}>
                Textiles / Garments / Fashion Accessories
              </Text>
              <Text style={styles.goodsSub}>
                20.0 Kg | 01 Package | ₹1500 (Default)
              </Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.change}>Change</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.restrictedBox}>
            <Text style={styles.restrictedText}>
              📦 Do not send restricted items
            </Text>
          </View>
        </View>

        {/* READ BEFORE BOOKING */}
        <Text style={styles.sectionTitle}>Read before Booking</Text>

        <View style={styles.card}>
          {[
            'Fare includes 25 mins free loading-unloading time.',
            '₹2.0/min for additional loading/unloading time.',
            'Fare may change if route or location changes.',
            'Parking charges to be paid by customer.',
            'Fare includes toll and permit charges, if any.',
            'We don’t allow overloading.',
          ].map((item, i) => (
            <Text key={i} style={styles.bullet}>• {item}</Text>
          ))}
        </View>

        <View style={{ height: 140 }} />
      </ScrollView>

      {/* BOTTOM BAR */}
      <View style={styles.bottomBar}>
        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.smallBtn}>
            <Text style={styles.smallText}>₹ Cash</Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity style={styles.smallBtn}>
            <Text style={styles.smallText}>% Ride50</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.cta}>
          <Text style={styles.ctaText}>Book 2 wheeler</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewBookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF1F4',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 16,
    marginBottom: 10,
  },

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 16,
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 20,
    padding: 16,

    elevation: 3,
  },

  vehicleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  vehicleIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  vehicleTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  link: {
    fontSize: 13,
    color: '#666',
  },

  time: {
    color: '#0F7A6C',
    fontWeight: '600',
  },

  loadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 6,
  },

  loadingText: {
    fontSize: 13,
    color: '#444',
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 8,
  },

  cardRow: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },

  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  rowText: {
    fontSize: 14,
    fontWeight: '500',
  },

  fareCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2,
  },

  fareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
  },

  fareLabel: {
    fontSize: 14,
    color: '#444',
  },

  fareValue: {
    fontSize: 14,
  },

  bold: {
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
  },

  goodsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  goodsTitle: {
    fontSize: 14,
    fontWeight: '500',
  },

  goodsSub: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },

  change: {
    color: '#2F80ED',
    fontWeight: '600',
  },

  restrictedBox: {
    marginTop: 12,
    backgroundColor: '#E9DDB7',
    padding: 12,
    borderRadius: 12,
  },

  restrictedText: {
    fontSize: 13,
    fontWeight: '500',
  },

  bullet: {
    fontSize: 13,
    marginBottom: 6,
    color: '#444',
  },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#EEF1F4',
    padding: 16,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    alignItems: 'center',
  },

  smallBtn: {
    borderWidth: 1,
    borderColor: '#0F7A6C',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  smallText: {
    color: '#0F7A6C',
    fontWeight: '600',
  },

  separator: {
    width: 1,
    height: 20,
    backgroundColor: '#ccc',
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
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const RoomSelectionScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(1);

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

        <Text style={styles.subHeader}>26 Feb –27 Feb, 2 Adults</Text>

        {/* ROOM DETAILS CARD */}
        <View style={styles.card}>
          <Text style={styles.roomTitle}>Deluxe Twin Room</Text>

          <View style={styles.imageRow}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a' }}
              style={styles.roomImage}
            />
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b' }}
              style={styles.roomImage}
            />
          </View>

          {/* INFO GRID */}
          <View style={styles.infoRow}>
            <Text style={styles.info}>🏠 317 sq.ft (29 sq.mt)</Text>
            <Text style={styles.info}>🏙 City View</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.info}>🛏 2 x Single Bed(s)</Text>
            <Text style={styles.info}>🚿 City View</Text>
          </View>

          {/* AMENITIES */}
          <Text style={styles.sectionTitle}>Amenities</Text>

          <View style={styles.amenities}>
            <Text style={styles.amenity}>✓ Spa</Text>
            <Text style={styles.amenity}>✓ Gym</Text>
            <Text style={styles.amenity}>✓ Indoor Games</Text>
          </View>

          <View style={styles.amenities}>
            <Text style={styles.amenity}>✓ Butler Services</Text>
            <Text style={styles.amenity}>☕ Restaurant</Text>
          </View>

          <View style={styles.amenities}>
            <Text style={styles.amenity}>🌊 Swimming Pool</Text>
          </View>
        </View>

        {/* OPTION 1 */}
        <View style={styles.optionCard}>
          <Text style={styles.optionTitle}>1. Room With Free Cancellation</Text>

          <Text style={styles.green}>
            ✓ Free Cancellation before 04 Mar 01:59 PM
          </Text>

          <View style={styles.priceRow}>
            <View>
              {selected === 1 && (
                <Text style={styles.selected}>✔ Selected</Text>
              )}
            </View>

            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.price}>₹ 5,718</Text>
              <Text style={styles.tax}>+ ₹337 Taxes & Fees</Text>
            </View>
          </View>
        </View>

        {/* OPTION 2 */}
        <View style={styles.optionCard}>
          <Text style={styles.optionTitle}>2. Room With Free Cancellation</Text>

          <Text style={styles.sub}>• Free Breakfast</Text>

          <Text style={styles.green}>
            ✓ Free Cancellation before 04 Mar 01:59 PM
          </Text>

          <View style={styles.priceRow}>
            <TouchableOpacity
              style={styles.selectBtn}
              onPress={() => setSelected(2)}
            >
              <Text style={styles.selectText}>Select</Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.price}>₹ 6,373</Text>
              <Text style={styles.tax}>+ ₹367 Taxes & Fees</Text>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* BOTTOM */}
      <View style={styles.bottom}>
        <View>
          <Text style={styles.offer}>1 offer applied</Text>
          <Text style={styles.tax}>+ ₹337 Taxes & Fees per night</Text>
        </View>

        <View>
          <Text style={styles.price}>₹5,718</Text>
          <Text style={styles.sub}>1 Room | Fits 2 Adults</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

    </View>
  );
};

export default RoomSelectionScreen;
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
    fontWeight: '600',
    fontSize: 16,
    marginRight: 38,
  },

  subHeader: {
    textAlign: 'center',
    marginTop: 8,
    color: '#777',
  },

  card: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    elevation: 4,
  },

  roomTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },

  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  roomImage: {
    width: '48%',
    height: 110,
    borderRadius: 12,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  info: { color: '#555', fontSize: 13 },

  sectionTitle: {
    marginTop: 14,
    fontWeight: '600',
    fontSize: 15,
  },

  amenities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },

  amenity: { color: '#333', fontSize: 13 },

  optionCard: {
    marginHorizontal: 16,
    marginTop: 14,
    padding: 14,
    backgroundColor: '#EEF2F5',
    borderRadius: 16,
  },

  optionTitle: {
    fontWeight: '600',
    fontSize: 14,
  },

  green: { color: '#2E7D32', marginTop: 6 },

  sub: { color: '#777', marginTop: 4 },

  priceRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1B5E20',
  },

  tax: {
    fontSize: 12,
    color: '#777',
  },

  selected: {
    color: '#FFA726',
    fontWeight: '600',
  },

  selectBtn: {
    backgroundColor: '#FFC107',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },

  selectText: { fontWeight: '600' },

  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#EEE',
  },

  offer: {
    color: '#1976D2',
    fontWeight: '600',
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
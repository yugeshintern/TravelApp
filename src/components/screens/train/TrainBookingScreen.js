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

const TrainBookingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Train Ticket</Text>
        </View>

        {/* INPUT CARD */}
        <View style={styles.inputCard}>

          {/* FROM */}
          <View style={styles.row}>
            <Icon name="map-pin" size={20} color="#444" />
            <Text style={styles.inputText}>Enter From</Text>

            <View style={styles.swapBtn}>
              <Icon name="arrow-up" size={14} />
              <Icon name="arrow-down" size={14} />
            </View>
          </View>

          <View style={styles.divider} />

          {/* TO */}
          <View style={styles.row}>
            <Icon name="map-pin" size={20} color="#444" />
            <Text style={styles.inputText}>Enter To</Text>
          </View>

          <View style={styles.divider} />

          {/* DATE */}
          <View style={styles.row}>
            <Icon name="calendar" size={20} color="#444" />
            <View>
              <Text style={styles.label}>Date of Journey</Text>
              <Text style={styles.date}>26 Feb, 2026</Text>
            </View>
          </View>

        </View>

        {/* SEARCH BUTTON */}
        <TouchableOpacity style={styles.searchBtn}>
          <Icon name="search" size={18} color="#444" />
          <Text style={styles.searchText}>Search Trains</Text>
        </TouchableOpacity>

        {/* PROMO CARD 1 */}
        <View style={styles.promoCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.logo}>TRAVEL</Text>
            <Text style={styles.offer}>100% OFF</Text>
            <Text style={styles.subOffer}>On service Charge</Text>
          </View>

          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957' }}
            style={styles.trainImage}
          />

          <Text style={styles.cornerText}>RIDE MORE{"\n"}PAY LESS</Text>
        </View>

        {/* PROMO CARD 2 */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>
            FESTIVAL SPECIAL TRAINS
          </Text>

          <Text style={styles.bannerSub}>
            BETWEEN YESVANTPUR AND MANGALURU JN
          </Text>

          <Text style={styles.bannerText}>
            Train No. 06217/06218
          </Text>

          <Text style={styles.bannerText}>
            Yesvantpur → Mangaluru Jn (06217)
          </Text>

          <Text style={styles.bannerText}>
            Mangaluru → Yesvantpur (06218)
          </Text>
        </View>

      </ScrollView>
    </View>
  );
};

export default TrainBookingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },

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
    fontSize: 18,
    fontWeight: '600',
    marginRight: 38,
  },

  /* INPUT CARD */
  inputCard: {
    margin: 16,
    backgroundColor: '#E9ECEF',
    borderRadius: 20,
    padding: 16,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
  },

  inputText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#444',
  },

  divider: {
    height: 1,
    backgroundColor: '#CFCFCF',
    marginVertical: 12,
  },

  swapBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    fontSize: 12,
    color: '#666',
  },

  date: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 2,
  },

  /* SEARCH */
  searchBtn: {
    marginHorizontal: 16,
    backgroundColor: '#E0E0E0',
    borderRadius: 30,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  searchText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#444',
  },

  /* PROMO 1 */
  promoCard: {
    margin: 16,
    backgroundColor: '#FFE082',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
  },

  logo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F7A6C',
  },

  offer: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
  },

  subOffer: {
    color: '#444',
  },

  trainImage: {
    width: 140,
    height: 70,
    resizeMode: 'contain',
  },

  cornerText: {
    position: 'absolute',
    right: 12,
    top: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'right',
  },

  /* BANNER */
  banner: {
    margin: 16,
    backgroundColor: '#FF8F00',
    borderRadius: 20,
    padding: 16,
  },

  bannerTitle: {
    color: '#1A237E',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },

  bannerSub: {
    color: '#1A237E',
    textAlign: 'center',
    marginTop: 6,
    fontWeight: '600',
  },

  bannerText: {
    textAlign: 'center',
    marginTop: 6,
    color: '#000',
  },
});
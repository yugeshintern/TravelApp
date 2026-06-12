import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const TrainBookingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
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

          <Text style={styles.headerTitle}>Train Ticket</Text>

          <View style={styles.placeholder} />
        </View>

        {/* INPUT CARD */}
        <View style={styles.inputCard}>

          {/* FROM */}
          <View style={styles.inputRow}>
            <Image
              source={require('../../../assets/from.png')}
              style={styles.inputIcon}
            />

            <Text style={styles.inputText}>Enter From</Text>

            <TouchableOpacity style={styles.swapBtn}>
              <Image
                source={require('../../../assets/swap.png')}
                style={styles.swapIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          {/* TO */}
          <View style={styles.inputRow}>
            <Image
              source={require('../../../assets/to.png')}
              style={styles.inputIcon}
            />

            <Text style={styles.inputText}>Enter To</Text>
          </View>

          <View style={styles.divider} />

          {/* DATE */}
          <View style={styles.inputRow}>
            <Image
              source={require('../../../assets/calender.png')}
              style={styles.inputIcon}
            />

            <View style={styles.dateContainer}>
              <Text style={styles.dateLabel}>
                Date of Journey
              </Text>

              <Text style={styles.dateText}>
                26 Feb, 2026
              </Text>
            </View>
          </View>

        </View>

        {/* SEARCH BUTTON */}
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => navigation.navigate('SearchTrain')}
        >
          <Image
            source={require('../../../assets/search-icon.png')}
            style={styles.searchIcon}
          />

          <Text style={styles.searchText}>
            Search Trains
          </Text>
        </TouchableOpacity>

        {/* PROMO BANNER */}
        <View style={styles.promoCard}>

          <View style={styles.promoLeft}>
            <Text style={styles.travelLogo}>
              TRAVEL
            </Text>

            <Text style={styles.offerText}>
              100% OFF
            </Text>

            <Text style={styles.offerSubText}>
              On service Charge
            </Text>
          </View>

          <Image
            source={require('../../../assets/trainPromo.png')}
            style={styles.promoImage}
          />

          <Text style={styles.cornerText}>
            RIDE MORE{'\n'}PAY LESS
          </Text>

        </View>

        {/* FESTIVAL BANNER */}
        <Image
          source={require('../../../assets/festivalBanner.png')}
          style={styles.festivalBanner}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

export default TrainBookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },

  scrollContent: {
    paddingBottom: 40,
  },

  /* HEADER */
  header: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#E9E9E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111111',
  },

  placeholder: {
    width: 42,
  },

  /* INPUT CARD */
  inputCard: {
    marginTop: 28,
    marginHorizontal: 20,
    backgroundColor: '#E9ECEF',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 18,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  inputText: {
    flex: 1,
    marginLeft: 14,
    fontSize: 18,
    color: '#3D3D3D',
    fontWeight: '400',
  },

  divider: {
    height: 1,
    backgroundColor: '#D1D1D1',
    marginVertical: 18,
    marginLeft: 34,
  },

  swapBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#AFAFAF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  swapIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  dateContainer: {
    marginLeft: 14,
  },

  dateLabel: {
    fontSize: 13,
    color: '#777777',
    marginBottom: 4,
  },

  dateText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
  },

  /* SEARCH */
  searchBtn: {
    marginTop: 22,
    marginHorizontal: 20,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginRight: 10,
  },

  searchText: {
    fontSize: 18,
    color: '#333333',
    fontWeight: '500',
  },

  /* PROMO CARD */
  promoCard: {
  marginTop: 26,
  marginHorizontal: 20,
  backgroundColor: '#F7DC82',
  borderRadius: 24,
  paddingLeft: 18,
  paddingRight: 6,
  paddingVertical: 18,
  flexDirection: 'row',
  alignItems: 'center',
  overflow: 'hidden',

  shadowColor: '#000',
  shadowOpacity: 0.06,
  shadowRadius: 8,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  elevation: 4,
},

  promoLeft: {
    flex: 1,
  },

  travelLogo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0C7A6A',
  },

  offerText: {
    marginTop: 14,
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
  },

  offerSubText: {
    marginTop: 4,
    fontSize: 15,
    color: '#4D4D4D',
  },

  promoImage: {
  width: 230,
  height: 125,
  resizeMode: 'contain',
  marginRight: -10,
  marginBottom: -8,
},

  cornerText: {
  position: 'absolute',
  top: 14,
  right: 14,
  fontSize: 12,
  fontWeight: '700',
  color: '#FFFFFF',
  textAlign: 'right',
  lineHeight: 16,
},

  /* FESTIVAL BANNER */
  festivalBanner: {
    marginTop: 28,
    marginHorizontal: 20,
    width: '90%',
    height: 210,
    borderRadius: 24,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
});
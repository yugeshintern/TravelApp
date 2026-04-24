import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const OrderSummaryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={20} />
          </TouchableOpacity>

          <Text style={styles.title}>Order summary</Text>
        </View>

        {/* AMOUNT SECTION */}
        <View style={styles.section}>

          <View style={styles.row}>
            <Text style={styles.label}>Total amount</Text>
            <Text style={styles.value}>₹399</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Payable after shifting</Text>
            <Text style={styles.value}>₹399</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Pay booking amount</Text>
            <Text style={styles.value}>₹100</Text>
          </View>

          <Text style={styles.subText}>
            Booking amount of flat Rs.100 needs to be paid for order confirmation
          </Text>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              After successful movement pay the remaining amount to the partner
            </Text>
          </View>

        </View>

        {/* SERVICE OFFERS */}
        <Text style={styles.sectionTitle}>Service offers</Text>

        {/* MINI TRUCK */}
        <View style={styles.offerRow}>
          <View style={styles.iconCircle}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png' }}
              style={styles.iconImg}
            />
          </View>

          <View style={styles.offerText}>
            <Text style={styles.offerTitle}>Mini truck</Text>
            <Text style={styles.offerDesc}>
              TATA Ace (7L x 4.8W x 4.8H)
            </Text>
          </View>
        </View>

        {/* LABOUR */}
        <View style={styles.offerRow}>
          <View style={styles.iconCircle}>
            <Icon name="user" size={26} />
          </View>

          <View style={styles.offerText}>
            <Text style={styles.offerTitle}>Labour</Text>
            <Text style={styles.offerDesc}>
              1 Dedicated labour along with the driver for loading & unloading assistance
            </Text>
          </View>
        </View>

      </ScrollView>

      {/* BUTTON */}
      <TouchableOpacity style={styles.button}
      onPress={()=> navigation.navigate("Payments")}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSummaryScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
  },

  header: {
    marginTop: 50,
    alignItems: 'center',
  },

  backBtn: {
    position: 'absolute',
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
  },

  section: {
    marginTop: 30,
    paddingHorizontal: 16,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    color: '#444',
  },

  value: {
    fontSize: 18,
    fontWeight: '700',
  },

  subText: {
    fontSize: 13,
    color: '#777',
    marginTop: -10,
    marginBottom: 12,
    lineHeight: 18,
  },

  infoBox: {
    backgroundColor: '#E0E0E0',
    padding: 12,
    borderRadius: 12,
    marginTop: 8,
  },

  infoText: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
    marginHorizontal: 16,
  },

  offerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
  },

  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    marginRight: 14,
  },

  iconImg: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },

  offerText: {
    flex: 1,
  },

  offerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  offerDesc: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },

  button: {
    backgroundColor: '#0F766E',
    margin: 16,
    padding: 16,
    borderRadius: 30,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
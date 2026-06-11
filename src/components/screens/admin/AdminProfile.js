import React, { useState } from 'react';
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

const AdminProfile = ({ navigation }) => {
  const [isOnDuty, setIsOnDuty] = useState(false);

  const menuItems = [
    { icon: 'help-circle', label: 'Help' },
    { icon: 'credit-card', label: 'Wallets' },
    { icon: 'clock', label: 'My Rides' },
    { icon: 'shield', label: 'Safety' },
    { icon: 'gift', label: 'Refer and Earn' },
    { icon: 'award', label: 'My Rewards' },
    { icon: 'tag', label: 'Power Pass' },
    { icon: 'bell', label: 'Notifications' },
    { icon: 'shield-off', label: 'Claims' },
    { icon: 'settings', label: 'Settings' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn}>
            <Icon name="arrow-left" size={20} color="#333333" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Profile</Text>

          <View style={{ width: 40 }} />
        </View>

        {/* PROFILE CARD */}
        <View style={styles.card}>
          
          {/* USER INFO */}
          <View style={styles.row}>
            <Icon name="user" size={28} color="#333333" />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>John Wick</Text>
              <Text style={styles.userPhone}>6625025660</Text>
            </View>
            <Icon name="chevron-right" size={22} color="#666666" />
          </View>

          {/* DIVIDER */}
          <View style={styles.divider} />

          {/* RATING */}
          <View style={styles.row}>
            <Icon name="star" size={26} color="#F4A100" />
            <Text style={styles.ratingText}>5.00 My Rating</Text>
            <Icon name="chevron-right" size={22} color="#666666" />
          </View>
        </View>

        {/* MENU LIST */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <View key={index}>
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <Icon name={item.icon} size={22} color="#333333" />
                  <Text style={styles.menuText}>{item.label}</Text>
                </View>
                <Icon name="chevron-right" size={22} color="#666666" />
              </TouchableOpacity>

              {/* DIVIDER */}
              {index !== menuItems.length - 1 && (
                <View style={styles.listDivider} />
              )}
            </View>
          ))}
        </View>

        {/* BANNER */}
        <View style={styles.banner}>
          <View>
            <Text style={styles.bannerTitle}>
              Earn money with Travel
            </Text>
            <Text style={styles.bannerSub}>
              Become a Captain!
            </Text>
          </View>

          <Image
            source={require('../../../assets/scooter.png')} // replace with your asset
            style={styles.bannerImage}
          />
        </View>

      </ScrollView>

      {/* TOGGLE */}
      <TouchableOpacity
        style={[
          styles.toggleContainer,
          { backgroundColor: isOnDuty ? '#16A34A' : '#BDBDBD' },
        ]}
        onPress={() => setIsOnDuty(!isOnDuty)}
      >
        <Text style={styles.toggleText}>
          {isOnDuty ? 'ON DUTY' : 'OFF DUTY'}
        </Text>

        <View
          style={[
            styles.toggleCircle,
            { alignSelf: isOnDuty ? 'flex-end' : 'flex-start' },
          ]}
        />
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default AdminProfile;

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
    paddingVertical: 16,
  },

  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333333',
  },

  /* CARD */
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  userInfo: {
    flex: 1,
    marginLeft: 12,
  },

  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333333',
  },

  userPhone: {
    fontSize: 14,
    color: '#999999',
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },

  ratingText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },

  /* MENU */
  menuContainer: {
    marginTop: 16,
    marginHorizontal: 16,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuText: {
    marginLeft: 16,
    fontSize: 16,
    color: '#333333',
  },

  listDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },

  /* BANNER */
  banner: {
    margin: 16,
    backgroundColor: '#F1E8D8',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bannerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },

  bannerSub: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },

  bannerImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },

  /* TOGGLE */
  toggleContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    height: 48,
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },

  toggleText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  toggleCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
  },
});
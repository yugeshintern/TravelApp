import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const DriverPickupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* MAP */}
      {/* <Image
        source={require('../../assets/map.png')} // replace with your map
        style={styles.map}
      /> */}

      {/* BACK BUTTON */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} />
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        <View style={styles.drag} />

        <Text style={styles.title}>Driver on the way to pickup</Text>

        {/* ETA CARD */}
        <View style={styles.etaCard}>
          <View>
            <Text style={styles.etaTitle}>
              Pickup in <Text style={styles.green}>1 min</Text>
            </Text>
            <Text style={styles.sub}>Captain 500 m away</Text>
          </View>

          <View style={styles.bikeIcon}>
            <Text>🏍️</Text>
          </View>
        </View>

        {/* PIN */}
        <Text style={styles.section}>Start your order with PIN</Text>

        <View style={styles.pinRow}>
          {['0', '0', '0', '7'].map((n, i) => (
            <View key={i} style={styles.pinBox}>
              <Text style={styles.pinText}>{n}</Text>
            </View>
          ))}
        </View>

        {/* DRIVER CARD */}
        <View style={styles.driverCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.bold}>TN 14 AT 5566</Text>
            <Text style={styles.sub}>HONDA CB350</Text>

            <Text style={styles.name}>John Franx</Text>

            <TouchableOpacity style={styles.messageBtn}>
              <Icon name="message-square" size={16} />
              <Text style={styles.msgText}>Message John</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileWrap}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100' }}
              style={styles.profile}
            />

            <View style={styles.rating}>
              <Text style={styles.ratingText}>4.8 ⭐</Text>
            </View>
          </View>
        </View>

        {/* PICKUP */}
        <Text style={styles.section}>Pickup From</Text>

        <Text style={styles.bold}>Koyambedu Bus Stand</Text>
        <Text style={styles.sub}>
          Koyambedu bus terminus, Koyambedu, Chennai, Tamil...
        </Text>

        {/* CANCEL */}
        <TouchableOpacity>
          <Text style={styles.cancel}>Cancel Trip</Text>
        </TouchableOpacity>

        {/* FOOTER */}
        <View style={styles.footer}>
          <View style={styles.issueRow}>
            <View style={styles.helpIcon}>
              <Text style={{ color: '#fff' }}>?</Text>
            </View>
            <Text style={styles.issueText}>Issue with Pickup?</Text>
          </View>

          <TouchableOpacity style={styles.feedback}>
            <Text style={styles.feedbackText}>Share feedback</Text>
            <Icon name="chevron-right" size={16} color="#2F80ED" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DriverPickupScreen;
const styles = StyleSheet.create({
  container: { flex: 1 },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  backBtn: {
    position: 'absolute',
    top: 50,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },

  sheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
  },

  drag: {
    width: 40,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 10,
  },

  title: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 12,
  },

  etaCard: {
    backgroundColor: '#F3F5F7',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  etaTitle: {
    fontSize: 14,
    fontWeight: '600',
  },

  green: {
    color: '#0F7A6C',
  },

  sub: {
    fontSize: 12,
    color: '#666',
  },

  bikeIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  section: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 14,
    marginBottom: 6,
  },

  pinRow: {
    flexDirection: 'row',
    gap: 8,
  },

  pinBox: {
    width: 32,
    height: 32,
    backgroundColor: '#EEF1F4',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pinText: {
    fontWeight: '600',
  },

  driverCard: {
    backgroundColor: '#F3F5F7',
    borderRadius: 18,
    padding: 14,
    marginTop: 12,
    flexDirection: 'row',
  },

  bold: {
    fontWeight: '600',
    fontSize: 14,
  },

  name: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '500',
  },

  messageBtn: {
    marginTop: 10,
    backgroundColor: '#E9ECEF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  msgText: {
    fontSize: 13,
  },

  profileWrap: {
    alignItems: 'center',
  },

  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  rating: {
    marginTop: 4,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    elevation: 2,
  },

  ratingText: {
    fontSize: 11,
  },

  cancel: {
    textAlign: 'center',
    color: '#B00020',
    fontWeight: '600',
    marginTop: 10,
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 14,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  issueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  helpIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#2F80ED',
    alignItems: 'center',
    justifyContent: 'center',
  },

  issueText: {
    fontSize: 12,
    color: '#444',
  },

  feedback: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  feedbackText: {
    color: '#2F80ED',
    fontWeight: '600',
  },
});
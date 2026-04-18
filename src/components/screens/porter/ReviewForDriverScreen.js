import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ReviewForDriverScreen = ({ navigation }) => {
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
      {/* BACKGROUND (FADED HOME UI MOCK) */}
      <View style={styles.bgOverlay} />

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        {/* PAID */}
        <View style={styles.paidRow}>
          <Icon name="check-circle" size={18} color="#2DBE60" />
          <Text style={styles.paidText}>Paid ₹62</Text>
        </View>

        {/* PROFILE */}
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.avatar}
        />

        {/* TITLE */}
        <Text style={styles.title}>
          How was your ride with John Franx?
        </Text>

        {/* STARS */}
        <View style={styles.starRow}>
          {[1, 2, 3, 4, 5].map((i) => (
            <TouchableOpacity key={i} onPress={() => setRating(i)}>
              <Icon
                name="star"
                size={32}
                color={i <= rating ? '#F4B400' : '#DADADA'}
                style={{ marginHorizontal: 4 }}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* DIVIDER */}
        <View style={styles.divider} />

        {/* HELP CARD */}
        <TouchableOpacity style={styles.helpCard}>
          <View style={styles.helpLeft}>
            <View style={styles.helpIcon}>
              <Icon name="headphones" size={16} color="#fff" />
            </View>

            <View>
              <Text style={styles.helpTitle}>Need Help?</Text>
              <Text style={styles.helpSub}>
                We are just a tap away
              </Text>
            </View>
          </View>

          <Icon name="chevron-right" size={18} color="#333" />
        </TouchableOpacity>

        {/* DONE BUTTON */}
        <TouchableOpacity
          style={[
            styles.doneBtn,
            { backgroundColor: rating ? '#0F7A6C' : '#E0E0E0' },
          ]}
          disabled={!rating}
        >
          <Text
            style={[
              styles.doneText,
              { color: rating ? '#fff' : '#999' },
            ]}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewForDriverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000040', // dim overlay
    justifyContent: 'flex-end',
  },

  bgOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ffffff',
    opacity: 0.6,
  },

  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    alignItems: 'center',
  },

  paidRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    marginBottom: 10,
  },

  paidText: {
    fontSize: 14,
    fontWeight: '600',
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginVertical: 10,
  },

  title: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },

  starRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    width: '100%',
    marginBottom: 12,
  },

  helpCard: {
    width: '100%',
    backgroundColor: '#E6EFFA',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  helpLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  helpIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2F80ED',
    alignItems: 'center',
    justifyContent: 'center',
  },

  helpTitle: {
    fontSize: 14,
    fontWeight: '600',
  },

  helpSub: {
    fontSize: 12,
    color: '#555',
  },

  doneBtn: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
  },

  doneText: {
    fontSize: 15,
    fontWeight: '600',
  },
});
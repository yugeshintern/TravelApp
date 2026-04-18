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

const reasons = [
  'Wrong / Inappropriate Vehicle',
  'My reason is not listed',
  'Driver asked me to cancel',
  'Changed my mind',
  'Driver issue - delaying to come',
  'Unable to contact driver',
  'Expected a shorter arrival time',
  'Driver asking for extra money',
  'Driver asking for extra money',
];

const CancellationReasonScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      {/* MAP BACKGROUND */}
      <Image
        source={require('../../assets/map.png')} // replace if needed
        style={styles.map}
        blurRadius={1}
      />

      {/* BACK BUTTON */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} />
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        <View style={styles.drag} />

        {/* TITLE */}
        <Text style={styles.title}>Why do you want to cancel?</Text>
        <Text style={styles.subtitle}>
          Please provide the reason for cancellation
        </Text>

        <View style={styles.dashed} />

        {/* LIST */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {reasons.map((item, index) => {
            const isSelected = selected === index;

            return (
              <TouchableOpacity
                key={index}
                style={styles.row}
                onPress={() => setSelected(index)}
                activeOpacity={0.7}
              >
                <Text style={styles.text}>{item}</Text>

                {/* RADIO */}
                <View style={[styles.radio, isSelected && styles.radioActive]}>
                  {isSelected && <View style={styles.innerDot} />}
                </View>
              </TouchableOpacity>
            );
          })}

          <View style={{ height: 20 }} />
        </ScrollView>
      </View>
    </View>
  );
};

export default CancellationReasonScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

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
    height: '70%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  drag: {
    width: 40,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },

  subtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },

  dashed: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginVertical: 12,
  },

  row: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    paddingRight: 10,
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioActive: {
    borderColor: '#0F7A6C',
  },

  innerDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0F7A6C',
  },
});
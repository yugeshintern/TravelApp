import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const AddPassengersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={20} color="#000" />
          </TouchableOpacity>

          <Text style={styles.title}>20605 Ms Tcn Sf Exp</Text>
          <Text style={styles.subTitle}>1A - GN - Thu, 26 Feb</Text>
        </View>

        {/* BOARDING */}
        <Text style={styles.sectionTitle}>Boarding Station</Text>
        <Text style={styles.label}>Boarding Details</Text>

        <View style={styles.inputBox}>
          <Text style={styles.inputText}>
            MS – Chennai Egmore (26 Feb, 16:00)
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            You are booking this train from (MS – Chennai Egmore) to (TCN – Tiruchendur)
          </Text>
        </View>

        {/* PASSENGERS */}
        <Text style={styles.sectionTitle}>Select Passengers</Text>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>+ Add New Passengers</Text>
        </TouchableOpacity>

        {/* CONTACT */}
        <Text style={styles.sectionTitle}>Contact Details</Text>

        <View style={styles.contactRow}>
          <Icon name="mail" size={20} color="#333" />
          <Text style={styles.contactText}>
            Your booking details will be sent here
          </Text>
        </View>

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          value="+91 99880 08899"
          editable={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#999"
        />

      </ScrollView>

      {/* BOTTOM BUTTON */}
      <TouchableOpacity style={styles.payBtn}>
        <Text style={styles.payText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPassengersScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
  },

  header: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  backBtn: {
    position: 'absolute',
    left: 20,
    top: 0,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },

  subTitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#777',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 30,
    marginHorizontal: 20,
    color: '#333',
  },

  label: {
    marginTop: 16,
    marginHorizontal: 20,
    color: '#888',
    fontSize: 14,
  },

  inputBox: {
    marginHorizontal: 20,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderRadius: 14,
    padding: 16,
    backgroundColor: '#fff',
  },

  inputText: {
    fontSize: 15,
    color: '#666',
  },

  infoBox: {
    marginHorizontal: 20,
    marginTop: 14,
    backgroundColor: '#F3E5C4',
    padding: 14,
    borderRadius: 14,
  },

  infoText: {
    fontSize: 13,
    color: '#444',
    lineHeight: 18,
  },

  addBtn: {
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: '#0B7A00',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },

  addBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 16,
  },

  contactText: {
    marginLeft: 10,
    color: '#444',
    fontSize: 14,
  },

  input: {
    marginHorizontal: 20,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderRadius: 14,
    padding: 16,
    fontSize: 15,
    backgroundColor: '#fff',
  },

  payBtn: {
    margin: 20,
    backgroundColor: '#0F7C7C',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
  },

  payText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const EnterOTPScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '', '']);

  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (text.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 4) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (key, index) => {
    if (key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* BACK BUTTON */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={22} color="#333" />
      </TouchableOpacity>

      {/* IMAGE */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/otp_phone.png')} // replace with your asset
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* TITLE */}
      <Text style={styles.title}>Enter OTP</Text>

      {/* OTP BOXES */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) =>
              handleBackspace(nativeEvent.key, index)
            }
          />
        ))}
      </View>

    </SafeAreaView>
  );
};

export default EnterOTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 20,
  },

  /* BACK */
  backBtn: {
    marginTop: 10,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* IMAGE */
  imageContainer: {
    marginTop: 60,
    alignItems: 'center',
  },

  image: {
    width: 120,
    height: 120,
  },

  /* TITLE */
  title: {
    marginTop: 40,
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },

  /* OTP BOXES */
  otpContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  otpBox: {
    width: 55,
    height: 65,
    borderWidth: 1,
    borderColor: '#9E9E9E',
    borderRadius: 14,
    textAlign: 'center',
    fontSize: 20,
    color: '#333',
    backgroundColor: '#FFF',
  },
});
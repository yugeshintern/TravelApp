import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SocialLoginRow = ({label, onGoogle, onFacebook, onApple}) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={onGoogle}>
          <Text>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onFacebook}>
          <Text>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onApple}>
          <Text>Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginTop: 20},
  buttons: {flexDirection: 'row', marginTop: 10},
  button: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginHorizontal: 4,
  },
});

export default SocialLoginRow;
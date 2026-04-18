import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const PrimaryButton = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#7A7A7A',
    fontWeight: '600',
  },
});
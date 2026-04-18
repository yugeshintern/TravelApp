import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const AppInput = props => {
  return <TextInput style={styles.input} {...props} />;
};

export default AppInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});
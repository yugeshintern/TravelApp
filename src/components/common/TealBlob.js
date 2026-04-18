import React from 'react';
import {View, StyleSheet} from 'react-native';

const TealBlob = ({position}) => {
  return <View style={[styles.blob, styles[position]]} />;
};

export default TealBlob;

const styles = StyleSheet.create({
  blob: {
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: '#0F766E',
    borderRadius: 100,
  },

  topLeft: {
    top: -80,
    left: -80,
  },

  bottomRight: {
    bottom: -80,
    right: -80,
  },
});
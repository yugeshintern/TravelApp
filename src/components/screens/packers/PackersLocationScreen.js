import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const PackersLocationScreen = ({ navigation }) => {
  const [isIntercity, setIsIntercity] = useState(false);
  const [lift, setLift] = useState(false);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={20} />
        </TouchableOpacity>

        <Text style={styles.title}>Packers & Movers</Text>
      </View>

      {/* STEP INDICATOR */}
      <View style={styles.stepContainer}>
        <View style={styles.activeStep}>
          <Icon name="map-pin" size={16} color="#fff" />
        </View>

        <View style={styles.dashedLine} />

        <View style={styles.step}>
          <Icon name="file-text" size={16} color="#888" />
        </View>

        <View style={styles.dashedLine} />

        <View style={styles.step}>
          <Icon name="calendar" size={16} color="#888" />
        </View>
      </View>

      {/* TOGGLE */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleBtn,
            !isIntercity && styles.activeToggle,
          ]}
          onPress={() => setIsIntercity(false)}
          onPress={() => navigation.navigate("PackersItems")}
        >
          <Text style={!isIntercity ? styles.activeText : styles.text}>
            Within city
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleBtn,
            isIntercity && styles.activeToggle,
          ]}
          onPress={() => setIsIntercity(true)}
          onPress={() => navigation.navigate("PackersItems")}
        >
          <Text style={isIntercity ? styles.activeText : styles.text}>
            Between cities
          </Text>
        </TouchableOpacity>
      </View>

      {/* LOCATION CARD */}
      <View style={styles.card}>

        {/* LEFT LINE + DOTS */}
        <View style={styles.leftIndicator}>
          <View style={styles.greenDot} />
          <View style={styles.verticalLine} />
          <View style={styles.redDot} />
        </View>

        {/* RIGHT CONTENT */}
        <View style={{ flex: 1 }}>

          <Text style={styles.label}>Pickup location</Text>
          <Text style={styles.address}>
            Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu...
          </Text>

          <View style={styles.divider} />

          <Text style={styles.label}>Drop location</Text>
          <Text style={styles.address}>
            Gandhi Irwin Road, Egmore, Chennai, Tamil Nadu...
          </Text>

        </View>
      </View>

      {/* LIFT OPTION */}
      <View style={styles.liftContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.liftTitle}>
            Service lift available at drop
          </Text>
          <Text style={styles.liftSub}>
            A working service lift will reduce the overall quote
          </Text>
        </View>

        <Switch
          value={lift}
          onValueChange={setLift}
          trackColor={{ false: '#ccc', true: '#0F766E' }}
          thumbColor="#fff"
        />
      </View>

    </View>
  );
};

export default PackersLocationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
    paddingHorizontal: 16,
  },

  /* HEADER */
  header: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backBtn: {
    position: 'absolute',
    left: 0,
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

  /* STEP */
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },

  activeStep: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0F766E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  step: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dashedLine: {
    flex: 1,
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 6,
  },

  /* TOGGLE */
  toggleContainer: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
  },

  toggleBtn: {
    width: '48%',
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
  },

  activeToggle: {
    backgroundColor: '#E5E7EB',
  },

  text: {
    fontSize: 16,
    color: '#555',
    fontWeight: '600',
  },

  activeText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '700',
  },

  /* CARD */
  card: {
    flexDirection: 'row',
    marginTop: 25,
    backgroundColor: '#E9EDF0',
    borderRadius: 20,
    padding: 16,
  },

  leftIndicator: {
    width: 30,
    alignItems: 'center',
    marginRight: 10,
  },

  greenDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: 'green',
    backgroundColor: '#fff',
  },

  redDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#8B0000',
    backgroundColor: '#fff',
  },

  verticalLine: {
    flex: 1,
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#999',
    marginVertical: 4,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  address: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 12,
  },

  /* LIFT */
  liftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },

  liftTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  liftSub: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
});
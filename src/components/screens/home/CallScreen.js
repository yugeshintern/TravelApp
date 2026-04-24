import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CallScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={22} color="#1E1E1E" />
        </TouchableOpacity>

        <View style={styles.headerText}>
          <Text style={styles.name}>John Franx</Text>
          <Text style={styles.timer}>00:50</Text>
        </View>
      </View>

      {/* PROFILE IMAGE */}
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/5f/7d/6f/5f7d6f5c1d4f41f4c4b2c1cdb7a9d7f4.jpg',
          }}
          style={styles.profileImage}
        />
      </View>

      {/* BOTTOM CONTROLS */}
      <View style={styles.bottomContainer}>
        <View style={styles.divider} />

        <View style={styles.controlsRow}>
          {/* MIC */}
          <TouchableOpacity style={styles.controlBtn}>
            <Feather name="mic" size={26} color="#117A7A" />
          </TouchableOpacity>

          {/* SPEAKER */}
          <TouchableOpacity style={styles.controlBtn}>
            <Feather name="volume-2" size={26} color="#117A7A" />
          </TouchableOpacity>

          {/* END CALL */}
          <TouchableOpacity style={styles.endCallBtn}>
            <MaterialIcons name="call-end" size={28} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#117A7A', // teal background
  },

  /* HEADER */
  header: {
    marginTop: 10,
    alignItems: 'center',
  },

  backBtn: {
    position: 'absolute',
    left: 20,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    alignItems: 'center',
  },

  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  timer: {
    fontSize: 16,
    color: '#E6F2F2',
    marginTop: 4,
  },

  /* PROFILE */
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileImage: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#FFFFFF',

    // shadow
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },

  /* BOTTOM */
  bottomContainer: {
    paddingBottom: 40,
  },

  divider: {
    height: 1,
    backgroundColor: '#D9E4E4',
    marginBottom: 30,
  },

  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  controlBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },

  endCallBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FF1E1E',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
});




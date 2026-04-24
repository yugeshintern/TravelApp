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

const VideoCallScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* FULL SCREEN BACKGROUND (VIDEO PLACEHOLDER) */}
      <Image
        source={{
          uri: 'https://i.pinimg.com/736x/5f/7d/6f/5f7d6f5c1d4f41f4c4b2c1cdb7a9d7f4.jpg',
        }}
        style={styles.backgroundImage}
      />

      {/* OVERLAY CONTENT */}
      <SafeAreaView style={styles.overlay}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={22} color="#000" />
          </TouchableOpacity>

          <View style={styles.headerText}>
            <Text style={styles.name}>John Franx</Text>
            <Text style={styles.timer}>00:50</Text>
          </View>
        </View>

        {/* SELF VIDEO PREVIEW */}
        <View style={styles.previewContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/236x/8f/44/f7/8f44f7a94db79dffbda0eec6bdfc1b2d.jpg',
            }}
            style={styles.previewImage}
          />
          <View style={styles.cameraIcon}>
            <Feather name="camera" size={14} color="#000" />
          </View>
        </View>

        {/* BOTTOM CONTROLS */}
        <View style={styles.bottomContainer}>
          <View style={styles.controlsRow}>

            {/* MIC */}
            <TouchableOpacity style={styles.controlBtn}>
              <Feather name="mic" size={24} color="#333" />
            </TouchableOpacity>

            {/* SPEAKER */}
            <TouchableOpacity style={styles.controlBtn}>
              <Feather name="volume-2" size={24} color="#333" />
            </TouchableOpacity>

            {/* VIDEO OFF */}
            <TouchableOpacity style={styles.controlBtn}>
              <Feather name="video-off" size={24} color="#333" />
            </TouchableOpacity>

            {/* END CALL */}
            <TouchableOpacity style={styles.endCallBtn}>
              <MaterialIcons name="call-end" size={26} color="#fff" />
            </TouchableOpacity>

          </View>
        </View>

      </SafeAreaView>
    </View>
  );
};

export default VideoCallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  /* BACKGROUND */
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },

  overlay: {
    flex: 1,
    justifyContent: 'space-between',
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
    backgroundColor: '#E6E6E6',
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
    color: '#EAEAEA',
    marginTop: 4,
  },

  /* PREVIEW */
  previewContainer: {
    position: 'absolute',
    right: 20,
    bottom: 130,
    width: 90,
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',

    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  previewImage: {
    width: '100%',
    height: '100%',
  },

  cameraIcon: {
    position: 'absolute',
    top: 6,
    left: 6,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* BOTTOM CONTROLS */
  bottomContainer: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 20,
    paddingBottom: 30,
  },

  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  controlBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  endCallBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FF1E1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

const flightsData = [
  { id: 1, airline: 'Air India', color: '#E21B23' },
  { id: 2, airline: 'IndiGo', color: '#1A2B8C' },
  { id: 3, airline: 'Air India', color: '#E21B23' },
  { id: 4, airline: 'IndiGo', color: '#1A2B8C' },
  { id: 5, airline: 'IndiGo', color: '#1A2B8C' },
  { id: 6, airline: 'Air India', color: '#E21B23' },
];

const FlightsListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
    style={styles.card}
    onPress={() =>
      navigation.navigate("FlightDetails", { flight: item })
    }
  >
      {/* TOP ROW */}
      <View style={styles.topRow}>
        <View style={styles.logoContainer}>
  <Image
    source={
      item.airline === 'Air India'
        ? require("../../../assets/airindia.png")
        : require("../../../assets/indigo.png")
    }
    style={styles.airlineLogo}
  />
</View>

        <Text style={styles.airline}>{item.airline}</Text>
      </View>

      {/* TIME ROW */}
      <View style={styles.timeRow}>
        {/* LEFT */}
        <View>
          <Text style={styles.time}>15:45</Text>
          <Text style={styles.city}>New Delhi</Text>
        </View>

        {/* CENTER */}
        <View style={styles.durationContainer}>
          <Text style={styles.duration}>2h 45m</Text>
          <View style={styles.line} />
          <Text style={styles.stop}>Non stop</Text>
        </View>

        {/* RIGHT */}
        <View>
          <Text style={styles.time}>18:30</Text>
          <Text style={styles.city}>Chennai</Text>
        </View>

        {/* PRICE */}
        <Text style={styles.price}>₹5,718</Text>
      </View>

      {/* OFFER */}
      <Text style={styles.offer}>
        FLAT Rs 854 OFF has been pre-applied for you
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
  style={styles.backBtn}
  onPress={() => navigation.goBack()}
>
  <Image
    source={require("../../../assets/back.png")}
    style={styles.backIcon}
  />
</TouchableOpacity>

        <View>
          <Text style={styles.route}>New Delhi → Chennai</Text>
          <Text style={styles.subHeader}>
            1 Adult | Economy
          </Text>
        </View>

        <View style={styles.dateChip}>
          <Text style={styles.dateText}>26 FEB</Text>
        </View>
      </View>

              {/* LIST */}
        <FlatList
          data={flightsData}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
    </View>
  );
};

export default FlightsListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
    justifyContent: 'space-between',
  },

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backIcon: {
  width: 20,
  height: 20,
  resizeMode: 'contain',
},

  route: {
    fontSize: 16,
    fontWeight: '600',
  },

  subHeader: {
    fontSize: 13,
    color: '#777',
  },

  dateChip: {
    backgroundColor: '#0F7A6C',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  dateText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  logoContainer: {
  width: 42,
  height: 42,
  borderRadius: 10,
  overflow: 'hidden',
  marginRight: 10,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},

airlineLogo: {
  width: 42,
  height: 42,
  resizeMode: 'contain',
},

  airline: {
    fontSize: 14,
    fontWeight: '600',
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  time: {
    fontSize: 16,
    fontWeight: '600',
  },

  city: {
    fontSize: 12,
    color: '#777',
  },

  durationContainer: {
    alignItems: 'center',
  },

  duration: {
    fontSize: 12,
    color: '#777',
  },

  line: {
    height: 1,
    width: 50,
    backgroundColor: '#ccc',
    marginVertical: 4,
  },

  stop: {
    fontSize: 12,
    color: '#777',
  },

  price: {
    fontSize: 16,
    fontWeight: '700',
  },

  offer: {
    marginTop: 10,
    color: '#0A8F2F',
    fontSize: 12,
    fontWeight: '600',
  },
});
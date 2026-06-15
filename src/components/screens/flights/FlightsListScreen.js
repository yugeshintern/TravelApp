import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

const generateFlights = (fromAirport, toAirport) => {
  const airlines = [
    {
      name: 'Air India',
      logo: 'airindia',
      prefix: 'AI',
    },
    {
      name: 'IndiGo',
      logo: 'indigo',
      prefix: '6E',
    },
  ];

  const departureTimes = [
    '05:30',
    '07:15',
    '09:10',
    '11:45',
    '13:20',
    '15:45',
    '17:10',
    '19:30',
    '21:00',
  ];

  return departureTimes.map((time, index) => {
    const airline =
      airlines[index % airlines.length];

    const baseHour =
      parseInt(time.split(':')[0]);

    const baseMinute =
      parseInt(time.split(':')[1]);

    // random duration between 2h-4h
    const durationHours =
      Math.floor(Math.random() * 2) + 2;

    const durationMinutes =
      [10, 20, 30, 45][
        Math.floor(Math.random() * 4)
      ];

    const arrivalHour =
      (baseHour + durationHours) % 24;

    const arrivalMinute =
      (baseMinute + durationMinutes) % 60;

    const arrivalTime = `${String(
      arrivalHour
    ).padStart(2, '0')}:${String(
      arrivalMinute
    ).padStart(2, '0')}`;

    return {
      id: index + 1,

      airline: airline.name,

      flightNo: `${airline.prefix}-${Math.floor(
        Math.random() * 900 + 100
      )}`,

      departureTime: time,

      arrivalTime,

      duration: `${durationHours}h ${durationMinutes}m`,

      stop:
        Math.random() > 0.7
          ? '1 Stop'
          : 'Non stop',

      price:
        Math.floor(Math.random() * 4000) +
        3500,

      departureAirport:
        fromAirport?.name || '',

      arrivalAirport:
        toAirport?.name || '',

      departureCode:
        fromAirport?.code || '',

      arrivalCode:
        toAirport?.code || '',
    };
  });
};



const FlightsListScreen = ({ navigation, route }) => {
  const { bookingData } = route.params || {};

  const formatDate = (date) => {
    if (!date) return '';

    const d = new Date(date);

    return d.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
    });
  };

  const flightsData = generateFlights(
  bookingData?.from,
  bookingData?.to
);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('FlightDetails', {
          flight: item,
          bookingData,
        })
      }
    >
      {/* TOP */}
      <View style={styles.topRow}>
        <View style={styles.logoContainer}>
          <Image
            source={
              item.airline === 'Air India'
                ? require('../../../assets/airindia.png')
                : require('../../../assets/indigo.png')
            }
            style={styles.airlineLogo}
          />
        </View>

        <View>
          <Text style={styles.airline}>
            {item.airline}
          </Text>

          <Text style={styles.flightNo}>
            {item.flightNo}
          </Text>
        </View>
      </View>

      {/* TIME ROW */}
      <View style={styles.timeRow}>
        {/* LEFT */}
        <View>
          <Text style={styles.time}>
            {item.departureTime}
          </Text>

          <Text style={styles.city}>
            {item.departureCode}
          </Text>

          <Text
            style={styles.airportText}
            numberOfLines={1}
          >
            {item.departureAirport}
          </Text>
        </View>

        {/* CENTER */}
        <View style={styles.durationContainer}>
          <Text style={styles.duration}>
            {item.duration}
          </Text>

          <View style={styles.line} />

          <Text style={styles.stop}>
            {item.stop}
          </Text>
        </View>

        {/* RIGHT */}
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.time}>
            {item.arrivalTime}
          </Text>

          <Text style={styles.city}>
            {item.arrivalCode}
          </Text>

          <Text
            style={styles.airportText}
            numberOfLines={1}
          >
            {item.arrivalAirport}
          </Text>
        </View>

        {/* PRICE */}
        <Text style={styles.price}>
          ₹{item.price}
        </Text>
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
            source={require('../../../assets/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.route}>
            {bookingData?.from?.city} →{' '}
            {bookingData?.to?.city}
          </Text>

          <Text style={styles.subHeader}>
            {bookingData?.travellers?.adults}{' '}
            Adult •{' '}
            {bookingData?.travellers?.cabin}
          </Text>
        </View>

        <View style={styles.dateChip}>
          <Text style={styles.dateText}>
            {formatDate(
              bookingData?.departureDate
            )}
          </Text>
        </View>
      </View>

      {/* FLIGHT LIST */}
      
      <FlatList
        data={flightsData}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
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
  flightNo: {
  fontSize: 12,
  color: '#777',
},

airportText: {
  fontSize: 10,
  color: '#888',
  width: 90,
  marginTop: 2,
},
});
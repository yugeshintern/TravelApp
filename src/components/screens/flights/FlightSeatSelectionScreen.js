import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const columns = ['A', 'B', 'C', 'D', 'E', 'F'];

// seat types
const AVAILABLE = 'available';
const SELECTED = 'selected';
const BLOCKED = 'blocked';

const generateSeats = () => {
  let seats = [];

  for (let row = 1; row <= 12; row++) {
    columns.forEach((col) => {
      let type = AVAILABLE;

      // mimic your UI pattern
      if (row <= 2 && ['D', 'E', 'F'].includes(col)) type = AVAILABLE;
      else if (row === 6 && col === 'F') type = SELECTED; // green seat
      else if (Math.random() > 0.6) type = AVAILABLE;
      else type = BLOCKED;

      seats.push({
        id: `${row}${col}`,
        row,
        col,
        type,
      });
    });
  }

  return seats;
};

const FlightSeatSelectionScreen = ({ navigation,route }) => {

  const {
  bookingData,
  flight,
  traveller,
  totalFare
} = route.params || {};

  const [seats, setSeats] = useState(generateSeats());
  const [selectedSeat, setSelectedSeat] = useState('11F');

  const handleSelect = (item) => {
    if (item.type === BLOCKED) return;

    setSelectedSeat(item.id);

    const updated = seats.map((seat) => {
      if (seat.id === item.id) return { ...seat, type: SELECTED };
      if (seat.type === SELECTED) return { ...seat, type: AVAILABLE };
      return seat;
    });

    setSeats(updated);
  };

  const renderSeat = ({ item }) => {
    let bg = '#E0E0E0';

    if (item.type === AVAILABLE) bg = '#2D74DA';
    if (item.type === SELECTED) bg = '#1BB34A';
    if (item.type === BLOCKED) bg = '#CFCFCF';

    return (
      <TouchableOpacity
        style={[styles.seat, { backgroundColor: bg }]}
        onPress={() => handleSelect(item)}
      />
    );
  };

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} />
        </TouchableOpacity>

        <View>
          <Text style={styles.tripLabel}>Trip to</Text>
          <Text style={styles.tripCity}>
              {bookingData?.to?.city}
          </Text>

        </View>
      </View>

      <Text style={styles.title}>1. Select seats</Text>

      {/* COLUMN LABELS */}
      <View style={styles.columns}>
        {columns.map((c) => (
          <Text key={c} style={styles.columnText}>{c}</Text>
        ))}
      </View>

      {/* GRID */}
      <FlatList
        data={seats}
        numColumns={6}
        keyExtractor={(item) => item.id}
        renderItem={renderSeat}
        contentContainerStyle={styles.grid}
      />

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <View>
            <Text style={styles.footerTitle}>Seat(s) {selectedSeat}</Text>
            <Text style={styles.footerSub}>1 of 1 Seat(s) Selected</Text>
          </View>

          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.price}>₹5,718</Text>
            <Text style={styles.footerSub}>Added to fare</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.cta}
        onPress={() =>
  navigation.navigate("MealSelection", {
    bookingData,
    flight,
    traveller,
    selectedSeat,
    totalFare,
  })
}>
          <Text style={styles.ctaText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlightSeatSelectionScreen;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F7F9' },

  header: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 64,
  paddingHorizontal: 18,
  marginBottom: 10,
},

  backBtn: {
  width: 46,
  height: 46,
  borderRadius: 23,
  backgroundColor: '#ECEEEE',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 18,
},

  tripLabel: {
  fontSize: 15,
  color: '#8A8A8A',
  marginBottom: 2,
},

tripCity: {
  fontSize: 19,
  fontWeight: '700',
  color: '#222',
},

  title: {
  marginTop: 26,
  marginLeft: 18,
  fontSize: 17,
  fontWeight: '700',
  color: '#222',
},

  columns: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 28,
  paddingHorizontal: 30,
  marginBottom: 8,
},

  columnText: {
  width: 44,
  textAlign: 'center',
  fontWeight: '700',
  color: '#444',
  fontSize: 16,
},

  grid: {
  paddingHorizontal: 20,
  paddingBottom: 170,
  alignItems: 'center',
},

  seat: {
  width: 54,
  height: 54,
  borderRadius: 12,
  marginHorizontal: 7,
  marginVertical: 9,
},

  footer: {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  backgroundColor: '#fff',
  paddingTop: 14,
  paddingHorizontal: 18,
  paddingBottom: 24,
  borderTopWidth: 1,
  borderColor: '#ECECEC',
},

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  footerTitle: {
  fontWeight: '700',
  fontSize: 16,
  color: '#222',
},

footerSub: {
  fontSize: 13,
  color: '#777',
  marginTop: 2,
},

price: {
  fontWeight: '700',
  fontSize: 17,
  color: '#222',
},

  cta: {
  backgroundColor: '#0B7F83',
  paddingVertical: 18,
  borderRadius: 34,
  alignItems: 'center',
  marginTop: 6,
},

  ctaText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: '700',
},
});
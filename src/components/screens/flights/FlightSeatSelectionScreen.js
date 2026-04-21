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

const FlightSeatSelectionScreen = ({ navigation }) => {
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
          <Text style={styles.tripCity}>Chennai</Text>
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

        <TouchableOpacity style={styles.cta}>
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
    marginTop: 50,
    paddingHorizontal: 16,
  },

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  tripLabel: { fontSize: 13, color: '#777' },
  tripCity: { fontSize: 18, fontWeight: '700' },

  title: {
    marginTop: 20,
    marginLeft: 16,
    fontSize: 15,
    fontWeight: '600',
  },

  columns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 16,
  },

  columnText: {
    width: 40,
    textAlign: 'center',
    fontWeight: '600',
    color: '#444',
  },

  grid: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },

  seat: {
    width: 42,
    height: 42,
    borderRadius: 10,
    margin: 6,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  footerTitle: { fontWeight: '600' },
  footerSub: { fontSize: 12, color: '#777' },

  price: { fontWeight: '700', fontSize: 16 },

  cta: {
    backgroundColor: '#0F7A6C',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },

  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
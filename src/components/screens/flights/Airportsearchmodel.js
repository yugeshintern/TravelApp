import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import INDIAN_AIRPORTS from './Airportsdata';

const AirportSearchModal = ({ visible, onClose, onSelect, title }) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return INDIAN_AIRPORTS;
    return INDIAN_AIRPORTS.filter(
      (a) =>
        a.city.toLowerCase().includes(q) ||
        a.code.toLowerCase().includes(q) ||
        a.name.toLowerCase().includes(q) ||
        a.state.toLowerCase().includes(q),
    );
  }, [query]);

  const handleSelect = (airport) => {
    onSelect(airport);
    setQuery('');
    onClose();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
      <View style={styles.itemLeft}>
        <Text style={styles.cityText}>{item.city}</Text>
        <Text style={styles.nameText} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.stateText}>{item.state}</Text>
      </View>
      <View style={styles.codePill}>
        <Text style={styles.codeText}>{item.code}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeX}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>

        {/* Search Box */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.input}
            placeholder="Search city, airport or code"
            placeholderTextColor="#AAA"
            value={query}
            onChangeText={setQuery}
            autoFocus
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery('')}>
              <Text style={styles.clearBtn}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Popular Airports quick-select (shown only when no query) */}
        {query.length === 0 && (
          <View>
            <Text style={styles.sectionLabel}>Popular Airports</Text>
            <View style={styles.popularRow}>
              {['DEL', 'BOM', 'BLR', 'MAA', 'HYD', 'CCU'].map((code) => {
                const airport = INDIAN_AIRPORTS.find((a) => a.code === code);
                if (!airport) return null;
                return (
                  <TouchableOpacity
                    key={code}
                    style={styles.popularChip}
                    onPress={() => handleSelect(airport)}
                  >
                    <Text style={styles.popularCode}>{airport.code}</Text>
                    <Text style={styles.popularCity}>{airport.city}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <Text style={styles.sectionLabel}>All Airports</Text>
          </View>
        )}

        {/* Results */}
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.code}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No airports found for "{query}"</Text>
          }
        />
      </SafeAreaView>
    </Modal>
  );
};

export default AirportSearchModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  closeX: {
    fontSize: 13,
    color: '#555',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  clearBtn: {
    fontSize: 13,
    color: '#999',
    paddingHorizontal: 4,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#777',
    marginHorizontal: 16,
    marginBottom: 10,
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  popularRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 12,
    marginBottom: 16,
    gap: 8,
  },
  popularChip: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignItems: 'center',
  },
  popularCode: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F7A6C',
  },
  popularCity: {
    fontSize: 11,
    color: '#777',
    marginTop: 2,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  itemLeft: {
    flex: 1,
    marginRight: 12,
  },
  cityText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  nameText: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  stateText: {
    fontSize: 12,
    color: '#AAA',
    marginTop: 1,
  },
  codePill: {
    backgroundColor: '#EAF5F3',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  codeText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F7A6C',
  },
  separator: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginLeft: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#AAA',
    fontSize: 14,
  },
});
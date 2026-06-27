import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import AirportSearchModal from './Airportsearchmodel';
import DatePickerModal from './Datepickermodel';

const DEFAULT_FROM = { city: 'Delhi', code: 'DEL', name: 'Delhi Airport' };
const DEFAULT_TO = { city: 'Chennai', code: 'MAA', name: 'Chennai International Airport' };

const FlightsHomeScreen = ({ navigation }) => {
  const [tripType, setTripType] = useState('oneway');
  const [selectedFare, setSelectedFare] = useState('');

  // Airport state
  const [fromAirport, setFromAirport] = useState(DEFAULT_FROM);
  const [toAirport, setToAirport] = useState(DEFAULT_TO);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectingFor, setSelectingFor] = useState(null); // 'from' | 'to'

  // Date state
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const [departureDate, setDepartureDate] = useState(tomorrow);
  const [returnDate, setReturnDate] = useState(null);
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [selectingDateFor, setSelectingDateFor] = useState(null); // 'departure' | 'return'

  const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const DAYS_SHORT = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  const formatDate = (date) => {
    if (!date) return null;
    return {
      day: date.getDate(),
      month: MONTHS_SHORT[date.getMonth()],
      year: date.getFullYear(),
      weekday: DAYS_SHORT[date.getDay()],
    };
  };

  const openDatePicker = (field) => {
    setSelectingDateFor(field);
    setDateModalVisible(true);
  };

  const handleSelectDeparture = (date) => {
    setDepartureDate(date);
  };

  const handleSelectReturn = (date) => {
    setReturnDate(date);
    // Auto-switch to roundtrip when a return date is picked
    if (date) setTripType('roundtrip');
  };

  // Traveller & Class state
  const [travellers, setTravellers] = useState({ adults: 1, children: 0, infants: 0, cabin: 'eco' });

  const CABIN_LABELS = {
    eco: 'Eco/Prem. Eco',
    prem: 'Premium Economy',
    bus: 'Business',
    first: 'First Class',
  };

  const travellerSummary = () => {
    const total = travellers.adults + travellers.children + travellers.infants;
    return `${total} Traveller${total > 1 ? 's' : ''}, ${CABIN_LABELS[travellers.cabin]}`;
  };

  const openAirportPicker = (field) => {
    setSelectingFor(field);
    setModalVisible(true);
  };

  const handleAirportSelect = (airport) => {
    if (selectingFor === 'from') {
      // Prevent same airport for From & To
      if (airport.code === toAirport.code) {
        setToAirport(fromAirport);
      }
      setFromAirport(airport);
    } else {
      // Prevent same airport for To & From
      if (airport.code === fromAirport.code) {
        setFromAirport(toAirport);
      }
      setToAirport(airport);
    }
  };

  const swapAirports = () => {
    setFromAirport(toAirport);
    setToAirport(fromAirport);
  };

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
        <Text style={styles.title}>Flights Tickets</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TRIP TYPE */}
        <View style={styles.segment}>
          {['oneway', 'roundtrip', 'multicity'].map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.segmentItem,
                tripType === type && styles.segmentActive,
              ]}
              onPress={() => {
                setTripType(type);
                if (type === 'oneway') setReturnDate(null);
                if (type === 'roundtrip') navigation.navigate('RoundTripFlights');
                if (type === 'multicity') navigation.navigate('MultiCityFlights');
              }}
            >
              <Text
                style={[
                  styles.segmentText,
                  tripType === type && styles.segmentTextActive,
                ]}
              >
                {type === 'oneway'
                  ? 'Oneway'
                  : type === 'roundtrip'
                  ? 'Roundtrip'
                  : 'Multicity'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* FROM / TO — tappable to open airport picker */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => openAirportPicker('from')}
            activeOpacity={0.7}
          >
            <Text style={styles.label}>From</Text>
            <Text style={styles.value}>
              {fromAirport.city}{' '}
              <Text style={styles.code}>{fromAirport.code}</Text>
            </Text>
            <Text style={styles.sub} numberOfLines={1}>
              {fromAirport.name}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => openAirportPicker('to')}
            activeOpacity={0.7}
          >
            <Text style={styles.label}>To</Text>
            <Text style={styles.value}>
              {toAirport.city}{' '}
              <Text style={styles.code}>{toAirport.code}</Text>
            </Text>
            <Text style={styles.sub} numberOfLines={1}>
              {toAirport.name}
            </Text>
          </TouchableOpacity>

          {/* SWAP ICON — now also swaps the selected airports */}
          <TouchableOpacity style={styles.swap} onPress={swapAirports} activeOpacity={0.8}>
            <Image
              source={require('../../../assets/direction.png')}
              style={styles.directionIcon}
            />
          </TouchableOpacity>
        </View>

        {/* DATES */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => openDatePicker('departure')}
            activeOpacity={0.7}
          >
            <Text style={styles.label}>Departure Date</Text>
            {departureDate ? (() => {
              const f = formatDate(departureDate);
              return (
                <Text style={styles.value}>
                  {f.day} {f.month}{' '}
                  <Text style={styles.sub}>{f.weekday},{f.year}</Text>
                </Text>
              );
            })() : <Text style={[styles.value, { color: '#BBB' }]}>Select date</Text>}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => openDatePicker('return')}
            activeOpacity={0.7}
          >
            <Text style={styles.label}>Return Date</Text>
            {returnDate ? (() => {
              const f = formatDate(returnDate);
              return (
                <Text style={styles.value}>
                  {f.day} {f.month}{' '}
                  <Text style={styles.sub}>{f.weekday},{f.year}</Text>
                </Text>
              );
            })() : (
              <Text style={[styles.value, { color: '#BBB', fontSize: 13 }]}>
                Tap to add
              </Text>
            )}
          </TouchableOpacity>
        </View>

        {/* TRAVELLER */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TravellerClass', {
              travellers,
              onDone: (result) => setTravellers(result),
            })
          }
        >
          <View style={styles.fullBox}>
            <Text style={styles.label}>Traveller & Class</Text>
            <Text style={styles.value} numberOfLines={1}>
              {travellerSummary()}
            </Text>
          </View>
        </TouchableOpacity>

        {/* SPECIAL FARES */}
        <Text style={styles.section}>Special Fares</Text>

        <View style={styles.chipRow}>
          {[
            { title: 'Senior Citizen', sub: 'Up to ₹600 off' },
            { title: 'Armed Forces', sub: 'Up to ₹600 off' },
            { title: 'Doctor and Nurses', sub: 'Up to ₹600 off' },
          ].map((item, i) => {
            const isSelected = selectedFare === item.title;
            return (
              <TouchableOpacity
                key={i}
                activeOpacity={0.8}
                onPress={() => setSelectedFare(isSelected ? '' : item.title)}
                style={[styles.chip, isSelected && styles.selectedChip]}
              >
                <Text style={[styles.chipTitle, isSelected && styles.selectedTitle]}>
                  {item.title}
                </Text>
                <Text style={[styles.chipSub, isSelected && styles.selectedSub]}>
                  {item.sub}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.chipRow}>
          {[
            { title: 'Travelling for work?', sub: 'Unlock Extra Savings & Benefits' },
            { title: 'Student', sub: 'Extra discounts/baggage' },
          ].map((item, i) => {
            const isSelected = selectedFare === item.title;
            return (
              <TouchableOpacity
                key={i}
                activeOpacity={0.8}
                onPress={() => setSelectedFare(isSelected ? '' : item.title)}
                style={[styles.chip, isSelected && styles.selectedChip]}
              >
                <Text style={[styles.chipTitle, isSelected && styles.selectedTitle]}>
                  {item.title}
                </Text>
                <Text style={[styles.chipSub, isSelected && styles.selectedSub]}>
                  {item.sub}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* CTA */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.cta}
          onPress={() =>
            navigation.navigate('FlightsList', {
  bookingData: {
    from: fromAirport,
    to: toAirport,
    departureDate,
    returnDate,
    travellers,
    tripType,
    specialFare: selectedFare,
  },
})
          }
        >
          <Text style={styles.ctaText}>Search Flights</Text>
        </TouchableOpacity>
      </View>

      {/* DATE PICKER MODAL */}
      <DatePickerModal
        visible={dateModalVisible}
        onClose={() => setDateModalVisible(false)}
        selectingFor={selectingDateFor}
        departureDate={departureDate}
        returnDate={returnDate}
        onSelectDeparture={handleSelectDeparture}
        onSelectReturn={handleSelectReturn}
      />

      {/* AIRPORT SEARCH MODAL */}
      <AirportSearchModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={handleAirportSelect}
        title={selectingFor === 'from' ? 'Select Departure City' : 'Select Arrival City'}
      />
    </View>
  );
};

export default FlightsHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 16,
    marginBottom: 20,
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
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 16,
  },
  segment: {
    flexDirection: 'row',
    marginHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DADADA',
    overflow: 'hidden',
    marginBottom: 20,
  },
  segmentItem: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  segmentActive: {
    backgroundColor: '#EDEDED',
  },
  segmentText: {
    fontSize: 14,
    color: '#555',
  },
  segmentTextActive: {
    fontWeight: '600',
    color: '#000',
  },
  selectedChip: {
    backgroundColor: '#EAF8EE',
    borderColor: '#16A34A',
  },
  selectedTitle: {
    color: '#16A34A',
  },
  selectedSub: {
    color: '#16A34A',
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  inputBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  fullBox: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: '#777',
  },
  value: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,
  },
  sub: {
    fontSize: 12,
    color: '#777',
  },
  code: {
    fontSize: 12,
    color: '#999',
  },
  swap: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -18 }, { translateY: -18 }],
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    zIndex: 20,
  },
  directionIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  section: {
    fontSize: 15,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  chipRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  chip: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  chipTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  chipSub: {
    fontSize: 12,
    color: '#0A8F2F',
    marginTop: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: '#F6F7F9',
  },
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
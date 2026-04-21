import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const trains = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
];

const TrainListScreen = ({ navigation }) => {
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

        <Text style={styles.routeText}>
          MS - Chennai Egmore  →  TCN - Tiruchendur
        </Text>

        <Text style={styles.date}>26 Feb, Thu</Text>
      </View>

      {/* DATE TABS */}
      <View style={styles.tabsContainer}>
        <View style={styles.monthStrip}>
          <Text style={styles.monthText}>FEB</Text>
        </View>

        <View style={styles.tabs}>
          <View style={styles.activeTab}>
            <Text style={styles.activeTabText}>Fri, 26</Text>
            <Text style={styles.available}>• Available</Text>
          </View>

          <View style={styles.tab}>
            <Text>Fri, 27</Text>
            <Text style={styles.few}>• Few Seats</Text>
          </View>

          <View style={styles.tab}>
            <Text>Fri, 28</Text>
            <Text style={styles.fast}>• Filling Fast</Text>
          </View>
        </View>
      </View>

      {/* TRAIN LIST */}
      <FlatList
        data={trains}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TrainCard item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default TrainListScreen;





/* ================= TRAIN CARD ================= */

const TrainCard = ({ item }) => {
  return (
    <View style={styles.card}>

      <Text style={styles.trainName}>20605 Ms Tcn Sf Exp</Text>
      <Text style={styles.time}>16:00 MS – 14h – 06:00 TCN</Text>

      <View style={styles.row}>

        {/* SL */}
        <View style={[styles.box, styles.orangeBox]}>
          <View style={styles.priceRow}>
            <Text style={styles.classText}>SL</Text>
            <Text style={styles.price}>₹465</Text>
          </View>
          <Text style={styles.waiting}>WL 62</Text>
          <Text style={styles.chanceOrange}>52% Chance</Text>
        </View>

        {/* 3A */}
        <View style={[styles.box, styles.greenBox]}>
          <View style={styles.priceRow}>
            <Text style={styles.classText}>3A</Text>
            <Text style={styles.price}>₹1190</Text>
          </View>
          <Text style={styles.waitingGreen}>WL 20</Text>
          <Text style={styles.chanceGreen}>78% Chance</Text>
        </View>

        {/* 1A */}
        <View style={[styles.box, styles.greenBox]}>
          <View style={styles.priceRow}>
            <Text style={styles.classText}>1A</Text>
            <Text style={styles.price}>₹2770</Text>
          </View>
          <Text style={styles.waitingGreen}>AVL 1</Text>
          <Text style={styles.availableText}>Available</Text>
        </View>

      </View>

      <View style={styles.altRow}>
        <Text style={styles.alt}>Alternate Station ₹465</Text>
        <Text style={styles.alt}>Alternate Station ₹1065</Text>
      </View>

    </View>
  );
};





/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },

  header: {
    marginTop: 50,
    paddingHorizontal: 16,
    alignItems: 'center',
  },

  backBtn: {
    position: 'absolute',
    left: 16,
    top: 0,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  routeText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  date: {
    marginTop: 6,
    color: '#888',
    fontSize: 14,
  },

  /* TABS */
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },

  monthStrip: {
    width: 40,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  monthText: {
    transform: [{ rotate: '-90deg' }],
    fontWeight: '600',
    color: '#666',
  },

  tabs: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 10,
  },

  tab: {
    marginRight: 20,
  },

  activeTab: {
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#1E88E5',
  },

  activeTabText: {
    color: '#1E88E5',
    fontWeight: '600',
  },

  available: {
    color: 'green',
  },

  few: {
    color: '#8B0000',
  },

  fast: {
    color: '#FF8C00',
  },

  /* CARD */
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 14,
    elevation: 2,
  },

  trainName: {
    fontSize: 16,
    fontWeight: '600',
  },

  time: {
    color: '#777',
    marginTop: 4,
  },

  row: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
  },

  box: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 4,
  },

  orangeBox: {
    borderWidth: 1,
    borderColor: '#F4A261',
    backgroundColor: '#FFF4EA',
  },

  greenBox: {
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: '#EAF7EA',
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  classText: {
    fontWeight: '600',
  },

  price: {
    fontWeight: '600',
  },

  waiting: {
    color: '#F4A261',
    marginTop: 6,
  },

  waitingGreen: {
    color: 'green',
    marginTop: 6,
  },

  chanceOrange: {
    color: '#F4A261',
    marginTop: 8,
  },

  chanceGreen: {
    color: 'green',
    marginTop: 8,
  },

  availableText: {
    color: 'green',
    marginTop: 8,
    fontWeight: '600',
  },

  altRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  alt: {
    color: 'green',
    fontSize: 12,
  },
});
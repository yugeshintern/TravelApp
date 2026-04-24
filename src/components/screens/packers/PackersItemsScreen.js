import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const DATA = [
  {
    title: 'Living Room',
    items: ['Chairs', 'Tables', 'TV/Monitor', 'Cabinet/storage', 'Sofa', 'Home Utility'],
  },
  {
    title: 'Bedroom',
    items: ['Tables', 'Chairs', 'Mattress', 'Bed frame', 'AC/Cooler/Fan', 'Cabinet/storage', 'Almirah/Wardrobe'],
  },
  {
    title: 'Kitchen',
    items: ['Fridge', 'Electrical/Gas Appliances', 'Cabinet/storage'],
  },
  {
    title: 'Others',
    items: ['Self Gunny Bag', 'Washing Machine', 'Bathroom Utility', 'Home Utility', 'Vehicle', 'Equipment/Instruments', 'Plants', 'Suitcase/Trolley'],
  },
];

const PackersItemsScreen = ({ navigation }) => {
  const [counts, setCounts] = useState({});

  const increase = (item) => {
    setCounts((prev) => ({
      ...prev,
      [item]: (prev[item] || 0) + 1,
    }));
  };

  const decrease = (item) => {
    setCounts((prev) => ({
      ...prev,
      [item]: prev[item] > 0 ? prev[item] - 1 : 0,
    }));
  };

  const renderItemRow = (item) => {
    const count = counts[item] || 0;

    return (
      <View style={styles.row} key={item}>
        <Text style={styles.itemText}>{item}</Text>

        <View style={styles.counter}>
          <TouchableOpacity onPress={() => decrease(item)}>
            <Text style={styles.minus}>−</Text>
          </TouchableOpacity>

          <View style={styles.box}>
            <Text style={styles.countText}>{count}</Text>
          </View>

          <TouchableOpacity onPress={() => increase(item)}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} />
        </TouchableOpacity>
        <Text style={styles.title}>Packers & Movers</Text>
      </View>

      {/* STEP */}
      <View style={styles.stepRow}>
        <View style={styles.doneStep}><Icon name="check" size={16} color="#fff" /></View>
        <View style={styles.line} />
        <View style={styles.activeStep}><Icon name="clipboard" size={16} color="#fff" /></View>
        <View style={styles.line} />
        <View style={styles.step}><Icon name="calendar" size={16} color="#888" /></View>
      </View>

      <Text style={styles.info}>
        Add items to get the exact quote, you can edit this later
      </Text>

      {/* LIST */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.section}>{item.title}</Text>
            {item.items.map(renderItemRow)}
          </View>
        )}
      />

      {/* BUTTON */}
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate("PackersDate")}>
        <Text style={styles.buttonText}>Select shifting Date</Text>
      </TouchableOpacity>

    </View>
  );
};

export default PackersItemsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
    paddingHorizontal: 16,
  },

  header: {
    marginTop: 50,
    alignItems: 'center',
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
  },

  /* STEP */
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  doneStep: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#0F766E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeStep: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#0F766E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  step: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  line: {
    flex: 1,
    height: 1,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
  },

  info: {
    marginTop: 16,
    color: '#555',
  },

  section: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  row: {
    backgroundColor: '#EFF2F4',
    marginTop: 10,
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemText: {
    fontSize: 15,
    color: '#333',
  },

  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  minus: {
    fontSize: 22,
    marginHorizontal: 10,
    color: '#333',
  },

  plus: {
    fontSize: 22,
    marginHorizontal: 10,
    color: '#333',
  },

  box: {
    width: 36,
    height: 36,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  countText: {
    fontSize: 14,
    fontWeight: '600',
  },

  button: {
    backgroundColor: '#0F766E',
    padding: 16,
    borderRadius: 28,
    marginVertical: 16,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
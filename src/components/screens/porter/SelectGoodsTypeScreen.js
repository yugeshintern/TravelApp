import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const goodsData = [
  { id: '1', name: 'Building Materials', icon: 'layers' },
  { id: '2', name: 'Homemade/Prepared Fresh Items', icon: 'monitor' },
  { id: '3', name: 'Furnitures/Home Furnishings', icon: 'box' },
  { id: '4', name: 'General Goods', icon: 'archive' },
  { id: '5', name: 'Hardwares', icon: 'tool' },
  { id: '6', name: 'House Shifting/Packers and Movers', icon: 'home' },
  { id: '7', name: 'Event Management/Hospitality', icon: 'briefcase' },
  { id: '8', name: 'Ceramic/Sanitary Wares', icon: 'droplet' },
  { id: '9', name: 'Paints/Chemicals (Non-Hazardous)', icon: 'feather' },
  { id: '10', name: 'Electrical', icon: 'zap' },
  { id: '11', name: 'Electronics/Consumer Durables', icon: 'cpu' },
  { id: '12', name: 'FMCG Products', icon: 'shopping-bag' },
  { id: '13', name: 'Machines/Equipments', icon: 'settings' },
  { id: '14', name: 'Pharmaceutical/Healthcare Products', icon: 'activity' },
  { id: '15', name: 'Plastic Products', icon: 'circle' },
  { id: '16', name: 'Rubber Products', icon: 'disc' },
  { id: '17', name: 'Textiles/Garments', icon: 'shopping-cart' },
  { id: '18', name: 'Timber/Plywoods/Papers', icon: 'file' },
  { id: '19', name: 'Stationery/Gifts/Toys', icon: 'gift' },
];

const restrictedItemsLeft = [
  'Pornographic Materials',
  'Human Body Parts',
  'Fire Arms',
  'Livestock',
  'Dangerous Goods',
  'illegal Goods',
  'Precious Jewelleries',
  'Stones and Gems',
  'Lottery Tickets',
  'Cigarettes & Alcohols',
];

const restrictedItemsRight = [
  'Dry Ice',
  'Explosives',
  'Flammables',
  'Pets & Animals',
  'Hazardous Goods',
  'Radioactive Materials',
  'Currencies & Coins',
  'Gamblings Devices',
  'Fire Extinguishers',
  'Narcotics and Illegal Drugs',
];

const SelectGoodsTypeScreen = ({ navigation }) => {
  const [selected, setSelected] = useState([]);

  const toggleSelection = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Goods Type</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* RESTRICTED CARD */}
        <View style={styles.restrictedCard}>
          <View style={styles.restrictedHeader}>
            <View style={styles.iconWrap}>
              <Text style={{ fontSize: 16 }}>📦</Text>
            </View>
            <View>
              <Text style={styles.restrictedTitle}>Restricted Items</Text>
              <Text style={styles.restrictedSub}>
                Narcotics drugs, explosives & more
              </Text>
            </View>
          </View>

          <View style={styles.restrictedList}>
            <View>
              {restrictedItemsLeft.map((item, i) => (
                <Text key={i} style={styles.bullet}>• {item}</Text>
              ))}
            </View>

            <View>
              {restrictedItemsRight.map((item, i) => (
                <Text key={i} style={styles.bullet}>• {item}</Text>
              ))}
            </View>
          </View>
        </View>

        {/* GOODS LIST */}
        <View style={{ marginTop: 16 }}>
          {goodsData.map(item => {
            const isSelected = selected.includes(item.id);

            return (
              <TouchableOpacity
                key={item.id}
                style={styles.itemRow}
                onPress={() => toggleSelection(item.id)}
                activeOpacity={0.8}
              >
                <View style={styles.left}>
                  <Icon name={item.icon} size={18} color="#333" />
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>

                <View style={styles.checkbox}>
                  {isSelected && <Icon name="check" size={16} color="#fff" />}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* CTA */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.ctaBtn}
        onPress={()=> navigation.navigate("ReviewBooking")}>
          <Text style={styles.ctaText}>Choose Goods Type</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectGoodsTypeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 12,
  },

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 16,
  },

  restrictedCard: {
    backgroundColor: '#E9DDB7',
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 16,
  },

  restrictedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  iconWrap: {
    marginRight: 10,
  },

  restrictedTitle: {
    fontSize: 15,
    fontWeight: '600',
  },

  restrictedSub: {
    fontSize: 12,
    color: '#555',
  },

  restrictedList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bullet: {
    fontSize: 12,
    marginBottom: 4,
    color: '#333',
  },

  itemRow: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 10,
    padding: 14,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // subtle border like design
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },

  itemText: {
    fontSize: 14,
    color: '#333',
    flexShrink: 1,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#F7F7F7',
    padding: 16,
  },

  ctaBtn: {
    backgroundColor: '#0F766E',
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
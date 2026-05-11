import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const hotels = [
  {
    name: 'Hotel Halez',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
  },
  {
    name: 'The Leela',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
  },
  {
    name: 'Britannica',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
  },
  {
    name: 'Hotel Hillock',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
  },
];

const HotelsListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      {/* HEADER */}
<View style={styles.header}>

  {/* BACK BUTTON */}
  <TouchableOpacity
    style={styles.iconBtn}
    onPress={() => navigation.goBack()}
  >
    <Image
      source={require("../../../assets/back.png")}
      style={styles.backIcon}
    />
  </TouchableOpacity>

  {/* CENTER */}
  <View style={styles.headerCenter}>
    <Text style={styles.headerTitle}>
      Chennai
    </Text>

    <Text style={styles.subHeader}>
      26 Feb –27 Feb, 2 Adults
    </Text>
  </View>

  {/* SEARCH BUTTON */}
  <TouchableOpacity style={styles.iconBtn}>
    <Image
      source={require("../../../assets/search-icon.png")}
      style={styles.searchIcon}
    />
  </TouchableOpacity>

</View>


      {/* TITLE */}
      <Text style={styles.sectionTitle}>Showing Properties in Chennai</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {hotels.map((item, index) => (
          <TouchableOpacity
          onPress={()=> navigation.navigate("HotelDetails")}>
          <View key={index} style={styles.card}>
            
            {/* IMAGE */}
            <Image source={{ uri: item.image }} style={styles.image} />

            {/* TAGS */}
            <View style={styles.tagRow}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>4 ★ Hotel</Text>
              </View>

              <View style={styles.rating}>
                <Text style={styles.ratingText}>★ 4.3</Text>
              </View>

              <Text style={styles.ratingCount}>(388 rating)</Text>
            </View>

            {/* TITLE + PRICE */}
            <View style={styles.rowBetween}>
              <Text style={styles.hotelName}>{item.name}</Text>
              <Text style={styles.price}>₹5,718</Text>
            </View>

            {/* SUB PRICE */}
            <Text style={styles.tax}>+ ₹337 Taxes & Fees per night</Text>

            {/* FEATURES */}
            <View style={styles.featureRow}>
              <Text style={styles.feature}>✓ Free Cancelation Included</Text>
              <Text style={styles.featureHeart}>♥ Couple Friendly</Text>
              <Text style={styles.feature}>✓ Breakfast available at extra charges</Text>
            </View>
          </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  );
};

export default HotelsListScreen;
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#F5F6F8',
  paddingTop: 58,
},

header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  paddingHorizontal: 22,
},

iconBtn: {
  width: 46,
  height: 46,
  borderRadius: 23,

  backgroundColor: '#EEF1F1',

  alignItems: 'center',
  justifyContent: 'center',
},

backIcon: {
  width: 24,
  height: 24,
  resizeMode: 'contain',
},

searchIcon: {
  width: 22,
  height: 22,
  resizeMode: 'contain',
},

headerCenter: {
  alignItems: 'center',
  justifyContent: 'center',
},

headerTitle: {
  fontSize: 20,
  fontWeight: '700',
  color: '#333',
},

subHeader: {
  marginTop: 10,

  fontSize: 15,
  color: '#777',
  fontWeight: '500',
},

  sectionTitle: {
    marginTop: 20,
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '600',
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 12,
    elevation: 5,
  },
  

  image: {
    width: '100%',
    height: 150,
    borderRadius: 14,
  },

  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  tag: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },

  tagText: {
    fontSize: 11,
    color: '#444',
  },

  rating: {
    backgroundColor: '#0A8F2C',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8,
  },

  ratingText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },

  ratingCount: {
    marginLeft: 6,
    fontSize: 11,
    color: '#777',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    alignItems: 'center',
  },

  hotelName: {
    fontSize: 18,
    fontWeight: '600',
  },

  price: {
    fontSize: 16,
    fontWeight: '600',
  },

  tax: {
    fontSize: 12,
    color: '#777',
    alignSelf: 'flex-end',
    marginTop: 2,
  },

  featureRow: {
    marginTop: 8,
  },

  feature: {
    fontSize: 12,
    color: '#2E7D32',
    marginTop: 2,
  },

  featureHeart: {
    fontSize: 12,
    color: '#D32F2F',
    marginTop: 2,
  },
});
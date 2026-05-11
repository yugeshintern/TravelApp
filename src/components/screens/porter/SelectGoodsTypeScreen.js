import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";

const goodsData = [
  { id: "1", name: "Building Materials" },
  { id: "2", name: "Homemade/Prepared Fresh Items" },
  { id: "3", name: "Furnitures/Home Furnishings" },
  { id: "4", name: "General Goods" },
  { id: "5", name: "Hardwares" },
  { id: "6", name: "House Shifting/Packers and Movers" },
  { id: "7", name: "Event Management/Hospitality" },
  { id: "8", name: "Ceramic/Sanitary Wares" },
  { id: "9", name: "Paints/Chemicals (Non-Hazardous)" },
  { id: "10", name: "Electrical" },
  { id: "11", name: "Electronics/Consumer Durables" },
  { id: "12", name: "FMCG Products" },
  { id: "13", name: "Machines/Equipments" },
  { id: "14", name: "Pharmaceutical/Healthcare Products" },
  { id: "15", name: "Plastic Products" },
  { id: "16", name: "Rubber Products" },
  { id: "17", name: "Textiles/Garments" },
  { id: "18", name: "Timber/Plywoods/Papers" },
  { id: "19", name: "Stationery/Gifts/Toys" },
];

const restrictedItemsLeft = [
  "Pornographic Materials",
  "Human Body Parts",
  "Fire Arms",
  "Livestock",
  "Dangerous Goods",
  "illegal Goods",
  "Precious Jewelleries",
  "Stones and Gems",
  "Lottery Tickets",
  "Cigarettes & Alcohols",
];

const restrictedItemsRight = [
  "Dry Ice",
  "Explosives",
  "Flammables",
  "Pets & Animals",
  "Hazardous Goods",
  "Radioactive Materials",
  "Currencies & Coins",
  "Gamblings Devices",
  "Fire Extinguishers",
  "Narcotics and Illegal Drugs",
];

export default function SelectGoodsTypeScreen({
  navigation,
}) {
  const [selected, setSelected] = useState([]);

  const toggleSelection = (id) => {
    if (selected.includes(id)) {
      setSelected(
        selected.filter((item) => item !== id)
      );
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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

        <Text style={styles.headerTitle}>
          Select Goods Type
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        {/* RESTRICTED CARD */}
        <View style={styles.restrictedCard}>
          <View style={styles.restrictedHeader}>
            <Image
              source={require("../../../assets/restricted-box.png")}
              style={styles.restrictedIcon}
            />

            <View>
              <Text style={styles.restrictedTitle}>
                Restricted Items
              </Text>

              <Text style={styles.restrictedSub}>
                Narcotics drugs, explosives & more
              </Text>
            </View>
          </View>

          <View style={styles.restrictedList}>
            <View style={{ flex: 1 }}>
              {restrictedItemsLeft.map((item, i) => (
                <Text key={i} style={styles.bullet}>
                  • {item}
                </Text>
              ))}
            </View>

            <View style={{ flex: 1 }}>
              {restrictedItemsRight.map((item, i) => (
                <Text key={i} style={styles.bullet}>
                  • {item}
                </Text>
              ))}
            </View>
          </View>
        </View>

        {/* GOODS LIST */}
        <View style={{ marginTop: 18 }}>
          {goodsData.map((item) => {
            const isSelected = selected.includes(
              item.id
            );

            return (
              <TouchableOpacity
                key={item.id}
                style={styles.itemRow}
                activeOpacity={0.8}
                onPress={() =>
                  toggleSelection(item.id)
                }
              >
                <View style={styles.left}>
                  {/* COMMON ICON */}
                  <Image
                    source={require("../../../assets/goods-icon.png")}
                    style={styles.commonIcon}
                  />

                  <Text style={styles.itemText}>
                    {item.name}
                  </Text>
                </View>

                <View
                  style={[
                    styles.checkbox,
                    isSelected &&
                      styles.checkboxSelected,
                  ]}
                >
                  {isSelected && (
                    <Image
                      source={require("../../../assets/check.png")}
                      style={styles.checkIcon}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* FOOTER BUTTON */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.ctaBtn}
          onPress={() =>
            navigation.navigate("ReviewBooking")
          }
        >
          <Text style={styles.ctaText}>
            Choose Goods Type
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingTop: 10,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 18,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#ECECEC",
    alignItems: "center",
    justifyContent: "center",
  },

  backIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginLeft: 22,
  },

  /* RESTRICTED CARD */
  restrictedCard: {
    backgroundColor: "#E8DCB7",
    marginHorizontal: 18,
    borderRadius: 26,
    padding: 18,
  },

  restrictedHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  restrictedIcon: {
    width: 44,
    height: 44,
    resizeMode: "contain",
    marginRight: 12,
  },

  restrictedTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222",
  },

  restrictedSub: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },

  restrictedList: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },

  bullet: {
    fontSize: 12,
    color: "#333",
    marginBottom: 8,
    lineHeight: 18,
  },

  /* GOODS ROW */
  itemRow: {
    backgroundColor: "#fff",
    marginHorizontal: 18,
    marginBottom: 12,
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  commonIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 14,
  },

  itemText: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
    flexShrink: 1,
    lineHeight: 22,
  },

  /* CHECKBOX */
  checkbox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#A7A7A7",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxSelected: {
    backgroundColor: "#0F766E",
    borderColor: "#0F766E",
  },

  checkIcon: {
    width: 16,
    height: 16,
    tintColor: "#fff",
    resizeMode: "contain",
  },

  /* FOOTER */
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 20,
  },

  ctaBtn: {
    backgroundColor: "#0B7D7D",
    borderRadius: 35,
    paddingVertical: 18,
    alignItems: "center",
  },

  ctaText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});
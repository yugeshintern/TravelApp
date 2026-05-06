import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const AdminEditProfile = ({ navigation }) => {
  const [isOnDuty, setIsOnDuty] = useState(false);

  const fields = [
    {
      icon: 'user',
      title: 'Name',
      value: 'John Wick',
      valueColor: '#999999',
    },
    {
      icon: 'phone',
      title: 'Phone Number',
      value: '+91 6625025660',
      valueColor: '#999999',
    },
    {
      icon: 'mail',
      title: 'Email',
      value: 'Required',
      valueColor: '#FF6B6B',
    },
    {
      icon: 'user-check',
      title: 'Gender',
      value: 'Required',
      valueColor: '#FF6B6B',
    },
    {
      icon: 'calendar',
      title: 'Date of Birth',
      value: 'Required',
      valueColor: '#FF6B6B',
    },
    {
      icon: 'award',
      title: 'Date of Birth',
      value: 'Required',
      valueColor: '#FF6B6B',
    },
    {
      icon: 'alert-circle',
      title: 'Emergency contact',
      value: 'Add +',
      valueColor: '#BDBDBD',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn}>
            <Icon name="arrow-left" size={20} color="#333333" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Profile</Text>

          <View style={{ width: 40 }} />
        </View>

        {/* FORM LIST */}
        <View style={styles.listContainer}>
          {fields.map((item, index) => (
            <View key={index}>
              
              <TouchableOpacity style={styles.row}>
                
                {/* LEFT ICON */}
                <Icon name={item.icon} size={24} color="#333333" />

                {/* TEXT BLOCK */}
                <View style={styles.textContainer}>
                  <Text style={styles.label}>{item.title}</Text>
                  <Text style={[styles.value, { color: item.valueColor }]}>
                    {item.value}
                  </Text>
                </View>

                {/* RIGHT ARROW */}
                <Icon name="chevron-right" size={22} color="#666666" />

              </TouchableOpacity>

              {/* DIVIDER */}
              {index !== fields.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          ))}
        </View>

      </ScrollView>

      {/* TOGGLE */}
      <TouchableOpacity
        style={[
          styles.toggleContainer,
          { backgroundColor: isOnDuty ? '#16A34A' : '#BDBDBD' },
        ]}
        onPress={() => setIsOnDuty(!isOnDuty)}
      >
        <Text style={styles.toggleText}>
          {isOnDuty ? 'ON DUTY' : 'OFF DUTY'}
        </Text>

        <View
          style={[
            styles.toggleCircle,
            { alignSelf: isOnDuty ? 'flex-end' : 'flex-start' },
          ]}
        />
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default AdminEditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333333',
  },

  /* LIST */
  listContainer: {
    marginTop: 8,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  textContainer: {
    flex: 1,
    marginLeft: 16,
  },

  label: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333333',
  },

  value: {
    fontSize: 16,
    marginTop: 6,
  },

  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginLeft: 56,
  },

  /* TOGGLE */
  toggleContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    height: 48,
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },

  toggleText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  toggleCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
  },
});
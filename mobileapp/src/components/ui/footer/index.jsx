import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    navigation.navigate(tabName)
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Home' && styles.activeTab]}
        onPress={() => handleTabPress('Home')}
      >
        <View style={styles.label}>
          <Image source={require('../../../../assets/images/home.png')} style={[styles.home, activeTab === 'Home' ? styles.activeIcon : styles.icon]}/>
          <Text style={activeTab === 'Home' ? styles.activeText : styles.text}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Reservations' && styles.activeTab]}
        onPress={() => handleTabPress('Reservations')}
      >
        <View style={styles.label}>
          <Image source={require('../../../../assets/images/reservations.png')} style={[styles.reservations, activeTab === 'Reservations' ? styles.activeIcon : styles.icon]}/>
          <Text style={activeTab === 'Reservations' ? styles.activeText : styles.text}>Reservations</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Notifications' && styles.activeTab]}
        onPress={() => handleTabPress('Notifications')}
      >
        <View style={styles.label}>
          <Image source={require('../../../../assets/images/notifications.png')} style={[styles.notifications, activeTab === 'Notifications' ? styles.activeIcon : styles.icon]}/>
          <Text style={activeTab === 'Notifications' ? styles.activeText : styles.text}>Notifications</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Settings' && styles.activeTab]}
        onPress={() => handleTabPress('Settings')}
      >
        <View style={styles.label}>
          <Image source={require('../../../../assets/images/settings.png')} style={[styles.settings, activeTab === 'Settings' ? styles.activeIcon : styles.icon]}/>
          <Text style={activeTab === 'Settings' ? styles.activeText : styles.text}>Settings</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
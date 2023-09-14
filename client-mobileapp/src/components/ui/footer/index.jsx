import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './styles';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Home' && styles.activeTab]}
        onPress={() => handleTabPress('Home')}
      >
        <View style={styles.label}>
          <Image source={require('../../../../assets/images/home.png')} style={activeTab === 'Home' ? styles.activeIcon : styles.icon}/>
          <Text style={activeTab === 'Home' ? styles.activeText : styles.text}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Reservations' && styles.activeTab]}
        onPress={() => handleTabPress('Reservations')}
      >
        <View style={styles.label}>
          <Image source={require('../../../../assets/images/reservations.png')} style={activeTab === 'Reservations' ? styles.activeIcon : styles.icon}/>
          <Text style={activeTab === 'Reservations' ? styles.activeText : styles.text}>Reservations</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Notifications' && styles.activeTab]}
        onPress={() => handleTabPress('Notifications')}
      >
        <View style={styles.label}>
          <Image source={require('../../../../assets/images/notifications.png')} style={activeTab === 'Notifications' ? styles.activeIcon : styles.icon}/>
          <Text style={activeTab === 'Notifications' ? styles.activeText : styles.text}>Notifications</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Settings' && styles.activeTab]}
        onPress={() => handleTabPress('Settings')}
      >
        <View style={styles.label}>
          <Image source={require('../../../../assets/images/settings.png')} style={activeTab === 'Settings' ? styles.activeIcon : styles.icon}/>
          <Text style={activeTab === 'Settings' ? styles.activeText : styles.text}>Settings</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
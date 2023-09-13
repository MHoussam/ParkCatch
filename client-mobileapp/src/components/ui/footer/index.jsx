import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
        <Text style={activeTab === 'Home' ? styles.activetext : styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Reservations' && styles.activeTab]}
        onPress={() => handleTabPress('Reservations')}
      >
        <Text style={activeTab === 'Reservations' ? styles.activetext : styles.text}>Reservations</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Notifications' && styles.activeTab]}
        onPress={() => handleTabPress('Notifications')}
      >
        <Text style={activeTab === 'Notifications' ? styles.activetext : styles.text}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Settings' && styles.activeTab]}
        onPress={() => handleTabPress('Settings')}
      >
        <Text style={activeTab === 'Settings' ? styles.activetext : styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
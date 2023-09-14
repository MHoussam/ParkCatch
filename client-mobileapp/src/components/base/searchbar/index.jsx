import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from './styles';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
  };

  return (
      <TextInput
        style={styles.input}
        placeholder="Search for Parking Lots..."
        value={searchText}
        onChangeText={handleSearch}
      />
  );
};

export default SearchBar;
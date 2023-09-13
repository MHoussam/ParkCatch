import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
  };

  return (
    <View style={{position: 'absolute', marginTop: 100}}>
      <TextInput
        placeholder="Search..."
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default SearchBar;
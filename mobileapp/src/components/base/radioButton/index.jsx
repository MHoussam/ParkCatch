import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RadioButton = ({ options, selectedOption, onSelect }) => {
  return (
    <View>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          onPress={() => onSelect(option)}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <View style={styles.radioButton}>
            {option.value === selectedOption.value && (
              <View style={styles.choice} />
            )}
          </View>
          <Text>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButton
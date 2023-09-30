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
          <View>
            {option.value === selectedOption.value && (
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  backgroundColor: 'blue',
                }}
              />
            )}
          </View>
          <Text>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButton
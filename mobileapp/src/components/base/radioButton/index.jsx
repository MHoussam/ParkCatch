import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
const RadioButton = ({ options, selectedOption, onSelect }) => {
  return (
    <View style={{ flexDirection: "row", width: '100%', marginTop: 10, }}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          onPress={() => onSelect(option)}
          style={{ flexDirection: "row", alignItems: "center",}}
        >
          <View style={{ marginRight: 15, flexDirection: 'row', }}>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 12,
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 8,
              }}
            >
              {option.value === selectedOption.value && (
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 12,
                    backgroundColor: "#FECA0E",
                  }}
                />
              )}
            </View>

            <Text>{option.label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButton;
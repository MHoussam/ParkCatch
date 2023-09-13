import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

const Slots = () => {
    return (
      <View style={styles.table}>
        {[...Array(12)].map((_, rowIndex) => (
          <View key={rowIndex} style={styles.tableRow}>
            {[1, 2, 3, 4, 5].map((columnIndex) => (
              <View
                key={columnIndex}
                style={
                  columnIndex % 2 === 0
                    ? styles.tableCellEven
                    : styles.tableCellOdd
                }
              >
                <Text style={styles.cellText}>Row </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };

export default Slots;

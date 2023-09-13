import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import Slot from '../../base/slot';

const Slots = () => {
    return (
      <View style={styles.table}>
        {[...Array(12)].map((_, rowIndex) => (
          <View key={rowIndex} style={styles.tableRow}>
            {[1, 2, 3].map((columnIndex) => (
              <View
                key={columnIndex}
                style={
                  columnIndex !== 2 
                    ? styles.tableCell
                    : rowIndex === 0 
                    ? styles.entranceCell
                    : styles.tableCellGap
                }
              >
                <Slot number={'Num'} />
              </View>
            ))}
          </View>
        ))}
      </View>
    );
};

export default Slots;

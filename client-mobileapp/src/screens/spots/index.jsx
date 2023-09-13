import React from 'react';
import styles from './styles';
import { Text, TouchableOpacity, View } from 'react-native';
import Slots from '../../components/ui/slots';

const Spots = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Select a Spot</Text>
        <Slots />
        <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Spots;
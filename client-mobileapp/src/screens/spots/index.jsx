import React from 'react';
import styles from './styles';
import { Text, TouchableOpacity, View } from 'react-native';
import Slots from '../../components/ui/slots';
import Header from '../../components/ui/header';
import Footer from '../../components/ui/footer';

const Spots = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Select a Spot</Text>
      <Slots />
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Footer />
    </View>
  )
}

export default Spots;
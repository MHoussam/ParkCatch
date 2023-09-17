import React from 'react'
import { View } from 'react-native'
import Header from '../../components/ui/header';
import Footer from '../../components/ui/footer';
import styles from './styles';

const ReservationInfo = () => {
  return (
    <View style={styles.container}>
        <Header />
        <Footer />
    </View>
  )
}

export default ReservationInfo;
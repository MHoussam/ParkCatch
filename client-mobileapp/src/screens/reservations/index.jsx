import React from 'react'
import { Text, View } from 'react-native'
import Header from '../../components/ui/header';
import Footer from '../../components/ui/footer';

const Reservations = () => {
  return (
    <View style={{flex:1}}>
        <Header ScreenName={'Reservations'}/>
        <View style={{flex:1}}>
        <Text>Reservations</Text>
        </View>
        <Footer />
    </View>
  )
}

export default Reservations;
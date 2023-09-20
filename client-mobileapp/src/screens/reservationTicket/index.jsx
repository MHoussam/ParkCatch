import React from 'react'
import { View } from 'react-native'
import Header from '../../components/ui/header'
import Footer from '../../components/ui/footer'
import styles from './styles'
import Button from '../../components/base/button'

const ReservationTicket = () => {
  return (
    <View style={styles.container}>
        <Header ScreenName={'ReservationTicket'} />
        <Ticket />
        <Button text={'Get Directions'} navigate={'Directions'} />
        <Footer />
    </View>
  )
}

export default ReservationTicket
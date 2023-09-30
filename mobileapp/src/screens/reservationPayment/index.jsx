import React from 'react'
import { View } from 'react-native'
import Input from '../../components/base/input'
import styles from './styles'
import Header from '../../components/ui/header'
import Button from '../../components/base/button'

const ReservationPayment = () => {
  return (
    <View style={styles.container}>
        <Header ScreenName={"Reservation Info"} />
        <View style={styles.reservPayment}>
            <Input styleText={styles.title} text={'Cardholder Name'} label='cardholderName' type='text'/>
            <Input styleText={styles.title} text={'Card Number'} label='cardNumber' type='number'/>
            <Input styleText={styles.title} text={'Expiration Date'} label='expirationDate' type='date'/>
            <Input styleText={styles.title} text={'CVV'} label='cvv' type='passcode'/>
        </View>
        <Button text='Pay' Navigate='ReservationTicket'/>
    </View>
  )
}

export default ReservationPayment
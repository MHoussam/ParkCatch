import React from 'react'
import { View } from 'react-native'
import Input from '../../components/base/input'
import styles from './styles'

const ReservationPayment = () => {
  return (
    <View style={styles.container}>
        <Input styleText={styles.title} text='text' label='cardholderName' type='Cardholder Name'/>
        <Input styleText={styles.title} text='text' label='cardNumber' type='Card Number'/>
        <Input styleText={styles.title} text='Date' label='expirationDate' type='Expiration Date'/>
        <Input styleText={styles.title} text='password' label='cvv' type='CVV'/>
    </View>
  )
}

export default ReservationPayment
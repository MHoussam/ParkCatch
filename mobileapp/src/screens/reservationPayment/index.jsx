import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../../components/base/input'
import styles from './styles'
import Header from '../../components/ui/header'
import Button from '../../components/base/button'
import RadioButton from '../../components/base/radioButton'
import { useSelector } from 'react-redux'

const ReservationPayment = () => {
    const options = [
        { label: 'Visa Card', value: 'visaCard' },
        { label: 'Credit Card', value: 'creditCard' },
      ];

      const [selectedOption, setSelectedOption] = useState(options[0]);
      const reservation = useSelector((state) => state.reservation)
  return (
    <View style={styles.container}>
        <Header ScreenName={"Reservation Info"} />
        <View style={styles.reservPayment}>
            <Input styleText={styles.title} text={'Cardholder Name'} label='cardholderName' type='text'/>
            <Input styleText={styles.title} text={'Card Number'} label='cardNumber' type='number' card={true}/>
            <Input styleText={styles.title} text={'Expiration Date'} label='expirationDate' type='date'/>
            <Input styleText={styles.title} text={'CVV'} label='cvv' type='passcode'/>
            <View style={{marginBottom: 5}}>
                <Text style={styles.title}>
                    Payment Method
                </Text>
                <RadioButton 
                options={options}
                selectedOption={selectedOption}
                onSelect={(option) => setSelectedOption(option)}
                />
            </View>
            <View >
            <Text style={styles.title}>
                Total Amount
            </Text>
            <Text style={{color: '#00000080', fontSize: 17, fontWeight: '600'}}>
                {reservation.total}$
            </Text>
        </View>
        </View>
        <View style={styles.button}>
            <Button text='Pay' navigate='ReservationTicket'/>
        </View>
    </View>
  )
}

export default ReservationPayment
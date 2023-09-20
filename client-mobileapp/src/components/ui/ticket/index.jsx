import React from 'react'
import { Image, View } from 'react-native'
import styles from './styles'
import Summary from '../summary'
import QRCode from 'react-native-qrcode-svg';

const Ticket = () => {
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <QRCode
            value="https://www.example.com"
            size={200} 
            />
            <View style={styles.line}/>
            <View styles={styles.summary}>
                <Summary />
            </View>
        </View>
    </View>
  )
}

export default Ticket
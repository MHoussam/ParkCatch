import React from 'react'
import { Image, View } from 'react-native'
import styles from './styles'
import Summary from '../summary'

const Ticket = () => {
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Image
                style={{resizeMode: 'cover',
                width: 200, 
                height: 200}}
                source={{uri: `http://127.0.0.1:8000/images/parkings/saidamall.png`}}
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
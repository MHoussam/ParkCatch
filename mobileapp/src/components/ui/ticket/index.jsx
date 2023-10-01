import React from 'react'
import { Image, View } from 'react-native'
import styles from './styles'
import Summary from '../summary'
import QRCode from 'react-native-qrcode-svg';
import { useSelector } from 'react-redux';

const Ticket = () => {
  const selectedParking = useSelector((state) => state.selectedParking)
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
              <Image
                style={styles.parkingPhoto}
                source={{
                  uri: `http://127.0.0.1:8000/images/parkings/${selectedParking.photo}`,
                }}
              />
            <View style={styles.line}/>
            <View styles={styles.summary}>
                <Summary
                    styleContainer={styles.infoContainer}
                    styleSubtitle={styles.subtitle}
                    styleInfo={styles.info}
                    styleLeftContent={styles.leftContent}
                    ticket={true}
                />
            </View>
        </View>
    </View>
  )
}

export default Ticket
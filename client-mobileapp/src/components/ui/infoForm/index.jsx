import React from 'react'
import { View } from 'react-native'
import Duration from '../../base/duration';
import styles from './styles'
import Input from '../../base/input';

const InfoForm = () => {
  return (
    <View style={styles.container}>
        <Duration styleText={styles.title}/>
        <Input styleText={styles.title} text={'License Plate Number'} label={'plateNumber'}/>
        <Input styleText={styles.title} text={'Phone Number'} label={'phone'}/>
    </View>
  )
}

export default InfoForm;
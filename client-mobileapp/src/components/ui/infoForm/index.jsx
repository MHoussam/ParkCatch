import React from 'react'
import { View } from 'react-native'
import Duration from '../../base/duration';
import styles from './styles'

const InfoForm = () => {
  return (
    <View style={styles.container}>
        <Duration style={styles.title}/>
    </View>
  )
}

export default InfoForm;
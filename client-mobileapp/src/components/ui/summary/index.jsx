import React from 'react'
import { Text, View } from 'react-native'
import Info from '../../base/info'
import styles from './styles'

const Summary = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Summary</Text>
        <Info styleText={{color:'grey'}} text={'Client'} />
    </View>
  )
}

export default Summary
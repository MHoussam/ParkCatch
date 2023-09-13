import React from 'react'
import { Text, View } from 'react-native'

const Slot = ({ number }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{number}</Text>
    </View>
  )
}

export default Slot;
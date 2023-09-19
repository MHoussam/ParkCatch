import React from 'react'
import { Text, View } from 'react-native'
import Info from '../../base/info'

const Summary = () => {
  return (
    <View style={{flex: 1}}>
        <Text>Summary</Text>
        <Info styleText={{color:'grey'}} text={'Client'} />
    </View>
  )
}

export default Summary
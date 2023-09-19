import React from 'react'
import { Text } from 'react-native'

const Info = ({ styleText, text}) => {
  return (
    <View style={{flex:1}}>
        <Text style={styleText}>{text}</Text>
    </View>
  )
}

export default Info
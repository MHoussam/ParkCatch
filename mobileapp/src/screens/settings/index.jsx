import React from 'react'
import { Text, View } from 'react-native'
import Header from '../../components/ui/header'
import Footer from '../../components/ui/footer'

const Settings = () => {
  return (
    <View style={{flex:1}}>
      <Header ScreenName={'Settings'} mainScreen={true}/>
      <View style={{flex:1}}>
        <Text></Text>
      </View>
    </View>
  )
}
export default Settings
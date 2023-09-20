import React, { useEffect } from 'react';
import Map from '../../components/ui/map';
import { Button, Text, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from '../../redux/store';
import Spots from '../spots';
import Footer from '../../components/ui/footer';
import Header from '../../components/ui/header';
import SearchBar from '../../components/base/searchbar';
import WebSocketClient from '../../components/WebSocketClient';
import ChatComponent from '../../components/ui/chat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser, setUserToken } from '../../redux/user/userSlice';

const Home = () => {
  const dispatch = useDispatch();

  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      const userToken = await AsyncStorage.getItem('userToken');

      console.log('yooooooo: ' + userData)
      console.log('gvvvvvv: ' + userToken)
  
      if (userData !== null && userToken !== null) {
        const parsedUserData = JSON.parse(userData);
  console.log('parsedUserData ')
  console.log(parsedUserData)

        dispatch(setUser(parsedUserData));
        dispatch(setUserToken(userToken));
      }
    } catch (error) {
      console.error('Error loading user data', error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <Provider store={store}>
      {/* <WebSocketClient /> */}
      <SearchBar /> 
      <Map />
      {/* <ChatComponent /> */}
      {/* <Footer/>  */}
    </Provider>
  )
}

export default Home;
// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import { Provider, useDispatch, useSelector } from 'react-redux';
// import reduxStore from "./src/redux/store";
// import { configureStore, createSlice } from '@reduxjs/toolkit';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import Home from './src/screens/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          {/* <Stack.Screen name="Signup" component={Signup} /> */}
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
       </NavigationContainer> 
    </Provider>
  );
}
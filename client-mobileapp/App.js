import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import Home from './src/screens/home';
import Spots from './src/screens/spots';
import ReservationInfo from './src/screens/reservationInfo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Login" component={Login} /> */}
          {/* <Stack.Screen name="Signup" component={Signup} /> */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Spots" component={Spots} />
          <Stack.Screen name="ReservationInfo" component={ReservationInfo} />
        </Stack.Navigator>
       </NavigationContainer> 
    </Provider>
  );
}
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import Home from './src/screens/home';
import Spots from './src/screens/spots';
import ReservationInfo from './src/screens/reservationInfo';
import Directions from './src/screens/directions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(null);
  
  useEffect(() => {
    const checkUserToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token !== null) {
        setUserToken(token);
      }
    };
    
    checkUserToken();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {if(userToken !=== null){
          <Stack.Screen name="Login" component={Login} />
          }}
          {/* <Stack.Screen name="Signup" component={Signup} /> */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Spots" component={Spots} />
          <Stack.Screen name="ReservationInfo" component={ReservationInfo} />
          <Stack.Screen name="Directions" component={Directions} />
        </Stack.Navigator>
       </NavigationContainer> 
    </Provider>
  );
}
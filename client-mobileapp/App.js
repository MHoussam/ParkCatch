import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import Home from './src/screens/home';
import Spots from './src/screens/spots';
import ReservationInfo from './src/screens/reservationInfo';
import Directions from './src/screens/directions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReservationTicket from './src/screens/reservationTicket';
import Notifications from './src/screens/notifications';
import * as Notificationss from 'expo-notifications'
import Notification from './src/components/ui/notification';
import Reservations from './src/screens/reservations';
import Settings from './src/screens/settings';

const Stack = createStackNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(null);
  // const navigation = useNavigation();
  
  // useEffect(() => {
  //   const checkUserToken = async () => {
  //     const token = await AsyncStorage.removeItem('userToken');
  //   };
  //   checkUserToken();
  // }, []);

  const { registerForPushNotificationsAsync, handleNotificationResponse } = Notification();

  useEffect(() => {
    registerForPushNotificationsAsync();
    Notificationss.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });

    const responseListener = 
    Notificationss.addNotificationResponseReceivedListener(
      handleNotificationResponse
    );

    return () => {
      if(responseListener)
        Notifications.removeNotificationSubscription(responseListener);
    }
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          {/* <Stack.Screen name="Signup" component={Signup} /> */}
          <Stack.Screen name="Spots" component={Spots} />
          <Stack.Screen name="ReservationInfo" component={ReservationInfo} />
          <Stack.Screen name="Directions" component={Directions} />
          <Stack.Screen name="ReservationTicket" component={ReservationTicket} />
          <Stack.Screen name="Reservations" component={Reservations} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
       </NavigationContainer> 
    </Provider>
  );
}
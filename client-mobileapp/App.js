import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Provider } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import store from "./src/redux/store";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./src/screens/login";
import Signup from "./src/screens/signup";
import HomeMap from "./src/screens/home";
import Spots from "./src/screens/spots";
import ReservationInfo from "./src/screens/reservationInfo";
import Directions from "./src/screens/directions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ReservationTicket from "./src/screens/reservationTicket";
import Notificationss from "./src/screens/notifications";
import * as Notifications from "expo-notifications";
import Notification from "./src/components/ui/notification";
import Reservations from "./src/screens/reservations";
import Settings from "./src/screens/settings";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(null);

  // useEffect(() => {
  //   const checkUserToken = async () => {
  //     const token = await AsyncStorage.removeItem('userToken');
  //   };
  //   checkUserToken();
  // }, []);

  const { registerForPushNotificationsAsync, handleNotificationResponse } =
    Notification();

  useEffect(() => {
    registerForPushNotificationsAsync();
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });

    const responseListener =
      Notifications.addNotificationResponseReceivedListener(
        handleNotificationResponse
      );

    return () => {
      if (responseListener)
        Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  function HomeStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeMap} />
        <Stack.Screen name="Spots" component={Spots} />
        <Stack.Screen name="ReservationInfo" component={ReservationInfo} />
        <Stack.Screen name="ReservationTicket" component={ReservationTicket} />
        <Stack.Screen name="Directions" component={Directions} />
      </Stack.Navigator>
    );
  }

  function ReservationsStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Reservations" component={Reservations} />
        <Stack.Screen name="ReservationTicket" component={ReservationTicket} />
        <Stack.Screen name="Directions" component={Directions} />
      </Stack.Navigator>
    );
  }

  function NotificationsStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Notifications" component={Notificationss} />
      </Stack.Navigator>
    );
  }

  function SettingsStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
  }

  function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Reservations" component={ReservationsStackNavigator} />
        <Tab.Screen name="Notifications" component={NotificationsStackNavigator} />
        <Tab.Screen name="Settings" component={SettingsStackNavigator} />
      </Tab.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
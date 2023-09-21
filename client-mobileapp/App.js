import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Provider } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import store from "./src/redux/store";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./src/screens/login";
import Signup from "./src/screens/signup";
import HomeMapScreen from "./src/screens/home";
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
import { Image } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(null);

  //  useEffect(() => {
  //   const checkUserToken = async () => {
  //     const token = await AsyncStorage.removeItem('userToken');
  //   };
  //   checkUserToken();
  // }, []);

  const { registerForPushNotificationsAsync, handleNotificationResponse } =
    Notification();

  let token;
  const checkToken = async () => {
    token = await AsyncStorage.getItem('userToken');
    console.log('this is the token ' + token);
    setUserToken(token);
  }

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

    checkToken();

    return () => {
      if (responseListener)
        Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  function HomeStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen screenOptions={{ headerShown: false }} name="HomeMap" component={HomeMapScreen} />
        <Stack.Screen screenOptions={{ headerShown: false }} name="Spots" component={Spots} />
        <Stack.Screen screenOptions={{ headerShown: false }} name="ReservationInfo" component={ReservationInfo} />
        <Stack.Screen screenOptions={{ headerShown: false }} name="ReservationTicket" component={ReservationTicket} />
        <Stack.Screen screenOptions={{ headerShown: false }} name="Directions" component={Directions} />
      </Stack.Navigator>
    );
  }

  function ReservationsStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen screenOptions={{ headerShown: false }} name="Reservations" component={Reservations} />
        <Stack.Screen screenOptions={{ headerShown: false }} name="ReservationTicket" component={ReservationTicket} />
        <Stack.Screen screenOptions={{ headerShown: false }} name="Directions" component={Directions} />
      </Stack.Navigator>
    );
  }

  function NotificationsStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen screenOptions={{ headerShown: false }} name="Notificationss" component={Notificationss} />
      </Stack.Navigator>
    );
  }

  function SettingsStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen screenOptions={{ headerShown: false }} name="Settings" component={Settings} />
      </Stack.Navigator>
    );
  }

  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#ffffff', height: 80},
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#00000050',
          tabBarActiveBackgroundColor: '#FECA0E',
          tabBarItemStyle: { paddingVertical: 15 },
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 14 },
        }}
      >
        <Tab.Screen 
          options={{
          tabBarIcon: ({ color, size }) => (
            <Image
                source={require('./assets/images/home.png')}
                style={{ minHeight: 21, minWidth: 20, tintColor: color, paddingBottom: 0 }}
            />
          ),}}
         name="Home" component={HomeStackNavigator} />
        <Tab.Screen 
          options={{
          tabBarIcon: ({ color, size }) => (
            <Image
                source={require('./assets/images/reservations.png')}
                style={{ minHeight: 20, minWidth: 24, tintColor: color }}
            />
          ),}}
          name="Reservations" component={ReservationsStackNavigator} />
        <Tab.Screen 
          options={{
          tabBarIcon: ({ color, size }) => (
            <Image
                source={require('./assets/images/notifications.png')}
                style={{ minHeight: 21, minWidth: 19, tintColor: color }}
            />
          ),}}
          name="Notifications" component={NotificationsStackNavigator} />
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                  source={require('./assets/images/settings.png')}
                  style={{ minHeight: 22, minWidth: 20, tintColor: color }}
              />
            ),}}
          name="Settings" component={SettingsStackNavigator} />
      </Tab.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            {/* <Stack.Screen name="EditPost" component={EditPost} /> */}
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Navigator>
        {console.log('shuuuuuuuuuuuuuuuuuuuuuu:', userToken)}
      </NavigationContainer>
    </Provider>
  );
}

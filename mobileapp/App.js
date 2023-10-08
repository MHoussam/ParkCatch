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
import Reservationss from "./src/screens/reservations";
import Settingss from "./src/screens/settings";
import { Alert, Image, Text } from "react-native";
import { PermissionsAndroid } from "react-native";
import ReservationPayment from "./src/screens/reservationPayment";
import ChangeInfo from "./src/screens/changeInfo";
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(null);

  const { registerForPushNotificationsAsync, handleNotificationResponse } =
    Notification();

  let token;
  const checkToken = async () => {
    token = await AsyncStorage.getItem("userToken");
    setUserToken(token);
  };

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  };

  function HomeStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="HomeMap"
          component={HomeMapScreen}
        />
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="Spots"
          component={Spots}
        />
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="ReservationInfo"
          component={ReservationInfo}
        />
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="ReservationPayment"
          component={ReservationPayment}
        />
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="ReservationTicket"
          component={ReservationTicket}
        />
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="Directions"
          component={Directions}
        />
      </Stack.Navigator>
    );
  }

  function ReservationsStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="Reservationss"
          component={Reservationss}
        />
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="ReservationTicket"
          component={ReservationTicket}
        />
        <Stack.Screen
          screenOptions={{ headerShown: false, unmountOnBlur: true }}
          name="Directions"
          component={Directions}
        />
      </Stack.Navigator>
    );
  }

  function SettingsStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="Settingss"
          component={Settingss}
        />
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="ChangeInfo"
          component={ChangeInfo}
        />
      </Stack.Navigator>
    );
  }

  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#ffffff", height: 81},
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#00000050",
          tabBarActiveBackgroundColor: "#FECA0E",
          tabBarItemStyle: { paddingVertical: 15 },
          tabBarLabelStyle: { fontWeight: "bold", fontSize: 14 },
          keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("./assets/images/home.png")}
                style={{
                  minHeight: 21,
                  minWidth: 20,
                  tintColor: color,
                  paddingBottom: 0,
                }}
              />
            ),
          }}
          name="Home"
          component={HomeStackNavigator}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("./assets/images/reservations.png")}
                style={{ minHeight: 20, minWidth: 24, tintColor: color }}
              />
            ),
          }}
          name="Reservations"
          component={ReservationsStackNavigator}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("./assets/images/settings.png")}
                style={{ minHeight: 22, minWidth: 20, tintColor: color }}
              />
            ),
          }}
          name="Settings"
          component={SettingsStackNavigator}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

function LocationExample() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchMap = async () => {
    console.log('really')
      const response = await Location.requestForegroundPermissionsAsync();

      console.log(response.status)
      if (response.status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        console.log(response.status)
        console.log(response.status === 'granted')
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
  }

  useEffect(() => {
    fetchMap();
  }, []);

  return (
    <View style={{ flex: 1 }}>
        {errorMsg ? (
        <Text>{errorMsg}</Text>
        ) : location ? (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        />
        ) : (
        <Text>Loading...</Text>
        )}
    </View>
  );
}

export default LocationExample;
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import styles from './styles';

function LocationExample() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchMap = async () => {
      const response = await Location.requestForegroundPermissionsAsync();

      if (response.status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
  }

  useEffect(() => {
    fetchMap();
  }, []);

  return (
    <View style={styles.container}>
        {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
        ) : location ? (
        <MapView
            style={styles.map}
            initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        >
            <Marker
                coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                }}
                title="Your Location"
            />
        </MapView>
        ) : (
        <Text style={styles.error}>Loading...</Text>
        )}
    </View>
  );
}

export default LocationExample;
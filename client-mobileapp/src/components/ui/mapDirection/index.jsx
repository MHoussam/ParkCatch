import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';
import { useSelector } from 'react-redux';

const MapWithDirections = () => {
  const [error, setError] = useState(null);
  const location = useSelector((state) => state.location.location);
  const selectedParking = useSelector((state) => state.selectedParking);

  const origin = { latitude: location.coords.latitude, longitude: location.coords.longitude };
  const destination = { latitude: selectedParking.latitude, longitude: selectedParking.longitude };

  const [routeCoordinates, setRouteCoordinates] = useState([]);

  const fetchDirection = async () => {
    const apiKey = 'jiEbAXzcDj8ZRhrkfI3EfYjG462gAlrg';

    try{
        const response = await axios.get(
            `https://www.mapquestapi.com/directions/v2/route?key=${apiKey}&from=${origin.latitude},${origin.longitude}&to=${destination.latitude},${destination.longitude}`
        );
        
        const { legs } = response.data.route;
        const points = legs[0].maneuvers.map((maneuver) => ({
            latitude: maneuver.startPoint.lat,
            longitude: maneuver.startPoint.lng,
        }));
        setRouteCoordinates(points);
        
    } catch(error) {
        setError(error.message);
    };
  }

  useEffect(() => {
    fetchDirection();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
          title="Origin"
        />
        <Marker
          coordinate={{ latitude: selectedParking.latitude, longitude: selectedParking.longitude }}
          title="Destination"
        />

        {routeCoordinates.length > 0 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#3498db"
            strokeWidth={3}
          />
        )}
      </MapView>

      {error && <Text>Error: {error}</Text>}
    </View>
  );
};

export default MapWithDirections;

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';
import { useSelector } from 'react-redux';

const MapWithDirections = () => {
  const [directions, setDirections] = useState([]);
  const [error, setError] = useState(null);
  const location = useSelector((state) => state.location.location);
  const selectedParking = useSelector((state) => state.selectedParking);

  useEffect(() => {
    const apiKey = 'jiEbAXzcDj8ZRhrkfI3EfYjG462gAlrg';

    const origin = `${location.coords.latitude}, ${location.coords.longitude}`;
    const destination = `${selectedParking.latitude}, ${selectedParking.longitude}`;

    axios
      .get(
        `https://www.mapquestapi.com/directions/v2/route?key=${apiKey}&from=${origin}&to=${destination}`
      )
      .then((response) => {
        const route = response.data.route;
        console.log(response.data.route.directions)
        setDirections(route);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  console.log(directions.shapePoints)
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

        {directions.shapePoints && (
          <Polyline
            coordinates={directions.shapePoints.map((point) => ({
              latitude: point.latLng.lat,
              longitude: point.latLng.lng,
            }))}
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

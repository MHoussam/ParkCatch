import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import Slot from '../../base/slot';
import { useSelector } from 'react-redux';
// import { setSlots, clearSlots } from '../../../redux/slot/slotSlice'; 

const Slots = () => {
  const userToken =  useSelector((state) => state.user.token);
  const selectedParking =  useSelector((state) => state.parking.parkings);
  const slots =  useSelector((state) => state.slots.slots);

  const fetchSpots = async () => {
    try{
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${userToken.token}`,
          'Content-Type': 'application/json'
        }
      };

      const dataForm = {
        parking_id: selectedParking.id,
      }
      // console.log(axiosConfig.headers)
      const response = await axios.get('http://127.0.0.1:8000/api/spots', dataForm, axiosConfig);;

      //console.log(response.data)
      if (Array.isArray(response.data.data)) {
        if (!slots || slots.length === 0) {
          response.data.data.forEach((item) => {
            const { id,
              parking_id,
              name,
              availability,
              reason,
              x,
              y, } = item;

            dispatch(setSlots({ id,
              parking_id,
              name,
              availability,
              reason,
              x,
              y }));
          });
        }
      } else {
        console.error('Received non-array data from server:', response.data);
      }
      // console.log('no?')
    } catch(error) {
      console.error('Error fetching spots data:', error);
    }
  }

  useEffect(() => {
    fetchSpots();
  }, [])

    return (
      <View style={styles.table}>
        {[...Array(12)].map((_, rowIndex) => (
          <View key={rowIndex} style={styles.tableRow}>
            {[1, 2, 3].map((columnIndex) => (
              <View
                key={columnIndex}
                style={
                  columnIndex !== 2 
                    ? styles.tableCell
                    : rowIndex === 0 
                    ? styles.entranceCell
                    : styles.tableCellGap
                }
              >
                <Slot number={'Num'} />
              </View>
            ))}
          </View>
        ))}
      </View>
    );
};

export default Slots;

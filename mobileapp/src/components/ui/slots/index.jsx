import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";
import Slot from "../../base/slot";
import { useDispatch, useSelector } from "react-redux";
import { addSlots, clearSlots } from "../../../redux/slots/slotSlice";
import { setSelectedSlot, clearSelectedSlot } from "../../../redux/selectedSlot/selectedSlotSlice";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Slots = () => {
  const dispatch = useDispatch();
  // const userToken = useSelector((state) => state.user.token);
  const selectedParking = useSelector((state) => state.selectedParking);
  const slots = useSelector((state) => state.slots);
  const selectedSlot = useSelector((state) => state.selectedSlot);
  const reservation = useSelector((state) => state.reservation);
  
// console.log(reservation)
  const fetchSpots = async () => {
    // dispatch(clearSelectedSlot())
    const userToken = await AsyncStorage.getItem('userToken');

    try {
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      };

      const dataForm = {
        parking_id: selectedParking.id,
        token: userToken,
      };
      //  console.log(dataForm)
      const response = await axios.post(
        "http://127.0.0.1:8000/api/spots",
        dataForm
      );
      if (Array.isArray(response.data.data)) {
        if (slots.slots.length === 0) {
          // console.log("here");
          response.data.data.forEach((item) => {
            const {
              id,
              parking_id,
              name,
              availability,
              reason,
              x_coordinate,
              y_coordinate,
              reserved,
            } = item;

            dispatch(
              addSlots({
                id,
                parking_id,
                name,
                availability,
                reason,
                x_coordinate,
                y_coordinate,
                reserved,
              })
            );
          });
          // console.log("finish");
        }
      } else {
        console.error("Received non-array data from server:", response.data);
      }
      // console.log('no?')
    } catch (error) {
      console.error("Error fetching spots data:", error);
      // console.log(userToken)
    }
  };

  const slotPressed = (slot) => {
      if((selectedSlot === null || selectedSlot.id !== slot.id) && slot.reserved === false){
        dispatch(setSelectedSlot(slot));
        // console.log(selectedSlot) 
        // console.log('sele:')    
        // console.log(slot);
        // console.log(selectedSlot.id != slot.id)
      } else {
        dispatch(clearSelectedSlot());
        // console.log('notttttttttttttttttt')
      }
  }

//   useEffect(() => {
//     fetchSpots();
//     console.log('slots')
    console.log(selectedSlot);
// }, [slots]);

  useEffect(() => {    
    fetchSpots();
    // dispatch(clearSelectedSlot())

    // console.log('slotssssssssssssssss')
  // console.log(slots);
  }, [slots.slots]);

  useEffect(() => { 
  return () => {
    // dispatch(clearSelectedSlot())
    dispatch(clearSlots())
  }
  }, []);
  // console.log(slots.slots.map((slot) => slot.reserved));
  // console.log('selectslot: ' + selectedSlot);
  //   console.log(selectedSlot);

  return (
    <>
    {slots.slots.length > 0 ? (
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
                {slots.slots &&
                  slots.slots
                    .filter(
                      (slot) =>
                        slot.x_coordinate-1 === rowIndex &&
                        slot.y_coordinate === columnIndex
                    )
                    .map((slot) => (
                      <Slot
                        key={`${rowIndex}-${columnIndex}`}
                        number={`${rowIndex}-${columnIndex}`}
                        styleContainer={
                          slot.reserved ? styles.reserved : styles.available
                        }
                        styleTitle={
                          slot.reserved
                            ? styles.reservedTitle
                            : styles.availableTitle
                        }
                        isSelected={selectedSlot.id === slot.id}
                        onPress={() => slotPressed(slot)}
                      />
                    ))}
              </View>
            ))}
          </View>
        ))}
      </View>
    ) : (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Slots are Loading...</Text>
      </View>
    )}
    </>
  );
};

export default Slots;

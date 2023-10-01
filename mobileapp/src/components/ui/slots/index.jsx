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

      // console.log(
      //   response.data.data[0].name +
      //     " " +
      //     response.data.data[0].x_coordinate +
      //     " " +
      //     response.data.data[0].y_coordinate +
      //     " " +
      //     response.data.data[0].reserved
      // );
      // console.log(
      //   response.data.data[0].name +
      //     " " +
      //     response.data.data[1].x_coordinate +
      //     " " +
      //     response.data.data[1].y_coordinate +
      //     " " +
      //     response.data.data[1].reserved
      // );
      // console.log(
      //   response.data.data[2].name +
      //     " " +
      //     response.data.data[2].x_coordinate +
      //     " " +
      //     response.data.data[2].y_coordinate +
      //     " " +
      //     response.data.data[2].reserved
      // );
      // console.log(
      //   response.data.data[3].name +
      //     " " +
      //     response.data.data[3].x_coordinate +
      //     " " +
      //     response.data.data[3].y_coordinate +
      //     " " +
      //     response.data.data[3].reserved
      // );
      // console.log(
      //   response.data.data[4].name +
      //     " " +
      //     response.data.data[4].x_coordinate +
      //     " " +
      //     response.data.data[4].y_coordinate +
      //     " " +
      //     response.data.data[4].reserved
      // );
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
      console.log(userToken)
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
//     console.log(slots);
// }, [slots]);

  useEffect(() => {    
    fetchSpots();
    console.log('slotssssssssssssssss')
  console.log(slots);
  }, [slots.slots]);

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
                        slot.x_coordinate === rowIndex &&
                        slot.y_coordinate === columnIndex
                    )
                    .map((slot) => (
                      <Slot
                        key={`${rowIndex}-${columnIndex}`}
                        number={slot.name}
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

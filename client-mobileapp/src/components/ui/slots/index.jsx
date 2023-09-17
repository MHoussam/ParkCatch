import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";
import Slot from "../../base/slot";
import { useDispatch, useSelector } from "react-redux";
import { addSlots, clearSlots } from "../../../redux/slots/slotSlice";
import axios from "axios";

const Slots = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.token);
  const selectedParking = useSelector((state) => state.selectedParking);
  const slots = useSelector((state) => state.slots);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const fetchSpots = async () => {
    try {
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${userToken.token}`,
          "Content-Type": "application/json",
        },
      };

      const dataForm = {
        parking_id: selectedParking.id,
        token: userToken.token,
      };
      //  console.log(dataForm)
      const response = await axios.post(
        "http://127.0.0.1:8000/api/spots",
        dataForm
      );

      console.log(
        response.data.data[0].name +
          " " +
          response.data.data[0].x_coordinate +
          " " +
          response.data.data[0].y_coordinate +
          " " +
          response.data.data[0].reserved
      );
      console.log(
        response.data.data[0].name +
          " " +
          response.data.data[1].x_coordinate +
          " " +
          response.data.data[1].y_coordinate +
          " " +
          response.data.data[1].reserved
      );
      console.log(
        response.data.data[2].name +
          " " +
          response.data.data[2].x_coordinate +
          " " +
          response.data.data[2].y_coordinate +
          " " +
          response.data.data[2].reserved
      );
      console.log(
        response.data.data[3].name +
          " " +
          response.data.data[3].x_coordinate +
          " " +
          response.data.data[3].y_coordinate +
          " " +
          response.data.data[3].reserved
      );
      console.log(
        response.data.data[4].name +
          " " +
          response.data.data[4].x_coordinate +
          " " +
          response.data.data[4].y_coordinate +
          " " +
          response.data.data[4].reserved
      );
      if (Array.isArray(response.data.data)) {
        if (slots.slots === null || slots.slots.length === 0) {
          console.log("here");
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
          console.log("finish");
        }
      } else {
        console.error("Received non-array data from server:", response.data);
      }
      // console.log('no?')
    } catch (error) {
      console.error("Error fetching spots data:", error);
    }
  };

  useEffect(() => {
    dispatch(clearSlots());
    fetchSpots();
    console.log("effect");
  }, []);

  console.log("slots");
  console.log(slots.slots.map((slot) => slot.reserved));

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
                      isSelected={selectedSlot === slot}
                      onPress={() => {
                        if(selectedSlot === null && slot.reserved === false){
                          setSelectedSlot(slot);
                        } else {
                          setSelectedSlot(null);
                        }
                      }}
                    />
                  ))}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Slots;

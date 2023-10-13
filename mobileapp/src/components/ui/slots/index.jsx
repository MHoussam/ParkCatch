import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";
import Slot from "../../base/slot";
import { useDispatch, useSelector } from "react-redux";
import { addSlots, clearSlots } from "../../../redux/slots/slotSlice";
import {
  setSelectedSlot,
  clearSelectedSlot,
} from "../../../redux/selectedSlot/selectedSlotSlice";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Slots = () => {
  const dispatch = useDispatch();
  // const userToken = useSelector((state) => state.user.token);
  const selectedParking = useSelector((state) => state.selectedParking);
  const slots = useSelector((state) => state.slots);
  const selectedSlot = useSelector((state) => state.selectedSlot);
  const reservation = useSelector((state) => state.reservation);

  const fetchSpots = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    const dispatchSlots = [];

    try {
      const dataForm = {
        parking_id: selectedParking.id,
        token: userToken,
      };
      const response = await axios.post(
        "http://127.0.0.1:8000/api/spots",
        dataForm
      );
      if (Array.isArray(response.data.data)) {
        dispatchSlots.push(...response.data.data);
      } else {
        console.error("Received non-array data from server:", response.data);
      }
    } catch (error) {
      console.error("Error fetching spots data:", error);
    }

    if (dispatchSlots.length > 0) {
      dispatch(addSlots(dispatchSlots));
    }
  };

  const slotPressed = (slot) => {
    if (
      (selectedSlot === null || selectedSlot.id !== slot.id) &&
      slot.reserved === false
    ) {
      dispatch(setSelectedSlot(slot));
    } else {
      dispatch(clearSelectedSlot());
    }
  };

  useEffect(() => {
    fetchSpots();
    console.log("how");
  }, []);

  useEffect(() => {
    return () => {
      dispatch(clearSlots());
    };
  }, []);

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
                          slot.x_coordinate - 1 === rowIndex &&
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
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Slots are Loading...</Text>
        </View>
      )}
    </>
  );
};

export default Slots;
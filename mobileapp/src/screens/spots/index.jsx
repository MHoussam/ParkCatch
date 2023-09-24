import React, { useEffect } from 'react';
import styles from './styles';
import { Text, TouchableOpacity, View } from 'react-native';
import Slots from '../../components/ui/slots';
import Header from '../../components/ui/header';
import Footer from '../../components/ui/footer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/base/button';
import { clearReservation } from '../../redux/reservation/reservationSlice';

const Spots = () => {
  // const selectedSlot = useSelector((state) => state.selectedSlot);
  // const selectedParking = useSelector((state) => state.selectedParking);
  // const dispatch = useDispatch();
  // const reservation = useSelector((state) => state.reservation);

  // console.log(reservation)

// useEffect(() => {
//   dispatch(clearReservation);
// }, []);

  return (
    <div className={styles.table}>
      {[...Array(12)].map((_, rowIndex) => (
        <div key={rowIndex} className={styles.tableRow}>
          {[1, 2, 3].map((columnIndex) => (
            <div
              key={columnIndex}
              className={
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
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Spots;
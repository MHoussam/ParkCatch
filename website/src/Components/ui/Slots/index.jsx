import React, { useEffect } from 'react'

const Slots = () => {
    const fetchSpots = async () => {

        const userToken = await localStorage.getItem('userToken');
        console.log(userToken)
    
        // try {
        //   const axiosConfig = {
        //     headers: {
        //       Authorization: `Bearer ${userToken}`,
        //       "Content-Type": "application/json",
        //     },
        //   };
    
        //   const dataForm = {
        //     parking_id: selectedParking.id,
        //     token: userToken,
        //   };
        //   //  console.log(dataForm)
        //   const response = await axios.post(
        //     "http://127.0.0.1:8000/api/spots",
        //     dataForm
        //   );

        //   if (Array.isArray(response.data.data)) {
        //     if (slots.slots === null || slots.slots.length === 0) {
        //       // console.log("here");
        //       response.data.data.forEach((item) => {
        //         const {
        //           id,
        //           parking_id,
        //           name,
        //           availability,
        //           reason,
        //           x_coordinate,
        //           y_coordinate,
        //           reserved,
        //         } = item;
    
        //         dispatch(
        //           addSlots({
        //             id,
        //             parking_id,
        //             name,
        //             availability,
        //             reason,
        //             x_coordinate,
        //             y_coordinate,
        //             reserved,
        //           })
        //         );
        //       });
        //       // console.log("finish");
        //     }
        //   } else {
        //     console.error("Received non-array data from server:", response.data);
        //   }
        //   // console.log('no?')
        // } catch (error) {
        //   console.error("Error fetching spots data:", error);
        //   console.log(userToken)
        // }
      };

      useEffect(() => {
        fetchSpots();
      }, [])

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

export default Slots
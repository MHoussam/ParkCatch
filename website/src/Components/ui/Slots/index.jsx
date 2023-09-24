import React, { useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import Slot from "../../base/slot";
import axios from "axios";
import { addSlots } from "../../../redux/slots/slotSlice";

const Slots = () => {
  const dispatch = useDispatch();
  const slots = useSelector((state) => state.slots);
  const searchFilter = useSelector((state) => state.searchFilter);
  const user = useSelector((state) => state.user);

  const fetchSpots = async () => {
    const userToken = await localStorage.getItem("userToken");
    console.log(userToken);

    try {

      const user = localStorage.getItem('userData');
        const userData = JSON.parse(user);
        console.log(userData)
      // const axiosConfig = {
      //   headers: {
      //     Authorization: `Bearer ${userToken}`,
      //     "Content-Type": "application/json",
      //   },
      // };

      const dataForm = {
        parking_id:3,
        token: userData.token,
      };
         console.log(dataForm)
      const response = await axios.post(
        "http://127.0.0.1:8000/api/spots",
        dataForm
      );
      console.log(response.data.data);

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
          // console.log("finish");
        }
      } else {
        console.error("Received non-array data from server:", response.data);
      }
      // console.log('no?')
    } catch (error) {
      console.error("Error fetching spots data:", error);
      console.log(userToken);
    }
  };

  useEffect(() => {
    fetchSpots();
  }, [searchFilter]);

  console.log(slots.slots);

  return (
    <div className="table">
      {[...Array(12)].map((_, rowIndex) => (
        <div key={rowIndex} className="tableRow flex">
          {[1, 2, 3].map((columnIndex) => (
            <div
              key={columnIndex}
              className={
                columnIndex !== 2
                  ? "tableCell flex center flex-grow"
                  : rowIndex === 0
                  ? "entranceCell flex center flex-grow"
                  : "tableCellGap flex center flex-grow"
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
                      number={slot.name}
                      slotContainer={slot.reserved ? "reserved flex center" : "available flex center"}
                      slotTitle={
                        slot.reserved ? "reservedTitle flex-grow" : "availableTitle flex-grow"
                      }
                    />
                  ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Slots;

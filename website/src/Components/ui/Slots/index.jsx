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
  const searchbar = useSelector((state) => state.searchbar);
  const reservations = useSelector((state) => state.reservation);

  const fetchSpots = async () => {
    const userToken = await localStorage.getItem("userToken");

    try {
      const user = localStorage.getItem('userData');
        const userData = JSON.parse(user);
      const dataForm = {
        parking_id: userData.parking_id,
        token: userData.token,
      };
      const response = await axios.post(
        "http://127.0.0.1:8000/api/spots",
        dataForm
      );

      if (Array.isArray(response.data.data) && response.data.data.length > 0) {
        if (slots.slots === null || slots.slots.length === 0) {
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
        }
      } else {
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchSpots();

  }, [searchFilter, slots]);

  return (
    <>
    {slots.slots.length != 0 ? (
      <div className="table">
        {[...Array(13)].map((_, rowIndex) => (
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
                        slot.x_coordinate - 1 === rowIndex &&
                        slot.y_coordinate === columnIndex && slot.availability === 1
                    )
                    .map((slot) => (
                      searchFilter.searchFilter.length === 0 && searchbar.searchbar === '' ? (
                        <Slot
                          key={`${rowIndex}-${columnIndex}`}
                          number={slot.name}
                          slotContainer={slot.reserved && slot.id == 21 ? "alert flex center" : slot.reserved ? "reserved flex center" : "available flex center" }
                          slotTitle={
                            slot.reserved ? "reservedTitle flex-grow" : "availableTitle flex-grow"
                          }
                        />
                      ) : (
                        searchFilter.searchFilter.some((item) => item.spot_id === slot.id) && (
                          <Slot
                            key={`${rowIndex}-${columnIndex}`}
                            number={slot.name}
                            slotContainer={slot.reserved ? "reserved flex center" : "available flex center" }
                            slotTitle={
                              slot.reserved ? "reservedTitle flex-grow" : "availableTitle flex-grow"
                            }
                          />
                        )
                      )
                    ))}
                    
              </div>
            ))}
          </div>
        ))}
      </div>
    ) : (
      <div className="flex center flex-grow">
        <h3>The Spots are Loading...</h3>
      </div>
    )}
    </>
  );
};

export default Slots;

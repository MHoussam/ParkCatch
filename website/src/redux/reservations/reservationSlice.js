import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservation: [],
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setReservation: (state, action) => {
      const { id, user_id, parking_id, spot_id, duration, total, valid, plate_number, real_plate_number, correct, phone_number, x_coordinate, y_coordinate } = action.payload;
        state.reservation.push({
          id,
          user_id,
          parking_id,
          spot_id,
          duration,
          total,
          valid,
          plate_number,
          real_plate_number, 
          correct, 
          phone_number,
          x_coordinate,
          y_coordinate,
        });
    },
    clearReservation: (state) => {
      state.reservation = []
    }
  },
});

export const { setReservation, clearReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
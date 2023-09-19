import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  client: null,
  phone: null,
  parking: null,
  location: null,
  duration: 2,
  spotNumber: null,
  plateNumber: null,
  total: null,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    setReservation: (state, action) => {
        state.client = action.payload.client;
        state.phone = action.payload.phone;
        state.parking = action.payload.parking;
        state.location = action.payload.location;
        state.duration = action.payload.duration;
        state.spotNumber = action.payload.spotNumber;
        state.plateNumber = action.payload.plateNumber;
        state.total = action.payload.total;
    },
    clearReservation: (state) => {
        state.client = null;
        state.phone = null;
        state.parking = null;
        state.location = null;
        state.duration = null;
        state.spotNumber = null;
        state.plateNumber = null;
        state.total = null;
    },
  },
});

export const { setReservation, clearReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
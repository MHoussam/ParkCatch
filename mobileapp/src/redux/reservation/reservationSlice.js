import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  client: null,
  phone: '',
  parking: null,
  location: null,
  duration: 2,
  spotNumber: null,
  plateNumber: '',
  total: null,
  time_reserved: null,
  date_reserved: null,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    setReservation: (state, action) => {
        state.client = action.payload.client;
        if(action.payload.phone !== null && action.payload.phone !== '' && action.payload.phone !== undefined){
          state.phone = action.payload.phone;
        }
        state.parking = action.payload.parking;
        state.location = action.payload.location;
        if(action.payload.duration !== null && action.payload.duration !== '' && action.payload.duration !== undefined){
          state.duration = action.payload.duration;
        }
        state.spotNumber = action.payload.spotNumber;
        if(action.payload.plateNumber !== null && action.payload.plateNumber !== '' && action.payload.plateNumber !== undefined){
          state.plateNumber = action.payload.plateNumber;
        }
        state.total = action.payload.total;
        state.time_reserved = action.payload.time_reserved;
        state.date_reserved = action.payload.date_reserved;
    },
    setPhone: (state, action) => {
      state.phone = action.payload.phone;
    },
    setDuration: (state, action) => {
      state.duration = action.payload.duration;
    },
    setPlate: (state, action) => {
      state.plateNumber = action.payload.plateNumber;
    },
    clearReservation: (state) => {
        state.client = null;
        state.phone = '';
        state.parking = null;
        state.location = null;
        state.duration = 2;
        state.spotNumber = null;
        state.plateNumber = '';
        state.total = null;
        state.time_reserved = null;
        state.date_reserved = null;
    },
  },
});

export const { setReservation, setPhone, setDuration, setPlate, clearReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
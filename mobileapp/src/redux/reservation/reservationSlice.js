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
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    setReservation: (state, action) => {
      console.log(' action called ' + action.payload.duration + ' ' + action.payload.client + ' ' + action.payload.phone);

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
    },
    clearReservation: (state) => {
      console.log('clearReservation action called');
        state.client = null;
        state.phone = '';
        state.parking = null;
        state.location = null;
        state.duration = 2;
        state.spotNumber = null;
        state.plateNumber = '';
        state.total = null;
    },
  },
});

export const { setReservation, clearReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
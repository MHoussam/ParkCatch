import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null, 
    name: null, 
    address: null, 
    price: null, 
    photo: null, 
    open_hour: null, 
    close_hour: null, 
    latitude: null, 
    longitude: null
};

const selectedParkingSlice = createSlice({
  name: 'selectedParking',
  initialState,
  reducers: {
    setSelectedParking: (state, action) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.address = action.payload.address;
        state.price = action.payload.price;
        state.photo = action.payload.photo;
        state.open_hour = action.payload.open_hour;
        state.close_hour = action.payload.close_hour;
        state.latitude = action.payload.latitude;
        state.longitude = action.payload.longitude;
    },
    clearSelectedParking: (state) => {
        state.id = null;
        state.name = null;
        state.address = null;
        state.price = null;
        state.photo = null;
        state.open_hour = null;
        state.close_hour = null;
        state.latitude = null;
        state.longitude = null;
    },
  },
});

export const { setSelectedParking, clearSelectedParking } = selectedParkingSlice.actions;

export default selectedParkingSlice.reducer;
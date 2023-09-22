import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  parkings: [],
};

const parkingSlice = createSlice({
  name: 'parking',
  initialState,
  reducers: {
    addParking: (state, action) => {
      const { id, name, address, price, photo, open_hour, close_hour, latitude, longitude } = action.payload;
        state.parkings.push({
          id,
          name,
          address,
          price,
          photo,
          open_hour,
          close_hour,
          latitude,
          longitude,
        });
    },
    clearParkings: (state) => {
      state.parkings = []
      console.log(state.parkings)
    }
  },
});

export const { addParking, clearParkings } = parkingSlice.actions;

export default parkingSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  parkings: [],
};

const parkingSlice = createSlice({
  name: 'parking',
  initialState,
  reducers: {
    addParking: (state, action) => {
      const { id, name, latitude, longitude } = action.payload;
        state.parkings.push({
          id,
          name,
          latitude,
          longitude,
        });
    },
  },
});

export const { addParking } = parkingSlice.actions;

export default parkingSlice.reducer;

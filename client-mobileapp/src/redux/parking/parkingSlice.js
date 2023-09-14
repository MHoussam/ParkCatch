import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  parkings: [],
};

const parkingSlice = createSlice({
  name: 'parking',
  initialState,
  reducers: {
    addParking: (state, action) => {
      const { id, name, xCoordinate, yCoordinate } = action.payload;
        state.parkings.push({
          id,
          name,
          xCoordinate,
          yCoordinate,
        });
    },
  },
});

export const { addParking } = parkingSlice.actions;

export default parkingSlice.reducer;

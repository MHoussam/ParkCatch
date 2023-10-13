import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  parkings: [],
};

const parkingSlice = createSlice({
  name: "parking",
  initialState,
  reducers: {
    addParking: (state, action) => {
      const parkingsToAdd = action.payload;
      state.parkings.push(...parkingsToAdd);
    },
    clearParkings: (state) => {
      state.parkings = [];
    },
  },
});


export const { addParking, clearParkings } = parkingSlice.actions;

export default parkingSlice.reducer;
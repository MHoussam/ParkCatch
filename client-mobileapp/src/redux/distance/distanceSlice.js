import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  distance: null,
};

const distanceSlice = createSlice({
  name: 'distance',
  initialState,
  reducers: {
    setDistance: (state, action) => {
      state.distance = action.payload;
    },
  },
});

export const { setDistance } = distanceSlice.actions;

export default distanceSlice.reducer;
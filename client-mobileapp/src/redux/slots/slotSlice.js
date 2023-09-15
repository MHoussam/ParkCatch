import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  parking_id: null,
  name: null,
  availability: null,
  reason: null,
  x: null,
  y: null,
};

const slotSlice = createSlice({
  name: 'slots',
  initialState,
  reducers: {
    setSlots: (state, action) => {
        state.id = action.payload.id;
        state.parking_id = action.payload.parking_id;
        state.name = action.payload.name;
        state.availability = action.payload.availability;
        state.reason = action.payload.reason;
        state.x = action.payload.x;
        state.y = action.payload.y;
    },
    clearSlots: (state) => {
      state.id = null;
      state.parking_id = null;
      state.name = null;
      state.availability = null;
      state.reason = null;
      state.x = null;
      state.y = null;
    },
  },
});

export const { setSpots, clearSpots } = slotSlice.actions;

export default slotSlice.reducer;
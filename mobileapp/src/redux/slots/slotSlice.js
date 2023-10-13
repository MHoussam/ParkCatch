import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slots: [],
};

const slotSlice = createSlice({
  name: 'slots',
  initialState,
  reducers: {
    addSlots: (state, action) => {
      const slotsToAdd = action.payload;
      state.slots.push(...slotsToAdd);
    },
    clearSlots: (state) => {
      state.slots = [];
    },
  },
});

export const { addSlots, clearSlots } = slotSlice.actions;

export default slotSlice.reducer;

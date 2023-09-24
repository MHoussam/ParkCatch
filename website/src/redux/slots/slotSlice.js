import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slots: [],
};

const slotSlice = createSlice({
  name: 'slots',
  initialState,
  reducers: {
    addSlots: (state, action) => {
      const { id, parking_id, name, availability, reason, x_coordinate, y_coordinate, reserved } = action.payload;
        state.slots.push({
          id,
          parking_id,
          name,
          availability,
          reason,
          x_coordinate,
          y_coordinate,
          reserved,
        });
    },
    clearSlots: (state) => {
      state.slots = [];
    },
  },
});

export const { addSlots, clearSlots } = slotSlice.actions;

export default slotSlice.reducer;

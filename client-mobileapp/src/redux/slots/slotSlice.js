import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slots: [],
};

const slotSlice = createSlice({
  name: 'slots',
  initialState,
  reducers: {
    addSlots: (state, action) => {
      const { id, parking_id, name, availability, reason, x_coordinate, y_coordinate, valid } = action.payload;
        state.slots.push({
          id,
          parking_id,
          name,
          availability,
          reason,
          x_coordinate,
          y_coordinate,
          valid,
        });
    },
  },
});

export const { addSlots } = slotSlice.actions;

export default slotSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSlot: []
};

const selectedSlotSlice = createSlice({
  name: 'selectedSlot',
  initialState,
  reducers: {
    setSelectedSlot: (state, action) => {
        state.id = action.payload.id;
        state.parking_id = action.payload.parking_id;
        state.name = action.payload.name;
        state.availability = action.payload.availability;
        state.reason = action.payload.reason;
        state.x_coordinate = action.payload.x_coordinate;
        state.y_coordinate = action.payload.y_coordinate;
        state.reserved = action.payload.reserved;
    },
    clearSelectedSlot: (state) => {
      selectedSlot: []
    },
  },
});

export const { setSelectedSlot, clearSelectedSlot } = selectedSlotSlice.actions;

export default selectedSlotSlice.reducer;
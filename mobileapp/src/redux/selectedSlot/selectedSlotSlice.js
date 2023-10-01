import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
      parking_id: null,
      name: null,
      availability: null,
      reason: null,
      x_coordinate: null,
      y_coordinate: null,
      reserved: null,
}

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
      state.id = null;
      state.parking_id = null;
      state.name = null;
      state.availability = null;
      state.reason = null;
      state.x_coordinate = null;
      state.y_coordinate = null;
      state.reserved = null;
    },
  },
});

export const { setSelectedSlot, clearSelectedSlot } = selectedSlotSlice.actions;

export default selectedSlotSlice.reducer;

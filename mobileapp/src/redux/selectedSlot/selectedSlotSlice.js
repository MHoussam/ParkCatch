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
      state.id = ac;
      state.parking_id = ac;
      state.name = ac;
      state.availability = ac;
      state.reason = ac;
      state.x_coordinate = ac;
      state.y_coordinate = ac;
      state.reserved = ac;
    },
  },
});

export const { setSelectedSlot, clearSelectedSlot } = selectedSlotSlice.actions;

export default selectedSlotSlice.reducer;

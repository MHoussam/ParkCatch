import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: null,
  errorMsg: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    clearLocation: (state) => {
      state.location = null;
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
    },
    clearErrorMsg: (state) => {
      state.errorMsg = null;
    },
  },
});

export const { setLocation, clearLocation, setErrorMsg, clearErrorMsg } = locationSlice.actions;

export default locationSlice.reducer;
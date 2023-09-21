import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tab: 'Home',
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setTab: (state, action) => {
        state.tab = action.payload.tab
    },
  },
});

export const { setTab } = tabSlice.actions;

export default tabSlice.reducer;

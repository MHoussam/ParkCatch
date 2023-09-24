import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchbar: '',
};

const searchbarSlice = createSlice({
  name: "searchbar",
  initialState,
  reducers: {
    setSearchbar: (state, action) => {
      state.searchbar = action.payload;
    },
    clearSearchbar: (state) => {
      state.searchbar = '';
    },
  },
});

export const { setSearchbar, clearSearchbar } = searchbarSlice.actions;

export default searchbarSlice.reducer;
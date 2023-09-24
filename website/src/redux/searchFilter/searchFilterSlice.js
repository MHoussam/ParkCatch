import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchFilter: [],
};

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;
    },
    clearSearchFilter: (state) => {
      state.searchFilter = [];
    },
  },
});

export const { setSearchFilter, clearSearchFilter } = searchFilterSlice.actions;

export default searchFilterSlice.reducer;
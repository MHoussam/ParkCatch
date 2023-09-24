import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first_name: "",
  last_name: "",
  phone: "",
  parking: null,
  location: null,
  duration: 2,
  spotNumber: null,
  plateNumber: "",
  realPlateNumber: "",
  total: null,
};

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    setSearchFilter: (state, action) => {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.phone = action.payload.phone;
      state.parking = action.payload.parking;
      state.location = action.payload.location;
      state.duration = action.payload.duration;
      state.spotNumber = action.payload.spotNumber;
      state.plateNumber = action.payload.plateNumber;
      state.realPlateNumber = action.payload.realPlateNumber;
      state.total = action.payload.total;
    },
    clearSearchFilter: (state) => {
      state.first_name = "";
      state.last_name = "";
      state.phone = "";
      state.parking = null;
      state.location = null;
      state.duration = 2;
      state.spotNumber = null;
      state.plateNumber = "";
      state.realPlateNumber = "";
      state.total = null;
    },
  },
});

export const { setSearchFilter, clearSearchFilter } = searchFilterSlice.actions;

export default searchFilterSlice.reducer;
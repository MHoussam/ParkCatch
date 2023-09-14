import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    lastUpdated: "",
    token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.firstname = action.payload.firstname,
        state.lastname = action.payload.lastname,
        state.email = action.payload.email,
        state.lastUpdated = action.payload.date,
        state.token = action.payload.token;
    },
    setUserToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUser, setUserToken } = userSlice.actions;

export default userSlice.reducer;

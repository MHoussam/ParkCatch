import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
    firstname: "",
    lastname: "",
    email: "",
    role: null,
    parking_id: null,
    token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.id = action.payload.id;
        state.firstname = action.payload.firstname;
        state.lastname = action.payload.lastname;
        state.email = action.payload.email;
        state.role = action.payload.role;
        state.parking_id = action.payload.parking_id;

    },
    setUserToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUser, setUserToken } = userSlice.actions;

export default userSlice.reducer;

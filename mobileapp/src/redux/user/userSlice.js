import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
    first_name: "",
    last_name: "",
    email: "",
    token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.id = action.payload.id,
        state.first_name = action.payload.first_name,
        state.last_name = action.payload.last_name,
        state.email = action.payload.email
    },
    setUserToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUser, setUserToken } = userSlice.actions;

export default userSlice.reducer;

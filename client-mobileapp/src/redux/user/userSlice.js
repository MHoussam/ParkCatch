// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     username: "",
//     password: "",
//     lastUpdated: "",
// };  

// const userSlice = createSlice({
//     name: "user",
//     initialState: initialState,
//     reducers: {
//         setUser: (state, action) => {
//             state.username = action.payload.username,
//             state.password = action.payload.password
//         },
//         updateDate: (state, action) => {
//             state.lastUpdated = action.payload.date
//         }
//     },
// });

// export const { setUser, updateDate } =userSlice.actions;

// export default userSlice.reducer;

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

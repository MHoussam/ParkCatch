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
    username: "",
    password: "",
    lastUpdated: "",
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.username = action.payload.username,
        state.password = action.payload.password
        console.log('username: ' + state.username)
        console.log('password: ' + state.password)
        state.lastUpdated = action.payload.date
        console.log('lastUpdated: ' + state.lastUpdated)
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

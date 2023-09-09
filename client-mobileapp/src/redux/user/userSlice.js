import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    password: "",
    lastUpdated: "",
};  

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state = {
                ...state,
                ...action.payload
            };
        },
        updateDate: (state, action) => {
            state = {
                ...state,
                lastUpdated: action.payload.date,
            };
        }
    },
});

export const { setUser, updateDate } =userSlice.actions;

export default userSlice.reducer;
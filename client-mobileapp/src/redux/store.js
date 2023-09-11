// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./user/userSlice";
// import { createLogger } from "redux-logger";

// const store = configureStore({
//     reducer: {
//         user: userReducer,
//     },
//     middleware: [createLogger()],
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here if needed
  },
});

export default store;
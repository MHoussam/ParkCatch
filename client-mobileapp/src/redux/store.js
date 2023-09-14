import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import locationReducer from './location/locationSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        location: locationReducer,
    },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import locationReducer from './location/locationSlice';
import parkingReducer from './parking/parkingSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        location: locationReducer,
        parking: parkingReducer,
    },
});

export default store;
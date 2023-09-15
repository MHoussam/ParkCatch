import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import locationReducer from './location/locationSlice';
import parkingReducer from './parking/parkingSlice';
import distanceReducer from './distance/distanceSlice';
import slotReducer from './slots/slotSlice';
import selectedParkingReducer from './selectedParking/selectedParkingSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        location: locationReducer,
        parking: parkingReducer,
        distance: distanceReducer,
        slots: slotReducer,
        selectedParking: selectedParkingReducer,
    },
});

export default store;
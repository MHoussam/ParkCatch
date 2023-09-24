import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import slotReducer from './slots/slotSlice';
import reservationReducer from './reservations/reservationSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        slots: slotReducer,
        reservation: reservationReducer,
    },
});

export default store;
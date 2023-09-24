import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import slotReducer from './slots/slotSlice';
import reservationReducer from './reservations/reservationSlice';
import searchFilterReducer from './searchFilter/searchFilterSlice';
import searchbarReducer from './searchbar/searchbarSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        slots: slotReducer,
        reservation: reservationReducer,
        reservation: reservationReducer,
        searchFilter: searchFilterReducer,
        searchbar: searchbarReducer,
    },
});

export default store;
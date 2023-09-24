import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import slotReducer from './slots/slotSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        slots: slotReducer,
    },
});

export default store;
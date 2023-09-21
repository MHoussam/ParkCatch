import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import locationReducer from './location/locationSlice';
import parkingReducer from './parking/parkingSlice';
import slotReducer from './slots/slotSlice';
import selectedParkingReducer from './selectedParking/selectedParkingSlice';
import selectedSlotReducer from './selectedSlot/selectedSlotSlice';
import reservationReducer from './reservation/reservationSlice';
import tabsReducer from './tabs/tabsSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        location: locationReducer,
        parking: parkingReducer,
        slots: slotReducer,
        selectedParking: selectedParkingReducer,
        selectedSlot: selectedSlotReducer,
        reservation: reservationReducer,
        tabs: tabsReducer,
    },
});

export default store;
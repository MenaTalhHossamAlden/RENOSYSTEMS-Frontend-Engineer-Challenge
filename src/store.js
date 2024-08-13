import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/users/usersSlice';
import popupReducer from './features/popup/popupSlice';
const store = configureStore({
  reducer: {
    users: usersReducer,
    popup: popupReducer,
  },
});

export default store;

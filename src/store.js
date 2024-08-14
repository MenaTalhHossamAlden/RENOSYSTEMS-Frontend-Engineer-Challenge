import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/users/usersSlice';
import popupReducer from './features/popup/popupSlice';
import navbarReducer from './features/navbar/navbarSlice';
const store = configureStore({
  reducer: {
    users: usersReducer,
    popup: popupReducer,
    navbar: navbarReducer,
  },
});

export default store;

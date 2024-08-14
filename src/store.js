import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/users/usersSlice';
import popupReducer from './features/popup/popupSlice';
import navbarReducer from './features/navbar/navbarSlice';
import menuReducer from './features/menu/menuSlice';
const store = configureStore({
  reducer: {
    users: usersReducer,
    popup: popupReducer,
    navbar: navbarReducer,
    menu: menuReducer,
  },
});

export default store;

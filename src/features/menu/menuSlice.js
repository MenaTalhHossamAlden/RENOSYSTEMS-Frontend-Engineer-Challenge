import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  ATM: { show: false },
  Business: { show: false },
  User: {
    show: false,
    subItems: {
      Users: false,
      Profiles: false,
      Groups: false,
    },
  },
};
const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleItem: (state, action) => {
      state[action.payload].show = !state[action.payload].show;
    },
    toggleSubItem: (state, action) => {
      Object.keys(state.User.subItems).forEach((item) => {
        state.User.subItems[item] = false;
      });
      state.User.subItems[action.payload] = true;
    },
  },
});

export const { toggleItem, toggleSubItem } = menuSlice.actions;
export default menuSlice.reducer;

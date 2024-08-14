import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  currUser: 'Nader Amer',
  notifications: 10,
};
const navbarSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const {} = navbarSlice.actions;
export default navbarSlice.reducer;

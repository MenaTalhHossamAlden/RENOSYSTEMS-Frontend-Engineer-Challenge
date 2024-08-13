import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  show: false,
  fullName: '',
  userName: '',
  email: '',
  group: 'Choose User Group',
  profile: 'Choose Profile',
};
const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state) => {
      state.show = true;
    },
    closePopup: (state) => {
      state.show = false;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setGroup: (state, action) => {
      state.group = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    resetFields: (state) => {
      state.fullName = '';
      state.userName = '';
      state.email = '';
      state.group = 'Choose User Group';
      state.profile = 'Choose Profile';
    },
  },
});
export const {
  openPopup,
  setFullName,
  setUserName,
  setProfile,
  setGroup,
  setEmail,
  resetFields,
} = popupSlice.actions;
export default popupSlice.reducer;

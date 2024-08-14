import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  show: false,
  newOrEdit: false,
  fullName: '',
  userName: '',
  email: '',
  group: 'Choose User Group',
  profile: 'Choose Profile',
  id: null,
};
const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action) => {
      if (action.payload.type == 'new') {
        state.show = true;
        state.newOrEdit = true;
      } else {
        state.show = true;
        state.newOrEdit = false;
        state.id = action.payload.user[0].id;
        state.fullName = action.payload.user[0].name;
        state.userName = action.payload.user[0].username;
        state.email = action.payload.user[0].email;
        state.group = action.payload.user[0].group;
        state.profile = action.payload.user[0].status;
      }
    },
    closePopup: (state) => {
      state.show = false;
      state.fullName = '';
      state.userName = '';
      state.email = '';
      state.group = 'Choose User Group';
      state.profile = 'Choose Profile';
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
  closePopup,
  setFullName,
  setUserName,
  setProfile,
  setGroup,
  setEmail,
  resetFields,
} = popupSlice.actions;
export default popupSlice.reducer;

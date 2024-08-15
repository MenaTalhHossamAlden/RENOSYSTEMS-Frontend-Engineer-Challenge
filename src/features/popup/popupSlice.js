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
  nameErr: false,
  userErr: false,
  emailErr: false,
  groupErr: false,
  profileErr: false,
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
      // Username validation
      if (!state.userName.trim()) {
        state.userErr = true;
      } else {
        state.userErr = false;
      }
    },
    setEmail: (state, action) => {
      state.email = action.payload;
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(state.email)) {
        state.emailErr = true;
      } else {
        state.emailErr = false;
      }
    },
    setGroup: (state, action) => {
      state.group = action.payload;
      // Group validation
      if (state.group === 'Choose User Group') {
        state.groupErr = true;
      } else {
        state.groupErr = false;
      }
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
      // Profile validation
      if (state.profile === 'Choose Profile') {
        state.profileErr = true;
      } else {
        state.profileErr = false;
      }
    },
    setFullName: (state, action) => {
      state.fullName = action.payload;
      // Full Name validation
      if (!state.fullName.trim()) {
        state.nameErr = true;
      } else {
        state.nameErr = false;
      }
    },
    resetFields: (state) => {
      state.fullName = '';
      state.userName = '';
      state.email = '';
      state.group = 'Choose User Group';
      state.profile = 'Choose Profile';
    },
    validateInputs: (state, action) => {
      let isValid = true;

      // Full Name validation
      if (state.nameErr) {
        isValid = false;
      }

      // Username validation
      if (state.userErr) {
        isValid = false;
      }

      // Email validation
      if (state.emailErr) {
        isValid = false;
      }

      // Group validation
      if (state.groupErr) {
        isValid = false;
      }

      // Profile validation
      if (state.profile === 'Choose Profile') {
        isValid = false;
      }
      action.payload = isValid;
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
  validateInputs,
} = popupSlice.actions;
export default popupSlice.reducer;

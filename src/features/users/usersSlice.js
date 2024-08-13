import { createSlice } from '@reduxjs/toolkit';
import users, { getRandomColor } from '../../fakeData';
const initialState = {
  users: users(),
  status: 'any',
  creationDate: '',
  nSelected: 0,
};
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setCreationDate: (state, action) => {
      state.creationDate = action.payload;
    },
    setSelected: (state, action) => {
      const { userId, isSelected } = action.payload;
      const user = state.users.find((user) => user.id === userId);
      if (user) {
        user.isSelected = isSelected;
      }
      state.nSelected = state.users.filter((user) => user.isSelected).length;
    },
    unselectAll: (state) => {
      state.users.forEach((user) => {
        user.isSelected = false;
      });
      state.nSelected = 0;
    },
    addUser: (state, action) => {
      const { fullName, userName, email, group, profile } = action.payload;
      const newUser = {
        id: Date.now(),
        name: fullName,
        username: userName,
        email: email,
        group: group,
        status: profile,
        createdOn: Date.now(),
        color: getRandomColor(),
      };
      state.users = [newUser, ...state.users];
    },
  },
});

export const { setStatus, setCreationDate, setSelected, unselectAll, addUser } =
  usersSlice.actions;
export default usersSlice.reducer;

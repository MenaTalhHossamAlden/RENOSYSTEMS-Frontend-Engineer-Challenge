import { createSlice } from '@reduxjs/toolkit';
import users, { getRandomColor } from '../../fakeData';
const usersWithSelected = users().map((user) => ({
  ...user,
  isSelected: false,
}));
const initialState = {
  users: usersWithSelected,
  status: 'any',
  creationDate: '',
  nSelected: 0,
  selectedUsers: [],
  searchTerm: '',
  filteredUsers: usersWithSelected,
};
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      const searchTerm = action.payload;
      if (!searchTerm) state.filteredUsers = state.users;
      state.filteredUsers = state.users.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    setCreationDate: (state, action) => {
      state.creationDate = action.payload;
    },
    setSelected: (state, action) => {
      const { userId, isSelected } = action.payload;
      const user = state.users.find((user) => user.id === userId);
      const f_user = state.filteredUsers.find((user) => user.id === userId);
      if (user) {
        user.isSelected = isSelected;
      }
      if (f_user) {
        f_user.isSelected = isSelected;
      }
      state.selectedUsers = state.users.filter((user) => user.isSelected);
      state.nSelected = state.users.filter((user) => user.isSelected).length;
    },
    unselectAll: (state) => {
      state.users.forEach((user) => {
        user.isSelected = false;
      });
      state.nSelected = 0;
      state.selectedUsers = [];
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
    editUser: (state, action) => {
      const { id, fullName, userName, email, group, profile } = action.payload;
      const existingUserIndex = state.users.findIndex((user) => user.id === id);
      if (existingUserIndex !== -1) {
        state.users[existingUserIndex] = {
          ...state.users[existingUserIndex],
          name: fullName,
          username: userName,
          email: email,
          group: group,
          status: profile,
        };
      }
    },
  },
});
export const {
  setStatus,
  setCreationDate,
  setSelected,
  unselectAll,
  addUser,
  editUser,
  setSearchTerm,
} = usersSlice.actions;
export default usersSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import users from '../../fakeData';
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
  },
});

export const { setStatus, setCreationDate, setSelected } = usersSlice.actions;
export default usersSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import users from '../../fakeData';
const initialState = {
  users: users(),
  status: 'any',
  creationDate: '',
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
  },
});

export const { setStatus, setCreationDate } = usersSlice.actions;
export default usersSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import users from '../../fakeData';
const usersSlice = createSlice({
  name: 'users',
  initialState: users(),
  reducers: {},
});

// export const { increment, decrement, incrementByAmount } = usersSlice.actions;
export default usersSlice.reducer;

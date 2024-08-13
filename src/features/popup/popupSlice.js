import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  show: false,
};
const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state) => {
      state.show = true;
    },
  },
});
export const { openPopup } = popupSlice.actions;
export default popupSlice.reducer;

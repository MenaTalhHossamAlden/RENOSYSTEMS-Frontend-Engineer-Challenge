import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  unfiltered: [
    { name: 'ATM Settings', show: false },
    { name: 'Business Setup', show: false },
    {
      name: 'User Management',
      show: false,
      subItems: [
        { name: 'Users', show: false },
        { name: 'Profiles', show: false },
        { name: 'Groups', show: false },
      ],
    },
  ],
  filtered: [
    { name: 'ATM Settings', show: false },
    { name: 'Business Setup', show: false },
    {
      name: 'User Management',
      show: false,
      subItems: [
        { name: 'Users', show: false },
        { name: 'Profiles', show: false },
        { name: 'Groups', show: false },
      ],
    },
  ],
  searchTerm: '',
};
const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleItem: (state, action) => {
      const i = state.filtered.findIndex((item) => item.name == action.payload);
      state.filtered[i].show = !state.filtered[i].show;
    },
    toggleSubItem: (state, action) => {
      const k = state.filtered.findIndex(
        (item) => item.name == 'User Management'
      );
      state.filtered[k].subItems.forEach((item) => (item.show = false));
      const i = state.filtered[k].subItems.findIndex(
        (item) => item.name == action.payload
      );
      state.filtered[k].subItems[i].show = !state.filtered[k].subItems[i].show;
    },
    handleSearch: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchTerm = searchTerm;

      if (!searchTerm) {
        state.filtered = state.unfiltered;
        return;
      }

      state.filtered = state.unfiltered
        .map((item) => {
          const subItems = item.subItems
            ? item.subItems.filter((subitem) =>
                subitem.name.toLowerCase().includes(searchTerm)
              )
            : [];

          if (
            item.name.toLowerCase().includes(searchTerm) ||
            subItems.length > 0
          ) {
            return {
              ...item,
              subItems: subItems.length > 0 ? subItems : [],
            };
          }
          return null;
        })
        .filter((item) => item !== null);
    },
  },
});

export const { toggleItem, toggleSubItem, handleSearch } = menuSlice.actions;
export default menuSlice.reducer;

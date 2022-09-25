import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'filter',
  initialState: 'ALL',
  reducers: {
    showAll: (state, action) => {
      return 'ALL';
    },
    showActive: (state, action) => {
      return 'ACTIVE';
    },
    showCompleted: (state, action) => {
      return 'COMPLETED';
    },
  },
};

const filterSlice = createSlice(options);

export const { showAll, showActive, showCompleted } = filterSlice.actions;
export default filterSlice.reducer;

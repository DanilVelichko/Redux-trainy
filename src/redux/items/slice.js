import { createSlice } from '@reduxjs/toolkit';

export const mySliceItems = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});
export const { add, remove } = mySliceItems.actions;

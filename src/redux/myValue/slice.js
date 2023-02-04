import {

  createSlice,
} from '@reduxjs/toolkit';


export const mySlice = createSlice({
  name: 'myValue',
  initialState: 100,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});
export const {increment, decrement } = mySlice.actions;
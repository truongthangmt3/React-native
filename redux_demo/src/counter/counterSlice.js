import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'counter1',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
export const counterState = (state) => state.counter;
export const {increment, decrement} = slice.actions;
export default slice.reducer;

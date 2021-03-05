import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 1,
    name: {},
    isLoading: true,
    isError: false,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setData: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const getDataFromApi = () => (dispatch) => {
  axios
    .get('http://www.json-generator.com/api/json/get/bUkdRpDoRK?indent=2')
    .then((res) => {
      dispatch(setData(res.data));
    });
};

export const {increment, decrement, setData} = slice.actions;
export const counterState = (state) => state.counter;

export default slice.reducer;

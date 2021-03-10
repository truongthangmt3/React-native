import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getDataFromApiAsync = createAsyncThunk(
  'counter/getData',
  async () => {
    const res = await axios.get(
      'http://www.json-generator.com/api/json/get/bTZTlHGoJe?indent=2',
    );
    return res.data;
  },
);

const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 1,
    name: {},
    isLoading: false,
    isError: false,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // setData: (state, action) => {
    //   state.name = action.payload;
    // },
  },
  extraReducers: {
    [getDataFromApiAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getDataFromApiAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.name = action.payload;
    },
    [getDataFromApiAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const getDataFromApi = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'http://www.json-generator.com/api/json/get/bUkdRpDoRK?indentfasdf',
    );
    dispatch(setData(res.data));
  } catch (error) {
    dispatch(setData(error));
  }
};

export const {increment, decrement, setData} = slice.actions;
export const counterState = (state) => state.counter;

export default slice.reducer;

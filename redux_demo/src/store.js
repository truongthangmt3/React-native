import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './demo-redux/CounterSlice';
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './demo-redux/CounterSlice';
import Reactotron from '../ReactotronConfig';
const reduxEnhancer = Reactotron.createEnhancer();

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  enhancers: [reduxEnhancer],
});

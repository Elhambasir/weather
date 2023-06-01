import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './cities/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;

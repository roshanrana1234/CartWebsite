import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../features/Cart/CartSlice';
import DataReducer from '../features/Cart/DataSlice';

export const store = configureStore({
  reducer: {
  items:CartReducer,
  data:DataReducer
  },
});

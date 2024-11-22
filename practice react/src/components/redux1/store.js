import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import { todoSlice } from './todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoSlice,
  },
});

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo !== action.payload);
    },
  },
});
// Export the actions
export const { addTodo, removeTodo } = todoSlice.actions;

// Export the reducer
export default todoSlice.reducer;

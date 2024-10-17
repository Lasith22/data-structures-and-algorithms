// In the file where you define userSlice (user.jsx)
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: { name: 'pakay', age: 0, email: '' } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logOut: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export const { logOut } = userSlice.actions;
export default userSlice.reducer; // Export only the reducer

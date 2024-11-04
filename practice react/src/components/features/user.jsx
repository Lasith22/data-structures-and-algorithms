import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: { name: 'Lasith', age: 0, email: '' } },
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
export default userSlice.reducer;

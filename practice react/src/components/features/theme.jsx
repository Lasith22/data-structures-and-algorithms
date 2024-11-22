import { createSlice } from '@reduxjs/toolkit';
import ChangeColor from '../ChangeColor';

const initialState = 'blue';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: initialState },
  reducers: {
    ChangeThemeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { ChangeThemeColor } = themeSlice.actions;

export default themeSlice.reducer;

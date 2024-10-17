import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './components/features/user.jsx';
import themeReducer from './components/features/theme.jsx';
const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);

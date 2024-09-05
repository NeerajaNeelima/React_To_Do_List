// src/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    email: '' 
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;  
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = '';  
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

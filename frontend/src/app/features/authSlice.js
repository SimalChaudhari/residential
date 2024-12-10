import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Stores the authenticated user's data
  token: null, // Stores the authentication token
  isAuthenticated: false, // Tracks if the user is logged in
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      // When login is successful, set the user and token
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      // Clear the user and token on logout
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    updateUser: (state, action) => {
      // Update user information
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { loginSuccess, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;

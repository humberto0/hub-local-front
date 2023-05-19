import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, Update } from "./types";
import { User } from "../../types/user";

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "@auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    update: (state, action: PayloadAction<Update>) => {
      state.user = { ...state.user, ...action.payload };
    },
    refresh: (
      state,
      action: PayloadAction<{ token: string; refreshToken: string }>,
    ) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout, update, refresh } = authSlice.actions;

export default authSlice.reducer;

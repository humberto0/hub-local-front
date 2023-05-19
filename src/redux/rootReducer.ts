import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";

const combinedReducers = combineReducers({
  authReducer,
});

export default combinedReducers;

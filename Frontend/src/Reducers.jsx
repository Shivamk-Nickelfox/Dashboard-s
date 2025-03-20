import { createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const initialState = {
  user: false,
  user: null, // Store user data like email, UID, etc.
};

export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("login", (state, action) => {
      state.user = true;
      state.user = action.payload; // Store user data in state
    })
    .addCase("logout", (state) => {
      state.user = false;
      state.user = null; // Clear user data on logout
    });
});
const persistConfig = {
  key: "auth", // Key for localStorage
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

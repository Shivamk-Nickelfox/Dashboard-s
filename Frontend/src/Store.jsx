import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistedReducer } from "./Reducers";
const store = configureStore({
  reducer: {
    auth: persistedReducer, // Use persisted reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Avoid warnings for persist actions
      },
    }),
});

export const persistor = persistStore(store);
export default store;

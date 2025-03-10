import { configureStore } from "@reduxjs/toolkit";
import { persistStore} from "redux-persist";
import { persistedReducer } from "./Reducers";
const store = configureStore({
  reducer: {
    auth: persistedReducer, // Use persisted reducer
  },
});

export const persistor = persistStore(store);
export default store;

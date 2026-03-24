import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/index"
import registerReducer from "./auth/registerSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
  },
});


import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/index"
import registerReducer from "./auth/registerSlice";
import institutionReducer from './talent/institution-slice'
import talentReducer from './talent/talent-slice'
import nicheReducer from './talent/niches-slice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    institutions : institutionReducer,
    talents : talentReducer,
    niches : nicheReducer,
  },
});


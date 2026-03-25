import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  full_name: "",
  institution_id: "",
  major: "",
  level: "",

  sub_niche_id: "",
  bio: "",

  email: "",
  password: "",
};


const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    saveStepOne: (state, action) => {
      state.full_name = action.payload.full_name;
      state.institution_id = action.payload.institution_id;
      state.major = action.payload.major;
      state.level = action.payload.level;
    },

    saveStepTwo: (state, action) => {
      state.sub_niche_id = action.payload.sub_niche_id;
      state.bio = action.payload.bio;
    },

    saveStepThree: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },

    clearRegistration: () => initialState,
  },
});



export const {
  saveStepOne,
  saveStepTwo,
  saveStepThree,
  clearRegistration,
} = registerSlice.actions;

export default registerSlice.reducer;
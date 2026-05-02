import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  talents: [],
};

// fetch
export const fetchAllTalents = createAsyncThunk(
  "talents/fetchAllTalents",
  async (_, { rejectWithValue }) => {
    try {
      const apiUrl = import.meta.env.PROD
        ? "https://luc-m8t9.onrender.com/api/talents/public"
        : "/api/talents/public";
      const result = await axios.get(apiUrl);

      return result.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);
const talentSlice = createSlice({
  name: "talents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTalents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllTalents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.talents = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchAllTalents.rejected, (state) => {
        state.isLoading = false;
        state.talents = [];
      });
  },
});

export const {} = talentSlice.actions;

export default talentSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getApiUrl } from "@/lib/api";

const initialState = {
  isLoading: true,
  institutions: [],
  error: null,
};

// fetch All institutionsyy
export const fetchInstitutions = createAsyncThunk(
  "institutions/fetchInstitutions",
  async (_, { rejectWithValue }) => {
    try {
<<<<<<< HEAD
      // Use vite proxy on development, full URL on production
      const apiUrl = import.meta.env.PROD 
        ? "https://luc-m8t9.onrender.com/api/institutions"
        : "/api/institutions";
      
=======
      const apiUrl = getApiUrl("/api/institutions");
>>>>>>> Abdulfatai/frontend
      const result = await axios.get(apiUrl);
      return result.data;
      console.log(result.data);
      
    } catch (error) {
      console.error("Institutions fetch error:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

const institutionsSlice = createSlice({
  name: "institutions",
  initialState,
  reducers: {
    clearInstitutions: (state) => {
      state.institutions = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstitutions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchInstitutions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.institutions = action.payload;
        console.log("Institutions loaded:", action.payload);
      })
      .addCase(fetchInstitutions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.institutions = [];
        console.error("Failed to load institutions:", action.payload);
      });
  },
});

export const { clearInstitutions } = institutionsSlice.actions;

export default institutionsSlice.reducer;

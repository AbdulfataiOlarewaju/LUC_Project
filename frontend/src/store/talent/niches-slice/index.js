import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getApiUrl } from "@/lib/api";

const initialState = {
  isLoading: true,
  niches: [],
  subNichesByNiche: {} 
};

// fetch all niches
export const fetchNiches = createAsyncThunk(
  "niches/fetchNiches",
  async (_, { rejectWithValue }) => {
    try {
      const apiUrl = getApiUrl("/api/niches");
      const result = await axios.get(apiUrl);

      return result.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);


export const fetchSubNiches = createAsyncThunk(
  "niches/subNiches",
  async (nicheId, { rejectWithValue }) => {
    try {
      const apiUrl = getApiUrl(`/api/niches/${nicheId}/sub-niches`);
      const result = await axios.get(apiUrl);

      return { nicheId, data: result.data };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);




const nicheslice = createSlice({
  name: "niches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNiches.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNiches.fulfilled, (state, action) => {
        state.isLoading = false;
        state.niches = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchNiches.rejected, (state) => {
        state.isLoading = false;
        state.niches = [];
      }).addCase(fetchSubNiches.fulfilled, (state, action) => {
  state.isLoading = false;

  const { nicheId, data } = action.payload;

  state.subNichesByNiche[nicheId] = data;
})
.addCase(fetchSubNiches.rejected, (state) => {
  state.isLoading = false;
  state.subNichesByNiche = {}; 
});
  },
});

export const {} = nicheslice.actions;

export default nicheslice.reducer;

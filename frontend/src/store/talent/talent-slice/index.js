import {createSlice,  createAsyncThunk }  from  "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  talents: [],
};


// fetch
export const fetchAllTalents = createAsyncThunk('talents/fetchAllTalents',
    async ()=>{
        const result = await axios.get('/talents/public');
        return result.data;
    }
)

const talentSlice = createSlice({
    name : 'talents',
    initialState,
    reducers:{},
    extraReducers : (builder) =>{
        builder.addCase(fetchAllTalents.pending, (state)=>{
            state.isLoading = true
        }).addCase(fetchAllTalents.fulfilled, (state, action) => {
            state.isLoading = false;
            state.talents = action.payload;
            console.log(action.payload);
        
            
        }).addCase(fetchAllTalents.rejected, (state) => {
            state.isLoading = false;
            state.talents = [];
        })
    }
})


export const {} = talentSlice.actions;

export default talentSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = ({
    isAuthenticated : false,
    isLoading : true,
    user : null
})


export const registerUser = createAsyncThunk('auth/registerUser', 
    async(FormData, {rejectWithValue}) => {
        try {
            const response = await axios.post('/api/auth/register', 
                FormData, {
                    withCredentials : true,
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                })
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending, (state)=>{
            state.isLoading = true
        }).addCase(registerUser.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isAuthenticated = true
            state.user = action.payload.user
        }).addCase(registerUser.rejected, (state, action)=>{
            state.isLoading = false
            state.isAuthenticated = false
            state.user = null
        })
    }
})


export const {} = authSlice.actions;

export default authSlice.reducer;
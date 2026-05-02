import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AUTH_TOKEN_KEY = "auth_token";
const AUTH_REFRESH_TOKEN_KEY = "auth_refresh_token";
const AUTH_USER_KEY = "auth_user";
const AUTH_PROFILE_KEY = "auth_profile";

const isBrowser = typeof window !== "undefined";

function parseJSON(value) {
  try {
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function getDecodedToken(token) {
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
}

function isTokenValid(token) {
  const decoded = getDecodedToken(token);
  return Boolean(decoded && decoded.exp && decoded.exp > Date.now() / 1000);
}

function clearAuthStorage() {
  if (!isBrowser) return;
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_REFRESH_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
  localStorage.removeItem(AUTH_PROFILE_KEY);
}

function saveAuthStorage({ token, refreshToken, user, profile }) {
  if (!isBrowser) return;
  if (token) localStorage.setItem(AUTH_TOKEN_KEY, token);
  if (refreshToken) localStorage.setItem(AUTH_REFRESH_TOKEN_KEY, refreshToken);
  if (user) localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  if (profile) localStorage.setItem(AUTH_PROFILE_KEY, JSON.stringify(profile));
}

function loadInitialAuthState() {
  if (!isBrowser) {
    return {
      isAuthenticated: false,
      isLoading: false,
      user: null,
      token: null,
      refreshToken: null,
      profile: null,
    };
  }

  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  const refreshToken = localStorage.getItem(AUTH_REFRESH_TOKEN_KEY);
  const user = parseJSON(localStorage.getItem(AUTH_USER_KEY));
  const profile = parseJSON(localStorage.getItem(AUTH_PROFILE_KEY));

  if (token && isTokenValid(token)) {
    return {
      isAuthenticated: true,
      isLoading: false,
      user: user || null,
      token,
      refreshToken: refreshToken || null,
      profile: profile || null,
    };
  }

  clearAuthStorage();

  return {
    isAuthenticated: false,
    isLoading: false,
    user: null,
    token: null,
    refreshToken: null,
    profile: null,
  };
}

const initialState = loadInitialAuthState();

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (FormData, { rejectWithValue }) => {
    try {
      const apiUrl = import.meta.env.PROD
        ? "https://luc-m8t9.onrender.com/api/auth/register"
        : "/api/auth/register";
      const response = await axios.post(apiUrl, FormData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (FormData, { rejectWithValue }) => {
    try {
      const apiUrl = import.meta.env.PROD
        ? "https://luc-m8t9.onrender.com/api/auth/login"
        : "/api/auth/login";
      const response = await axios.post(apiUrl, FormData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (refreshToken, { rejectWithValue }) => {
    try {
      if (!refreshToken) {
        return { message: "No refresh token available" };
      }
      const apiUrl = import.meta.env.PROD
        ? "https://luc-m8t9.onrender.com/api/auth/logout"
        : "/api/auth/logout";
      const response = await axios.post(apiUrl, { refreshToken });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      clearAuthStorage();
      state.isAuthenticated = false;
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.profile = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const payload = action.payload;

        if (payload?.token) {
          state.isAuthenticated = true;
          state.token = payload.token;
          state.refreshToken = payload.refreshToken || null;
          state.user = payload.user || null;
          state.profile = payload.profile || null;
          saveAuthStorage({
            token: payload.token,
            refreshToken: payload.refreshToken,
            user: payload.user,
            profile: payload.profile,
          });
        } else {
          state.isAuthenticated = false;
          state.user = null;
          state.token = null;
          state.refreshToken = null;
          state.profile = null;
          clearAuthStorage();
        }
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        state.profile = null;
        clearAuthStorage();
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        clearAuthStorage();
        state.isAuthenticated = false;
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        state.profile = null;
      })
      .addCase(logoutUser.rejected, (state) => {
        clearAuthStorage();
        state.isAuthenticated = false;
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        state.profile = null;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
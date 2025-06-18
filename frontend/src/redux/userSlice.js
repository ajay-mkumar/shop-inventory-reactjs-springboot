import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "/user/login",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        user
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    token: localStorage.getItem("token") || "",
    username: localStorage.getItem("username") || "",
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = "";
      state.username = "";
      state.error = null;
      state.loading - false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { token, username } = action.payload;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        state.loading = false;
        state.token = token;
        state.username = username;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

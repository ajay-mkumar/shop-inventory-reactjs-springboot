import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";

export const fetchShop = createAsyncThunk(
  "shop/getShop",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/user/shop");
      return response.data;
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addShop = createAsyncThunk(
  "shop/addShop",
  async (shopData, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/shop/add", shopData);
      return response.data;
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shops: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShop.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchShop.fulfilled, (state, action) => {
        state.loading = false;
        state.shops = action.payload;
      })
      .addCase(fetchShop.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addShop.pending, (state) => {
        state.loading = true;
      })
      .addCase(addShop.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.shops.push(action.payload);
      })
      .addCase(addShop.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default shopSlice.reducer;

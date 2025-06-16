import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";

export const fetchProduct = createAsyncThunk(
  "product/getProducts",
  async (shopId, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/shop/${shopId}`);
      return response.data;
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (shopId, product, thunkApi) => {
    try {
      const response = await axiosInstance.post(`/shop/${shopId}`, product);
      return response.data;
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "something went wrong";
      return thunkApi.rejectWithValue(message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;

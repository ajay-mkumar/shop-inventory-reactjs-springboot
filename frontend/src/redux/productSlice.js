import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";

export const fetchProduct = createAsyncThunk(
  "product/getProducts",
  async (shopId, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/shop/${shopId}/product`);
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
  async (product, thunkApi) => {
    try {
      const response = await axiosInstance.post("/product/create", product);
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
    selectedId: null,
    // product: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedId: (state, action) => {
      state.selectedId = action.payload;
    },
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
      })
      .addCase(addProduct.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedId } = productSlice.actions;
export default productSlice.reducer;

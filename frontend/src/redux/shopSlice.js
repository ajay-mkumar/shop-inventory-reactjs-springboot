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

export const deleteShop = createAsyncThunk(
  "shop/deleteShop",
  async (shopId, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(`shop/${shopId}`);
      return response.data;
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateShop = createAsyncThunk(
  "shop/updateShop",
  async ({ shopId, shopData }, thunkAPI) => {
    try {
      console.log(shopData);
      const response = await axiosInstance.put(`shop/${shopId}`, shopData);
      return response.data;
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchShopById = createAsyncThunk(
  "shop/getShopById",
  async (shopId, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`shop/${shopId}`);
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
    shop: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShop.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchShop.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.shops = action.payload;
      })
      .addCase(fetchShop.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addShop.pending, (state) => {
        state.error = null;
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
      })
      .addCase(deleteShop.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteShop.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.shops = state.shops.filter((shop) => shop.id !== action.meta.arg);
      })
      .addCase(deleteShop.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchShopById.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchShopById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.shop = action.payload;
      })
      .addCase(fetchShopById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateShop.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(updateShop.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const updatedShop = action.payload;
        const index = state.shops.findIndex(
          (shop) => shop.id === updatedShop.id
        );
        if (index !== -1) {
          state.shops[index] = updatedShop;
        }
      })
      .addCase(updateShop.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default shopSlice.reducer;

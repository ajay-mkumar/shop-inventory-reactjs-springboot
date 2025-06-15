import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import shopReducer from "./shopSlice";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    shop: shopReducer,
    products: productReducer,
  },
});

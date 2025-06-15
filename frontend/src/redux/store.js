import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import shopReducer from "./shopSlice";
import productReducer from "./productSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    shop: shopReducer,
    products: productReducer,
    modalToggle: modalReducer
  },
});

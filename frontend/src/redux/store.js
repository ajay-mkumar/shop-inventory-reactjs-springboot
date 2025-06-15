import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import shopReducer from "./shopSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    shop: shopReducer,
  },
});

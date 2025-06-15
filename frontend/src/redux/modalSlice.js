import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalToggle",
  initialState: {
    currentModal: null,
  },
  reducers: {
    showModal: (state, action) => {
      state.currentModal = action.payload;
    },
    hideModal: (state) => {
      state.currentModal = null;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;

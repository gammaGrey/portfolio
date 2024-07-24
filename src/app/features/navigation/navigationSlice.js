import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState:{
    page: "About"
  },
  reducers: {
    setPage: (state, { payload }) => {
      if (payload === "Projects" || payload === "About") {
        state.page = payload;
      };
    },
  }
});

export default navigationSlice.reducer;

export const { setPage } = navigationSlice.actions;
export const navSelector = state => state.navigation;
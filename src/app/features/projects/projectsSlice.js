import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    project: null,
    isThisHovered: false,
  },
  reducers: {
    hover: (state) => {
      state.isThisHovered = !state.isThisHovered;
    }
  }
});

export const projectsSelector = state => state.projects;
export const { hover } = projectsSlice.actions;

export default projectsSlice.reducer;
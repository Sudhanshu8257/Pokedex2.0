import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { search: "", type: "" },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
      state.type = ""; // Reset type when search is set
    },
    setType(state, action) {
      state.type = action.payload;
      state.search = ""; // Reset search when type is set
    },
  },
});

export const searchSliceActions = searchSlice.actions;

export default searchSlice;

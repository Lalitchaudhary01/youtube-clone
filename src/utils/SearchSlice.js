import { createSlice } from "@reduxjs/toolkit";

// to add caching to the search box to not make recurring api calls for every saved string key strokes
const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;

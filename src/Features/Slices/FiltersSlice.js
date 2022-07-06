import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  sortBy: "date",
};

const FilterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    sortyByDate(state) {
      return { sortBy: "date" };
    },
    sortyByTitle(state) {
      return { sortBy: "title" };
    },
  },
});

export const { sortyByDate, sortyByTitle } = FilterSlice.actions;

export default FilterSlice.reducer;

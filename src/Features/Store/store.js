import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "../Slices/BlogSlice";
import FiltersReducer from "../Slices/FiltersSlice";
const store = configureStore({
  reducer: {
    blog: BlogReducer,
    filters: FiltersReducer,
  },
});

export default store;

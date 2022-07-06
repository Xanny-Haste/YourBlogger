import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { DateTime } from "luxon";

const initialState = [];

const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    CreatingBlog(state, action) {
      const newBlog = {
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description
          ? action.payload.description
          : "",
        createdAtToSort: DateTime.now().toMillis(),
        createdAt: DateTime.now().toISODate(),
      };
      return [...state, newBlog];
    },
    EditingBlog(state, action = {}) {
      return state.map((blog) => {
        if (blog.id === action.payload.id) {
          return {
            ...blog,
            ...action.payload,
          };
        } else {
          return blog;
        }
      });
    },
    RemoveBlog(state, action) {
      return state.filter((blog) => blog.id !== action.payload.id);
    },
  },
});

export const { CreatingBlog, EditingBlog, RemoveBlog } = BlogSlice.actions;

export default BlogSlice.reducer;

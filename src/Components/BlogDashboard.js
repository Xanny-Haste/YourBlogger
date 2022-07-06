import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink } from "react-router-dom";

import { compareDate, compareTitle } from "./sort";

const BlogDashboard = () => {
  const Blogs = useSelector((state) => [...state.blog]);

  const [sortBy, setSort] = useState("date");
  const [blogs, setBlogs] = useState(Blogs);
  const [text, setText] = useState("");

  const handleTextFillters = (e) => {
    setText(e.target.value);
  };

  const handleSortBy = (e) => {
    setSort(e.target.value);
  };
  // Blogs.sort(compareTitle);

  const compareKeys = {
    date: compareDate,
    title: compareTitle,
  };

  useEffect(() => {
    setBlogs(blogs.sort(compareKeys[sortBy]));
  }, [sortBy]);

  return (
    <div>
      <div className="Navbar">
        <h1 className="target">Your Blogger !</h1>
      </div>
      <div className="root">
        <div className="Creating">
          <NavLink to="/create" className="Button">
            Add a Post
          </NavLink>
          <div className="displayend">
            <input
              value={text}
              placeholder="Search post"
              onChange={handleTextFillters}
              className="displayend__input"
            />
            <select value={sortBy} onChange={handleSortBy}>
              <option value="title">Title</option>
              <option value="date" defaultValue>
                Date
              </option>
            </select>
          </div>
        </div>
        {blogs.map((blog) => {
          return (
            <div key={blog.id} className="blogs">
              {blog.title.toUpperCase().includes(text.toUpperCase()) && (
                <NavLink to={`edit/${blog.id}`} className="LinksToTitles">
                  {blog.title}
                </NavLink>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogDashboard;

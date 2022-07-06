import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogDashboard from "../Components/BlogDashboard";
import CreateBlog from "../Components/CreateBlog";
import EditBlog from "../Components/EditBlog";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogDashboard />} />
      <Route path="/edit/:id" element={<EditBlog />} />
      <Route path="/create" element={<CreateBlog />} />
    </Routes>
  );
};

export default AppRouter;

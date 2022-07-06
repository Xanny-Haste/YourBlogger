import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { RemoveBlog } from "../Features/Slices/BlogSlice";
import { useNavigate, useParams } from "react-router-dom";
import { EditingBlog } from "../Features/Slices/BlogSlice";
const EditBlog = () => {
  let { id } = useParams();
  let history = useNavigate();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.find((bl) => bl.id === id));

  const [title, setTitle] = useState(blog.title);
  const [body, setBody] = useState(blog.description);
  const handleSetBody = (e) => {
    setBody(e.target.value);
  };
  const handleSetTitle = (e) => {
    setTitle(e.target.value);
  };
  const handOnSubmit = (e) => {
    e.preventDefault();
    dispatch(EditingBlog({ id, title, description: body }));
    history("/");
  };
  return (
    <div>
      <h1>Edit Your Blog </h1>
      <form onSubmit={handOnSubmit}>
        <input
          placeholder="post title"
          onChange={handleSetTitle}
          value={title}
        />
        <input placeholder="post body" onChange={handleSetBody} value={body} />
        <button>Save post</button>
      </form>
      <button
        onClick={() => {
          dispatch(RemoveBlog({ id }));
          history("/");
        }}
      >
        Remove Post
      </button>
    </div>
  );
};

export default EditBlog;

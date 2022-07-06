import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { CreatingBlog } from "../Features/Slices/BlogSlice";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  let history = useNavigate();
  const BlogsTitle = useSelector((state) => state.blog);

  const TitleDitector = (blog) => {
    return blog.map((blogTitle) => {
      return blogTitle.title;
    });
  };

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setErr] = useState(null);

  const handleSetBody = (e) => {
    setBody(e.target.value);
  };
  const handleSetTitle = (e) => {
    setTitle(e.target.value);
  };

  const handOnSubmit = (e) => {
    e.preventDefault();
    if (body === "" || title === "") {
      setErr("Please Make sure to fill both inputs before submitting");
    } else if (
      TitleDitector(BlogsTitle).find((blogTItle) => blogTItle === title)
    ) {
      setErr(
        "There is an element with the same title in your invertory Mind Changing it !"
      );
    } else {
      dispatch(CreatingBlog({ title, description: body }));

      history("/");
    }
  };
  return (
    <div className="Container">
      <h1 className="Title">Creating a blog !</h1>
      <p className="error-message">{error}</p>
      <div className="formSub">
        <form onSubmit={handOnSubmit} className="blockDis">
          <div className="submission">
            <input
              className="postTitle"
              placeholder="post title"
              onChange={handleSetTitle}
              value={title}
            />
            <textarea
              placeholder="post body"
              onChange={handleSetBody}
              value={body}
            />
          </div>
          <button className="Button1">Save post</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/actions/blogs";
import Blog from "./Blog";

const Blogs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const blogs = useSelector((state) => state.blogs);
  return (
      <div className=" d-flex flex-wrap">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
  );
};

export default Blogs;

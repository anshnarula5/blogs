import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/actions/blogs";
import Blog from "./Blog";

const Blogs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const blogs = useSelector((state) => state.blogs);
  return (
    <div className="row">
      <div className="col-md-9">
        <div className=" d-flex flex-wrap">
          {blogs.map((blog) => (
            <Blog key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
      <div className="col-md-3 ">
        <div className="card mt-5 sticky-top" style={{ top: "2rem" }}>
          <div className="card-body">
            {user && (
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={user.result.imageUrl}
                  alt="Admin"
                  className="rounded-circle"
                  width="120"
                />
                <div className="mt-3">
                  <h4>{user.result.name}</h4>
                  <p className="text-secondary mb-1">Full Stack Developer</p>
                  <p className="text-muted font-size-sm">
                    Bay Area, San Francisco, CA
                  </p>
                  <button className="btn btn-primary">Follow</button>
                  <button className="btn btn-outline-primary">Message</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

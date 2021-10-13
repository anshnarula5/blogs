import React, { useEffect, useState } from "react";
import "./form.css";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { postBlog } from "../../api";
import { Link, useParams, useHistory } from "react-router-dom";
import { updateBlog } from "../../redux/actions/blogs";
const Update = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blogs.filter((blog) => blog._id === id)
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [blogData, setBlogData] = useState({ ...blog[0] });
  // useEffect(() => {
  //   localStorage.setItem("blog", JSON.stringify({ ...blog[0] }));
  // }, []);
  // useEffect(() => {
  //   setBlogData(JSON.parse(localStorage.getItem("blog")));
  // }, []);
  const handleSubmit = () => {
    dispatch(updateBlog(id, blogData));
    history.push("/blogs");
  };
  return (
    <div class="w-md-75 mx-md-auto my-3 border rounded p-5 shadow ">
      <h1 className="display-2 text-center mb-5">Update blog</h1>
      <form>
        <div className="row">
          <div class="col-md form-outline mb-4">
            <label class="form-label" for="form4Example1">
              Title
            </label>
            <input
              type="text"
              id="form4Example1"
              class="form-control"
              placeholder="Title"
              value={blogData.title}
              onChange={(e) =>
                setBlogData({ ...blogData, title: e.target.value })
              }
              required
            />
          </div>
          <div class="col-md form-outline mb-4">
            <label class="form-label" for="form4Example1">
              Name
            </label>
            <input
              type="text"
              id="form4Example1"
              class="form-control"
              placeholder="author"
              value={blogData.author}
              onChange={(e) =>
                setBlogData({ ...blogData, author: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div class="form-outline mb-4">
          <label class="form-label" for="description">
            Blog
          </label>
          <div>
            <textarea
              style={{ minWidth: "100%", minHeight: "30rem" }}
              id="description"
              type="text"
              value={blogData.message}
              required
              onChange={(e) =>
                setBlogData({ ...blogData, message: e.target.value })
              }
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div class="form-outline mb-4 col-md-8">
            <label class="form-label" for="Tags">
              Tags
            </label>
            <input
              type="text"
              id="Tags"
              class="form-control"
              value={blogData.tags}
              onChange={(e) =>
                setBlogData({ ...blogData, tags: e.target.value })
              }
            />
          </div>

          <div className="mb-4 col-md-4" id="img">
            <label class="mb-2" for="img">
              Image
            </label>
            <div>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setBlogData({ ...blogData, image: base64 })
                }
              />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <button class="btn btn-primary" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;

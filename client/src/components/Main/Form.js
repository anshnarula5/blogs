import React, { useState } from "react";
import "./form.css";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createBlog } from "../../api";
import { Link, useHistory } from "react-router-dom";
const Form = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    author: "",
    tags: "",
    message: "",
    image: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blogData);
    history.push("/blogs")
    dispatch(createBlog({ blogData }));
  };
  return (
    <div class="w-md-75 mx-md-auto my-3 border rounded p-5 shadow ">
      <h1 className="display-2 text-center mb-3">Add blog</h1>
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
              style={{
                minWidth: "100%",
                minHeight: "30rem",
                padding: "1.5rem",
              }}
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
              placeholder="(Space separated)"
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
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

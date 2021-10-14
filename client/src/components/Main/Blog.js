import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteBlog, likeBlog } from "../../redux/actions/blogs";
import noimage from "./noimage.png";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const dispatch = useDispatch();
  let tags = [];
  if (blog.tags && blog.tags.length) {
    tags = blog.tags.split(" ");
  }

  const handleDelete = (e) => {
    dispatch(deleteBlog(blog._id));
  };
  const handleLike = () => {
    dispatch(likeBlog(blog._id));
  };

  let image = "";
  !blog.image ? (image = noimage) : (image = blog.image);
  return (
    <div className="card m-bd-3 my-3 shadow " style={{ maxWidth: "800px" }}>
      <div className="row g-0">
          <div
            className="col-md-4"
            style={{
              backgroundImage: `url(${image})`,
              height: "250px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroudPosition: "center",
            }}
          ></div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title fs-3"><Link to = {`/blogs/${blog._id}`} style = {{textDecoration : "none"}}>{blog.title}</Link></h5>
            <p className="card-text">
              {blog.message.split("").length >= 110
                ? blog.message.split("").slice(0, 110).join("") + "..."
                : blog.message}{" "}
            </p>

            <div className=" align-self-start">
              {tags.map((tag) => (
                <span key = {Math.random()} className="border p-1 rounded bg-muted mx-2 ">#{tag}</span>
              ))}
            </div>
          </div>
          <div className="d-flex align-items-center  justify-content-around">
            <img
              src="https://images.unsplash.com/photo-1507599944477-f675212ef210?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              style={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
            />
            <p className="fw-bold -mb-3">{blog.author}</p>
            <p className="fw-light fst-italic">{moment(blog.date).fromNow()}</p>
            <div className="like border p-1">
              <h3
                onClick={handleLike}
                style={{ cursor: "pointer" }}
                className="d-inline mx-2"
              >
                {blog.likeCount === 0 ? (
                  <i className="far fa-thumbs-up "></i>
                ) : (
                  <i className="fas fa-thumbs-up "></i>
                )}
              </h3>
              <p className="d-inline">{blog.likeCount}</p>
            </div>
            <div className="d-flex justify-content-between ">
              <Link to={`/blogs/${blog._id}/update`}>
                <button className="mr-3 btn btn-warning">Update</button>
              </Link>
              <button onClick={handleDelete} className="mx-1 btn  btn-danger">
                Delete
              </button>
            </div>
          </div>

          {/* <div className="buttons d-flex justify-content-around mt-2">
            <div className="left ">
              <p className="card-text">
                <small className="text-muted">{moment(blog.date).fromNow()}</small>
              </p>
            </div>
            <div className="right ">
              <Link to={`/blogs/${blog._id}/update`}>
                <a className="btn btn-primary ">Update</a>
              </Link>
              <a className="btn btn-primary mx-4" onClick={handleDelete}>
                Delete
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    // <div className="mb-4 lg:max-w-2xl lg:flex  md:mx-60 md:m-4 w-full shadow">
    //   <div
    //     className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    //     style={{
    //       backgroundImage: `url(${image})`,
    //       height: "300px",
    //       backgroundRepeat: "no-repeat",
    //       backgroundSize: "cover",
    //       backgroudPosition: "center",
    //     }}
    //     title="Woman holding a mug"
    //   ></div>
    //   <div className="border-r border-b max-w-md border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    //     <div className="mb-8">
    //       <div className="text-gray-900 font-bold text-xl mb-2">{blog.title}</div>

    //       <p className="text-gray-700 text-base">
    //         {blog.message.split("").length >= 140
    //           ? blog.message.split("").slice(0, 130).join("")
    //           : blog.message}
    //         {blog.tags && blog.tags.length
    //           ? (tags = blog.tags.split(" "))
    //           : "no tags"}
    //         <div className="pr-6 pt-4 pb-2">
    //           {tags.map((tag) => (
    //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //               #{tag}
    //             </span>
    //           ))}
    //         </div>
    //       </p>
    //     </div>

    //     <div className="flex items-center">
    //       <img
    //         className="w-10 h-10 rounded-full mr-4"
    //         src="https://images.unsplash.com/photo-1507599944477-f675212ef210?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    //         alt="Avatar of Jonathan Reinink"
    //       />
    //       <div className="text-sm">
    //         <p className="text-gray-900 leading-none">{blog.author}</p>
    //         <p className="text-gray-600">{moment(blog.date).fromNow()}</p>
    //       </div>
    //       <div className="mx-20 flex items-center">
    //         <button onClick={handleDelete} className="mr-3">
    //           Delete
    //         </button>
    //         <Link to={`/blogs/${blog._id}/update`}>
    //           <button className="mr-3">Update</button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Blog;

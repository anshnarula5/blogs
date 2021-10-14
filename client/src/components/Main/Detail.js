import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from "react-router";
import {fetchBlogs} from "../../redux/actions/blogs";
import moment from "moment";


const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBlogs(id))
  }, [dispatch, id])
  const data = useSelector((state) =>
    state.blogs.filter((blog) => blog._id === id)
  );
  const blog = data[0];
  return (
    <>
      {!blog && "...Loading"}
      {blog && (
        <div className="card my-4 shadow">
          <div className="card-body ">
            <p className="card-title display-3 fw-bold text-center mb-3">
              {blog.title}
            </p>
            
            <hr />
            <img src={blog?.image}  className = "img-fluid mx-auto d-block" alt="" />
            <p className="card-text  p-2 mt-3">{blog.message}</p>
            
          </div>
          <div className="card-footer text-muted"><h4>
              <cite title="Source Title">{blog.author}</cite>
            </h4></div>
          <div className="card-footer text-muted">{moment(blog.date).fromNow()}</div>
        </div>
      )}
    </>
  );
};

export default Detail;

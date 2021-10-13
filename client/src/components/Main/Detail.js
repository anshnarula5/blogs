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
        <div class="card my-4 shadow">
          <div class="card-body ">
            <p class="card-title display-3 fw-bold text-center mb-3">
              {blog.title}
            </p>
            
            <hr />
            <img src={blog?.image}  className = "img-fluid mx-auto d-block" alt="" />
            <p class="card-text  p-2 mt-3">{blog.message}</p>
            
          </div>
          <div class="card-footer text-muted"><h4>
              <cite title="Source Title">{blog.author}</cite>
            </h4></div>
          <div class="card-footer text-muted">{moment(blog.date).fromNow()}</div>
        </div>
      )}
    </>
  );
};

export default Detail;

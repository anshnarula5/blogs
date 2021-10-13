import axios from "axios"

const url = "http://localhost:5000/blogs"

export const fetchBlogs = () => axios.get(url)

export const fetchBlog = (id) => axios.get(`${url}/${id}`)

export const createBlog = (blog) => axios.post(url, blog)

export const deleteBlog = (id) => axios.delete(`${url}/${id}`)

export const updateBlog = (id, updatedBlog) => axios.patch(`${url}/${id}`, updatedBlog)

export const likeBlog = (id) => axios.patch(`${url}/${id}/like`)

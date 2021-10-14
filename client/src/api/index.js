import axios from "axios"

const API = axios.create({baseURL : "http://localhost:5000"})

export const fetchBlogs = () => API.get("/blogs")

export const fetchBlog = (id) => axios.get(`/blogs/${id}`)

export const createBlog = (blog) => axios.post("/blogs", blog)

export const deleteBlog = (id) => axios.delete(`/blogs/${id}`)

export const updateBlog = (id, updatedBlog) => axios.patch(`/blogs/${id}`, updatedBlog)

export const likeBlog = (id) => axios.patch(`$/blogs/${id}/like`)


export const signin = (blogData) => API.post("/users/signin")

export const signup = (blogData) => API.post("/users/signup")
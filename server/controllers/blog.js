import Blog from "../models/blogPost.js";
import mongoose from "mongoose"

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getBlog = async (req, res) => {
  try {
    const {id} = req.params
    const blog = await Blog.findById(id);
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const postBlog = async (req, res) => {
  const blog = req.body
  const newBlog = new Blog(blog);
  try {
    await newBlog.save();
    res.json(newBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Blog found")
    await Blog.findByIdAndDelete(id)
    res.json({message : "Deleted"})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const updateBlog = async (req, res) => {
  const {id : _id} = req.params
  const blog = req.body
  try {
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Blog found")
    const updatedBlog = await Blog.findByIdAndUpdate(_id, {...blog, _id}, {new : true});
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const likeBlog = async (req, res) => {
  const {id} = req.params
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Blog found")
    const blog = await Blog.findById(id)
    const updatedBlog = await Blog.findByIdAndUpdate(id, {likeCount : blog.likeCount + 1}, {new : true});
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

import express from "express"
import { getBlogs, postBlog, deleteBlog, updateBlog, likeBlog } from "../controllers/blog.js"

const router = express.Router()

router.get("/", getBlogs)
router.post("/", postBlog)
router.delete("/:id", deleteBlog)
router.patch("/:id", updateBlog)
router.patch("/:id/like", likeBlog)

export default router
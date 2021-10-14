import express from "express"
import { getBlogs, getBlog, postBlog, deleteBlog, updateBlog, likeBlog } from "../controllers/blog.js"
import auth from "../middleware/auth.js"
const router = express.Router()

router.get("/", getBlogs)
router.get("/:id", auth, getBlog)
router.post("/",  postBlog)
router.delete("/:id", auth, deleteBlog)
router.patch("/:id", auth, updateBlog)
router.patch("/:id/like", auth, likeBlog)

export default router
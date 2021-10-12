import mongoose from "mongoose"

const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required : true
    },
    message: {
        type: String,
        required : true
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    tags: {
        type: String,
    },
    likeCount: {
        type: Number,
        default  :0
    },
    date: {
        type: Date,
        default : Date.now()
    }
})

const Blog = mongoose.model("Blog", blogSchema)

export default Blog
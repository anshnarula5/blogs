const blogs = (blogs = [], action) => {
    switch (action.type) {
        case "FETCH_BLOGS":
            return action.payload
        case "CREATE":
            return [...blogs, action.payload]
        case "DELETE":
            return blogs.filter(blog => blog._id !== action.payload)
        case "UPDATE":
        case "LIKE" :
            return blogs.map(blog => blog._id === action.payload._id ? action.payload : blog)
        default:
            return blogs
    }
}

export default blogs
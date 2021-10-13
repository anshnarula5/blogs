import express from "express"
import mongoose from "mongoose"
import cors from "cors"
mongoose.connect('mongodb://localhost:27017/mernblog')
    .then(() => console.log("Mongoose connected"))
    .catch(() => console.log("Mongoose error"))

const app = express()
import blogRoutes from "./routes/blog.js"
import userRoutes from "./routes/user.js"

app.use(cors())
app.use(express.json({limit: "30mb"}))
app.use(express.urlencoded({limit: "30mb", extended: true}))

app.use("/blogs", blogRoutes)
app.use("/user", userRoutes)


app.listen(5000, () => console.log("Running on port 5000"))
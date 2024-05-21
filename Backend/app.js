import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRouter.js";
import jobRouter from "./routes/jobRouter.js";
import { dbConnection } from "./database/dbConnection.js";
 import {errorMiddleware} from "./middlewares/error.js"

const app = express()

//setting up environment variables
dotenv.config({path:"./config/config.env"})

//setting up cors
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}))

//express settings
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//settings for uploading files
app.use(fileUpload({
    useTempfiles: true,
    tempfileDir:"/temp/"
}))

//routers
app.use("/api/v1/users", userRouter)
app.use("/api/v1/application", applicationRouter)
app.use("/api/v1/jobs", jobRouter)

//calling function to connect to database
dbConnection()

app.use(errorMiddleware)


export default app;
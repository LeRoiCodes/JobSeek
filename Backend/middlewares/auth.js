import User from "../models/userModel.js";
import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "./error.js"
import jwt from "jsonwebtoken"

export const isAuthorized = catchAsyncError(async (req, res, next) => {
    //get token from cookies
    const {token} = req.cookies;
    if(!token) {
        return next(new ErrorHandler("User not authoried", 400))
    }
    //decode token to get id of user
    const decoded  = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id)

    next()
})

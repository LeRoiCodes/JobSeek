import { Error } from "mongoose"
import {catchAsyncError} from "../middlewares/catchAsyncError.js"
import ErrorHandler from "../middlewares/error.js"
import Job from "../models/jobModel.js"


export const getAllJobs = catchAsyncError(async(req, res, next) => {
    const jobs = await Job.find({expired: false})
    res.status(200).json({
        success: true,
        jobs
    })
})

export const postJob = catchAsyncError(async(req, res, next) => {
    const {role} = req.user
    if(role === "Job Seeker") {
        return next(new ErrorHandler("Job Seeker is not allowed to access this resource", 400))
    }
    const {title, description, category, country, city, location, fixedSalary, salaryFrom, salaryTo} = req.body

    if(!title || !description || !category || !country || city|| !location){
        return next(new ErrorHandler("Please provide full job details", 400))
    }

    if((!salaryFrom || !salaryTo) && !fixedSalary){
        return next(new ErrorHandler("please provide either a fixed salary or a ranged salary"))
    }

    if((salaryFrom && salaryTo) && fixedSalary){
        return next(
            new ErrorHandler("Please choose either fixed salary or ranged salary")
        )
    }

    const postedBy = req.user._id
    const job = await Job.create({
        title, 
        description, 
        category, 
        country, 
        city, 
        location, 
        fixedSalary, 
        salaryFrom, 
        salaryTo,
        postedBy
    })
    res.status(201).json({
        message: "Job posted succesfully",
        success: true,
        job
    })
})
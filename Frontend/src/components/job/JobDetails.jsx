// import React from 'react'

import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Context } from "../../main"
import axios from "axios"
import {api} from "../utils/constant.js"

function JobDetails() {

  const {id} = useParams()
  const [job, setJob] = useState({})
  const navigate = useNavigate()

  const {isAuthorized, user} = useContext(Context)


  useEffect(() => {
    axios.get(`${api}/jobs/${id}`, {withCredentials:true}).then(res =>{
      if (Object.keys(res.data.job).length > 0){
      
      setJob(res.data.job)
      }
    
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  if(!isAuthorized){
    navigate("/login")
  }

  return (
    <>
      <div className="jobDetail page">
        <div className="container">
          <h3>Job Details</h3>
          {job && Object.keys(job).length > 0 ? (
            <div className="banner">
            <p>Title: <span>{job.title}</span></p>
            <p>Category: <span>{job.category}</span></p>
            <p>Country: <span>{job.country}</span></p>
            <p>City: <span>{job.city}</span></p>
            <p>Location: <span>{job.location}</span></p>
            <p>Description: <span>{job.description}</span></p>
            <p>Job Posted On: <span>{job.jobPostedOn}</span></p>
            <p>Salare: {job.fixedSalary ? (<span>{job.fixedSalary}</span>) : (<span>{job.salaryFrom} - {job.salaryTo}</span>)}</p>
            <p>
              {user && user.role === "Employer" ?( <></>) : (<Link to={`/application/${job._id}`}>Apply Now</Link>)
              }
              
            </p>
          </div>
          ): (
            <h3 className="empty">Job not found</h3>
          )}
        </div>
      </div>
    </>
  )
}

export default JobDetails
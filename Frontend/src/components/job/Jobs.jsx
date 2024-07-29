// import React from 'react'

import { useContext, useEffect, useState } from "react"
import {Context} from "../../main"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function Jobs() {

const [jobs, setJobs] = useState([])
const {isAuthorized} = useContext(Context)
const navigate = useNavigate()

useEffect(() => {
  try {
    axios.get("https://jobseek-nsy7.onrender.com/api/v1/jobs/getall", {withCredentials: true}).then((res) => {
      if(res.data.jobs){
      setJobs(res.data)
    }
      // console.log(res.data)
    })
  } catch (error){
    console.log(error)
  }
}, [])

if(!isAuthorized){
  navigate("/login")
}

  return (
    <>
      <section className="jobs page">
        <div className="container">
          <h1>All AVAILABLE JOBS</h1>
          <div className="banner">
            {
              jobs.jobs && jobs.jobs.map((job) => {
                return (
                  <div className="card" key={job._id}>
                  <p>{job.title}</p>
                  <p>{job.category}</p>
                  <p>{job.country}</p>
                  <Link to={`/job/${job._id}`}>Job details</Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Jobs
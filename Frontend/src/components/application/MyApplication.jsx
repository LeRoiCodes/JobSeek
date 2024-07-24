/* eslint-disable react/prop-types */
// import React from 'react'

import { useContext, useEffect, useState } from "react"
import { Context } from "../../main"
import { useNavigate, } from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"
import ResumeModal from "./ResumeModal.jsx"

function MyApplication() {

  const [application, setApplication] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  // const [application, setApplication] = useState()

  const {isAuthorized, user} = useContext(Context)

  const navigate = useNavigate()

  useEffect(() => {
    try {
      if(user && user.role === "Employer") {
        axios.get("http://localhost:5000/api/v1/application/employer/getall", {withCredentials: true}).then((res) => {
          setApplication(res.data.applications)
        })
      } else {
        axios.get("http://localhost:5000/api/v1/application/jobseeker/getall", {withCredentials: true}).then((res) => {
          setApplication(res.data.applications)
        })
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }, [isAuthorized])

  if(!isAuthorized) {
    navigate("/login")
  }

  const deleteApplication = async (id) => {
    try {
      await axios.get(`http://localhost:5000/api/v1/application/delete/${id}`, {withCredentials: true}).then((res) => {
        toast.success(res.data.message)
        setApplication((prevAppl) => {
          prevAppl.filter((appl) => appl._id !== id)
        })
      })
      navigate("/application/me")
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const openModal = (imageUrl) => {
    setImageUrl(imageUrl)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }
  
  return (
    <>
      <section className="my_application page">
        {
          user && user.role === "Job Seeker" ? (
            <div className="container">
              <h1>My Applications</h1>
              {application.length <= 0 ? (
                <>
                  {" "}
                  <h4>No Applications Found</h4>{" "}
                </>
              ): (
              
                application.map((appl) => {
                  return (
                    <JobSeekerCard appl={appl} key={appl._id} deleteApplication={deleteApplication} openModal={openModal} />
                  )
                })
              )}
            </div>
          ): (
            <div className="container">
              <h1>Applications from Job Seekers</h1>
              {application.length <= 0 ? (
                <>
                  
                  <h4>No Applications Found</h4>
                </>
              ): (
              
                application.map((appl) => {
                  return (
                    <EmployerCard appl={appl} key={appl._id} openModal={openModal} />
                  )
                })
              )}
            </div>
          )
        }
        {
          modalOpen && (
            <ResumeModal imageUrl={imageUrl} onClose={closeModal} />
          )
        }
      </section>
    </>
  )
}

export default MyApplication




const JobSeekerCard = ({appl, deleteApplication, openModal}) => {
  return(
    <>
      <div className="job_seeker_card">
        <div className="detail">
          <p>
            <span>Name</span>
            {appl.name}
          </p>
          <p>
            <span>Email</span>
            {appl.email}
          </p>
          <p>
            <span>Phone</span>
            {appl.phone}
          </p>
          <p>
            <span>Address</span>
            {appl.address}
          </p>
          <p>
            <span>Cover Letter</span>
            {appl.coverLetter}
          </p>
        </div>
        <div className="resume">
          <img src={appl.resume.url} alt="resume" onClick={() => openModal(appl.resume.url)}/> 
        </div>
        <div className="btn_area">
          <button onClick={() => deleteApplication(appl._id)}>Delete Application</button>
        </div>
      </div>
    </>
  )
}


const EmployerCard = ({appl, openModal}) => {
  return(
    <>
      <div className="job_seeker_card">
        <div className="detail">
          <p>
            <span>Name</span>
            {appl.name}
          </p>
          <p>
            <span>Email</span>
            {appl.email}
          </p>
          <p>
            <span>Phone</span>
            {appl.phone}
          </p>
          <p>
            <span>Address</span>
            {appl.address}
          </p>
          <p>
            <span>Cover Letter</span>
            {appl.coverLetter}
          </p>
        </div>
        <div className="resume">
          <img src={appl.resume.url} alt="resume" onClick={() => openModal(appl.resume.url)}/> 
        </div>
        
      </div>
    </>
  )
}
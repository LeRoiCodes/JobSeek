import axios from "axios"
import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { FaCheck } from "react-icons/fa6"
import { RxCross2 } from "react-icons/rx"
import { Context } from "../../main"
import { useNavigate } from "react-router-dom"
import {api} from "../utils/constant.js"


function MyJobs() {

  const [myJobs, setMyJobs] = useState([])
  const [edit, setEdit] = useState(null)
  const {isAuthorized, user} = useContext(Context)

 

  const navigate = useNavigate()

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const {data} = await axios.get(`${api}/jobs/getmyjobs`, {withCredentials: true})
        if (data.myJobs){
        setMyJobs(data.myJobs)
        }
      } catch (error) {
        toast.error(error.response.data.message);
        setMyJobs([])
      }
    }
    fetchJobs()
    }, [])

    if (!isAuthorized || (user && user.role !== "Employer")) {
      navigate("/login")
    }

    //function to enable Editing Mode
    const handleEnableEdit = (jobId) => {
      setEdit(jobId)
    }
    //function for disabling edit MOde
    const handleDisableEdit = (jobId) => {
      setEdit(jobId)
    }

    //Function for Editing Job
    const handleJobUpdate = async(jobId) => {
      const updateJob = myJobs.find(job => job._id === jobId)
      await axios.put(`${api}/jobs/update/${jobId}`, updateJob, {withCredentials: true}).then(res => {
        toast.success(res.data.message);
        setEdit(null)
      }).catch((error) => {
        toast.error(error.response.data.message)
      })
    }

    //function for Deleting Job
    const handleJobDelete = async (jobId) => {
      await axios.delete(`${api}/jobs/delete/${jobId}`, {withCredentials: true}).then(res => {
        toast.success(res.data.message);setMyJobs(prevJobs => prevJobs.filter(job => job._id !== jobId))
      }).catch(error => {
        toast.error(error.response.data.message)
      })
    }

    const handleInputChange = (jobId, field, value) => {
      setMyJobs((prevJobs) => {
        prevJobs.map((job) => {
          job._id === jobId ? {...job, [field]: value} : job;
        })
      })
    }

  return (
    <>
      <div className="myJobs page">
        <div className="container">
          <h3>Your Posted Jobs</h3>
          {
           myJobs && myJobs.length > 0 ? (
              <>
                <div className="banner">
                  {myJobs.map(job => {
                    return (
                      <div className="card" key={job._id}>
                        <div className="content">
                          <div className="short_fields">
                            <div>
                              <span>Title</span>
                              <input type="text" disabled={edit !== job._id ? true: false} value={job.title} onChange={(e) => handleInputChange(job._id, "title", e.target.value )} />
                            </div>
                            <div>
                              <span>Country</span>
                              <input type="text" disabled={edit !== job._id ? true: false} value={job.title} onChange={(e) => handleInputChange(job._id, "country", e.target.value )} />
                            </div>
                            <div>
                              <span>City</span>
                              <input type="text" disabled={edit !== job._id ? true: false} value={job.title} onChange={(e) => handleInputChange(job._id, "city", e.target.value )} />
                            </div>
                            <div>
                              <span>Category:</span>
                              <select value={job.category} onChange={(e) => handleInputChange(job._id, "category", e.target.value)} disabled={edit !== job._id ? true: false }>
                              <option value="">Select Category</option>
                <option value="Graphics & Design">Graphics & Design</option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="Frontend Web Development">
                  Frontend Web Development
                </option>
                <option value="MERN Stack Development">
                  MERN STACK Development
                </option>
                <option value="Account & Finance">Account & Finance</option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
                <option value="Video Animation">Video Animation</option>
                <option value="MEAN Stack Development">
                  MEAN STACK Development
                </option>
                <option value="MEVN Stack Development">
                  MEVN STACK Development
                </option>
                <option value="Data Entry Operator">Data Entry Operator</option>
                              </select>
                            </div>
                            <div>
                              <span>Salary:{
                                job.fixedSalary ? (<input type="number" value={job.fixedSalary} onChange={(e) => handleInputChange(job._id, "fixedSalary", e.target.value)} disabled={edit !== job._id ? true: false } />) : (
                                  <div>
                                    <input type="number" value={job.salaryFrom} onChange={(e) => handleInputChange(job._id, "salaryFrom", e.target.value)} disabled={edit !== job._id ? true: false } />
                                    <input type="number" value={job.salaryTo} onChange={(e) => handleInputChange(job._id, "salaryTo", e.target.value)} disabled={edit !== job._id ? true: false } />
                                  </div>
                                )
                              }
                              </span>
                            </div>
                            <div>
                              <span>Expired: </span>
                              <select value={job.expired} onChange={(e) => handleInputChange(job._id, "expired", e.target.value)} disabled={edit !== job._id ? true: false }>
                                <option value={true}>TRUE</option>
                                <option value={false}>FALSE</option>
                              </select>
                            </div>
                          </div>
                          <div className="long_field">
                            <div>
                              <span>Description</span>
                              <textarea rows={"5"} value={job.description} onChange={(e) => handleInputChange(job._id, "description", e.target.value)} disabled={edit !== job._id ? true: false }
                              />
                            </div>
                            <div>
                              <span>Location</span>
                              <textarea rows={"5"} value={job.location} onChange={(e) => handleInputChange(job._id, "location", e.target.value)} disabled={edit !== job._id ? true: false }
                              />
                            </div>
                          </div>
                        </div>

                              <div className="button_wrapper">
                                <div className="edit_btn_wrapper">
                                  {
                                    edit === job._id ? (
                                      <><button onClick={() => handleJobUpdate(job._id)} className="check_btn"><FaCheck /></button>
                                      <button onClick={() => handleDisableEdit()} className="cross_btn"><RxCross2 /></button>
                                      </>
                                    ) :(
                                      <button onClick={() => handleEnableEdit(job._id)} className="edit_btn">Edit</button>
                                    )
                                  }
                                </div>
                                <button onClick={() => handleJobDelete(job._id)} className="delete_btn">Delete</button>
                              </div>

                      </div>
                    )
                  })}
                </div>
              </>
            ) : (
              <p className="empty">{`You've not posted any job or maybe you deleted all of your jobs!`}</p>
            )
          }
        </div>
      </div>
    </>
  )
}

export default MyJobs
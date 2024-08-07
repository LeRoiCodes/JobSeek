// import React from 'react'

import { useContext, useState } from "react"
import { Context } from "../../main"
import axios from "axios"
import toast from "react-hot-toast"
import { Link, Navigate } from "react-router-dom"
import { FaPencilAlt, FaRegUser } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md";
import {FaPhoneFlip} from "react-icons/fa6"
import logo from "../../assets/JobZeelogo.png"
import { RiLock2Fill } from "react-icons/ri"
import {api} from "../utils/constant.js"

function Register() {

  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [role, setRole] = useState("")

  // eslint-disable-next-line no-unused-vars
  const {isAuthorized, setIsAuthorized, user, setUser} = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.post(`${api}/users/register`,{
        name, email, password, phone, role
      }, {withCredentials: true, headers: {
        "Content-Type": "application/json",
      }})
      toast.success(data.message)
      setName("");
      setEmail("");
      setPhone("");
      setRole("");
      setPassword("");
      setIsAuthorized(true)
    } catch(error) {
      toast.error(error.response.data.message)
      // console.log(error)
    }
  }

  if(isAuthorized){
  return <Navigate to={"/"} />

}

  return (
    <>
      <div className="authPage">
        <div className="container" >
          <div className="header">
            <img src={logo} alt="logo" />
            <h3>Create a new account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Register As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <FaRegUser />
              </div>
            </div>
            <div className="inputTag">
              <label>Name</label>
              <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John" />
                <FaPencilAlt />
              </div>
            </div>
            <div className="inputTag">
              <label>Email</label>
              <div>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Johndoe@gmail.com" />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Phone Number</label>
              <div>
                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="1234567890" />
                <FaPhoneFlip />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <RiLock2Fill />
              </div>
            </div>
            <button onClick={handleRegister} type="submit">Register</button>
            <Link to={"/login"}>Login Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/register.png" alt="banner" />
        </div>
      </div>
    </>
  )
}

export default Register
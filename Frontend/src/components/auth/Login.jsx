// import React from 'react'

import { useContext, useState } from "react"
import { Context } from "../../main"
import axios from "axios"
import toast from "react-hot-toast"
import { Link, Navigate } from "react-router-dom"
import {  FaRegUser } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md";

import logo from "../../assets/JobZeelogo.png"
import { RiLock2Fill } from "react-icons/ri"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")

  // eslint-disable-next-line no-unused-vars
  const {isAuthorized, setIsAuthorized, user, setUser} = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.post("http://localhost:5000/api/v1/users/login",{
        email, password, role
      }, {withCredentials: true, headers: {
        "Content-Type": "application/json",
      }})
      toast.success(data.message)
      setEmail("");
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
            <h3>Login to your account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Login As</label>
              <div>
                <select value={role} onChange={e => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <FaRegUser />
              </div>
            </div>
            
            <div className="inputTag">
              <label>Email</label>
              <div>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Johndoe@gmail.com" />
                <MdOutlineMailOutline />
              </div>
            </div>
          
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <RiLock2Fill />
              </div>
            </div>
            <button onClick={handleLogin} type="submit">Login</button>
            <Link to={"/register"}>Register Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/login.png" alt="banner" />
        </div>
      </div>
    </>
  )
}

export default Login
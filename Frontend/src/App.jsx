/* eslint-disable no-unused-vars */
// import React from 'react'
import { useContext, useEffect, useState } from "react"
import "./App.css"
import { Context } from "./main"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import axios from "axios"
import Home from "./components/home/Home"
import Jobs from "./components/job/Jobs"
import JobDetails from "./components/job/JobDetails"
import MyJobs from "./components/job/MyJobs"
import PostJobs from "./components/job/PostJob"
import Application from "./components/application/Application"
import MyApplication from "./components/application/MyApplication"
import NotFound from "./components/notFound/Notfound"
import {Toaster} from "react-hot-toast"
import {api} from "./components/utils/constant.js"

function App() {

  const {isAuthorized, setIsAuthorized, setUser} = useContext(Context)


  useEffect(() => {
    const fetchUser = async() => {
      try {
        const response = await axios.get(`${api}/users/getuser`, {withCredentials: true});
        setUser(response.data.user)
        setIsAuthorized(true)
      } catch (error) {
        setIsAuthorized(false)
      }
    }
    fetchUser()
  }, [isAuthorized])

// if(isAuthorized){
//   return <Navigate to={"/"} />

// }

  return (
    <Router >
    <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/job/getall" element={<Jobs />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/job/post" element={<PostJobs />} />
        <Route path="/job/me" element={<MyJobs />} />
        <Route path="/application/:id" element={<Application />} />
        <Route path="/application/me" element={<MyApplication />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
      <Toaster />
    </Router>
  )
}

export default App
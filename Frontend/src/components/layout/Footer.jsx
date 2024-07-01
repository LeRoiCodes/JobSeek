// import React from 'react'
import { useContext } from "react"
import { Context } from "../../main"
import {Link} from 'react-router-dom'
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
// import {faFace}

function Footer() {

  const {isAuthorized} = useContext(Context)

  return (
    // <div>Footer</div>
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All rights Reserved By LeRoi Vladimir.</div>
      <div>
        <Link to={"/"} target="_blank"><FaFacebookF /></Link>
        <Link to={"/"} target="_blank"><FaYoutube /></Link>
        <Link to={"/"} target="_blank"><FaLinkedin /></Link>
        <Link to={"/"} target="_blank"><RiInstagramFill /></Link>
      </div>
    </footer>
  )
}

export default Footer
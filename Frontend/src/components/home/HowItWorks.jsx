// import React from 'react'

import { FaUserPlus } from "react-icons/fa"
import { MdFindInPage } from "react-icons/md"
import {IoMdSend} from "react-icons/io"

function HowItWorks() {
  return (
    <div className="howitworks">
      <div className="container">
        <h3>How JobZee works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p>create Account</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="card">
            <MdFindInPage />
            <p>Find a Job/Post a Job</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="card">
            <IoMdSend />
            <p>create Account</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
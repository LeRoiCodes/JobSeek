// import React from 'react'

import details from "../utils/details"

function HeroSection() {
  return (
    <div className="herSection">
      <div className="container">
        <div className="title">
          <h1>Find a job that suits</h1>
          <h1>Your interest and skills</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="image">
          <img src="/heroS.jpg" alt="hero" />
        </div>
      </div>
      <div className="details">
        {
          details.map((detail) => {
            return(
              <div className="card" key={detail.id}>
                <div className="icon">{detail.icon}</div>
                <div className="content">
                  <p>{detail.title}</p>
                  <p>{detail.subTitle}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default HeroSection
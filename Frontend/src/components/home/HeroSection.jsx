// import React from 'react'
import hero from "../../assets/heroS.jpg"

// import details from "../utils/details"
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa"

function HeroSection() {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <div className="heroSection">
      <div className="container">
        <div className="title">
          <h1>Find a job that suits</h1>
          <h1>Your interest and skills</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="image">
          <img src={hero} alt="hero" />
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
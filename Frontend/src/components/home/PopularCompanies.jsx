// import React from 'react'

// import companies from "../utils/companies"
import {FaApple, FaMicrosoft} from "react-icons/fa"
import {SiTesla} from "react-icons/si"

function PopularCompanies() {

  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 20,
      icon: <FaApple />,
    },
  ];

  return (
    <>
      <div className="companies">
        <div className="container">
          <h3>TOP COMPANIES</h3>
          <div className="banner">
            {
              companies.map(com => {
                return (
                  <div className="card" key={com.id}>
                    <div className="content">
                      <div className="icon">{com.icon}</div>
                      <div className="text">
                        <p>{com.title}</p>
                        <p>{com.location}</p>
                      </div>
                    </div>
                    <button>Open Positions {com.openPositions}</button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularCompanies
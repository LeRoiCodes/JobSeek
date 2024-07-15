// import React from 'react'

import companies from "../utils/companies"

function PopularCompanies() {
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
// import React from 'react'

import categories from "../utils/categories"

function PopularCategories() {
  return (
    <div className="categories">
      <h3>POPULAR CATEGORIES</h3>
      <div className="banner">
        {
          categories.map(cat => {
            return(
              <div className="card" key={cat.id}>
                <div className="icon">{cat.icon}</div>
                <div className="text">
                  <p>{cat.title}</p>
                  <p>{cat.subTitle}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default PopularCategories
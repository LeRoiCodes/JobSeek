// import React from 'react'

// import categories from "../utils/categories"
import {MdOutlineDesignServices, MdOutlineWebhook, MdAccountBalance, MdOutlineAnimation} from "react-icons/md"
import {GiArtificialIntelligence} from "react-icons/gi"
import {FaReact} from "react-icons/fa"
import {TbAppsFilled} from "react-icons/tb"
import {IoLogoGameControllerB} from "react-icons/io"


function PopularCategories() {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "305 Open Positions",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "500 Open Positions",
      icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "200 Open Positions",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "MERN STACK Development",
      subTitle: "1000+ Open Postions",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "50 Open Positions",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "80 Open Positions",
      icon: <IoLogoGameControllerB />,
    },
  ];
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
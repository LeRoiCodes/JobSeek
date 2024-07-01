// import React from 'react'
import notFound from "../../../public/notfound.png"

import { Link } from "react-router-dom"

function Notfound() {
  return (
    <section className="page notfound">
      <div className="content">
        <img src={notFound} alt="notfound" />
        <Link to={"/"}>RETURN TO HOME</Link>
      </div>
    </section>
  )
}

export default Notfound
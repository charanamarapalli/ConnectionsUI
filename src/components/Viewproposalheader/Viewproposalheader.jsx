import React from 'react'
import {Link} from "react-router-dom";
import './Viewproposalheader.css'
const Viewproposalheader = () => {
  return (
    <>
      <div className='header'>
        <Link to="/"><img className="logo" src={"/assets/images/IMG_5844.JPG"}></img></Link>
      </div>
    </>
  )
}

export default Viewproposalheader

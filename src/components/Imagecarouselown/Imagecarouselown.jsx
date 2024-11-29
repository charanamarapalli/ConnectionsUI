import React from 'react'
import {Link} from 'react-router-dom';
import './Imagecarouselown.css'
const Imagecarouselown = () => {

  return (
    <>
    <div className="image-container">
    <Link to="{`/gift?${}`}" className="back-btn" onClick="">Back</Link>
      <div className="image-card">
         <img src="/assets/images/15.JPG" alt="18"></img>
         <div className="read-more"> Hi ra this is me</div>
      </div>
      <div className="next-btn">Front</div>
      </div>
    </>

  )
}

export default Imagecarouselown

import React from 'react'
import './Card.css'
export default function Card(props) {
  return (
    <>
      <div className="card">
            <h2>{props.title}</h2>
            <hr className="line-break"/>
            <div className="know-more">
                <div className="description">
                    <p>{props.description}</p>       
                </div>
                 <div className="about-picture">
                    <img className="picture" src="{props.image}" alt="Broken image"/>
                 </div>
            </div>
            <button className="btn-submit">Click to Start</button>
        </div>
    </>
  )
}

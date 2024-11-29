import React from 'react'
import './Textcard.css'

const Textcard = (props) => {
  return (
    <>
      <div className={`${props.cardType==='readmore-card' ? 'readmore-card': "text-card"} ${props.isNotPresent?"hidden":""}`}>
      
                    {props.description}
                
            {/* <h2>{props.title}</h2> *
            <hr className="line-break"/>
            <div className="know-more">
                <div className="description">
                    <p>{props.description}</p>    
                </div>
            </div>*/}
        </div>
    </>
  )
}

export default Textcard

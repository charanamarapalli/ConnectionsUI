import React from 'react'
import './Viewproposalbuttons.css'
import { Link } from 'react-router-dom'
import Textcard from '../Textcard/Textcard'
const Viewproposalbuttons = (props) => {
  return (
    <div className="proposal-buttons">
      <Textcard isNotPresent={props.prevUrl===""} description={<Link className="view-proposal-btn" to={props.prevUrl}>{`\u2190 Prev`}</Link>} />
      <Textcard isNotPresent={props.nextUrl===""} description={<Link className={`view-proposal-btn ${props.nextUrl===""?"hidden":""}`} to={props.nextUrl}>{`Next \u2192`}</Link>} />
    </div>
  )
}

export default Viewproposalbuttons

import React from 'react'
import './Viewproposalbuttons.css'
import { Link } from 'react-router-dom'
const Viewproposalbuttons = (props) => {
  return (
    <span>
      <Link className='btn-submit mg-left-2' to={props.prevUrl}>Previous</Link>
      <Link className='btn-submit mg-left-2' to={props.nextUrl}>Next</Link>
    </span>
  )
}

export default Viewproposalbuttons

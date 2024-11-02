import React from 'react'
import Viewproposalbuttons from '../../components/Viewproposalbuttons/Viewproposalbuttons'
const Homepage = () => {
  return (
    <>
      <div className="proposal-container">
        <p className="p-white">Hi from home page</p>
        <Viewproposalbuttons prevUrl="" nextUrl="/view-proposal/first-meet"/>
      </div>
    </>
  )
}

export default Homepage

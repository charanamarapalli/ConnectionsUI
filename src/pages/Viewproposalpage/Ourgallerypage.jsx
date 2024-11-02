import React from 'react'
import Viewproposalbuttons from '../../components/Viewproposalbuttons/Viewproposalbuttons'

const Ourgallerypage = () => {
  return (
    <>
      <div className="proposal-container">
        <h1 className="p-white">Proposal</h1>
        <p className="p-white">Hi, user</p>
        <p className="p-white">from our gallery page</p>
        <Viewproposalbuttons prevUrl="/view-proposal/first-meet" nextUrl="/view-proposal/gift"/>
      </div>
    </>
  )
}

export default Ourgallerypage

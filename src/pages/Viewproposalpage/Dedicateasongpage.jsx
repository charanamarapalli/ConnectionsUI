import React from 'react'
import Viewproposalbuttons from '../../components/Viewproposalbuttons/Viewproposalbuttons'
const Dedicateasongpage = () => {
  return (
    <>
      <div className="proposal-container">
        <p className="p-white">Hi from dedicate a song page</p>
        <Viewproposalbuttons prevUrl="/view-proposal/gift" nextUrl="/view-proposal/proposal"/>
      </div>
    </>
  )
}

export default Dedicateasongpage

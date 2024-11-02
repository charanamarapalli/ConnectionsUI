import React from 'react'
import Viewproposalbuttons from '../../components/Viewproposalbuttons/Viewproposalbuttons'
const Acceptpage = () => {
  return (
    <div>
      <div className="proposal-container">
        <p className="p-white">Hi from accept page</p>
        <Viewproposalbuttons prevUrl="/view-proposal/proposal"/>
      </div>
    </div>
  )
}

export default Acceptpage

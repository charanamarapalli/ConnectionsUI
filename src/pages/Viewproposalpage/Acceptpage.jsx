import React, { useEffect } from 'react'
import Viewproposalbuttons from '../../components/Viewproposalbuttons/Viewproposalbuttons'
import './Acceptpage.css'
const Acceptpage = () => {

  return (
    <div>
      <div className="view-proposal-container">
        <p className="">Hi from accept page</p>
        <Viewproposalbuttons prevUrl="/view-proposal/proposal"/>
      </div>
    </div>
  )
}

export default Acceptpage

import React from 'react'
import Viewproposalbuttons from '../../components/Viewproposalbuttons/Viewproposalbuttons'
import Textcard from '../../components/Textcard/Textcard'
const Proposalpage = () => {
  return (
    <>
      <div className="view-proposal-container">
        <h1>
            <Textcard description="Shall we Start?"/>
        </h1>
        <Textcard description="Hi ra chitti talli, ee 41 days deeksha lo nen n"/>
        <Viewproposalbuttons prevUrl="/view-proposal/dedicate-song" nextUrl="/view-proposal/accept"/>
      </div>
    
    </>
  )
}

export default Proposalpage

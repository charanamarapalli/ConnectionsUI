import React from 'react'
import Videoplayer from '../../components/Videoplayer/Videoplayer'
import Background from './Background'
import Textcard from '../../components/Textcard/Textcard'
import Viewproposalbuttons from '../../components/Viewproposalbuttons/Viewproposalbuttons'

const Videobyte = () => {
  return (
    <>
      <div className="view-proposal-container">
        <h1>
            <Textcard description="Shall we Start?"/>
        </h1>
        <Videoplayer/>
        <Viewproposalbuttons prevUrl="/view-proposal/our-gallery" nextUrl="/view-proposal/gift" />
      </div>
    </>
  )
}

export default Videobyte

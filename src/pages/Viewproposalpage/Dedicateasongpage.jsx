import React from 'react'
import Viewproposalbuttons from '../../components/Viewproposalbuttons/Viewproposalbuttons'
import Audioplayer from '../../components/Audioplayer/Audioplayer'
const Dedicateasongpage = () => {
  return (
    <>
      <div className="view-proposal-container">
        <p className="">I am dedicating this song to you..</p>
        <Audioplayer audioSrc="/assets/music/gaajubomma.mp3"/>
        <Viewproposalbuttons prevUrl="/view-proposal/gift" nextUrl="/view-proposal/proposal"/>
      </div>
    </>
  )
}

export default Dedicateasongpage

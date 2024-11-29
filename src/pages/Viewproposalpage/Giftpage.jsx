import React from "react";
import Viewproposalbuttons from "../../components/Viewproposalbuttons/Viewproposalbuttons";
import Imagecarousel from "../../components/Imagecarousel/Imagecarousel";
import Textcard from "../../components/Textcard/Textcard";
const Giftpage = () => {
  return (
    <>
      <div className="view-proposal-container">
      <h1> <Textcard description="Close your Eyes for gifts..."/></h1>
        {/* <p className="">Gifts</p> */}
        <Imagecarousel/>
        <Viewproposalbuttons prevUrl="/view-proposal/video-byte" nextUrl="/view-proposal/dedicate-song"/>
      </div>
    </>
  );
};

export default Giftpage;

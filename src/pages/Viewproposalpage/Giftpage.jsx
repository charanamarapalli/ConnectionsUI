import React from "react";
import Viewproposalbuttons from "../../components/Viewproposalbuttons/Viewproposalbuttons";
const Giftpage = () => {
  return (
    <>
      <div className="proposal-container">
        <p className="p-white">Hi from gift page</p>
        <Viewproposalbuttons prevUrl="/view-proposal/our-gallery" nextUrl="/view-proposal/dedicate-song"/>
      </div>
    </>
  );
};

export default Giftpage;

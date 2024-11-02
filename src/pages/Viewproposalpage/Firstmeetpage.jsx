import React from "react";
import Viewproposalbuttons from "../../components/Viewproposalbuttons/Viewproposalbuttons";
const Firstmeetpage = () => {
  return (
    <>
      <div className="proposal-container">
        <h1 className="p-white">Proposal</h1>
        <p className="p-white">Hi, user</p>
        <p className="p-white">from first meetpage</p>
        <Viewproposalbuttons prevUrl="/view-proposal/home" nextUrl="/view-proposal/our-gallery"/>
      </div>
    </>
  );
};

export default Firstmeetpage;

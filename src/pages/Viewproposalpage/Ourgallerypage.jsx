import React from "react";
import Viewproposalbuttons from "../../components/Viewproposalbuttons/Viewproposalbuttons";
import Imagecarousel from "../../components/Imagecarousel/Imagecarousel";
import Textcard from "../../components/Textcard/Textcard";
import Background from "./Background";

const Ourgallerypage = () => {
  return (
    <>
      <div className="view-proposal-container">
        <h1 className="">
          <Textcard description="Mana Gallery" />
        </h1>
        <Imagecarousel />
        <Viewproposalbuttons
          // className={showDescription ? "expanded" : ""}
          prevUrl="/view-proposal/first-meet"
          nextUrl="/view-proposal/video-byte"
        />
      </div>
    </>
  );
};

export default Ourgallerypage;

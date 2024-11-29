import React from "react";
import Textcard from "../components/Textcard/Textcard";
import Imagecarousel from "../components/Imagecarousel/Imagecarousel";
import Homepage from "./Viewproposalpage/Homepage";
import Ourgallerypage from "./Viewproposalpage/Ourgallerypage";
import Firstmeetpage from "./Viewproposalpage/Firstmeetpage";

const Singlepageproposallayout = () => {
  return (
    <>
      <Homepage/>
      <Firstmeetpage/>
      <Ourgallerypage/>
    </>
  );
};

export default Singlepageproposallayout;

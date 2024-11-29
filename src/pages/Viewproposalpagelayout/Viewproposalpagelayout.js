import React, { useEffect } from "react";
import "./Viewproposalpagelayout.css";
import { Outlet } from "react-router-dom";
import Viewproposalfooter from "../../components/Viewproposalfooter/Viewproposalfooter";
import Viewproposalheader from "../../components/Viewproposalheader/Viewproposalheader";
import Background from "../Viewproposalpage/Background";

export default function Viewproposalpagelayout(props) {
  return (
    <>
      {/* <Viewproposalheader /> */}
      <Background />
      <Outlet />
      {/* <Viewproposalfooter /> */}
    </>
  );
}

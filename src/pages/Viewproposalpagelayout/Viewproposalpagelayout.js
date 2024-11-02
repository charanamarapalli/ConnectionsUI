import React from "react";
import "./Viewproposalpagelayout.css";
import { Outlet } from "react-router-dom";
import Viewproposalfooter from "../../components/Viewproposalfooter/Viewproposalfooter";
import Viewproposalheader from "../../components/Viewproposalheader/Viewproposalheader";

export default function Viewproposalpagelayout(props) {
  return (
    <>
      <Viewproposalheader />
      <Outlet />
      <Viewproposalfooter />
    </>
  );
}

import React from "react";
import Sidenavbar from "../Sidenavbar/Sidenavbar";
import Editor from "../Editor/Editor";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
export default function Createwebpagecontainer() {
  return (
    <>
      <Navbar />
      <Sidenavbar />
      <Editor />
      <Footer />
    </>
  );
}

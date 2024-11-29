import React from "react";
import './Background.css'

const Background = () => {
  const generateLoveSymbols = () => {
    const randomSize = Math.floor(Math.random() * 50) + 10; // Random size between 10px and 60px
    const randomPositionX = Math.floor(Math.random() * (window.innerWidth-50)); // Random X position
    const randomPositionY = Math.floor(Math.random() * (window.innerHeight-80)); // Random Y position
    const randomOpacity = Math.random() * 0.8 + 0.2;

    return {
      position: "absolute",
      fontSize: `${randomSize}px`,
      top: `${randomPositionY}px`,
      left: `${randomPositionX}px`,
      color: "red", // Customize as needed
      opacity: randomOpacity,
      zIndex: -1,
    };
  };

  const icons = Array.from({ length: 50 }, (_, index) => (
    <span key={index} className="love-symbol" style={generateLoveSymbols()}>
      {"\u2661"} {/* White heart Unicode character */}
    </span>
  ));

  return (
    <>
      {/* <div style={{ backgroundColor: "red !important" }}>{icons}</div> */}
      <div style={{zIndex:1}}>{icons}</div>
    </>
  );
};

export default Background;

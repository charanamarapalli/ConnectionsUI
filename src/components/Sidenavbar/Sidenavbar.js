import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Sidenavbar.css";
import { Link } from "react-router-dom";
export default function Sidenavbar() {
  const location = useLocation();
  const menuItems = [
    { name: `Proposal \u2192`, path: "/create-proposal/proposal" },
    { name: `First Meet \u2192`, path: "/create-proposal/first-meet" },
    {
      name: `Upload Images \u2192`,
      path: "/create-proposal/upload-images",
    },
    { name: `Gift \u2192`, path: "/create-proposal/gift" },
    {
      name: `Accept \u2192`,
      path: "/create-proposal/accept",
    },
    {
      name: `Dedicate Song \u2192`,
      path: "/create-proposal/dedicate-song",
    },
  ];

  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const toggleSidebar = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  
  return (
    <>
      {/* <button onClick={toggleSidebar} className="dropdown-button">
        Menu
      </button> */}
      <div className={`sidebar ${isToggleOpen ? "open" : ""}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${location.pathname === item.path ? "active" : ""}`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <div id="menuToggle" class="menu-toggle">
    <span>&#9776; Menu</span>
  </div> */}
    </>
  );
}

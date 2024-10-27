import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Sidenavbar.css";
import { Link } from "react-router-dom";
import Linebreak from "../Linebreak/Linebreak";
export default function Sidenavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuItems = [
    { name: `Proposal \u2192`, path: "/propose-your-loved-one/proposal" },
    { name: `First Meet \u2192`, path: "/propose-your-loved-one/first-meet" },
    {
      name: `Upload Images \u2192`,
      path: "/propose-your-loved-one/upload-images",
    },
    { name: `Gift \u2192`, path: "/propose-your-loved-one/gift" },
    {
      name: `Accept Button \u2192`,
      path: "/propose-your-loved-one/accept-button",
    },
    {
      name: `Dedicate Song \u2192`,
      path: "/propose-your-loved-one/dedicate-song",
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <button onClick={toggleSidebar} className="dropdown-button">
        Menu
      </button> */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
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
      <Linebreak/>

      {/* <div id="menuToggle" class="menu-toggle">
    <span>&#9776; Menu</span>
  </div> */}
    </>
  );
}

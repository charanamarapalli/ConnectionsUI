import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="navbar-left">
            <Link to="/dashboard">Connections</Link>
            <Link to="/view-proposal/willyou">Public screen</Link>
            <Link to="/view-proposal">Home screen</Link>
        </div>

        <div className="navbar-right">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar;

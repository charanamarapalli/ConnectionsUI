import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="navbar-left">
            <Link to="/dashboard">Connections</Link>
            <Link to="/my-proposal">Connections</Link>
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

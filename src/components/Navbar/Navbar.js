import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="header bg-color">
        <div className="navbar-left">
            <Link className="text-white" to="/dashboard">Connections</Link>
            <Link className="text-white" to="/view-proposal/home">Public screen</Link>
        </div>

        <div className="navbar-right">
            <Link className="text-white" to="/login">Login</Link>
            <Link className="text-white" to="/signup">Signup</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar;

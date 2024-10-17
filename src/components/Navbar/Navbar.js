import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div class="header">
        <div class="navbar-left">
            <Link to="/dashboard">Connections</Link>
        </div>

        <div class="navbar-right">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar;

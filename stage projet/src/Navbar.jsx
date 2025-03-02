import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className="navbar_div">
    <Link to="/Home">Home</Link>
    <Link to="/Contact">Contact</Link>
    <Link to="/Privacy">Privacy</Link>
    <Link to="/Loginform">Loginform</Link>
    <Link to="/Signup">Signup</Link>
    </div>
  )
}

export default Navbar
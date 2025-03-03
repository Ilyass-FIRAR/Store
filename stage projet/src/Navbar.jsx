import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className="header">
        <h1>Arameez</h1>
      <nav className='navbar'>
        <Link to="/Home" className='Link'>Home</Link>
        <Link to="/Contact" className='Link'>Contact</Link>
        <Link to="/Privacy" className='Link'>Privacy</Link>
        <Link to="/Loginform" className='Link'>Loginform</Link>
        <Link to="/Signup" className='Link'>Signup</Link>
      </nav>
    </div>
  )
}

export default Navbar
import React from 'react'
import {Link} from 'react-router-dom'
import imgfresher from './images/logo.avif'
import "./Navbar.css"
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalMallIcon from "@mui/icons-material/LocalMall";

function Navbar() {
  return (
    <div>
        <div className='navbar_div'>
          <div>
            <input type="text" placeholder='Search here'/>
            <SearchIcon className="Search_icon_input"/>
            <CloseIcon className="Close_icon_inpout"/>
            {/*closeIcon*/}
          </div>
          <div className='navbar_main'>
            <div>
              <div>
                {/* SearchIcon */}
              </div>
              {/*MenuIcon*/}
            </div>
            <div>
              <img src={imgfresher}
              className="heading_logo" alt="logo" />
            </div>
            <div className='bad_search'>
              {/*SearchIcon*/}
              {/*localIcon*/}
            </div>
            
          </div>
        </div>
        <Link to="/Home" className='Link'>Home</Link>
        <Link to="/Contact" className='Link'>Contact</Link>
        <Link to="/Privacy" className='Link'>Privacy</Link>
        <Link to="/Loginform" className='Link'>Loginform</Link>
        <Link to="/Signup" className='Link'>Signup</Link>

    </div>
  )
}

export default Navbar
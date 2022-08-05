import React from 'react'
import './navbar.css';

const navbar = () => {
  return (
    <div className="Navbar">
          <li className='navselect'>home</li>
          <li className='navselect'>skills</li>
          <li className='navselect'>about</li>
          <li className='navselect'>blog</li>
          <li className='navselect'>contact</li>
          <li className='portfolio'>portfolio</li>
    </div>
  )
}

export default navbar;
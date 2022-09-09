import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="left-nav">
        <div className="left-nav-name"><a href="./App.js">Portfo<span>lio.</span></a></div>
        <span>toggle</span>
      </div>
      <div className="right-nav">
        <div className="names">
          <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
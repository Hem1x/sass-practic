import React from 'react'
import logo from '../assets/icons/logo.svg'

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="container">
            <div className="nav__row">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                    <span>CutSpace</span>
                </div>

                <div className="navigation">
                    <ul>    
                        <li><a className="active" href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Find space</a></li>
                        <li><a href="#">Share space</a></li>
                        <li><a href="#">Promote space</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
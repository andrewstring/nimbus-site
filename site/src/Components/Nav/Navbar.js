import { useState } from 'react'

import "../../css/Navbar.css"
import Logo from "./Logo.js"


const Navbar = (props) => {
    return (
        <nav>
            <div className="navbar">
                <div className="navbar-left">
                    <Logo></Logo>
                </div>
                {/* <div className="navbar-middle">
                    <h3 className="navbar-divider noselect">|</h3>
                </div> */}
                <div className="navbar-right">
                    <div className="navbar-item-wrapper">
                        <a className="navbar-item active">Home</a>
                        <a className="navbar-item">About</a>
                        <a className="navbar-item">Offerings</a>
                        <a className="navbar-item">Contact</a>
                    </div>
                </div>
                
            </div>
        </nav>
    )
}


export default Navbar
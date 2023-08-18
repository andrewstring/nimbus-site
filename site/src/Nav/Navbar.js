import { useState } from 'react'

import "../css/Navbar.css"
import Logo from "./Logo.js"


const Navbar = (props) => {
    return (
        <div className="navbar">
            <nav>
                <div className="left">
                    <Logo></Logo>
                </div>
                <div className="middle">

                </div>
                <div className="right">

                </div>
                
            </nav>
        </div>
    )
}


export default Navbar
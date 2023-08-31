import { useState, useRef } from 'react'

import "../../css/Navbar.css"
import Logo from "./Logo.js"


const Navbar = (props) => {

    const navbar = useRef(null);
    const navbarExpanded = useRef(null);

    const expand = () => {
        navbar.current.className = "navbar fade-out"
        setTimeout(() => {
            navbarExpanded.current.className = "navbar-expanded slide-in"
            navbar.current.className = "navbar hidden"
        }, 480)
    }
    const cancelExpand = () => {
        navbarExpanded.current.className = "navbar-expanded fade-out"
        setTimeout(() => {
            navbarExpanded.current.className = "navbar-expanded hidden"
            navbar.current.className = "navbar slide-in"
        }, 480)
    }

    return (
        <nav>
            <div ref={navbar} className="navbar">
                <div className="navbar-left">
                    <Logo></Logo>
                </div>
                {/* <div className="navbar-middle">
                    <h3 className="navbar-divider noselect">|</h3>
                </div> */}
                <div className="navbar-right">
                    <div className="navbar-item-wrapper navbar-item-wrapper-hideable">
                        <a className="navbar-item active">Home</a>
                        <a className="navbar-item">About</a>
                        <a className="navbar-item">Offerings</a>
                        <a className="navbar-item">Contact</a>
                    </div>
                    <div className="collapsed-navbar">
                        <img className="collapsed-icon clickable" src="/assets/menu.png" onClick={expand}></img>
                    </div>
                </div>
                
            </div>

            <div ref={navbarExpanded} className="navbar-expanded hidden">
                <div className="navbar-right">
                    <div className="navbar-item-wrapper navbar-item-wrapper-center">
                        <a className="navbar-item noselect" onClick={cancelExpand}>X</a>
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
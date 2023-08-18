import { useState } from 'react'

import "../css/Logo.css"

const Logo = (props) => {
    return (
        <div className="logo">
            <img className="noselect" src="/assets/halo.svg" alt="Nimbus Halo"></img>
            <h1 className="logo-text">NIMBUS</h1>
        </div>
    )
}


export default Logo
import { useState } from 'react'

import "../../css/Footer.css"


const Footer = (props) => {
    return (
        <div className="footer">
            <div className="left"></div>
            <div className="middle">
                <h5>Nimbus LLC</h5>
                <h5>San Fransisco, CA</h5>
            </div>
            <div className="right">
                <a className="social-media-link"><img className="social-media-logo" src="/assets/linkedin.png" alt="LinkedIn Logo"></img></a>
                <a className="social-media-link"><img className="social-media-logo" src="/assets/instagram.png" alt="Instagram Logo"></img></a>

            </div>
        </div>
    )
}


export default Footer
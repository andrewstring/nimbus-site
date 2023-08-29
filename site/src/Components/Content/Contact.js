import { useState } from 'react'
import '../../css/Contact.css'


const Contact = (props) => {
    return (
        <div className="contact-outer">
            <div className="contact-inner">
                <form>
                    <input className="first-name" type="text" name="first-name" placeholder="First Name"></input>
                    <input className="last-name" type="text" name="last-name" placeholder="Last Name"></input>
                    <input className="email" type="text" name="email" placeholder="Email"></input>
                    <input className="submit" type="submit" value="Submit"></input>
                </form>
                <h4>SHOOT</h4>
            </div>
        </div>
    )
}


export default Contact
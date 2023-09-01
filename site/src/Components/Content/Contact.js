import { useState } from 'react'
import '../../css/Contact.css'


const Contact = (props) => {
    return (
        <div className="contact-outer">
            <div className="contact-inner">
                <form>
                    <input className="first-name" type="text" name="first-name" placeholder="First Name" required="required"></input>
                    <input className="last-name" type="text" name="last-name" placeholder="Last Name" required="required"></input>
                    <input className="email" type="email" name="email" placeholder="Email" required="required"></input>
                    <input className="submit" type="submit" value="Submit"></input>
                </form>
                <h4>CONTACT US</h4>
            </div>
        </div>
    )
}


export default Contact
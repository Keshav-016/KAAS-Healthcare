import React from "react";
import logo from "../images/KAAS-logo.png"
import fb from "../images/fb.png"
import linkdin from "../images/linkdin.png"
import twitter from "../images/twitter.png"
export default function Footer() {
    const handleClick =()=>{
        window.location.replace('https://www.facebook.com/')
    }
    const handleClick1 =()=>{
        window.location.replace('https://twitter.com/i/flow/login')
    }
    const handleClick2 =()=>{
        window.location.replace('https://in.linkedin.com/')
    }
    return (
        <div className="footer-content">
            <img src={logo} alt="not present" className="footer-logo"/>
            <div className="footer-content-value">
                <p>ABOUT US</p>
                <p>SERVICES</p>
                <p>CONTACT US</p>
                <p onClick={handleClick}><img src={fb} alt="not present" className="footer-icon"/></p>
                <p onClick={handleClick1}><img src={twitter} alt="not present" className="footer-icon" /></p>
                <p onClick={handleClick2}><img src={linkdin} alt="not present" className="footer-icon" /></p>
            </div>
        </div>
    )
}
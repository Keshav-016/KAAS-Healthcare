import React from "react";
import logo from "../images/KAAS-logo.png"
import fb from "../images/fb.png"
import linkdin from "../images/linkdin.png"
import twitter from "../images/twitter.png"
export default function Footer() {
    return (
        <div className="footer-content">
            <img src={logo} alt="not present" className="footer-logo"/>
            <div className="footer-content-value">
                <a href="..">ABOUT US</a>
                <a href="..">SERVICES</a>
                <a href="..">CONTACT US</a>
                <a href=".."><img src={fb} alt="not present" className="footer-icon"/></a>
                <a href=".."><img src={twitter} alt="not present" className="footer-icon" /></a>
                <a href=".."><img src={linkdin} alt="not present" className="footer-icon" /></a>
            </div>
        </div>
    )
}
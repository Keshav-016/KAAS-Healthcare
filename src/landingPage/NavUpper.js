import React from "react";
import fb from "../images/fb.png"
import linkdin from "../images/linkdin.png"
import phn from "../images/phn-icon.png"
import twitter from "../images/twitter.png"
import logo from "../images/KAAS-logo.png"
import { Link , useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";
import {auth} from '../firebase'
export default function NavUpper() {


    const [old, update] = React.useState(false)
    function changeval() {
        update(prev => !prev)
    }

    const [old1, update1] = React.useState(false)
    function changeval1() {
        update1(prev => !prev)
    }
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }


    //------------------------------------------------------------------------------------------------------------
    return (
        <main>
            <nav className="nav-upper">
                <div className="nav-phn">
                    <img src={phn} alt="not present" className="nav-phnIcon" />
                    <a href=".">
                        <div>
                            <p className="nav-phnNo">Call us </p>
                            <p className="nav-phnNo">+91 652108972</p>
                        </div>
                    </a>
                </div>
                <div className="nav-iconss">
                    <input type="text" placeholder="Looking for..." className="nav-search"></input>
                    <a href="."><img src={fb} alt="not present" className="nav-icon" /></a>
                    <a href="."><img src={twitter} alt="not present" className="nav-icon" /></a>
                    <a href="."><img src={linkdin} alt="not present" className="nav-icon" /></a>
                </div>
            </nav>
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            <nav className="nav-lower1">
                <div className="nav-logo">
                    <a href="."><img src={logo} alt="not present" /></a>
                </div>
                <div className="nav-lower-menu">
                    <div>HOME</div>
                    <div onMouseEnter={changeval} onMouseLeave={changeval}>ABOUT US
                        {old && <div className="menu" >
                            <ul className="nav-menu">
                                <li>Information</li>
                                <li>Doctors Profile</li>
                                <li><Link to='../Appointment/Appointment'>Departments</Link></li>
                                <li>Contact</li>

                            </ul>
                        </div>}
                    </div>
                    <div onMouseEnter={changeval1} onMouseLeave={changeval1}>PAGES
                        {old1 && <div className="menu1" >
                            <ul className="nav-menu">
                                <li>Departments</li>
                                <li>Locations</li>
                                <li>FAQ</li>
                                <li>Pricing</li>
                                <li>Reviews</li>

                            </ul>
                        </div>}
                    </div>
                    <div onClick={handleLogout}>Sign Out</div>

                </div>
            </nav>
        </main>
    )
}
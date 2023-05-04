import React from "react";
import fb from "../images/fb.png"
import linkdin from "../images/linkdin.png"
import phn from "../images/phn-icon.png"
import twitter from "../images/twitter.png"
import logo from "../images/KAAS-logo.png"
import { Link , useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";
import {auth} from '../controller/firebase'
export default function NavUpper() {



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


    const handleClick =()=>{
        window.location.replace('https://www.facebook.com/')
    }
    const handleClick1 =()=>{
        window.location.replace('https://twitter.com/i/flow/login')
    }
    const handleClick2 =()=>{
        window.location.replace('https://in.linkedin.com/')
    }
    //------------------------------------------------------------------------------------------------------------
    return (
        <main>
            <nav className="nav-upper">
                <div className="nav-phn">
                    <img src={phn} alt="not present" className="nav-phnIcon" />
                    <div>
                        <div>
                            <p className="nav-phnNo">Call us </p>
                            <p className="nav-phnNo">+91 652108972</p>
                        </div>
                    </div>
                </div>
                <div className="nav-iconss">
                    <input type="text" placeholder="Looking for..." className="nav-search"></input>
                    <div onClick={handleClick}><img src={fb} alt="not present" className="nav-icon" /></div>
                    <div onClick={handleClick1}><img src={twitter} alt="not present" className="nav-icon" /></div>
                    <div onClick={handleClick2}><img src={linkdin} alt="not present" className="nav-icon" /></div>
                </div>
            </nav>
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            <nav className="nav-lower1">
                <div className="nav-logo">
                    <a href="."><img src={logo} alt="not present" /></a>
                </div>
                <div className="nav-lower-menu">
                    <div>HOME</div>
                    <div>
                         <Link to='../Appointment' className="link">Appointment</Link>
                    </div>
                    <div onMouseEnter={changeval1} onMouseLeave={changeval1} onClick={changeval1}>PAGES
                        {old1 && <div className="menu1" >
                            <ul className="nav-menu">
                                <li><Link to='../Appointment' className="link">Departments</Link></li>
                                <li><Link to="#body-doc-info"></Link>Services</li>
                                <li>FAQ</li>
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
import React from "react";
import logo from "../images/KAAS-logo.png"
import { Link , useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";
import {auth} from '../controller/firebase'
export default function NavLower() {

    const [old1, update1] = React.useState(false)
    function changeval1() {
        update1(prev => !prev)
    }

    const navigate=useNavigate();
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    //---------------------------------------------------------------------------------------------------------------------------------
    return (
        <main>
            <nav className="nav-lower2">
                <div className="nav-logo">
                    <a href="."><img src={logo} alt="not present" /></a>
                </div>
                <div className="nav-lower-menu">
                    <div><Link to="../landingPage" className="link">HOME</Link></div>
                    <div >
                        <Link to="../Appointment" className="link">Appointment</Link>
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

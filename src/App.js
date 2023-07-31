import { useEffect, useState } from "react";
import { auth } from './controller/firebase'
import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import Signup from "./signup/Signup";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./login/Login";
import Landingpg from "./landingPage/LandingPg";
import "./landingPage/landingPg.css";
import "./login/Login.css";
import "./signup/Signup.css";
import { useFirebase } from "./controller/Firebaseprovider";
import UserdataFetch from "./controller/fetch";

export default function App() {
    
    // to avoid not signed in user from entering landing page--------------------------------------------------------------------------
    const firebase = useFirebase();
    
    const [user, setUser] = useState(null)
    useEffect(() => {
        firebase.fetchuserData();
        const unsubscribe = onAuthStateChanged(auth, async(user) => {
            if (user) {
                setUser(user);
            }
        });
        return () => unsubscribe();
    }, []);


// --------------------------------------------------------------------------------------------------------

    if (user === null) {
        return (
            <div>
                {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
                <BrowserRouter basename="/kaas-healthcare.vercel.app">
                    <Routes>
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/' exact element={<Login />} />
                        <Route path='/landingPage' element={<Login />} />
                        <Route path='/Appointment' element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
    else {
        return (
            <div>
                <BrowserRouter basename="/kaas-healthcare.vercel.app">
                    <Routes>
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/' exact element={<Login />} />
                        <Route path='/Appointment' element={<UserdataFetch />} />
                        <Route path='/landingPage' element={<Landingpg />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}



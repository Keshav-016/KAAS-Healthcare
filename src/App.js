import { useEffect, useState } from "react";
import { auth } from './firebase'
import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import Signup from "./signup/Signup";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./login/Login";
import Landingpg from "./landingPage/LandingPg";
import Appointment from "./Appointment/Doctor";
import "./landingPage/landingPg.css";
import "./login/Login.css";
import "./signup/Signup.css";
export default function App() {

    const [user, setUser] = useState(null)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
        return () => unsubscribe();
    }, []);
    if (user == null) {
        return (
            <div>
                {/* 
                <BrowserRouter>
                    <Routes>
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/' element={<Login />} />
                        <Route path='/landingPage' element={<Login />} />
                    </Routes>
                </BrowserRouter> */}
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/' exact element={<Login />} />
                        <Route path='/landingPage' element={<Login />} />
                        <Route path='/Appointment/Appointment' element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
    else {
        return (
            <div>
                {/* <BrowserRouter>
                    <Routes>
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/' element={<Login />} />
                        <Route path='/landingPage' element={<Landingpg/>} />
                        <Route path='/Appointment/Appointment' element={<Appointment />} />
                    </Routes>
                </BrowserRouter> */}
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/' exact element={<Login />} />
                        <Route path='/Appointment/Appointment' element={<Appointment />} />
                        <Route path='/landingPage' element={<Landingpg />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
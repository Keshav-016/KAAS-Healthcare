import React, { useState } from "react";
import logo from "../images/KAAS-logo-white.png"
import Bg from "../images/Bg.png"
import pic from "../images/doctors-bg-img.png"
import { Link , useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../controller/firebase";

export default function Login() {

    //to navigate/go to any page
    const navigate=useNavigate();
    //to set state of button to active and inactive
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    // To throw message if any error occurs
    const [errorMsg, setErrorMsg] = useState("");

    //  Assigning values to the field
    const [user, setUser] = new useState
    ({
        password: "",
        email: ""
    });

    let name, value;
    const handleInputs = (e) => 
    {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    
    const update = () => 
    {
        // heck wether all the fields are filled or not
        if (!user.email || !user.password) {
            setErrorMsg("Fill all the fields")
            return;
        }
        setSubmitButtonDisabled(true)

        // to signin
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then(async (res) => {
                setSubmitButtonDisabled(false);
                navigate('/landingPage')
            })
            .catch((err) => {
                setSubmitButtonDisabled(false)
                setErrorMsg(err.message);
            })
    }

    return (
        <div className="login-container">
            <div style={{ backgroundImage: `url(${Bg})` }} className="bg-image" />
            <img src={logo} alt="not present" className="logo" />
            <div className="bg-shade">
                <h1 className="login-title" >WELCOME BACK</h1>
                <form className="input-form" onSubmit="return false;">
                    <input type="text" placeholder="Email" className="login-input" name="email" value={user.email} onChange={handleInputs}/>
                    <input type="password" placeholder="Password" className="login-input" name="password" value={user.password} onChange={handleInputs} />
                    <b className="errorHandle">{errorMsg}</b>
                    <button type="button" onClick={update} disabled={submitButtonDisabled}>Login</button>
                    <div>
                        <Link to='../signup' className="login-newAccount"><p className="login-a">Create Account</p></Link>
                    </div>
                </form>
                <div className="login-forgotPass">
                    <p className="login-a">Forgot password?</p>
                </div>
            </div>
            <img src={pic} alt="not present" className="vector" />
        </div>
    )
}

import React, { useState } from "react";
import logo from "../images/KAAS-logo-white.png";
import Bg from "../images/Bg.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../controller/firebase";
import { useNavigate } from "react-router-dom";


export default function Signup() {
    //to navigate/go to any page
    const navigate = useNavigate();
    //to set state of button to active and inactive
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    // To throw message if any error occurs
    const [errorMsg, setErrorMsg] = useState("");

    //  Assigning values to the field
    const [user, setUser] = new useState
        ({
            firstName: "", lastName: "", password: "", address: "", state: "", district: "",
            email: "", pincode: "", no: "", speciality:"", exp:"", fee:"", type: "" 
        });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }


    // to post/sve all the details in database
    const update = async (event) => {
        if (!user.firstName || !user.lastName || !user.email || !user.password || !user.pincode || !user.type) {
            setErrorMsg("Fill all the fields")
            return;
        }
        event.preventDefault();
        const { firstName, lastName, password, address, state, district,
            email, pincode, no, type, speciality, exp, fee } = user;

        fetch("https://kaas-cd852-default-rtdb.firebaseio.com/userDataRecord.json",
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    password,
                    address,
                    state,
                    district,
                    email,
                    pincode,
                    no,
                    type,
                    speciality, 
                    exp, 
                    fee,
                }),
            }
        );

        setSubmitButtonDisabled(true)

        // to Signup
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then(async (res) => {
                setSubmitButtonDisabled(false)
                const User = res.user;
                await updateProfile(User, {

                    displayName: user.firstName,
                });
                navigate('/')
            })
            .catch((err) => {
                setSubmitButtonDisabled(false)
                setErrorMsg(err.message);
                console.log("ERROR - ", err.message);
            })
    };

    return (
        <div>
            <div style={{ backgroundImage: `url(${Bg})` }} className="signup-bg-img" />
            <div className="signup-bg-shades">
                <img src={logo} alt="not present" className="logo" />
                <h1 className="signup-title">Become a Member</h1>
                <form className="signup-form" onSubmit="return false;" method="post">
                    <div className="signup-details">
                        <div className="signup-partition">
                            <input type="text" placeholder="First name" required className="signup-input1"
                                name="firstName" value={user.firstName} onChange={handleInputs}
                            />
                            <input type="text" placeholder="Last name" required className="signup-input1"
                                name="lastName" value={user.lastName} onChange={handleInputs}
                            />
                        </div>
                        <div className="signup-partition">
                            <input type="text" placeholder="E-mail" required className="signup-input1"
                                name="email" value={user.email} onChange={handleInputs}
                            />
                            <input type="password" placeholder="Password" required className="signup-input1"
                                name="password" value={user.password} onChange={handleInputs} />
                        </div>
                        <textarea rows="5" cols="40" placeholder="Address" required
                            name="address" value={user.address} onChange={handleInputs} className="signup-textarea"
                        />
                        <div className="signup-partition">
                            <input type="text" placeholder="State" required className="signup-input1"
                                name="state" value={user.state} onChange={handleInputs}
                            />
                            <input type="text" placeholder="District" required className="signup-input1"
                                name="district" value={user.district} onChange={handleInputs}
                            />
                        </div>
                        <div className="signup-partition">
                            <input type="text" placeholder="Pincode" required className="signup-input1"
                                name="pincode" value={user.pincode} onChange={handleInputs}
                            />
                            <input type="text" placeholder="Phone no" required className="signup-input1"
                                name="no" value={user.no} onChange={handleInputs}
                            />
                        </div>
                        <div className="signup-partition">
                            <input type="text" placeholder="Speciality (For Doctor)" required className="signup-input1"
                                name="speciality" value={user.speciality} onChange={handleInputs}
                            />
                            <input type="text" placeholder="Experience (For Doctor)" required className="signup-input1"
                                name="exp" value={user.exp} onChange={handleInputs}
                            />
                        </div>

                        <div className="signup-radio">
                            <input type="text" placeholder="Fee (For Doctor)" required className="signup-input1"
                                name="fee" value={user.name} onChange={handleInputs}
                            />
                            <span>Type :</span>
                            <div>
                                <label>
                                    <input type="radio" name="type"
                                        value="Doctor" onChange={handleInputs} />
                                    Doctor
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="radio" name="type" value="Patient" onChange={handleInputs} />
                                    Patient
                                </label>
                            </div>
                        </div>
                        <b className="errorHandle">{errorMsg}</b>
                        <button type="button" className="signup-button" onClick={update} disabled={submitButtonDisabled}>Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
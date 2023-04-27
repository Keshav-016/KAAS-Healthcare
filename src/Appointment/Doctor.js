import React, { useState } from "react";
import Data from "./Data";
import DocInfo from "./DocInfo";
import NavLower from "../landingPage/NavLower"
import Footer from "../landingPage/Footer"
import "./Doctor.css"

export default function Appointment() {
    const [status, changeStatus] = useState(true);
    const [value, updateValue] = useState("");
    const handleChange = (e) => {
        updateValue(e.target.value)
    }
    const check = () => {
        const match = Data.some((data) => data.Pincode === value);
        changeStatus(match);
      };



    const DocElement = Data.map((data) => {
        return <DocInfo
            Image={data.Image}
            Name={data.Name}
            Speciality={data.Speciality}
            Experience={data.Experience}
            Address={data.Address}
            Pincode={data.Pincode}
            Fee={data.Fee}
            Upvote={data.Upvote}
            Review={data.Review} />
            
    })
    return (
        <div>
            <NavLower />
            <div className="doc-bg" >
                <span className="review-bg-color" />
            </div>
            <div className="doc-content">
                <div className="doc-bg-content">
                    <p>Pages</p>
                    <h1 ><u>She</u>dule your Appointments</h1>
                    <p>Dynamically reinvent market-driven opportunities
                        and ubiquitous interfaces. Energistically fabricate
                        an expanded array of niche markets through robust products.
                    </p>
                    <div>
                        <input type="text" placeholder="Pincode.." onChange={handleChange} />
                        <button type="button" onClick={check}>Filter</button>
                    </div>
                </div>
                {status && DocElement}
            </div>
            <Footer />
        </div>
    )
}



// /////////////////////////////////////////////////////////////////////////////////////



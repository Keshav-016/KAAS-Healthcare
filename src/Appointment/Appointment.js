
import React, { useState } from "react";
import DocInfo from "./DocInfo";
import NavLower from "../landingPage/NavLower";
import Footer from "../landingPage/Footer";
import "./Doctor.css";

export default function Appointment(props) {
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const check = () => {
    const filtereddoctors = props.doctorData.filter((doctor) => doctor.Pincode === value);
    setFilteredData(filtereddoctors);
  };

  const docElements = filteredData.map((doctor) => (
    <DocInfo FirstName={doctor.firstName} 
    Address={doctor.Address} 
    Pincode={doctor.Pincode} 
    Speciality={doctor.Speciality}
    Experience={doctor.Experience}
    Fee={doctor.Fee}
    LastName={doctor.lastName}
     />
  ));

  return (
    <div>
      <NavLower />
      <div className="doc-bg">
        <span className="review-bg-color" />
      </div>
      <div className="doc-content">
        <div className="doc-bg-content">
          <p>Pages</p>
          <h1>
            <u>She</u>dule your Appointments
          </h1>
          <p>
            Dynamically reinvent market-driven opportunities and ubiquitous
            interfaces. Energistically fabricate an expanded array of niche
            markets through robust products.
          </p>
          <div>
            <input
              type="text"
              placeholder="Pincode.."
              onChange={handleChange}
              className="pin-search"
            />
            <button type="button" onClick={check} className="pin-btn"> 
              Filter
            </button>
          </div>
        </div>
        {filteredData.length > 0 ? docElements : <p>Search for Doctor in your area</p>}
      </div>
      <Footer />
    </div>
  );
}





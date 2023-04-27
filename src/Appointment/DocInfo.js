import React from "react"
import thumb from "../images/thumb.png"
export default function DocInfo(prop) {
    return (
        <div className="docInfo">
            <div className="doctors">
                <img src={prop.Image} alt="not present" />
                <div>
                    <p className="docName"><b>{prop.Name}</b></p>
                    <p>{prop.Experience}</p>
                    <p><b>{prop.Address}{prop.Pincode}</b></p>
                    <p>{prop.Fee}</p>
                    <div className="docinfo-div1">
                        <button className="para"><img src={thumb} alt="not present"/>{prop.Upvote}</button>
                        <p className="para">{prop.Review}</p>
                    </div>
                </div>
            </div>
            <div>
                <button type="click" className="docInfo-btn"><b>Book Clinic Visit</b> <p>No Booking Fee</p></button>
            </div>
        </div>
    )
}
import React from "react";
import Fade from 'react-reveal/Fade';
import eye from "../images/eye.jpg"
import dentist from "../images/dental.png"
import skin from "../images/skin.jpg"
import patient1 from "../images/patient1.jpg"
import patient2 from "../images/patient2.jpg"
import patient3 from "../images/patient3.jpg"
import patient4 from "../images/patient4.jpg"
export default function Body() {




    // ------------------------------------------------------------------------------------------------------------------------
    return (
        <div>
            <div >
                <div className="body-bg" />
            </div>
            <div className="body-bg-content">
                <div className="body-bg-text">
                    <h1><b>Your Doctor</b>,</h1>
                    <h1 className="body-bg-text1"> Your Treatment</h1>
                    <hr />
                    <p>
                        Proactively envisioned multimedia based expertise and cross-media growth strategies.
                        Seamlessly visualize quality intellectual capital without superior collaboration and
                        idea-sharing.
                    </p>
                </div>
                <div className="body-bg-button">
                    <button type="submit" className="btn1">DISCOVER MORE</button>
                    <button type="submit" className="btn2">KAAS SERVICES</button>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------ */}
            <div className="body-info">
                <div className="body-info1">
                    <div className="body-info-detail1">
                        <h2>Your Reports</h2>
                        <p>Review your previous medical checkups with the doctors you have chosen to see.
                            By doing so, you can gain insight into your medical history and track any changes or
                            progress in your health over time. </p>
                        <button type="submit" className="body-info-btn">Read More</button>
                    </div>
                    <div className="body-info-detail2">
                        <h2>Contact us</h2>
                        <p>Still facing difficulties? New to tech?
                            We got you covered. Contact us via email or customer care number and we will help you out.</p>
                        <button type="submit" className="body-info-btn">Read More</button>
                    </div>
                </div>
                <div className="body-info1">
                    <div className="body-info-detail3">
                        <h2>What You get.</h2>
                        <p>Features available to make your experience with the website worthwhile and improve your
                            overall health. You can enhance your quality of life and work towards a healthier lifestyle.</p>
                        <button type="submit" className="body-info-btn">Read More</button>
                    </div>
                    <div className="body-info-detail4"  >
                        <h2>Choose your Doctor</h2>
                        <p>Choose your own Doctor and they
                            will choose your health. Get info about the Doctors around you
                            and choose whoever suits your department in the best case.</p>

                        <select className="body-dropdown">
                            <option>Choose a Speciality</option>
                            <option >General Physician</option>
                            <option >Dentist</option>
                            <option >Eye Specialist</option>
                            <option >Gyano</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------- */}
            <div className="body-doc-info">
                <Fade>
                    <div className="body-doc-info1">
                        <img src={dentist} alt="not present" className="body-doc-img" />
                        <div className="body-doc-detail">
                            <p><u>For your</u> lovely teeths</p>
                            <h2>Dentist</h2>
                            <p>Completely synergize resource taxing relationships via premier niche markets.
                                Professionally cultivate one-to-one customer service with robust ideas.
                                Dynamically innovate resource-leveling customer service for state of the art customer service.
                            </p>
                            <button type="submit" className="body-doc-info-btn">Read More</button>
                        </div>
                    </div>
                </Fade>

                <Fade delay={200}>
                    <div className="body-doc-info1">
                        <img src={eye} alt="not present" className="body-doc-img" />
                        <div className="body-doc-detail">
                            <p><u>For your</u> delicate eyes</p>
                            <h2>Opthalmologist</h2>
                            <p>Objectively innovate empowered manufactured products whereas parallel platforms.
                                Holisticly predominate extensible testing procedures for reliable supply chains.
                                Dramatically engage top-line web services vis-a-vis cutting-edge.
                            </p>
                            <button type="submit" className="body-doc-info-btn">Read More</button>
                        </div>
                    </div>
                </Fade>

                <Fade delay={400}>
                    <div className="body-doc-info1">
                        <img src={skin} alt="not present" className="body-doc-img" />
                        <div className="body-doc-detail">
                            <p><u>For your</u> Glowing skin</p>
                            <h2>Dermatologist</h2>
                            <p>Efficiently unleash cross-media information without cross-media value.
                                Quickly maximize timely deliverables for real-time schemas. Dramatically maintain
                                clicks-and-mortar solutions without functional solutions.
                            </p>
                            <button type="submit" className="body-doc-info-btn">Read More</button>
                        </div>
                    </div>
                </Fade>
            </div>
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            <div className="review-bg">
                <span className="review-bg-color" />

                <Fade left>
                    <div className="body-user-exp">
                        <p>A good word means a lot</p>
                        <h1><u>Pa</u>tient <b>testimonials</b> </h1>
                        <p>It's always the word of mouth that's the best advice. Here are some of our…</p>
                    </div>
                </Fade>
                <div className="body-user-img-detail">
                    <div className="review1">
                        <Fade bottom>
                            <div className="body-user-img-detail1">
                                <img src={patient1} alt="not present" className="body-user-img" />
                                <div className="body-user-review">
                                    <p>Proactively envisioned multimedia based expertise and cross-media growth strategies.
                                        Seamlessly visualize quality intellectual capital without superior collaboration.</p>
                                    <hr />
                                    <h4>LARAINE FLEMMING</h4>
                                    <span role="img" aria-label="star">⭐⭐⭐⭐</span>
                                    
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom delay={200}>
                            <div className="body-user-img-detail1">
                                <img src={patient2} alt="not present" className="body-user-img" />
                                <div className="body-user-review">
                                    <p>Phosfluorescently engage worldwide methodologies with web-enabled technology.
                                        Interactively coordinate e-commerce via process-centric “outside the box” thinking.</p>
                                    <hr />
                                    <h4>TAYLA CHRISTISON</h4>
                                    <span role="img" aria-label="star">⭐⭐⭐⭐⭐</span>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="review1">
                        <Fade bottom delay={400}>
                            <div className="body-user-img-detail1">
                                <img src={patient3} alt="not present" className="body-user-img" />
                                <div className="body-user-review">
                                    <p>Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize
                                        scalable metrics whereas proactive e-services strategies.</p>
                                    <hr />
                                    <h4>CAREY HATHAWAY</h4>
                                    <span role="img" aria-label="star">⭐⭐⭐⭐⭐</span>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom delay={600}>
                            <div className="body-user-img-detail1">
                                <img src={patient4} alt="not present" className="body-user-img" />
                                <div className="body-user-review">
                                    <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
                                        one-to-one customer service with robust ideas.</p>
                                    <hr />
                                    <h4>CORI STARK</h4>
                                    <span role="img" aria-label="star">⭐⭐⭐⭐</span>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
                <Fade delay={700} >
                    <button type="submit" className="body-user-review-btn"><b>READ MORE TESTIMONIALS</b></button>
                </Fade>
            </div>
        </div>
    )
}
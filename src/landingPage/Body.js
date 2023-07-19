import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import eye from "../images/eye.jpg"
import dentist from "../images/dental.png"
import skin from "../images/skin.jpg"
import patient1 from "../images/patient1.jpg"
import patient2 from "../images/patient2.jpg"
import patient3 from "../images/patient3.jpg"
import patient4 from "../images/patient4.jpg"
export default function Body() {

    const [state, changeState] = useState(false);
    function changeval() {
        changeState(prev => !prev)
    }
    const [state1, changeState1] = useState(false);
    function changeval1() {
        changeState1(prev => !prev)
    }
    const [state2, changeState2] = useState(false);
    function changeval2() {
        changeState2(prev => !prev)
    }
    const [state3, changeState3] = useState(false);
    function changeval3() {
        changeState3(prev => !prev)
    }
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
                    <a href="#body-info"> <button type="submit" className="btn1">DISCOVER MORE</button></a>
                    <a href="#body-doc-info"> <button type="submit" className="btn2">KAAS SERVICES</button></a>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------ */}
            <div id="body-info">
                <div className="body-info1">
                    <div className="body-info-detail1">
                        <h2>Your Reports</h2>
                        <p>Review your previous medical checkups with the doctors you have chosen to see.
                            By doing so, you can gain insight into your medical history and track any changes or
                            progress in your health over time. </p>
                            <a href="#body-doc-info"><button type="submit" className="body-info-btn">  Read More</button></a>
                    </div>
                    <div className="body-info-detail2">
                        <h2>Contact us</h2>
                        <p>Still facing difficulties? New to tech?
                            We got you covered. Contact us via email or customer care number and we will help you out.</p>
                            {state3 && <p>Call us +91 652108972</p>}
                            {!state3 && <button type="submit" className="body-info-btn" onClick={changeval3}>Read More</button>}
                            {state3 && <button type="submit" className="body-info-btn" onClick={changeval3}>Read Less</button>}
                    </div>
                </div>
                <div className="body-info1">
                    <div className="body-info-detail3">
                        <h2>What You get.</h2>
                        <p>Features available to make your experience with the website worthwhile and improve your
                            overall health. You can enhance your quality of life and work towards a healthier lifestyle.</p>
                            <a href="#body-doc-info"> <button type="submit" className="body-info-btn">Read More</button></a>
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
            <div id="body-doc-info">
                <Fade delay={100}>
                    <div className="body-doc-info1">
                        <img src={dentist} alt="not present" className="body-doc-img" />
                        <div className="body-doc-detail">
                            <p><u>For your</u> lovely teeths</p>
                            <h2>Dentist</h2>
                            <p>
                                Reach out to licensed healthcare professional who specialize in the diagnosis, treatment, and prevention of oral 
                                health problems. They are responsible for examining patients' teeth and gums, etc

                            </p>
                            {state && <p>
                                Dentists also provide patients with education on proper oral hygiene and diet to maintain good dental health. 
                                They may also perform cosmetic dental procedures such as teeth whitening, veneers, and braces to improve the
                                 appearance of a patient's smile.



                            </p>}
                            {!state && <button type="submit" className="body-doc-info-btn" onClick={changeval}>Read More</button>}
                            {state && <button type="submit" className="body-doc-info-btn" onClick={changeval}>Read Less</button>}
                        </div>
                    </div>
                </Fade>

                <Fade delay={500}>
                    <div className="body-doc-info1">
                        <img src={eye} alt="not present" className="body-doc-img" />
                        <div className="body-doc-detail">
                            <p><u>For your</u> delicate eyes</p>
                            <h2>Opthalmologist</h2>
                            <p>
                                Doctors aim to diagnose and focus on treatment of eye diseases and disorders. Get trained Doctors to perform eye exams,
                                prescribe corrective lenses, and treat conditions such as glaucoma, cataracts,etc.
                            </p>
                            {state1 && <p>
                                Ophthalmologists play an essential role in maintaining the eye health of their patients through various methods such as
                                diagnosing and treating eye conditions, prescribing medications, providing corrective lenses,
                                managing eye injuries, and identifying signs of systemic diseases.

                            </p>}
                            {!state1 && <button type="submit" className="body-doc-info-btn" onClick={changeval1}>Read More</button>}
                            {state1 && <button type="submit" className="body-doc-info-btn" onClick={changeval1}>Read Less</button>}
                        </div>
                    </div>
                </Fade>

                <Fade delay={800}>
                    <div className="body-doc-info1">
                        <img src={skin} alt="not present" className="body-doc-img" />
                        <div className="body-doc-detail">
                            <p><u>For your</u> Glowing skin</p>
                            <h2>Dermatologist</h2>
                            <p>
                                Get skilled dermatologists perform skin exams to identify potential skin problems and may also use procedures
                                such as biopsies, laser therapy, and cryotherapy to diagnose and treat skin conditions.
                            </p>
                            {state2 && <p>
                                Dermatologists play a crucial role in maintaining the health and appearance of the skin, hair, and nails. They
                                are trained to diagnose and treat a wide range of skin conditions, including acne, eczema, psoriasis, skin cancer,
                                and aging-related skin issues.
                            </p>}
                            {!state2 && <button type="submit" className="body-doc-info-btn" onClick={changeval2}>Read More</button>}
                            {state2 && <button type="submit" className="body-doc-info-btn" onClick={changeval2}>Read Less</button>}
                        </div>
                    </div>
                </Fade>
            </div>
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            <div className="review-bg">
                <span className="review-bg-color" />

                <Fade direction={'left'}>
                    <div className="body-user-exp">
                        <p>A good word means a lot</p>
                        <h1><u>Pa</u>tient <b>testimonials</b> </h1>
                        <p>It's always the word of mouth that's the best advice. Here are some of our…</p>
                    </div>
                </Fade>
                <div className="body-user-img-detail">
                    <div className="review1">
                        <Fade direction={'up'}>
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
                        <Fade direction={'up'} delay={200}>
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
                        <Fade direction={'up'} delay={400}>
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
                        <Fade direction={'up'} delay={600}>
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
                <Fade delay={1000} >
                    <button type="submit" className="body-user-review-btn"><b>READ MORE TESTIMONIALS</b></button>
                </Fade>
            </div>
        </div>
    )
}
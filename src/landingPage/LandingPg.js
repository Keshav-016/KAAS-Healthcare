import React from "react";
import NavUpper from "./NavUpper";
import NavLower from "./NavLower";
import Body from "./Body";
import Footer from "./Footer"
export default function Landingpg()
{

    const [old, update] = React.useState(false);
    window.addEventListener('scroll', getDetails);
    function getDetails() {
        return (window.scrollY > 200 ? update(true) : update(false))
    }


    return(
        <div>
            <NavUpper/>
            {old&&<NavLower/>}
            <Body/>
            <Footer/>
        </div>
    )
}
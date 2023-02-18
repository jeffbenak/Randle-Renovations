import React, { useState } from "react";
import { CCollapse } from '@coreui/react';
import finish1 from "../images/finish1.jpg";
import finish2 from "../images/finish2.jpg";
import finish3 from "../images/finish3.jpg";
import finish4 from "../images/finish4.jpg";
import finish5 from "../images/finish5.jpg";
import finish6 from "../images/finish6.jpg";
import finish7 from "../images/finish7.jpg";
import finish8 from "../images/finish8.jpg";
import finish9 from "../images/finish9.jpg";
import finish10 from "../images/finish10.jpg";
import finish11 from "../images/finish11.jpg";



export default function Home() {

    const [visibleone, setVisibleOne] = useState(false);

    function showContent() {
        if (visibleone) {
            console.log('success')
        }
    }

    return (

        <div className="home">

            <div className="aboutsection">

    <h2>About Us</h2>

    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Nibh praesent tristique magna 
        sit amet purus gravida. Quisque sagittis purus sit amet volutpat consequat. 
        Pulvinar pellentesque habitant morbi tristique. Sed cras ornare arcu dui 
        vivamus arcu felis bibendum ut. 
    </p>
    <p>
        Ullamcorper sit amet risus nullam eget. Porttitor eget dolor morbi non arcu risus quis 
        varius. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Viverra 
        orci sagittis eu volutpat. Faucibus purus in massa tempor. Vulputate eu scelerisque 
        felis imperdiet proin fermentum.
    </p>

    <div className="content">

    <h2>Contact Me</h2>

    <p>708-444-4444</p>
    <p>Email me <a className="email" href="mailto:name@email.com">here</a></p>

    </div>

    </div>

    <div className="gallery">


        <h1>Gallery</h1>

        <hr></hr>

        <img className="finish1" src={finish1}></img>

        <img className="restfinish" src={finish2}></img>

        <img className="restfinish" src={finish3}></img>

        <img className="restfinish" src={finish4}></img>


        <button type='button' className={visibleone ? "none" : "collapsible"} onClick={() => {
        showContent();setVisibleOne(!visibleone)
      }}>
        <div className="dropdown">
        <h2 className="showmore">
        Show More
        </h2>
        </div>
        </button>

        <CCollapse visible={visibleone}>

            <div className="collapsesection">

                <img className="restfinish1" src={finish5}></img>

                <img className="restfinish1" src={finish6}></img>
                
                <img className="finish7" src={finish7}></img>

                <img className="restfinish" src={finish8}></img>

                <img className="restfinish" src={finish9}></img>

            </div>

            <div className="collapsesection">

                <img className="restfinish" src={finish10}></img>

                <img className="restfinish1" src={finish11}></img>

                {/* <img className="finish7" src={finish7}></img>

                <img className="restfinish" src={finish8}></img>

                <img className="restfinish" src={finish9}></img> */}

            </div>

        </CCollapse>
        

    </div>

    </div>
    )
}
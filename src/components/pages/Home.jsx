import React, { useState } from "react";
import { CCollapse } from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
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
import finish12 from "../images/finish12.jpg";
import finish13 from "../images/finish13.jpg";
import finish14 from "../images/finish14.jpg";
import finish15 from "../images/finish15.jpg";
import finish16 from "../images/finish16.jpg";
import finish17 from "../images/finish17.jpg";
import finish18 from "../images/finish18.jpg";
import finish19 from "../images/finish19.jpg";



export default function Home() {

    const [visibleone, setVisibleOne] = useState(false);
    const [visibletwo, setVisibleTwo] = useState(false);
    const [visiblethree, setVisibleThree] = useState(false);

    function showContent() {
        if (visibleone) {
            console.log('success')
        }
    }

    return (

        <div className="home">
              <a name='header'></a>

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

    </div>

    <div className="gallery">


        <h1>Gallery</h1>

        <hr className="hrline"></hr>

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

                <img className="restfinish" src={finish5}></img>

                <img className="restfinish" src={finish6}></img>
                
                <img className="finish7" src={finish7}></img>

                <img className="restfinish" src={finish8}></img>

                <img className="restfinish" src={finish9}></img>

                <button type='button' className={visibletwo ? "none" : "collapsible"} onClick={() => {
                showContent();setVisibleTwo(!visibletwo)
                }}>
                <div className="dropdown">
                <h2 className="showmore">
                Show More
                </h2>
                </div>
                </button>

            </div>       

        </CCollapse>

        <CCollapse visible={visibletwo}>

            <div className="collapsesection">

                <img className="restfinish" src={finish10}></img>

                <img className="restfinish" src={finish11}></img>
                
                <img className="finish7" src={finish12}></img>

                <img className="restfinish" src={finish13}></img>

                <img className="restfinish" src={finish14}></img>

                <button type='button' className={visiblethree ? "none" : "collapsible"} onClick={() => {
                showContent();setVisibleThree(!visiblethree)
                }}>
                <div className="dropdown">
                <h2 className="showmore">
                Show More
                </h2>
                </div>
                </button>

            </div>

        </CCollapse>

        <CCollapse visible={visiblethree}>

        <div className="collapsesection">

            <img className="collapse3" src={finish15}></img>

            <img className="collapse3" src={finish16}></img>
            
            <img className="collapse3" src={finish17}></img>

            <img className="collapse3" src={finish18}></img>

            <img className="collapse3" src={finish19}></img>

        </div>

        </CCollapse>

        

    </div>

    <div className="content">

        <h2>Contact Us</h2>
{/* 
        <hr className="line"/> */}

        <div className="contact">

        <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 708-444-4444</p>
        <p>Email me <a className="email" href="mailto:name@email.com">here</a></p>

        </div>

    </div>

    <div className="top">

    <p>
        <a className='backtotop' href='#header'>Back to the top</a>
    </p>

    </div>

    <div className="space">


    </div>

    </div>
    )
}
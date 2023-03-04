import React, { useState } from "react";
import { CCollapse } from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
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



export default function Home({ currentPage, handlePageChange }) {

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
    Randle Carpentry was proudly founded in 2020, with over 10 years of experience in the field. 
    We specialize in many aspects of carpentry and remodeling projects. We promise to deliver a 
    quality finished project that you can enjoy for years to come! Please call, text, or email 
    to get your project started!
    </p>

    </div>


    {/* <div className="gallery">
        


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

        

    </div> */}

    <div className="content">

        <h2>Contact Us</h2>

        <div className="contact">

        <p>Email: <a className="email" href="mailto:MRandleCarpentry@gmail.com">MRandleCarpentry@gmail.com</a></p>
        <p><FontAwesomeIcon className="fa-xl" icon={faPhone}></FontAwesomeIcon><a href="tel:+17739721844" className="social">773-972-1844</a></p>
        <p><FontAwesomeIcon className="fa-xl" icon={faFacebook}></FontAwesomeIcon><a href="https://www.facebook.com/profile.php?id=100077916173261" className="social facebook">Randle Carpentry</a></p>

        </div>

    </div>

    <div className="top">

    <p>
        <a className='backtotop' href='#header'>Back to the top</a>
    </p>

    </div>

    <p className="copyright">Copyright &#169; 2023 Randle Carpentry. All Rights Reserved. </p>

 

    </div>
    )
}
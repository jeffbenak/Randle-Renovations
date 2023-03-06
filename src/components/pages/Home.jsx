import React, { useState } from "react";
import { CCollapse } from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


export default function Home() {

    return (

        <div className="home">
              <a name='header'></a>


    <div className="aboutsection">

    <h2>About Us</h2>

    <hr className="hrline"></hr>

    <p>
    Randle Carpentry was proudly founded in 2020, with over 10 years of experience in the field. 
    We specialize in many aspects of carpentry and remodeling projects. We promise to deliver a 
    quality finished project that you can enjoy for years to come! Please call, text, or email 
    to get your project started!
    </p>

    </div>

    <div className="contact">

        <h2>Contact Us</h2>

        <div className="content">

        <p>Email: <a className="email" href="mailto:MRandleCarpentry@gmail.com">MRandleCarpentry@gmail.com</a></p>
        <p><FontAwesomeIcon className="fa-xl" icon={faPhone}></FontAwesomeIcon><a href="tel:+17739721844" className="social">773-972-1844</a></p>
        <p><FontAwesomeIcon className="fa-xl" icon={faFacebook}></FontAwesomeIcon><a href="https://www.facebook.com/profile.php?id=100077916173261" className="social facebook">Randle Carpentry</a></p>

        </div>

    </div>


    <p className="copyright">Copyright &#169; 2023 Randle Carpentry. All Rights Reserved. </p>

 

    </div>
    )
}
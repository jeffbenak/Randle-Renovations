import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import finish11 from "../images/finish11.jpg";
import finish13 from "../images/finish13.jpg";
import finish28 from "../images/finish28.jpg";


export default function Home() {

    return (

        <div className="home">

            <Header></Header>

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

    <div className="gallerysection">

        <h2>Gallery</h2>

        <hr></hr>

        <div className="preview">

        <div>
            <img src={finish13}></img>
        </div>
        <div>        
            <img src={finish11}></img>
        </div>
        <div>
            <img src={finish28}></img>
        </div>

        </div>

    </div>

        <div className="gallerylink">
        
        <Link to="/gallery"
        onClick={() => {
            window.scrollTo(0, 0);
        }}
        ><h3 className="more"><FontAwesomeIcon className="fa-xlg plus" icon={faPlus}></FontAwesomeIcon>See more</h3></Link>

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
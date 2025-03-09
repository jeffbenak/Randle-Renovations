import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import finish11 from "../images/finish11.jpg";
import bathroom4 from "../images/Bathrooms/bathroom-4.jpg";
import bathroom12 from "../images/Bathrooms/bathroom-12.jpg";


export default function Home() {

    return (

        <div className="home">

            <Header></Header>

              <a name='header'></a>


    <div className="about-section">

    <h2>About Us</h2>

    <hr></hr>

    <p>
    Randle Renovations was proudly founded in 2020, with over 10 years of experience in the field. 
    We specialize in many aspects of carpentry and remodeling projects. We promise to deliver a 
    quality finished project that you can enjoy for years to come! Please call, text, or email 
    to get your project started!
    </p>

    </div>

    <div className="gallery-section">

        <h2>Gallery</h2>

        <hr></hr>

        <div className="preview">

        <div>
            <img src={bathroom4}></img>
        </div>
        <div>        
            <img src={finish11}></img>
        </div>
        <div>
            <img src={bathroom12}></img>
        </div>

        </div>

    </div>

        <div className="gallery-link">
        
        <Link to="/gallery"
        onClick={() => {
            window.scrollTo(0, 0);
        }}
        ><h3 className="more"><FontAwesomeIcon className="fa-xlg plus" icon={faPlus}></FontAwesomeIcon>See more</h3></Link>

        </div>


    <div className="contact">

        <h2>Contact Us</h2>

        <div className="content">

        <p><FontAwesomeIcon className="fa-xl envelope" icon={faEnvelope}></FontAwesomeIcon><a className="email" href="mailto:Randlerenovations@gmail.com">Randlerenovations@gmail.com</a></p>
        <p><FontAwesomeIcon className="fa-xl" icon={faFacebook}></FontAwesomeIcon><a href="https://www.facebook.com/profile.php?id=100077916173261" className="social facebook">Randle Renovations</a></p>
        <p><FontAwesomeIcon className="fa-xl" icon={faPhone}></FontAwesomeIcon><a href="tel:+17739721844" className="social">773-972-1844</a></p>

        </div>

    </div>


    <p className="copyright">Copyright &#169; 2025 Randle Renovations. All Rights Reserved. </p>

 

    </div>
    )
}
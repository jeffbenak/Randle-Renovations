import React from "react";
import { Link } from 'react-router-dom';
import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import builtIn from "../images/Built-Ins/built-in-3.jpg";
import bathroom from "../images/Bathrooms/bathroom-4.jpg";
import stairs from "../images/Floor-Stairs/floor-stairs-1.jpg";
import kitchen from "../images/Kitchens/kitchen-1.jpg";
import trimdoors from "../images/Trim-Doors/trim-doors-3.jpg";
import otherprojects from "../images/Other-Projects/other-3.jpg";




export default function Home() {


    return (

        <div className="home">

            <Header></Header>

              <a name='header'></a>


    <div className="about-section">

    <h2>About Us</h2>

    <hr></hr>

    <p>
    Since 2020, Randle Renovations has been transforming homes through expert interior remodeling, building upon over a decade of prior experience in the field.
    We specialize in bringing your vision to life, with meticulous craftsmanship in key areas such as bathrooms, kitchens, flooring, doors, trim, and tile.
    Our commitment to quality and attention to detail ensure that every project—whether a simple update or a full renovation—is completed to the highest standards, resulting in beautiful, functional spaces our clients love.
    </p>

    </div>

    <div className="gallery-section">

        <h2>Our Work</h2>

        <hr></hr>

        <div className="preview">

        <div className="image-container">
            <img className="section-image" src={bathroom}></img>
            <div className="overlay">
                <h2 class="overlay-title">Bathrooms</h2>
                <hr className="overlay-hr"></hr>
                <Link to="/bathrooms">
                <button class="overlay-button">See More</button>
                </Link>
            </div>
        </div>
        
        <div className="image-container">
            <img className="section-image" src={builtIn}></img>
            <div className="overlay">
                <h2 class="overlay-title">Built Ins</h2>
                <hr className="overlay-hr"></hr>
                <Link to="/builtins">
                <button class="overlay-button">See More</button>
                </Link>
            </div>
        </div>

        </div>



        <div className="preview">

        <div className="image-container">
            <img className="section-image" src={stairs}></img>
            <div className="overlay">
                <h2 class="overlay-title">Floors/Stairs</h2>
                <hr className="overlay-hr"></hr>
                <Link to="/floorstairs">
                <button class="overlay-button">See More</button>
                </Link>
            </div>
        </div>

        
        <div className="image-container">
            <img className="section-image" src={kitchen}></img>
            <div className="overlay">
                <h2 className="overlay-title">Kitchens</h2>
                <hr className="overlay-hr"></hr>
                <Link to="/kitchens">
                <button class="overlay-button">See More</button>
                </Link>
            </div>
        </div>

        </div>


        <div className="preview">



        <div className="image-container">
            <img className="section-image" src={trimdoors}></img>
            <div className="overlay">
                <h2 className="overlay-title">Trim Doors</h2>
                <hr className="overlay-hr"></hr>
                <Link to="/trimdoors">
                <button class="overlay-button">See More</button>
                </Link>
            </div>
        </div>


        <div className="image-container">
            <img className="section-image" src={otherprojects}></img>
            <div className="overlay">
                <h2 className="overlay-title">Other Projects</h2>
                <hr className="overlay-hr"></hr>
                <Link to="/otherprojects">
                <button class="overlay-button">See More</button>
                </Link>
            </div>
        </div>



        </div>

        

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
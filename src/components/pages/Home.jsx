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


        const handleButtonClick = () => {
          alert('Button clicked!');
        };

    return (

        <div className="home">

            <Header></Header>

              <a name='header'></a>


    <div className="about-section">

    <h2>About Us</h2>

    <hr></hr>

    <p>
    Since 2020, Randle Renovations has been transforming homes through expert interior remodeling, building on over a decade of prior experience in the field.
    We specialize in bringing your vision to life, with meticulous craftsmanship in key areas such as bathrooms, kitchens, flooring, doors, trim, and tile.
    Our commitment to quality and attention to detail ensure that every project—whether a simple update or a full renovation—is completed to the highest standards, resulting in beautiful, functional spaces our clients love.
    </p>

    </div>

    <div className="gallery-section">

        <h2>Gallery</h2>

        <hr></hr>

        <div className="preview">

        <div className="image-container">
            <img className="bathroom-image" src={bathroom4}></img>
            {/* <div className="overlay">
                <h2 class="overlay-title">Bathrooms</h2>
                <hr className="overlay-hr"></hr>
                <button onClick={handleButtonClick} class="overlay-button">See More</button>
            </div> */}
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
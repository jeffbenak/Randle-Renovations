import React, { useEffect, useRef, useState } from "react";
import Logo from "../logo/logo.jpg";
import { Container, NavItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

export default function Header({ currentPage, handlePageChange }) {

    const [show, setShow] = useState(false);

    window.onscroll = function() {
        scroll();
        // animate();
    };

    function registerClick() {
        if (registerClick) {
            console.log('success');
            document.querySelector(".show").style.left = "-100%";    
        }
    };

    function showNavigation() {
        if (showNavigation) {
            document.querySelector(".show").style.left = "0";
            document.querySelector(".collapsing").style.height = "100vh";
            document.getElementById("popout").className = "scrolled"; 
        }  
    }

    function scroll() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("head").style.top = "-20px";
        }  else if (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {
            document.getElementById("head").style.top = "0";
        } 
    }

    function animate() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("logo").style.width = "110px"; document.getElementById("logo").style.height = "90px";
            document.getElementById("logo").style.marginTop = "10px";
            }  else if (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {
                document.getElementById("logo").style.width = "140px"; document.getElementById("logo").style.height = "120px";
                document.getElementById("logo").style.marginTop = "10px";
            }
        
    }

    return (
    <>
    <div id="head">

        {/* <div className="navlist"> */}

        <NavItem className="navlogo">
                    <img id="logo" src={Logo}></img>
                    </NavItem>

            <Navbar expand="lg" className="navbar-light">

            <Container className="navbar-container">

                <Nav variant="tabs" className="nav-tabs .d-lg-flex">

                  

                
                <Navbar.Collapse className="show" id="popout">
            
            <ul>

            <div className="nav-items">

                <li> 

             

              

                <NavItem>


            <a href="#home" onClick={() => 
            {registerClick();
            handlePageChange("Home");}}
            className={currentPage === "Home" ? "nav-link nav-tabs active" : "nav-link nav-tabs"}>
       
            Home
            </a>

            </NavItem>

             </li>

             <li> 





             </li>

            <li> 

            <NavItem>

            
                <a

            href="#gallery"
            onClick={() => 
            {registerClick();
            handlePageChange("Gallery");}}
            className={currentPage === "Gallery" ? "nav-link active" : "nav-link"}
            >
            Gallery

                </a>

                </NavItem>

                </li>

                </div>

                 

                </ul> 

             

                </Navbar.Collapse>


            </Nav>

        

        <div className="toggler hidden-lg navbar-dark pull-left">


        <Navbar.Toggle onClick={showNavigation}/>


        </div>
       

        </Container>

        </Navbar>

    {/* </div> */}

    </div>
</>
    )
}
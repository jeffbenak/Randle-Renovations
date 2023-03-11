import React from "react";
import Logo from "../logo/logo.jpg";
import { Container, NavItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

export default function Header({ currentPage, handlePageChange }) {

    window.onscroll = function() {
        scroll();
        animate();
    };

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

                  

                

            {/* 
            <ul className="nav nav-tabs">

                <li className="nav-item"> */}

                <Navbar.Collapse>

                <div className="nav-items">

                <NavItem>


            <a href="#home" onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link nav-tabs active" : "nav-link nav-tabs"}>
       
            Home
            </a>

            </NavItem>

            {/* </li>

             <li className="nav-item">  */}





            {/* </li>

            <li className="nav-item"> */}

            <NavItem>

            
                <a

            href="#gallery"
            onClick={() => handlePageChange("Gallery")}
            className={currentPage === "Gallery" ? "nav-link active" : "nav-link"}
            >
            Gallery

                </a>

                </NavItem>

                {/* </li>

                </ul> */}

                </div>

                </Navbar.Collapse>


            </Nav>

        

        <div className="hidden-lg navbar-dark pull-left">


        <Navbar.Toggle />


        </div>
       

        </Container>

        </Navbar>

    {/* </div> */}

    </div>
</>
    )
}
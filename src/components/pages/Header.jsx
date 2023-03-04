import React from "react";
import Logo from "../logo/logo.jpg";

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

            <div className="navlist">

            <ul className="nav nav-tabs">

                <li className="nav-item">


            <a href="#home" onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link nav-tabs active" : "nav-link nav-tabs"}>
       
            Home
            </a>

            </li>

            <li className="nav-item">

            <img id="logo" src={Logo}></img>

            </li>

            <li className="nav-item">

            
                <a

            href="#gallery"
            onClick={() => handlePageChange("Gallery")}
            className={currentPage === "Gallery" ? "nav-link active" : "nav-link"}
            >
            Gallery

                </a>

                </li>

                </ul>

            </div>


    

        </div>
        </>
    )
}
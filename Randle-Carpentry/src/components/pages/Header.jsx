import React from "react";
import Logo from "../logo/logo.jpg";

export default function Header() {

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
            document.getElementById("logo").style.width = "120px"; document.getElementById("logo").style.height = "100px";
            }  else if (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {
                document.getElementById("logo").style.width = "140px"; document.getElementById("logo").style.height = "120px";
            } 
        
    }

    // function logo() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         document.querySelector(".logo").style.width = "120px";
    //     } else if (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {
    //         document.querySelector(".logo").style.width = "150px";
    //     }
    // }

      
    return (
        <>
        <div id="head">


            <img id="logo" src={Logo}></img>

            {/* <a href="#home">
            Home
            </a>
            <a href="#contact">
            Contact Me
            </a> */}


        </div>
        </>
    )
}
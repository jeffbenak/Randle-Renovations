import React from "react";

export default function Header() {

    window.onscroll = function() {
        scroll();
    };

    function scroll() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("header").style.top = "-20px";
        }  else if (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {
            document.getElementById("header").style.top = "0";
        }

    }
      

    return (
        <>
        <div id="head">

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
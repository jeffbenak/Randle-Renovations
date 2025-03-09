import React from "react";
import Logo from "../images/logo/logo.jpeg";
import { NavLink } from "react-router-dom";


export default function Header() {

    window.onscroll = function() {
        scroll();
    };

    function scroll() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("head").style.top = "-25px";
            document.getElementById("logo").style.width = "100px"; 
            document.getElementById("logo").style.height = "90px";
            document.getElementById("logo").style.marginTop = "35px";
        }  else if (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {
            document.getElementById("head").style.top = "0"; 
            document.getElementById("logo").style.height = "110px";
            document.getElementById("logo").style.width = "120px";
            document.getElementById("logo").style.marginTop = "20px";
        } 
    }

return (
        <>
            <div id="head">
                

                <NavLink to="/" 
                onClick={() => {
                    window.scrollTo(0, 0);
                }}><img id="logo" src={Logo}></img></NavLink>
            


            </div>
        </>
        )
    }
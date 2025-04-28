import React from "react";
import Header from "./Header";
import builtin1 from "../images/Built-Ins/built-in-1.jpg";
import builtin2 from "../images/Built-Ins/built-in-2.jpg";
import builtin3 from "../images/Built-Ins/built-in-3.jpg";
import builtin4 from "../images/Built-Ins/built-in-4.jpg";
import builtin5 from "../images/Built-Ins/built-in-5.jpg";
import builtin6 from "../images/Built-Ins/built-in-6.jpg";



export default function BuiltIns() {

    return (
        <>
                <a name="header"></a>
                <Header></Header>
        <div className="gallery-page">



        <h1>Built-In Photos</h1>
        <hr className="gallery-hr"></hr>

            <div className="image-section">

                <div className="row-section m-top">

                    <img className="img-animate" src={builtin1}></img>

                    <img className="img-animate" src={builtin2}></img>

                </div>

                
                <div className="row-section">

                    <img className="img-animate" src={builtin3}></img>

                    <img className="img-animate" src={builtin4}></img>

                </div>

                              
                <div className="row-section">

                    <img className="img-animate" src={builtin5}></img>

                    <img className="img-animate" src={builtin6}></img>

                </div>


            </div>

        <p className="gallery-top">
            <a className='backtotop' href='#header'>Back to top</a>
        </p>

            <p className="gallery-copyright">Copyright &#169; 2025 Randle Renovations. All Rights Reserved. </p>


        </div>
        

        
        </>
    )
}
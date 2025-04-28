import React from "react";
import Header from "./Header";
import trimdoor1 from "../images/Trim-Doors/trim-doors-1.jpg";
import trimdoor2 from "../images/Trim-Doors/trim-doors-2.jpg";
import trimdoor3 from "../images/Trim-Doors/trim-doors-3.jpg";
import trimdoor4 from "../images/Trim-Doors/trim-doors-4.jpg";
import trimdoor5 from "../images/Trim-Doors/trim-doors-5.jpg";





export default function Trimdoors() {

    return (
        <>
                <a name="header"></a>
                <Header></Header>
        <div className="gallery-page">



        <h1>Trim Door Photos</h1>
        <hr className="gallery-hr"></hr>

            <div className="image-section">

                <div className="row-section m-top">

                    <img className="img-animate" src={trimdoor1}></img>

                    <img className="img-animate" src={trimdoor2}></img>

                </div>

                
                <div className="row-section">

                    <img className="img-animate" src={trimdoor3}></img>

                    <img className="img-animate" src={trimdoor4}></img>

                </div>

                              
                <div className="row-section">

                    <img className="img-animate" src={trimdoor5}></img>

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
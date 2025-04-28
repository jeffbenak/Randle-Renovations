import React from "react";
import Header from "./Header";
import floorstairs1 from "../images/Floor-Stairs/floor-stairs-1.jpg";
import floorstairs2 from "../images/Floor-Stairs/floor-stairs-2.jpg";
import floorstairs3 from "../images/Floor-Stairs/floor-stairs-3.jpg";
import floorstairs4 from "../images/Floor-Stairs/floor-stairs-4.jpg";
import floorstairs5 from "../images/Floor-Stairs/floor-stairs-5.jpg";
import floorstairs6 from "../images/Floor-Stairs/floor-stairs-6.jpg";
import floorstairs7 from "../images/Floor-Stairs/floor-stairs-7.jpg";
import floorstairs8 from "../images/Floor-Stairs/floor-stairs-8.jpg";
import floorstairs9 from "../images/Floor-Stairs/floor-stairs-9.jpg";
import floorstairs10 from "../images/Floor-Stairs/floor-stairs-10.jpg";
import floorstairs11 from "../images/Floor-Stairs/floor-stairs-11.jpg";
import floorstairs12 from "../images/Floor-Stairs/floor-stairs-12.jpg";
import floorstairs13 from "../images/Floor-Stairs/floor-stairs-13.jpg";
import floorstairs14 from "../images/Floor-Stairs/floor-stairs-14.jpg";





export default function FloorStairs() {

    return (
        <>
                <a name="header"></a>
                <Header></Header>
        <div className="gallery-page">



        <h1>Floors & Stairs Photos</h1>
        <hr className="gallery-hr"></hr>

            <div className="image-section">

                <div className="row-section m-top">

                    <img className="img-animate" src={floorstairs1}></img>

                    <img className="img-animate" src={floorstairs2}></img>

                </div>

                
                <div className="row-section">

                    <img className="img-animate" src={floorstairs3}></img>

                    <img className="img-animate" src={floorstairs4}></img>

                </div>

                              
                <div className="row-section">

                    <img className="img-animate" src={floorstairs5}></img>

                    <img className="img-animate" src={floorstairs6}></img>

                </div>


                <div className="row-section">

                    <img className="img-animate" src={floorstairs7}></img>

                    <img className="img-animate" src={floorstairs8}></img>

                </div>


                <div className="row-section">

                    <img className="img-animate" src={floorstairs9}></img>

                    <img className="img-animate" src={floorstairs10}></img>

                </div>


                <div className="row-section">

                    <img className="img-animate" src={floorstairs11}></img>

                    <img className="img-animate" src={floorstairs12}></img>

                </div>

                
                <div className="row-section">

                    <img className="img-animate" src={floorstairs13}></img>

                    <img className="img-animate" src={floorstairs14}></img>

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
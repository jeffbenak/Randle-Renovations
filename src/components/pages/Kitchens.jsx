import React from "react";
import Header from "./Header";
import kitchen1 from "../images/Kitchens/kitchen-1.jpg";
import kitchen2 from "../images/Kitchens/kitchen-2.jpg";
import kitchen3 from "../images/Kitchens/kitchen-3.jpg";
import kitchen4 from "../images/Kitchens/kitchen-4.jpg";
import kitchen5 from "../images/Kitchens/kitchen-5.jpg";
import kitchen6 from "../images/Kitchens/kitchen-6.jpg";





export default function Kitchens() {

    return (
        <>
                <a name="header"></a>
                <Header></Header>
        <div className="gallery-page">



        <h1>Kitchen Photos</h1>
        <hr className="gallery-hr"></hr>

            <div className="image-section">

                <div className="row-section m-top">

                    <img className="img-animate" src={kitchen1}></img>

                    <img className="img-animate" src={kitchen2}></img>

                </div>

                
                <div className="row-section">

                    <img className="img-animate" src={kitchen3}></img>

                    <img className="img-animate" src={kitchen4}></img>

                </div>

                              
                <div className="row-section">

                    <img className="img-animate" src={kitchen5}></img>

                    <img className="img-animate" src={kitchen6}></img>

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
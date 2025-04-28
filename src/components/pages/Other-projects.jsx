import React from "react";
import Header from "./Header";
import other1 from "../images/Other-projects/other-1.jpg";
import other2 from "../images/Other-projects/other-2.jpg";
import other3 from "../images/Other-projects/other-3.jpg";
import other4 from "../images/Other-projects/other-4.jpg";
import other5 from "../images/Other-projects/other-5.jpg";





export default function Otherprojects() {

    return (
        <>
                <a name="header"></a>
                <Header></Header>
        <div className="gallery-page">



        <h1>Other Project Photos</h1>
        <hr className="gallery-hr"></hr>

            <div className="image-section">

                <div className="other-section m-top">

                    <img className="img-animate" src={other1}></img>

                    <img className="img-animate" src={other2}></img>

                </div>

                
                <div className="other-section">

                    <img className="img-animate" src={other3}></img>

                    <img className="img-animate" src={other4}></img>

                </div>

                              
                <div className="other-section">

                    <img className="img-animate" src={other5}></img>

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
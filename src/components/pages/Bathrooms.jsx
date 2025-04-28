import React, { useEffect } from 'react';
import Header from "./Header";
import bathroom1 from "../images/Bathrooms/bathroom-1.jpg";
import bathroom2 from "../images/Bathrooms/bathroom-2.jpg";
import bathroom3 from "../images/Bathrooms/bathroom-3.jpg";
import bathroom4 from "../images/Bathrooms/bathroom-4.jpg";
import bathroom5 from "../images/Bathrooms/bathroom-5.jpg";
import bathroom6 from "../images/Bathrooms/bathroom-6.jpg";
import bathroom7 from "../images/Bathrooms/bathroom-7.jpg";
import bathroom8 from "../images/Bathrooms/bathroom-8.jpg";
import bathroom9 from "../images/Bathrooms/bathroom-9.jpg";
import bathroom10 from "../images/Bathrooms/bathroom-10.jpg";
import bathroom11 from "../images/Bathrooms/bathroom-11.jpg";
import bathroom12 from "../images/Bathrooms/bathroom-12.jpg";
import bathroom13 from "../images/Bathrooms/bathroom-13.jpg";
import bathroom14 from "../images/Bathrooms/bathroom-14.jpg";
import bathroom15 from "../images/Bathrooms/bathroom-15.jpg";
import bathroom16 from "../images/Bathrooms/bathroom-16.jpg";
import bathroom17 from "../images/Bathrooms/bathroom-17.jpg";
import bathroom18 from "../images/Bathrooms/bathroom-18.jpg";
import bathroom19 from "../images/Bathrooms/bathroom-19.jpg";
import bathroom20 from "../images/Bathrooms/bathroom-20.jpg";
import bathroom21 from "../images/Bathrooms/bathroom-21.jpg";
import bathroom22 from "../images/Bathrooms/bathroom-22.jpg";
import bathroom23 from "../images/Bathrooms/bathroom-23.jpg";
import bathroom24 from "../images/Bathrooms/bathroom-24.jpg";
import bathroom25 from "../images/Bathrooms/bathroom-25.jpg";
import bathroom26 from "../images/Bathrooms/bathroom-26.jpg";
import bathroom27 from "../images/Bathrooms/bathroom-27.jpg";




export default function Bathrooms({ imageUrls = [] }) {
    // useEffect(() => {
    //   const observer = new IntersectionObserver(
    //     (entries, obs) => {
    //       entries.forEach(entry => {
    //         if (entry.intersectionRatio >= 0.5) {
    //           entry.target.classList.add('is-visible');
    //           obs.unobserve(entry.target);
    //         }
    //       });
    //     },
    //     {
    //       root: null,
    //       rootMargin: '0px',
    //       threshold: 0.5,
    //     }
    //   );

    //   document
    //     .querySelectorAll('.img-animate')
    //     .forEach(img => observer.observe(img));
  
    //   return () => observer.disconnect();
    // }, []);



    return (
        <>
                <a name="header"></a>
                <Header></Header>
        <div className="gallery-page">



        <h1>Bathroom Photos</h1>
        <hr className="gallery-hr"></hr>



        <div className="image-section">
{/* 
        {imageUrls.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`pic-${i}`}
              className="img-animate fade-in"
            />
          ))}


          {[ bathroom1, bathroom2 ].map((src, i) => (
            <div className="row-section m-top" key={i}>
              <img className="left-animate img-animate" src={bathroom1} alt="" />
              <img className="right-animate img-animate" src={bathroom2} alt="" />
            </div>
          ))} */}

                
                <div className="row-section">

                    <img className="up-animate img-animate" src={bathroom1}></img>

                    <img className="down-animate img-animate" src={bathroom2}></img>

                </div>

                
                <div className="row-section">

                    <img className="up-animate img-animate" src={bathroom3}></img>

                    <img className="down-animate img-animate" src={bathroom4}></img>

                </div>

                              
                <div className="row-section">

                    <img className="img-animate" src={bathroom5}></img>

                    <img className="img-animate" src={bathroom6}></img>

                </div>

                              
                <div className="row-section">

                    <img className="img-animate" src={bathroom7}></img>

                    <img className="img-animate" src={bathroom8}></img>

                </div>

                              
                <div className="row-section">

                    <img className="img-animate" src={bathroom9}></img>

                    <img className="img-animate" src={bathroom10}></img>

                </div>

                              
                <div className="row-section">

                    <img className="img-animate" src={bathroom11}></img>

                    <img className="img-animate" src={bathroom12}></img>

                </div>

                              
                <div className="row-section">

                    <img className="img-animate" src={bathroom13}></img>

                    <img className="img-animate" src={bathroom14}></img>

                </div>
                              
                <div className="row-section">

                    <img className="img-animate" src={bathroom15}></img>

                    <img className="img-animate" src={bathroom16}></img>

                </div>

                              
                <div className="row-section">

                    <img className="img-animate" src={bathroom17}></img>

                    <img className="img-animate" src={bathroom18}></img>

                </div>

                              
                <div className="row-section">

                    <img className="img-animate" src={bathroom19}></img>

                    <img className="img-animate" src={bathroom20}></img>

                </div>

                              
                <div className="row-section">

                    <img className="img-animate" src={bathroom21}></img>

                    <img className="img-animate" src={bathroom22}></img>

                </div>

                              
                <div className="row-section">

                    <img className="img-animate" src={bathroom23}></img>

                    <img className="img-animate" src={bathroom24}></img>

                </div>

                              
                <div className="row-section">

                    <img className="img-animate" src={bathroom25}></img>

                    <img className="img-animate" src={bathroom26}></img>

                </div>

                              
                <div className="row-section">

                    <img className="img-animate" src={bathroom27}></img>

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
import React, { useState } from "react";
import "../../asset/styles/HomeMainStyle/HomeVideo.css";
import image1 from "../../asset/images/slider_image1.png";
import image2 from "../../asset/images/slider_image2.webp";
import image3 from "../../asset/images/slider_image3.jpeg";
import image4 from "../../asset/images/slider_image4.webp";
import image5 from "../../asset/images/slider_image5.jpeg";
import image6 from "../../asset/images/slider_image6.webp";
import image7 from "../../asset/images/slider_image7.webp";
import image8 from "../../asset/images/slider_image8.webp";


const HomeVideo = () => {
    const [isPaused, setIsPaused] = useState(false);

    const images = [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
    ];

    const imageArray = [...images, ...images]

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <div className="slider-container">
            <h1>Templates designed to sell.</h1>
            <p>Choose  from 100s of designs for every idea and industry.</p>
            <div 
            className={`slider ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <div className="slider-content">
                    {imageArray.map((src,index) => (
                        <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="slider-image"
                        />
                    ))}
                    
      
                </div>
            </div>
            <button className="try-domain-button">
                Browse All Templates
                <span className="arrow-icon">→</span>
            </button>
        </div>
    );

};

export default HomeVideo;
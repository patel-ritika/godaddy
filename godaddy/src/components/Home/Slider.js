import React, { useState } from 'react';
import "../../asset/styles/HomeMainStyle/Slider.css";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const boxes = [
    {
      title: "THE SUPPORT PERSON HAVE GOOD KNOWLEDGE",
      paragraph: "The support person have good knowledge and help with good suggestion on improving my setting that is extraordinary.",
      name: "Niraj Singh"
    },
    {
      title: "10 ON 10 CUSTOMER SUPPORT.",
      paragraph: "The support provided by GoDaddy is the best in the industry with knowledgeable customer agents and best practices. They offer the best rates upfront over the call.",
      name: "Chandrashekar Mhaskar"
    },
    {
      title: "GOOD COMMUNICATION SKILL BY SUPPORT ASSISTANT",
      paragraph: "Great Product and Service Customer Support Assistent from Godaddy Support Team",
      name: "Prashant Khambhayata"
    },
    {
      title: "GODADDY CUSTOMER SUPPORT IS 100%...",
      paragraph: "Godaddy customer support is 100% reliable for all website-related support. The support staff are reliable, quick, knowledgeable, and always ready to help.",
      name: "Sirisha Ramaraju"
    },
    {
      title: "EXCELLENT SERVICE GODADDY",
      paragraph: "Very Nice Service. CustomerCare People are So Polite.Good Offers. Clarifed Each And Every Point, Discounts Also. Finally Happy with the GoDaddy Support.",
      name: "KAPU CARZ HUB"
    },
    {
      title: "GODADDY REALLY GOES!",
      paragraph: "Easiest and smooth experience for website and domain registration/hosting. The customer service is amazing in troubleshooting and resolving issues: always going all the way to ensure we get the best.",
      name: "Kannan Rajaram"
    },
    {
      title: "POLITE AND HELPFUL CUSTOMER SERVICE",
      paragraph: "The customer support at GoDaddy is extremely polite and helpful. I get my problems sorted out in quick time. Thanks!",
      name: "Prashant Misra"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (boxes.length - 2));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + boxes.length - 2) % (boxes.length - 2));
  };
  return (
    <div className="box-slider-container">
      <div className="box-slider-wrapper" style={{
        transform: `translateX(-${currentIndex * 100}%)`
      }}>
        {boxes.map((box, index) => (
          <div key={index} className="box-slider-box">
            <h4>{box.title}</h4>
            <div className="stars">
              {[...Array(5)].map((_, starIndex) => (
                <span key={starIndex} className="star">&#9733;</span>
              ))}
            </div>
            <p>{box.paragraph}</p>
            <h5>{box.name}</h5>
          </div>
        ))}
      </div>
      <button className="box-slider-button prev" onClick={handlePrevious}>←</button>
      <button className="box-slider-button next" onClick={handleNext}>→</button>
      <div className="fivestar">
        <h1>&#9733; Trustpilot</h1>
        <h4>4.6 out of 5 stars based on 105,049 reviews | Showing our 4 and 5 stars reviews.</h4>
      </div>
    </div>
  );
  
};

export default Slider;

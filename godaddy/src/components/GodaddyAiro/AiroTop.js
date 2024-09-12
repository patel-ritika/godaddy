import React from 'react';
import "../../asset/styles/GoDaddyMainStyle/AiroTop.css";
import airologo from "../../asset/images/airologo.png";
import airotop_img1 from "../../asset/images/airotop_img1.webp";

const AiroTop = () => {
  return (
    <div>
    <div className="top_part">
      <img src={airologo} alt="logo"/>
      <h1>Buy a domain, then instantly build a<br></br>
      website, logo, and more.</h1>
      <p>Say hello to GoDaddy Airo, our AI-fueled, customizable experience included with any new domain purchase.</p>
      <input type="text" placeholder="Type the domain you want or tell us your business idea"/>
    </div>
    <div className="search_domain">
        <button>Search Domains</button>
    </div>

    <div className="top_image">
      <img src={airotop_img1} alt="topimg"/>
    </div>
    </div>
  );
}

export default AiroTop;

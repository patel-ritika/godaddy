import React from 'react';
import "../../asset/styles/HomeMainStyle/HomeBanner.css";
import banner1 from "../../asset/images/banner1.jpg";
import fruit from "../../asset/images/fruit.webp";
import banner2 from "../../asset/images/banner2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import banner3 from "../../asset/images/banner3.jpg";
import { CiGlobe } from "react-icons/ci";
import banner4 from "../../asset/images/white.jpg";
import { IoCall } from "react-icons/io5";
import banner5 from "../../asset/images/vision.webp";
import suraiya from "../../asset/images/suraiya.webp";

const HomeBanner = () => {
  return (
    <div className="banner">
      <div className="work">
        <h1>Why work with GoDaddy ?</h1>
        <h4>84+ million domains, 22 million customers, millions of websites,<br></br>
        email and security -- we help grow businesses.</h4>
        <img src={banner1} alt="banner1"/>
        <h3>.com to .xyz -- a huge<br></br>
        selection from the largest<br></br>
        domain register.</h3>
      </div>
      <div className="fruit">
        <img src={fruit} alt="fruit"/>
      </div>
      <div className="com">
      <button>______________.com</button>
      </div>
      <div className="banner2">
        <img src={banner2} alt="banner2"/>
        <h3>Zzzz... security to help<br></br>
        you sleep easy every<br></br>
        night.</h3>
        <button> <FontAwesomeIcon icon={faLock} /> https://</button>
      </div>
      <div className="banner3">
        <img src={banner3} alt="banner3"/>
        <h2><CiGlobe  size={30} color='#00838C'/><br></br>
        More than URLs. 21+<br></br>
        million trust us for their<br></br>
        domains and more.</h2>
      </div>
      <div className="banner4">
        <img src={banner4} alt="banner4"/>
        <h2><IoCall size={40} color='#00838C'/><br></br>
        We're here with the help<br></br>
        and advice you need. Call<br></br>
        us for award - winning<br></br>
        support.</h2>
      </div>
      <div className="banner5">
        <img src={banner5} alt="banner5"/>
        <h2>Tools for every small<br></br>
        business first ---<br></br>
        websites, email,<br></br>
        marketing, and more.</h2>
      </div>

    <div className="real">
      <div className="perfect">
        <h1>It all starts with a domain.</h1>
        <h4>Make your idea real. Claim your space online with a domain.</h4>
        <input type="text" placeholder="Find your perfect domain"/>
      </div>
      <div className="search">
      <button>Search</button>
      </div>
     </div>
     <div className="suraiya">
       <img src={suraiya} alt="suraiya"/>
       <h3>Suraiya J.<br></br>
       GoDaddy Guide</h3>
       <h2>GoDaddy <span>guides</span></h2>
       <h1>Why go with<br></br>
       GoDaddy ?</h1>
       <p>Because we know that even the best technology is only as good as<br></br>
       the people behind it. That's why we offer expert support, plus a lot<br></br>
       more.</p>
       </div>
       <div className="get">
       <button>Get Help</button>
       </div>
      
    </div>
  );
}

export default HomeBanner;

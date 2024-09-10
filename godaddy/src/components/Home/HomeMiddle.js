import React from 'react';
import "../../asset/styles/HomeMainStyle/HomeMiddle.css";
import camera from "../../asset/images/camera.webp";
import white from "../../asset/images/white.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { PiCertificate } from "react-icons/pi";
import camera1 from "../../asset/images/camera1.jpeg";

const HomeMiddle = () => {
  return (
    <div>
        <div className="middle">
            <h1>Onward and upward with<br></br>
            our customers.</h1>
            <img src={camera} alt="camera"/>
        </div>
        <div className="underdetail">
            <img src={white} alt="white"/>
            <h1>"GoDaddy's Website Builder is<br></br>
            super-convenient for somebody<br></br>
            who has an idea of what they're<br></br>
            trying to create, but might not have<br></br>
            any technical skills."</h1>
            <h4>Products used by</h4>
            <h5>Roletape:</h5>
            <ul>
                <li><FontAwesomeIcon icon={faMagnifyingGlass} /> Domain</li>
                <li><FontAwesomeIcon icon={faStore} /> Online Store</li>
                <li><PiCertificate /> SSL Certificates</li>
            </ul>
        </div>
        <div className="backimage">
            <img src={camera1} alt="camera1"/>
        </div>

        <div className="last">
            <h1>Trusted by 20+ million<br></br>
            customers around the world.</h1>
        </div>
      
    </div>
  );
}

export default HomeMiddle;

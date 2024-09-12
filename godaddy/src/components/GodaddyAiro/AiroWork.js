import React from 'react';
import "../../asset/styles/GoDaddyMainStyle/AiroWork.css";
import { FaSearch } from "react-icons/fa";
import airobackground from "../../asset/images/airobackground.webp";

const AiroWork = () => {
  return (
    <div>
      <div className="send">
        <h1>Send your business soaring with<br></br>
        GoDaddy Airo™</h1>
        <input type="text" placeholder="Type the domain you want or tell us your business idea"/>
      </div>
      <div className="input_bt">
        <button><FaSearch size={20} color='white'/></button>
      </div>
      <div className="background">
        <img src={airobackground} alt="back"/>
        <h1>GoDaddy Airo™<br></br>
        works<br></br>
        for you.</h1>
      </div>
    </div>
  );
}

export default AiroWork;

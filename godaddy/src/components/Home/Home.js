import React from 'react';
import "../../asset/styles/HomeMainStyle/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import img1 from "../../asset/images/image1.png";
import black from "../../asset/images/black.jpg";


const Home = () => {
  return (
    <div>
      <div className="header2">
        <input type="text" placeholder="Type the domain you want"/>
         
        
      </div>

      <div className="sd">
      <button>Search Domains</button>
      </div>

     <div className="bt1">
      <button><h3>.world</h3> <h4><FontAwesomeIcon icon={faIndianRupeeSign} />251.26*/1st yr.</h4>
      <h5>Explore possibilities with .world</h5>
      </button>
     </div>

    <div className="main">
      <img src={img1} alt="img1" />
    </div>
    
    <div className="btn">
    <button className="try-domain-button">
					Learn More <span className="arrow-icon">→</span>
				</button>
        </div>
 
    <div className="blackimg">
      <img src={black} alt="black"/>
    </div>

    <div className="new">
      <button>NEW</button>
    </div>

    <div className="suggest">
      <h4>AI Suggested Domains</h4>
      <h3>Find the perfect<br></br>
      domain and<br></br>
      business name<br></br>
      with AI.</h3>
    </div>

    <div className="try_ai_domain">
      <button>Try AI Domain Search<span className="arrow-icon">→</span></button>
    </div>
        

      

    </div>
  );
}

export default Home;

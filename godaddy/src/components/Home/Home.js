import React from 'react';
import "../../asset/styles/HomeMainStyle/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import img1 from "../../asset/images/image1.png";



const Home = () => {
  return (
    <div>
      <div className="header2">
        <FontAwesomeIcon icon={faMagnifyingGlass} />  Type the domain you want
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


        <div className="btn1">
        <button className="find">
          <button>NEW</button>
           <h3>AI Suggested Domains</h3>
           <h2>Find the perfect<br></br>
               domain and<br></br>
               business name<br></br>
               with AI.
           </h2>
           <div className="btn2">
           <button className="try">
            Try AI Domain Search <span className="arrow-icon">→</span>
           </button>
           </div>
        </button>
        </div>

      

    </div>
  );
}

export default Home;

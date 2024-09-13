import React from 'react';
import "../../asset/styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from "../../asset/images/logo.png";
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div>
    <div className="header">
      <div className="logo">
              <img src={logo}  alt="logo"/>
              </div>
            <nav>
                <ul>
                    <li><a href="#Domains">Domains <FontAwesomeIcon icon={faAngleDown} /></a></li>
                    <li><a href="#Websites and Hosting">Websites and Hosting <FontAwesomeIcon icon={faAngleDown} /></a></li>
                    <li><Link to="/email">Email</Link></li>
                    <li><a href="#Security">Security <FontAwesomeIcon icon={faAngleDown} /></a></li>
                    <li><a href="#Marketing">Marketing <FontAwesomeIcon icon={faAngleDown} /></a></li>
                    <li><Link to="/godaddyairo">GoDaddy Airo</Link></li>
                    <li><a href="#Pricing">Pricing</a></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><a href="#Sign In">Sign In <FontAwesomeIcon icon={faAngleDown} /></a></li>
                    <li><a href="#Help">Help</a></li>
                    <div className="icon">
                    <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                </ul>
            </nav>
         </div>


       

      </div>

        
  );
}

export default Header;

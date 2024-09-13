import React, { useState } from 'react';
import "../../asset/styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../asset/images/logo.png";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Hamburger icon


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
    <div className="header">
      <div className="logo">
              <img src={logo}  alt="logo"/>
              </div>
              <div className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </div>
            <nav>
                <ul className={menuOpen ? 'show' : ''}>
                    <li><a href="#Domains">Domains <FontAwesomeIcon icon={faAngleDown} /></a></li>
                    <li><a href="#Websites and Hosting">Websites and Hosting <FontAwesomeIcon icon={faAngleDown} /></a></li>
                    <li><Link to="/email">Email</Link></li>
                    <li><a href="#Security">Security <FontAwesomeIcon icon={faAngleDown} /></a></li>
                    <li><a href="#Marketing">Marketing <FontAwesomeIcon icon={faAngleDown} /></a></li>
                    <li><Link to="/godaddyairo">GoDaddy Airo</Link></li>
                    <li><a href="#Pricing">Pricing</a></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><a href="#Sign In">Sign In <FontAwesomeIcon icon={faAngleDown} /></a></li>
                    <li><Link to="/help">Help</Link></li>
                    <div className="icon">
                    <FaShoppingCart color='white' />
                    </div>
                </ul>
            </nav>
         </div>


       

      </div>

        
  );
}

export default Header;

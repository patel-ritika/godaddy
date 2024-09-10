import React from 'react';
import "../../asset/styles/Footer.css";
import logo from '../Footer/logo.png';
import { IoIosArrowDropup } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-footer">
        <div className="left-footer">
            <h3>About GoDaddy</h3>
            <ul>
                <li>About Us</li>
                <li>Annual Returns</li>
                <li>Careera</li>
                <li>Contact Us</li>
                <li>Corporate Social</li>
                <li>Responsibility</li>
                <li>GoDaddy Blog</li>
                <li>Investor Relations</li>
                <li>Legal</li>
                <li>Newsroom</li>
                <li>Trust Center</li>
            </ul>
        </div>

        <div className="middle1">
            <h3>Support</h3>
            <ul>
                <li>Product</li>
                <li>Support</li>
                <li>Report Abuse</li>
                <li>Resources</li>
            </ul>
        </div>

        <div className="middle2">
           <h3>Resources</h3>
           <ul>
            <li>Webmail</li>
            <li>WHOIS</li>
            <li>ICANN Confirmation</li>
            <li>Designers & Developers</li>
            <li>Redeem Code</li>
            <li>Product Catalog</li>
            <li>Customer Testimoniais</li>
            <li>Business Name</li>
            <li>Generator</li>
           </ul>
        </div>      

        <div className="middle3">
            <h3>Partner Programs</h3>
            <ul>
                <li>Affiliates</li>
                <li>Reseller Programs</li>
                <li>GoDaddy Pro</li>
            </ul>
        </div>

        <div className="right-footer">
            <h3>Account</h3>
            <ul>
                <li>My Products</li>
                <li>Renewals & Billing</li>
                <li>Create Account</li>
            </ul>
        </div>

        <div className="right-footer1">
            <h3>Shopping</h3>
            <ul>
                <li>Buy a Domain</li>
                <li>Websites</li>
                <li>Business Email</li>
                <li>WordPress</li>
                <li>Hosting</li>
                <li>Web Security</li>
                <li>Logo</li>
                <li>Generator</li>
            </ul>
        </div>

        <div className="last">
            <img src={logo} alt="logo"/>
            <h4>India - English  </h4>
        </div>
        <div className="react-icon">
        <IoIosArrowDropup  className="custome-icon" size={20} />
        </div>

        <div className="last1">
            <h4>INR <FontAwesomeIcon icon={faIndianRupeeSign} /> </h4>
        </div>
        <div className="react-icon1">
        <IoIosArrowDropup  className="custome-icon" size={20} />
        </div>

        <div className="fb">
        <CiFacebook className="facebook" size={30}/>
        </div>

        <div className="insta">
        <FaInstagram className="instagram" size={30}/>
        </div>

        <div className="youtube">
        <FaYoutube className="utube" size={30}/>
        </div>

        <hr className="horizontal-line" />
        <div className="footer2">
            <p>Copyright © 1999 - 2024 GoDaddy Operating Company, LLC. All Rights Reserved. The GoDaddy word mark is a registered trademark of GoDaddy Operating Company, LLC in the US and other countries.<br></br> The “GO” logo is a registered trademark of GoDaddy.com, LLC in the US.</p>
            <h6>Use of this Site is subject to express terms of use. By using this site, you signify that you agree to be bound by these Universal Terms of Service.</h6>
        </div>
    </div>
  );
}

export default Footer;

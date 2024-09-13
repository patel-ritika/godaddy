import React from 'react';
import "../../asset/styles/Helpstyle/helpmain.css";
import helpimg from "../../asset/images/contactmain.webp";
import { FaSearch } from "react-icons/fa";
import helplogo from "../../asset/images/airologo.png";
import { CiSettings } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { SiWindows } from "react-icons/si";
import { BsWindowSidebar } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaCpanel } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";

const Helpmain = () => {
  return (
    <div>
      <div className="help_part">
        <div className="help_part1">
            <img src={helpimg} alt="help"/>
        </div>

        <div className="help_right">
            <h4>Enkidu D.<br></br>
            GoDaddy Guide</h4>
        </div>

        <div className="help_left">
            <h3>GoDaddy guides</h3>
            <h1>Help Center</h1>
            <p>We're here with the help and advice you need to bring your idea to life. When you're<br></br>
             ready to get online, we're prepped, trained, and ready to guide you from start to<br></br>
              success.</p>
              <input type="text" placeholder="What can we help with?"/>
        </div>
        <div className="searchbt">
            <button><FaSearch size={20} color='white'/></button>
        </div>

        <div className="headline">
            <h3>New to GoDaddy? </h3>
            <h4>Get started with our product tutorials,</h4>
            <p>including guidance for our AI-powered solution</p>
            <img src={helplogo} alt="logo"/>
        </div>
      </div>

      <div className="multi_icon">
        <div className="icon1">
        <CiSettings size={80}/>
        <h3>Account<br></br>
        Management</h3>
        </div>

        <div className="icon2">
        <CiGlobe size={80}/>
        <h3>Domains</h3>
        </div>
      
      <div className="icon3">
      <SiWindows size={80}/>
      <h3>Microsoft 365<br></br>
      from GoDaddy</h3>
      </div>

      <div className="icon4">
      <BsWindowSidebar size={80}/>
      <h3>Websites + <br></br>
      Marketing</h3>
      </div>

      <div className="icon5">
      <AiFillSafetyCertificate size={80}/>
      <h3>SSL Certificates</h3>
      </div>

      <div className="icon6">
      <FaCpanel size={80}/>
      <h3>Linux Hosting<br></br>
      (cPanel)</h3>
      </div>

      <div className="icon7">
      <FaWordpress size={80}/>
      <h3>Managed<br></br>
      WordPress</h3>
      </div>

      <div className="icon8">
      <CiSettings size={80}/>
      <h3>GoDaddy Studio</h3>
      </div>
      </div>

      <div className="main_list">
        <div className="list_1">
          <h3>Online Marketing</h3>
          <ul>
            <li>Digital Marketing</li>
            <li>Search Engine Visibility</li>
          </ul>
        </div>

        <div className="list_2">
          <h3>Productivity</h3>
          <ul>
            <li>Professional Email</li>
          </ul>
        </div>

        <div className="list_3">
          <h3>Websites & Security</h3>
          <ul>
            <li>Website Security and Backups</li>
          </ul>
        </div>

        <div className="list_4">
          <h3>Hosting & Servers</h3>
          <ul>
            <li>Gen 4 VPS & Dedicated Servers</li>
            <li>Windows Hosting (Plesk)</li>
            <li>WordPress</li>
            <li>Managed WordPress Ecommerce</li>
          </ul>
        </div>

        <div className="list_5">
          <h3>Partner Programs</h3>
          <ul>
            <li>API Reseller</li>
            <li>Basic & Pro Reseller</li>
            <li>The Hub by GoDaddy Pro</li>
            <li>GoDaddy Pro</li>
          </ul>
        </div>

        <div className="list_6">
          <h3>Domain Aftermarket</h3>
          <ul>
            <li>GoDaddy Auctions</li>
            <li>List for Saale</li>
            <li>Domain Broker Service</li>
            <li>CashParking</li>
            <li>Backorders & Monitoring</li>
          </ul>
        </div>

        <div className="list_7">
          <h3>Legacy</h3>
          <ul>
            <li>GoDaddy Email Marketing</li>
            <li>Premium Online Store</li>
            <li>Web & Classic Hosting</li>
            <li>Website Builder 7</li>
          </ul>
        </div>
      </div>

      <div className="headline1">
        <h3>Need help? <span>Contact our award-winning support team</span></h3>
      </div>


    </div>
  );
}

export default Helpmain;

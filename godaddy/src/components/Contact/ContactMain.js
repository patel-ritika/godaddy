import React from 'react';
import "../../asset/styles/contactstyle/contactmain.css";
import contactmain from "../../asset/images/contactmain.webp";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const ContactMain = () => {
  return (
    <div>
      <div className="contact_part">
        <img src={contactmain} alt="main"/>
      </div>
      <div className="right_side">
        <h4>Enkidu D.</h4>
        <h3>GoDaddy Guide</h3>
      </div>

      <div className="left_side">
        <h3>GoDaddy guides</h3>
        <h1>We're here to help 24/7</h1>
        <p>Every guide is trained and excited to work with ou, whether you need help with a<br></br>
        password reset or you're looking for a team to build your complete web presence.</p>
      </div>

      <div className="call_chat">
          <div className="call">
            <h2>Call Us</h2>
            <p>Contact our award-winning support team</p>
            <h4>040-67607600</h4>
            <h5>Everyday 9:00 am - 7:00 pm.</h5>
            <h5>Global Directory</h5>
            <h4>Phone numbers and hours</h4>
          </div>

        <div className="chat">
            <h2>Chat Now</h2>
            <p>Chat for quick help on product issues, your account, and<br></br>
            more.</p>
            <h3> <IoChatboxEllipsesOutline size={20} /> start Chatting </h3>
            <h3> <FaWhatsapp size={20} /> WhatsApp</h3>
            <h4>Hours: 24x7 Chat</h4>
        </div>

      </div>
    </div>
  );
}

export default ContactMain;

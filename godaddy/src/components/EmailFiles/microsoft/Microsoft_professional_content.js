import React from 'react';
import "../../../asset/styles/emailfiles/microsoft/microsoft_professional_content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import microsoft_img1 from "../../../asset/images/microsoft_img1.webp";
import microsoft_img2 from "../../../asset/images/microsoft_img2.webp";
import microsoft_img3 from "../../../asset/images/microsoft_img3.webp";
import microsoft_img4 from "../../../asset/images/microsoft_img4.webp";

const Microsoft_professional_content = () => {
  return (
    <div className="container">
    {/* First section */}
    <div className="section reverse">
      <div className="left-image">
        <img src={microsoft_img1} alt="Domain-based Email" />
      </div>
      <div className="right-content">
        <h2 style={{ fontSize: "3rem" }}>
          Your anytime, anywhere office to grow your business.
        </h2>
      </div>
    </div>
    <div className="section">
      <div className="left-content">
        <h2>Trusted apps, always up to date..</h2>
        <p>
          Microsoft 365 gives you valuable, secure collaboration tools like
          Word, Excel, PowerPoint, and Teams to help you do your best work.
          When new app versions come out, they’re automatically delivered to
          you.
        </p>
      </div>
      <div className="right-image">
        <img
          src={microsoft_img2}
          alt="Professional Email"
          style={{ width: "450px", height: "600px%" }}
        />
      </div>
    </div>

    {/* Second section */}
    <div className="section reverse">
      <div className="left-image">
        <img src={microsoft_img3} alt="Shared Calendar" />
      </div>
      <div className="right-content">
        <h2>Meet face-to-face wherever you are with Teams. .</h2>
        <p>
          Using Teams, you can video call, chat, and send attachments to your
          employees or customers anytime or anyplace, reducing churn so
          everyone gets more done, faster.
        </p>
        <button className="pricing-button">
          See Plans{" "}
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </button>
      </div>
    </div>
    {/* Third section */}
    <div className="section">
      <div className="left-content">
        <h2>Keep all your files safe in the cloud..</h2>
        <p>
          With 1 TB of secure OneDrive storage, your files, photos and videos
          are always safe and accessible from anywhere and on any device —
          computer, tablet, and smartphone.
        </p>
        <button className="pricing-button">
          See Plans{" "}
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </button>
      </div>
      <div className="right-image">
        <img
          src={microsoft_img4}
          alt="Sync Info"
          style={{ width: "450px", height: "600px%" }}
        />
      </div>
    </div>

    {/* Fourth section */}

    {/* Fifth section */}
    <div
      className="section"
      style={{
        width: "40%",
        marginLeft: "auto",
        // marginRight: "auto",

        transform: "translateX(-10%)",
      }}
    >
      <div className="left-content">
        <h2>Professional Email shows you mean business..</h2>
        <p>
          Customers are 9x more likely to choose a business with domain-based
          email like you@yourdomain.com. Since your account is in the cloud,
          your latest emails, contacts, and calendars are always at your
          fingertips and up to date from every device.
        </p>
        <button className="pricing-button">
          See Plans{" "}
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </button>
      </div>
    </div>
  </div>
  );
}

export default Microsoft_professional_content;

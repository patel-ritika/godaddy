import React from 'react';
import "../../asset/styles/GoDaddyMainStyle/Airomiddle.css";
import airomain_img from "../../asset/images/airomain_img.webp";
import airomain_img1 from "../../asset/images/airomain_img1.webp";
import airomain_img2 from "../../asset/images/airomain_img2.webp";
import airomain_img3 from "../../asset/images/airomain_img3.webp";
import inbox from "../../asset/images/inbox.webp";
import discription from "../../asset/images/discription.webp";
import reply from "../../asset/images/reply.webp";

const Airomiddle = () => {
  return (
   <div>
      <div className="img_part">
        <img src={airomain_img} alt="main"/>
      </div>  

      <div className="detail_part">
        <h4>GoDaddy Airo™</h4>
        <h1>Get a website that literally<br></br>
        writes itself.</h1>
        <p>Once you buy your new domain, it can build you a modern, flexible website<br></br>
        that puts your business online.</p>
        </div>

      <div className="ai_domain">
        <button>Start With AI Domain Search <span className="arrow-icon">→</span></button>
      </div>

      <div className="imgfor1">
        <h4>GoDaddy Airo™</h4>
        <h1>Everything you need<br></br>
        to grow and thrive.</h1>
        <p>With a constantly expanding set of features, GoDaddy<br></br>
        Airo helps you meet the opportunities that generative AI<br></br>
        presents for your business.</p>
        <img src={airomain_img1} alt="img1"/>
      </div>

      <div className="imgfor2">
        <img src={airomain_img2} alt="img2"/>
        <h1>It all starts with a domain.</h1>
        <p>Just give us a little info about you idea, and our AI<br></br>
        Domain Search serves up great business and<br></br>
        domain names that open the door to possibility.</p>
      </div>

      <div className="imgfor3">
        <h1>Move at the speed of heck<br></br>
        yeah.</h1>
        <p>GoDaddy Airo saves you time-lots of it.Now you<br></br>
        can focus on building your brand, engaging<br></br>
        customers, and growing your business.</p>
        <img src={airomain_img3} alt="img3"/>
      </div>

      <div className="imgfor4">
        <h1>Customize your heart out.</h1>
        <p>Take advantage of GoDaddy Airo to dynamically<br></br>
        generate customizable content. Now you can<br></br>
        connect with existing customers and find new ones<br></br>
        wherever they are.</p>
      </div>

      <div className="every">
        <h1>Every aspect of your business, AI'd.</h1>
        <p>Our experience saves you time as you start, manage, and grow your business.</p>
      </div>

      <div className="airomiddle_column1">
         <img src={inbox} alt="inbox"/>
         <h4>Email</h4>
         <h2>Not a writer? Not a problem.</h2>
         <p>GoDaddy Airo helps you quickly create emails<br></br>
         and newsletters that match your brand and<br></br>
         keep customers informed.</p>
      </div>

      <div className="airomiddle_column2">
        <img src={discription} alt="dis"/>
        <h4>Search Engine Marketing</h4>
        <h2>SEO from the get go.</h2>
        <p>Help customers find you quickly with AI-<br></br>
        powered SEO-optimize site rankings, draw<br></br>
        traffic, and break through the noise.</p>
      </div>

      <div className="airomiddle_column3">
         <img src={reply} alt="reply"/>
         <h4>Conversations</h4>
         <h2>Be ready for customers'<br></br>
         questions.</h2>
         <p>Create a library of AI-generated responses that<br></br>
         answer commonly asked questions, correct<br></br>
         issues, and boost engagement.</p>
      </div>
</div>
  );
}

export default Airomiddle;

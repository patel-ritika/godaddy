import React from 'react';
import "../../asset/styles/EmailMainStyle/EmailOption.css";
import alex from "../../asset/images/alex.webp";
import { CiMail } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";
import { SiMicrosoftoutlook } from "react-icons/si";
import { IoIosSend } from "react-icons/io";
import { SiMicrosoftword } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiMicrosoftonenote } from "react-icons/si";
import { SiMicrosoftsharepoint } from "react-icons/si";
import { SiMicrosoftpowerpoint } from "react-icons/si";
import { BsMicrosoftTeams } from "react-icons/bs";
import { SiMicrosoftonedrive } from "react-icons/si";
import { TiVendorMicrosoft } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { FaSync } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import logo1 from "../../asset/images/logo1.png";
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const EmailOption = () => {
  return (
    <div>
      <div className="menu">
        <h4>Email and Microsoft 365</h4>
        <ul>
          <li>All Email Options</li>
          <li> <Link to="/businessemail">Business Email</Link></li>
          <li>Microsoft 365</li>
        </ul>
        <div className="horizontal-line"></div>
      </div>

     <div className="power">
     <img src={alex} alt="alex"/>
     </div>
        <div className="power_right">
        <h4>Email & Office</h4>
     <h1>Grow your business with<br></br>
     powerful productivity tools.</h1>
     <h5> <CiMail size={20}/> Send and receive emails from your domain with Professional Email.</h5>
     <h5> <MdOutlineWatchLater size={20}/> Accomplish more every day with Microsoft 365.</h5>
     <h5> <FaCartPlus size={20}/> Save by purchasing both together.</h5>
        </div>

        <div className="plans">
          <button>See Plans and Pricing  <span className="arrow-icon">→</span> </button>
        </div>

      <div className="email_middle">
        <h1>For every business, a plan for success.</h1>
        <p>Build trust with domain - based email like you@yourdomain.com. You can choose a standard email plan or<br></br>
        upgrade to a Microsoft 365 plan to get apps like Word, Excel, and Teams, plus up to 50 GB of email storage.</p>
      </div>        

      <div className="professional">
        <button>Professional Email <span className="arrow-icon">→</span> </button>
      </div>

      <div className="email">
        <button>Email + Microsoft 365 <span className="arrow-icon">→</span> </button>
      </div>

      <div className="box1">
        <h3>Individual</h3>
        <h4>FOR GETTING STARTED</h4>
        <p>Domain-based email that helps build<br></br>
        your brand and shows the world you<br></br>
        mean business.</p>
        <h4>SAVE 42%</h4>
        <h5><span><FaRupeeSign /> 59.00 </span></h5>
        <h2><FaRupeeSign />34.00</h2>
        <h5>per user/mo With a 1-yr term. You pay<br></br>
        <FaRupeeSign /> 408.00 today Renews at <FaRupeeSign /> 708.00</h5>
        <button>Add to Cart</button>
        <p> <CiMail size={20}/> 10 GB storage for email,<br></br>
        contacts, and calendars</p>
        <p> <CiGlobe size={20}/> Use your domain name for your<br></br>
        email address, like<br></br>
        you@yourdomain.com</p>
      </div>

      <div className="box2">
        <h3>Team</h3>
        <h4>FOR GROWING BUSINESSES</h4>
        <p>Great for collaboration with everyonr<br></br>
        on your team.</p>
        <h4>SAVE 25%</h4>
        <h5><span><FaRupeeSign /> 119.00</span></h5>
        <h2><FaRupeeSign /> 89.00</h2>
        <h5>per user/mo With a 1-yr term. You<br></br>
        <FaRupeeSign /> 1,068.00 today<br></br>
        Renews at <FaRupeeSign /> 1,428.00</h5>
        <button>Add to Cart</button>
        <p> <CiMail size={20}/> 30 GB storage for email,<br></br>
        contacts, and calendars</p>
        <p> <CiGlobe size={20}/> Use your domain name for your<br></br>
        email address, like<br></br>
        you@yourdomain.com</p>
        <p> <CiCalendar /> Share calender and contacts with<br></br>
        your team</p>
        <p> <TfiMenuAlt /> Assign tasks to your team<br></br>
        members</p>
      </div>

     <div className="box3">
     <SiMicrosoftoutlook size={30} color='blue'/>
     <h3>Microsoft 365 Email<br></br>
     Essentials</h3>
     <h4>FOR SEAMLESS COMMUNICATION</h4>
     <p>Professional email to help build your<br></br>
     brand, backed by Microsoft's 99%<br></br>
     uptime guarantee.</p>
     <h4>SAVE 71%</h4>
     <h5><span><FaRupeeSign /> 349.00</span></h5>
     <h2><FaRupeeSign /> 99.00</h2>
     <h5>per user/mo With a 1-yr term. You<br></br>
     pay <FaRupeeSign /> 1,188.00 today <br></br>
     Renews at <FaRupeeSign /> 4,188.00</h5>
     <button>Add to Cart</button>
     <p> <CiMail size={20}/> 10 GB storage for email,<br></br>
        contacts, and calendars</p>
        <p> <CiGlobe size={20}/> Use your domain name for your<br></br>
        email address, like<br></br>
        you@yourdomain.com</p>
     <p> <IoIosSend size={20}/> Microsoft 365 from GoDaddy<br></br>
     works with your favorite email<br></br>
     clients like Outlook and Apple<br></br>
     Mail</p>
     </div>

     <div className="box4">
     <SiMicrosoftword size={30} color='blue'/>  <SiMicrosoftexcel size={30}  color='green'/>  <SiMicrosoftoutlook size={30} color='blue'/>  <SiMicrosoftonenote size={30} color='purple'/> <br></br>
     <SiMicrosoftsharepoint  size={30} color='green'/> <SiMicrosoftpowerpoint size={30} color='orange'/> <BsMicrosoftTeams size={30} color='blue'/> <SiMicrosoftonedrive size={30} color='blue'/>
     <h3>Microsoft 365 Online<br></br>
     Business Essentials</h3>
     <h4>FOR BOOSTING PRODUCTIVITY</h4>
     <p>Pair Professional Email with trusted<br></br>
     Microsoft 365 web apps like Word,<br></br>
     Excel, and PowerPoint.</p>
     <h4>SAVE 67%</h4>
     <h5><span><FaRupeeSign /> 399.00</span></h5>
     <h2><FaRupeeSign /> 129.00</h2>
     <h5>per user/mo With a 1-yr term. You<br></br>
     pay <FaRupeeSign /> 1,548.00 today<br></br>
     Renews at <FaRupeeSign /> 4,788.00</h5>
     <button>Add to Cart</button>
     <p> <CiMail size={20}/> 50 GB storage for email,<br></br>
        contacts, and calendars</p>
      <p> <CiGlobe size={20}/> Use your domain name for your<br></br>
        email address, like<br></br>
        you@yourdomain.com</p>
      <p> <TiVendorMicrosoft size={20}/> Microsoft 365 Online: get popular<br></br>
      web apps like Word, Excel, and<br></br>
      PowerPoint</p>
      <p> <IoPersonOutline /> Meet, chat and collaborate with<br></br>
      your team, customers, or<br></br>
      suppliers with Microsoft Teams</p>
     </div>

    <div className="email_plan">

    <div className="plus">
    <button>PLUS</button>
    </div>

     <div className="include">
     <h3>All plans include:</h3>
      <h4><FaSync size={20} /><br></br>
      Sync across devices</h4>
      <p>Instant access to your emails,<br></br>
      contacts, and appointments.</p>
     </div>
    
    <div className="online">
      <h4><FaRegCalendarAlt size={20}/><br></br>
      Online calendars</h4>
      <p>Manage your calendar and quickly<br></br>
      schedule meetings.</p>
    </div>

    <div className="online1">
      <h4><CiMail size={20}/><br></br>
      Works with any email app</h4>
      <p>Compatible with the email app of<br></br>
      your choice.</p>
    </div>

    <div className="mobile">
      <h4><CiMobile1 size={20}/><br></br>
      Mobile-friendly webmail</h4>
      <p>Easily ccess your email <br></br>
      from anywhere.</p>
    </div>
 </div>
      
      <div className='dis'>
        <h3>1 Disclaimers</h3>
      </div>

      <div className="design">
         <img src={logo1} alt="logo1"/>
         <h4><FaChevronRight color='white'/> Email </h4>
      </div>

    </div>
  );
}

export default EmailOption;

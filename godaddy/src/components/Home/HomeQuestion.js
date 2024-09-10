import React, { useState } from 'react';
import "../../asset/styles/HomeMainStyle/HomeQuestion.css";

const HomeQuestion = () => {
    // Define state to manage which question is open
    const [openQuestion, setOpenQuestion] = useState(null);
  
    // Sample questions and answers
    const faqData = [
      { 
        question: "How does GoDaddy help small business owners succeed?", 
        answer: "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional email helps you build a professional image, while our online marketing tools empower entrepreneurs to get online with an SEO-friendly website. GoDaddy is an all-in-one solution provider to get your idea online, backed with expert, personalized support from GoDaddy Guides." 
      },
      { 
        question: "Why do I need a website for my business?", 
        answer: "Even small local businesses that only serve their hometown need a site. That's because the web is the first place people go when looking for a product or service. A website helps every business:1-Promote and sell their products and services 2-Connect with new customers (and keep existing customers) 3-Build credibility 4-Compete with bigger businesses 5-Control their brand and keep their marketing fresh and current--- Best of all, a website is much easier and more affordable than you might think. GoDaddy offers a complete selection of online tools for building websites, along with hosting, email and marketing options to grow their business on the web."

      },
      { 
        question: "Why do I need a professional email?", 
        answer: "There are a lot of reasons to switch from your free email to a domain-based email, but here are the top 3: 1.Customers are much more likely to trust a professional address like lily@lilysbikes.com than lilysbikestexas84@notmail.com. 2.Professional Email provides world-class security with industry-leading spam and virus filters. 3.Personalized email addresses promote your business more effectively. Every time you send an email, you are giving your web address to customers and prospects, encouraging them to visit your website." 
      },
      { 
        question: "Why get a domain name from GoDaddy?", 
        answer: "GoDaddy is the world’s largest and trusted domain registrar that empowers people like you with creative ideas to succeed online. Buying a domain name is easy with our domain search tool and domain name generator tools you can find the perfect website address for your business." 
      },
      { 
        question: "Why use GoDaddy Website Builder?", 
        answer: "Because it’s a fast, simple way to create a website that you — and your customers — will love. Simply type in your idea or industry and GoDaddy Website Builder will pull up a number of professionally designed, ready-to-launch templates. From there, just add your own text and images and you’re good to go." 
      },
      { 
        question: "What makes GoDaddy Web Hosting the world Ieader?", 
        answer: "With nearly 20 years in the industry, we have the experience, the technology and the hosting experts to help web designers, developers, bloggers and online businesses create and maintain their online presence. Our secure web hosting platform, complete with cPanel, offers a 99.9% uptime guarantee*** and award-winning support, which has helped nearly 20+ million customers get online." 
      },
      { 
        question: "Why choose GoDaddy for WordPress?", 
        answer: "GoDaddy offers reliable and affordable WordPress hosting and WooCommerce hosting plans, one-click installs and the latest version so you have the most recent features available for your site. Your website content is managed from one place; you have a wealth of themes and add-ons giving you limitless options to succeed." 
      },
      { 
        question: "Why should I transfer my domain, website or web hosting to GoDaddy?", 
        answer: "There are a few different reasons. Our award-winning support is always high on the list of why people move their presence to GoDaddy. Of course, our prices — including a free 1-year extension on many domain transfers — is another popular reason. And if you already have one or more of our products, transferring your domain, website or hosting to us lets you consolidate your web presence with one provider so it’s easier to manage." 
      },
      { 
        question: "Why use the GoDaddy Logo Maker?", 
        answer: "With the GoDaddy Logo Maker it's easy to make a custom logo that'll help define your brand's personality and transform your business. From logomarks to logotypes, there are hundreds of templates to choose from. Or you can design your own in just minutes. No design skills needed." 
      }
    ];
  
    // Toggle function to show or hide answer
    const toggleQuestion = (index) => {
      setOpenQuestion(openQuestion === index ? null : index);
    };
    return (
        <div className="faq-section">
          <h2>Millions of customers.<br></br>
           rely on our domains<br></br>
            and web hosting to get<br></br>
             their ideas online.</h2>
          <h3>Frequently Asked Questions</h3>
          
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <div className="question" onClick={() => toggleQuestion(index)}>
                  <span>{item.question}</span>
                  <span className="dropdown-icon">{openQuestion === index ? '▲' : '▼'}</span>
                </div>
                {openQuestion === index && (
                  <div className="answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    };

export default HomeQuestion;

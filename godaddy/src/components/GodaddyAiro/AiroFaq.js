import React, {useState} from 'react';
import "../../asset/styles/GoDaddyMainStyle/AiroFaq.css";

const AiroFaq = () => {
    // State to manage the open/closed state of each answer
	const [openIndex, setOpenIndex] = useState(null);

	// Handle the toggling of answers
	const toggleAnswer = (index) => {
		setOpenIndex(openIndex === index ? null : index); // Toggle the answer
	};

	// Questions and answers data
	const faqData = [
		{
			question: "What is included in GoDaddy Airo?",
			answer:
				"GoDaddy Airo™ is an unparalleled experience that takes you from idea to online in just minutes. Now when you buy a new domain from GoDaddy, you’ll unlock a suite of capabilities leveraging AI to bring your brand to life with",
		},
		{
			question: "Why should I use GoDaddy Airo to get online?",
			answer:
				"From domain names to online marketing products, GoDaddy offers easy-to-use, affordable solutions, tools, and services to help you succeed online. Our wide range of products includes:",
		},
		{
			question:
				"How does GoDaddy Airo help me manage my marketing?",
			answer:
				"t takes more than just having a website to succeed online. Marketing and social media efforts help boost your business and your online presence, but it can be overwhelming to know where to start and how to manage effective marketing efforts. GoDaddy Airo™ helps simplify the process for you with these products:",
		},
		
	];
  return (
    <div className="faq-container">
    {/* FAQ Header */}
    <h1 className="faq-header">
       Frequently Asked Questions
    </h1>

    {/* FAQ Section */}
    <div className="faq-section">
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <h3 className="faq-question" onClick={() => toggleAnswer(index)}>
            {faq.question}
          </h3>
          {/* Show answer only if the question is clicked */}
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          <hr />
        </div>
      ))}
    </div>
  </div>
  );
}

export default AiroFaq;

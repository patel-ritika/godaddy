import React from 'react';
import "../../../asset/styles/emailfiles/emailoptionpages/emailtop.css";
import alex from "../../../asset/images/alex.webp";

const Emailtop = () => {
  return (
    <>
			<div className="email-option-section">
				<img
					src={alex}
					alt="Business Productivity"
					className="email-option-img"
				/>
				<div className="email-option-content">
					<h1>Grow your business with powerful productivity tools</h1>
					<ul>
						<li>
							Send and receive emails from your domain with Professional Email.
						</li>
						<li>Accomplish more every day with Microsoft 365.</li>
						<li>Save by purchasing both together.</li>
					</ul>
					<button className="try-domain-button">
						See Plans and Pricing <span className="arrow-icon">→</span>
					</button>
				</div>
			</div>
			
			
		</>
	);
  
}

export default Emailtop;

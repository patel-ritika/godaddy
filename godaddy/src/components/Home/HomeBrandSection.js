import React, { useState } from "react";
import '../../asset/styles/HomeMainStyle/HomeBrandSection.css';
import para1 from "../../asset/images/para1.png";
import para2 from "../../asset/images/para2.webp";
import para3 from "../../asset/images/para3.png";


const HomeBrandSection = () => {
    const [hoveredColumn, setHoveredColumn] = useState(1);

    return (
        <div className="home-hosting-marketing">
            <h1>Grow your brand with Websites + Marketing</h1>

            {/*Main image section*/}
            <div className="main-image-section">
                <img
                   src={hoveredColumn === 1 ? para1 : hoveredColumn === 2 ? para2 : para3}
                   alt="Marketing"
                   className="main-image"
                   />
            </div>

            {/* Columns below the image */}
            <div className="columns-section">
                {/* Colums 1 */}
                <div 
                className="column"
                onMouseEnter={() => setHoveredColumn(1)}
                onMouseLeave={() => setHoveredColumn(null)}
                >
                    <h2>Get online fast. No design <br></br>
                    skills needed.</h2>
                    <p>
                        Build your site in minutes. Choose from 100s<br></br>
                         of beautiful, mobile-friendly templates with our Website<br></br>
                         Builder, many with
                        ecommerce features.
                    </p>
                </div>

                {/* Column2 */}
                <div
                className="column"
                onMouseEnter={() => setHoveredColumn(2)}
                onMouseLeave={() => setHoveredColumn(null)}
                >
                    <h2>Build trust with email that<br></br>
                    matches your domain.</h2>
                    <p>
                        Help boost your credibility with customers with free<br></br>
                        Professional Email that's identical to your domain<br></br>
                        name.
                    </p>
                </div>

                {/* Column 3 */}
                <div 
                className="column"
                onMouseEnter={() => setHoveredColumn(3)}
                onMouseLeave={() => setHoveredColumn(null)}
                >
                    <h2>Engage with marketing tools.</h2>
                    <p>
                       Help your audience find you with built-in SEO and<br></br>
                       promite your business with social media and email<br></br>
                       marketing tools.
                    </p>
                </div>
            </div>
            <button className="try-domain-button">
                Start For Free <span className="arrow-icon">→</span>
            </button>
        </div>
    )
}
export default HomeBrandSection;
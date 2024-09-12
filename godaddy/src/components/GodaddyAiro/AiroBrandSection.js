import React, {useState} from 'react';
import "../../asset/styles/GoDaddyMainStyle/AiroBrandSection.css";
import airobrand_img1 from '../../asset/images/airobrand_img1.png';
import airobrand_img2 from "../../asset/images/airobrand_img2.jpg";
import airobrand_img3 from "../../asset/images/airobrand_img3.jpeg";

const AiroBrandSection = () => {
    const [hoveredColumn, setHoveredColumn] = useState(1);
  return (
    <div className="home-hosting-marketing">
            <h1>Power your future with GoDaddy Airo™</h1>

            {/*Main image section*/}
            <div className="main-image-section">
                <img
                   src={hoveredColumn === 1 ? airobrand_img1 : hoveredColumn === 2 ? airobrand_img2 : airobrand_img3}
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
                    <h2>Create a logo that sets you <br></br>
                    apart.</h2>
                    <p>
                        GoDaddy Airo gives you a totally pro logo in  minutes<br></br>
                        that embodies what makes your business special.
                    </p>
                </div>

                {/* Column2 */}
                <div
                className="column"
                onMouseEnter={() => setHoveredColumn(2)}
                onMouseLeave={() => setHoveredColumn(null)}
                >
                    <h2>Build your site at the speed of<br></br>
                    AI.</h2>
                    <p>
                        Getting your business online is hassl'e-free with<br></br>
                        GoDaddy Airo. Your website is ready in seconds with<br></br>
                        the magic of AI.
                    </p>
                </div>

                {/* Column 3 */}
                <div 
                className="column"
                onMouseEnter={() => setHoveredColumn(3)}
                onMouseLeave={() => setHoveredColumn(null)}
                >
                    <h2>Grab attention -- and keep it.</h2>
                    <p>
                       In a flash, spin up email campaigns, then analyze the<br></br>
                       results and serve up insights.
                    </p>
                </div>
            </div>
            <button className="try-domain-button">
                Start with AI Domain Search <span className="arrow-icon">→</span>
            </button>
        </div>
  );
}

export default AiroBrandSection;

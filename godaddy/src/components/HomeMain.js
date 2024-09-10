import React from 'react';
import Home from "../components/Home/Home";
import HomeBusinesSection from './Home/HomeBusinessSection';
import HomeBrandSection from './Home/HomeBrandSection';
import HomeVideo from './Home/HomeVideo';
import HomeMiddle from './Home/HomeMiddle';
import Slider from './Home/Slider';
import HomeBanner from './Home/HomeBanner';
import HomeQuestion from './Home/HomeQuestion';

const HomeMain = () => {
  return (
    <div>
      <Home/>
      <HomeBusinesSection/>
      <HomeBrandSection/>
      <HomeVideo/>
      <HomeMiddle/>
      <Slider/>
      <HomeBanner/>
      <HomeQuestion/>
    </div>
  );
}

export default HomeMain;

import React from 'react';
import Emailtop from './emailoptionpages/Emailtop';
import Emailcenter from './emailoptionpages/Emailcenter';
import EmailCard from './emailoptionpages/EmailCard';

import EmailFooter from './emailoptionpages/EmailFooter';


const Emailoption = () => {
  return (
    <div>
      <Emailtop/>
      <Emailcenter/>
      <EmailCard/>
      
      <EmailFooter/>
      
    </div>
  );
}

export default Emailoption;

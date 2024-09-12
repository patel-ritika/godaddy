import React from 'react';
import Microsoft_Top from './microsoft/Microsoft_Top';
import Microsoft_card from './microsoft/Microsoft_card';
import MicrosoftFooter from "../../components/EmailFiles/emailoptionpages/EmailFooter";
import Microsoft_compare from './microsoft/Microsoft_compare';
import Microsoft_professional_content from './microsoft/Microsoft_professional_content';
import Microsoft_faq from './microsoft/Microsoft_faq';

const Microsoft365 = () => {
  return (
    <div>
      <Microsoft_Top/>
      <Microsoft_card/>
      <MicrosoftFooter/>
      <Microsoft_compare/>
      <Microsoft_professional_content/>
      <Microsoft_faq/>
    </div>
  );
}

export default Microsoft365;

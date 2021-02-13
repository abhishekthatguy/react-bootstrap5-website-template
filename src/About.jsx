import React from  'react';
import contact from '../src/assets/contact_us.svg';
import CommonPage from './CommonPage';

const About =()=>{
  return(
    <>
<CommonPage name="Welcome To About Page" imgSrc={contact} visit="/contact" btnName="Contact Us"
subText="We are the team of talented developer making Websites"
companyName="पंछी.com"
/>
    </>
  )
}
export default About;
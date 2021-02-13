import React from  'react';
import web from '../src/assets/header_img.svg';
import CommonPage from './CommonPage';


const Home =()=>{
  return(
    <>
<CommonPage name="Grow Your Business with" imgSrc={web} visit="/service" btnName="Get Started" 
subText="We are the team of talented developer making Websites"
companyName="पंछी.com"
/>
    </>
  )
}
export default Home;
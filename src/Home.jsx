import React from  'react';
import web from '../src/assets/header_img.svg';
import CommonPage from './CommonPage';


const Home =()=>{
  return(
     <>
<CommonPage name="Here are your one-stop solutions at " imgSrc={web} visit="/service" btnName="Get Started" 
subText="We focus on the nature of your business and what you need for a fruitful online presence to ultimately push revenues further up."
companyName="पंछी.com"
/>
    </>
  )
}
export default Home;
import React from  'react';
import ServiceData from './Sdata';
import Card from './Card';

const Service =()=>{
  return(
    <>
<div className="my-5">
    <h1 className="text-center">Our Services</h1>
     <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            ServiceData && ServiceData.length>0 && ServiceData.map((val,index)=>{
                                return <Card
                                key={index}
                                 imgSrc={val.imgSrc}
                                 title={val.title}
                                 description={val.description}
                                 btnText={val.btnText}
                                />
                            })
                        }
                      
{/* end here */}
                    </div>
                </div>
            </div>
            
            </div> 
</div>
    </>
  )
}
export default Service;
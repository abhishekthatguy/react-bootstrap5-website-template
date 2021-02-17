import React from  'react';
import { NavLink } from 'react-router-dom';

const Card =(props)=>{
  return(
    <>

                        {/* card */}
                        <div className="col-md-4 col-10 mx-auto">
<div className="card h-100 text-center">
  <img src={props.imgSrc} className="card-img-top h-100" alt="props.title"/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">{props.description}.</p>
    <NavLink to="/contact" className="btn btn-primary universal-btn">{props.btnText}</NavLink>
  </div>
</div>
                        </div>

{/* end here */}
                   
    </>
  )
}
export default Card;
import React, { useState } from  'react';

const Contact =()=>{
    const [data,setData]=useState({
        fullName:'',
        phone:'',
        email:'',
        message:''
    });
    const InputEvent =(event)=>{
    const {name,value}=event.target;
    setData((prevalue)=>{
        return{
            ...prevalue,
            [name]:value,

        }
    })
    }
    const formSubmit=(e)=>{
e.preventDefault();
alert(`A Person whos name is ${data.fullName} & mobile number ${data.phone} with email ${data.email} is try to connect you.his message is ${data.message}`);
    }

  return(
    <>
<div className="my-5">
    <h1 className="text-center">Contact Us</h1>
     <div className="container mb-5 contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <div className="row gy-4">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="fullName" value={data.fullName} onChange={InputEvent} placeholder="Enter Your Full Name" />
</div>
                            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Your Contact Number" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent}></textarea>
</div>
 <div class="col-12">
    <button class="btn btn-outline-primary" type="submit" >Submit form</button>
  </div>
                        </form>
                        
                      
{/* end here */}
                    </div>
                </div>
            </div>
            
            </div> 
</div>
    </>
  )
}
export default Contact;
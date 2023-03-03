import React, { useRef } from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';
import logo from '../imgs/cmpl.jpeg'
export const ContactUs = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ldfoe3b', 'template_f8chw0h', form.current, 'RbcI8yOdwlr3751e8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      window.location.href = "/"
  };
  const click=()=>{
    alert("Complaint registered");
  }
  return (
           
<div className="container-fluid p-5  text-white text-center bg-info bg-gradient p-5">
                <img className='rounded-circle' src={logo}  height={200}   alt="hi" />
                <div> 
                <form ref={form} onSubmit={sendEmail} className='row text-center align-center' >  

                <div className="col-md-3"/>
                        <div className='col-sm-12 col-md-6 mb-3 mt-3 mb-3 mt-3 '>
                            <h1 className="bg-primary border border-dark"> Add compliant</h1>
                        </div>
                    
                        <div className="col-md-3"/>           
                       <div className="col-md-3"/>
                        <div className='col-sm-12 col-md-6 mb-3 mt-3 mb-3 mt-3 '>
                        <input type="text" placeholder="User Name" name="user_name" class="form-control my-3 p-4"/>
                        </div>
                    
                        <div className="col-md-3"/>

                              <div className="col-md-3"/>

                        <div className='col-sm-12 col-md-6 mb-3 mt-3'>
                          <input type="email" name="user_name" placeholder='Enter Your Email' class="form-control my-3 p-4"/>  
                        </div>
                        <div className="col-md-3"/>
                        
                       
                        <div className="col-md-3"/>
                        <div className='col-sm-12 col-md-6 mb-3 mt-3'>
                        <textarea name="Message"  class="form-control my-3 p-4" placeholder='  message'/>                       </div>
                    
                   
                    
                        <div className="col-md-3"/>
                        
                        <div className="col-md-3"/>

                      <div className='col-sm-12 col-md-6 mb-3 mt-3'>
                      <input onClick={click} type="submit" value="Register"  class="login-btn1 mt-3 mb-5" />
                     </div>
                    <div className="col-md-2"/>
                    </form>
                </div>
            </div>    
  );
};

export default ContactUs;







/*import founder from "../imgs/founder.jpeg";
import Navbar from "./Navbar";
function AboutUs() {
  return (
    <>
      <Navbar/>
        <div className="container emp-profile" >
          <form method="">
            <div className="row">
              <div className="col-md-6">
                <div className="profile-img">
                <img style={{width:500, height:300}}src={founder}  alt="Reddy"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>Kartik Reddy</h5>
                  <p className="profile-rating mt-3 mb-3">Lorem is an American social media company based in San Francisco, California. The company operates the microblogging is an American social media company based in San Francisco, California. The company operates the microblogging and social networking service Twitter. It previously operated the Vine short video app and Periscope livestreaming service.</p>
                  <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="bouthome">Know more</a>
                      </li>
                    </ul> 
                </div>
              </div>
                  <div className="row">
                    {/* left side url }
                    <div className="col-md-2">
                      <div className="profile-work">
                        <a>Work Link</a><br/>
                        <a href="http://www.instagram.com/" target="">Instagram</a><br/>
                        <a href="http://www.facebook.com/" target="">Facebook</a><br/>
                        <a href="http://www.linkedin.com/" target="">Linkedin</a><br/>
                        <a href="http://www.twitter.com/" target="">Twitter</a><br/>
                      </div>
                    </div>
                    {/* right side data  toogle }
                    <div className="col-md-6 pl-20 about-info">
                      <div className="tab-content profile-tab" id="MyTabcontent">
                        <div className="tab-pane fade show active" id="abouthome" role="tabpanel" aria-labelledby="home-tab">
                       
                             <div className="row">
                              <div className="col-md-3">
                                <label>User Id</label>
                              </div>
                              <div className="col-md-3">
                              <p>41239865456589</p>
                              </div>
                             </div>
                             <div className="row">
                              <div className="col-md-3">
                                <label>Name</label>
                              </div>
                              <div className="col-md-3">
                              <p>Kartik Reddy</p>
                              </div>
                             </div>
                             <div className="row">
                              <div className="col-md-3">
                                <label>Email</label>
                              </div>
                              <div className="col-md-3">
                              <p>kartik12@gmail.com</p>
                              </div>
                             </div>
                             <div className="row">
                              <div className="col-md-3">
                                <label>Phone</label>
                              </div>
                              <div className="col-md-3">
                              <p>9865456589</p>
                              </div>
                             </div>
                        </div>
                      </div> 
                    </div>
                  </div>
            </div>
          </form>
        </div>
    </>
  );
}

export default AboutUs;
*/
// @flow strict

import * as React from 'react';
import logo from '../imgs/ap3.jpg'
import './one.css';
export default AboutUs;

function AboutUs() {

  return (
    <>
      <div className="wrapper">
        <div className="background-color">
          <div className="bg-1"></div>
          <div className="bg-2"></div>
        </div>
        <div className="about-container">
        <div className="img-container">
          <img src={logo} alt="image"/>
        </div>
        <div className="text-container">
          <h1>About Us</h1>
          <p><span style={{color:"blue"}}> Housing Society Control System</span> A housing society control system is a set of tools and processes that are used to manage and maintain the operations of a housing society. This can include tasks such as managing finances, maintaining common areas, and enforcing rules and regulations. The specific features and functionality of a housing society control system will vary depending on the system being used. Some common features may include financial management tools, communication tools, and access control features. These systems are usually used by the housing society's management or administration to improve their workflow and accountability.
          </p>
          {/* <p></p> */}
          {/* <a href="">Read more</a> */}
        </div>
        </div>
      </div>

    </>
  );
}
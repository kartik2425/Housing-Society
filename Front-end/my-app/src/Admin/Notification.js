// import logo from './logo.svg';
// import './App.css';
// import "./Notification.css"
import "../component/Contact.css";
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import logo from '../imgs/bangra.jpg'

function Notification() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [sub, setsub] = useState("")
  const [text, settext] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      alert(name)
      alert(email)

      alert(sub)
      alert(text)

      await axios.post('http://localhost:4500/Notification', { email, name, sub, text })
      window.location.href = "/"

    } catch (err) {
      alert(err.response.data.msg)
    }

  }
  return (
    <div className="container-fluid  row text-white text-center bg-info bg-gradient p-5">
        
        <div className=' container-fluid col-sm-12 col-md-4 '>
        <img src={logo} alt="product image " width={300} height={300}/>
        </div>
        
        <div className='container-fluid    col-sm-12 col-md-10    '>
          <h1 className="container-fluid bg-secondary">
            Notification
          </h1>
              <form onSubmit={handleSubmit}>
                      <input type="text" placeholder="User Name" className="form-control container-fluid    " value={name} onChange={(e) => { setname(e.target.value) }} /><br />

                    <input type="email" placeholder='Enter EmaiL' className="form-control container-fluid   " value={email} onChange={(e) => { setemail(e.target.value) }} /><br />
                    <input type="text" placeholder='Enter Subject' value={text} className=" form-control container-fluid   " onChange={(e) => { settext(e.target.value) }} /><br />
                    <textarea type="text" value={sub} className="form-control container-fluid   " placeholder='  message' onChange={(e) => { setsub(e.target.value) }} /><br/>
                    <input type="submit" value="Register" className="login-btn1  "/><br />
              </form>


      </div>
    </div>

  );
}

export default Notification;

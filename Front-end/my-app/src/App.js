// import "../node_modules/bootstrap/dist/css/bootstrap/.min.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import backgroundImage from "./imgs/background-image.jpeg";
import "./App.css";
import "bootstrap";
import SecuritySignup from "./UserAuth/Register/SecuritySignup";
import SignUp from "./UserAuth/Register/OwnerSignup";
import Navbar from "./NavBarContent/Navbar";
import Login from "./UserAuth/Login/Login";
import AboutUs from "./NavBarContent/AboutUs";
import SecurityLogin from "./UserAuth/Login/SecurityLogin";
import ProfileNavBar from "./Admin/ProfileNavBar";
import NumberOfOwner from "./Admin/NoOfOwner";
import SecurityNavBar from "./Student/SecurityNavBar";
import NumberOfSecurity from "./Admin/NumberOfSecurity";
import MainForm from "./Chatting/MainForm";
import ChatRoom from "./Chatting/ChatRoom";
import VideoCallHomePage from "./VideoCall/Home";
import RoomPage from "./VideoCall/Room";
import Profile from "./Admin/Profile";
import SecurityProfile from "./Security/SecurityProfile";
import MyProvider from "./MyProvider.js";
import axios from "axios";
import AdminRegister from "./UserAuth/Register/AdminRegister";
// import AdminLogin from "./Admin/AdminLogin";
import AdminLogin from "./UserAuth/Login/AdminLogin";
import ContactUs from "./component/ContactUs";
import RazorPay from "./Payment/RazorPay";
import Event from "./Admin/Event";
import DisplayEvent from "./Admin/DisplayEvent";
import Notification from "./Admin/Notification";
import AdminProfile from "./Admin/AdminProfile";
import Home from "./Admin/Home";
import AppSms from "./sms/AppSms";
import Feedback from "./Feedback/feedback";
// import NumberOfClasses from "./SecurityNearLocation/NumberOfClasses";
// import { useContext } from "react";
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(false);
  return (
    <MyProvider>
        {/* <Navbar /> */}
        <Routes>.
        <Route path="/" element={<><Navbar /><Home/></>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SecuritySignup" element={<SecuritySignup />} />
          <Route path="/about" element={<><Navbar /><AboutUs /></>} />
          <Route path="/SecurityLogin" element={<SecurityLogin />} />
          {/* <Route path="/SecurityLogin" element={<SecurityLogin/>}/> */}
          <Route path="ProfileNavBar" element={<ProfileNavBar />} />
          <Route path="NumberOfOwner" element={<NumberOfOwner />} />
          <Route path="SecurityNavBar" element={<SecurityNavBar />} />
          <Route path="NumberOfSecurity" element={<NumberOfSecurity />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="/MainForm" element={<MainForm />}></Route>
          <Route path="/chat/:roomName" element={<ChatRoom />}></Route>
          <Route path="VideoCallHomePage" element={<VideoCallHomePage />}></Route>
          <Route path="/room/:roomId" element={<RoomPage />}></Route>
          <Route path="SecurityProfile" element={<SecurityProfile />} />
          <Route path="AdminRegister" element={<AdminRegister />} />
          <Route path="AdminLogin" element={<AdminLogin />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="RazorPay" element={<RazorPay />} />
          <Route path="Event" element={<Event/>}/>
          <Route path="DisplayEvent" element={<DisplayEvent/>}/>
          <Route path="Notification" element={<Notification/>}/>
          <Route path="AdminProfile" element={<AdminProfile/>}/>
          <Route path="Home" element={<><Navbar /><Home/></>}/>
          <Route path="AppSms" element={<AppSms/>}/>
          <Route path="feedback" element={<Feedback/>}/>
        </Routes>
    </MyProvider>
  );
}

export default App;

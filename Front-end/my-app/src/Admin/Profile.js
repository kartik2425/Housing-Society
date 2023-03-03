import { useContext } from "react";
import { MyContext } from "../MyProvider";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import ban from "../imgs/bangra.jpg";

const Profile = () => {
  const navigate=useNavigate();  
  const logout=()=>{
      localStorage.clear();
      alert("cleared");
      window.location.href="http://localhost:3000/";
      // navigate("/");
    }
  const context = useContext(MyContext);
  console.log(context.state.user);
  console.log(context.state);
  return (
      <div className="container bg-primary">
        <div className="main">
          <div className="row">
            <div className="col-md-4 mt-1">
              <div className="card text-center sidebar bg-danger">
                <div className="card-body">
                  <img
                    src={context.state.user.image}
                    alt="loding.."
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <Link to="/DisplayEvent">
                      <a>Events</a>
                      {/* Location */}
                    </Link>
                    {/* <Link to="/TeacherNearLocation"> */}
                    {/* <a>TeacherNearLocation</a> */}
                    {/* TeacherNearLocation */}
                    {/* </Link> */}
                    <Link to="/ContactUs">
                      <a>Complaint</a>
                      {/* TakenCourses */}
                    </Link>
                    <Link to="/VideoCallHomePage">
                      <a>join meeting</a>
                      {/* Study Material */}
                    </Link>
                    <Link to="/feedback">
                      <a>Feedback</a>
                      {/* TakenCourses */}
                    </Link>
                    <Link to="/RazorPay">
                      <a>Payment</a>
                    </Link>
                    <Link to="/Home">
                      <a onClick={logout}>LogOut</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 mt-1">
              <div className="card mb-4 content ">
                <h1 className="m-3 pt-3 ">About</h1>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3 ">
                      <h5>Full Name</h5>
                    </div>
                    <div className="col-md-9 text-secondary">
                      {context.state.user.name}
                    </div>
                  </div>
                  <hr />
                  <div className="row ">
                    <div className="col-md-3">
                      <h5>Email</h5>
                    </div>
                    <div className="col-md-9 text-secondary">
                      {context.state.user.email}
                    </div>
                  </div>
                  <hr />
                  <div className="row ">
                    <div className="col-md-3">
                      <h5>Home No</h5>
                    </div>
                    <div className="col-md-9 text-secondary ">
                      {context.state.user.zip}
                    </div>
                  </div>
                  <hr />
                  <div className="row ">
                    <div className="col-md-3">
                      <h5>Address</h5>
                    </div>
                    <div className="col-md-9 text-secondary">
                      {context.state.user.address}
                    </div>
                  </div>
                  <hr />
                  <div className="row ">
                    <div className="col-md-3">
                      <h5>Gender</h5>
                    </div>
                    <div className="col-md-9 text-secondary">
                      {context.state.user.gender}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default Profile;

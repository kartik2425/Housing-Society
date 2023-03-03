import { useContext } from "react";
import { MyContext } from "../MyProvider";
import { Link } from "react-router-dom";
// import "./Profile.css";
import "../Admin/Profile.css";
import ban from "../imgs/security.jpg";

const SecurityProfile = () => {
  const context = useContext(MyContext);
  console.log(context.state);
  return (
    <>
      <div className="container bg-primary">
        <div className="main">
          <div className="row">
            <div className="col-md-4 mt-1">
              <div className="card text-center sidebar bg-danger">
                <div className="card-body">
                  <img   
                    src={ban}
                    alt="loding.."
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <Link to="/AppSms">
                      <a>Visitor verification</a>
                    </Link>
                    <Link to="/NumberOfOwner">
                      <a>Flat owner Details</a>
                    </Link>
                    <Link to="/Home">
                      <a>Logout</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 mt-1">
              <div className="card mb-3 content ">
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
                      <h5>Security code</h5>
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
    </>
  );
};
export default SecurityProfile;

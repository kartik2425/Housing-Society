import Navbar from "../../NavBarContent/Navbar";
import loginImage from "../../imgs/loginImage.jpeg";
import "../Login/Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../MyProvider";

function AdminLogin() {
  const context = useContext(MyContext);
  console.log(context.state);
  const [error, setError] = useState("");
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const userlogin = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const validation = () => {
    if (!user.email) {
      setError("Please Enter your Email Correctly");
      return false;
    }
    if (!pattern.test(user.email)) {
      setError("Please Enter your Email Correctly");
      return false;
    }
    setError("");
    return true;
  };
  const login = async() => {
    // const { email, password } = user;
    // axios
    //   .post("http://localhost:4500/Adminlogin", user)
    //   .then((res) => {
    //     if (res.status == 400 || !res) {
    //       alert("Invalid Credentials");
    //     } else {
    //       console.log(res.data.AdminLogin);
    //       localStorage.setItem("_id", res.data.AdminLogin._id);
    //       console.log(localStorage.getItem("_id"));
    //       context.updateUser(res.data.AdminLogin);
    //       navigate("/AdminProfile");
    //     }
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
    try {
      const isValid = validation();
      if (isValid) {
      const resp = await axios.post("http://localhost:4500/Adminlogin", user);
      if (resp.data.success) {
        // message.success("Loggedin Successfully...");
        alert("Loggedin Successfully...");
        localStorage.setItem("_id", resp.data.AdminLogin._id);
        context.updateUser(resp.data.AdminLogin);
        navigate("/AdminProfile");
      } else {
        alert("Invalid Credentials...");
      }}
    } catch (error) {
      console.log(error);
      // message.error("You got an error");
      alert("You got an error");
    }
  };
  return (
    <>
      <Navbar />
      {console.log(user)}
      <style>{"body { background-color: cadetblue; }"}</style>
      <section class="Form my-4 mx-5">
        <div class="container">
          <div class="row login-row no-gutters">
            <div class="col-lg-5">
              <img src={loginImage} class="img-fluid login-img" alt="image" />
            </div>
            <div class="col-lg-7 px-5 pt-5">
              <h1 class="font-weight-bold py-3">Admin Login</h1>
              <h4>Sign into your Account</h4>
              <form>
                <div class="form-row">
                  <div class="col-lg-7">
                    <input
                      type="email"
                      placeholder="Email-Address"
                      name="email"
                      value={user.email}
                      onChange={userlogin}
                      class="form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-lg-7">
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={userlogin}
                      placeholder="*******"
                      class="form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-lg-7">
                    <button
                      type="button"
                      class="login-btn1 mt-3 mb-5"
                      onClick={login}
                    >
                      Login
                    </button>
                    {error ? (
                      <small className="text-danger">{error}</small>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {/* <a href="#">Forget Password</a>
                <p>
                  Don't have an account? <a>Register here</a>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminLogin;

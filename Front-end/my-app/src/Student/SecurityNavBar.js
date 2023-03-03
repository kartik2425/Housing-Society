import { Link } from "react-router-dom";
import bha from "../imgs/bharatnatyam.jpg";
// import NoOfStudents from "./NoOfStudents";
// import bharatnatyam from "../imgs/bharatnatyam.jpg"
import { useContext } from "react";
import { MyContext } from "../MyProvider";

function SecurityNavBar() {
  const context = useContext(MyContext);
  const sty = {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
  };
  return (
    <>
      {/* <SecurityNavBar/> */}
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand logo" style={{ color: "white" }} href="#">
            {/* LearnWithEase */}
            {context.name}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <Link
                to="/CourseMaterial"
                className="nav-link active nav-txt"
                aria-current="page"
              >
                Course Materials
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/TakenCourses"
                className="nav-link active nav-txt"
                aria-current="page"
              >
                Taken Courses
              </Link>
            </li>
            <li class="nav-item">
              <Link to="" className="nav-link active nav-txt">
                Courses
              </Link>
            </li>
            <li class="nav-item">
              <Link to="" className="nav-link active nav-txt">
                Logout
              </Link>
            </li>
            <li class="nav-item">
              <Link to="" className="nav-link active nav-txt">
                <img src={bha} style={sty} alt="loading.." />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default SecurityNavBar;

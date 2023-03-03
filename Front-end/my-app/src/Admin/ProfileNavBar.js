import { Link } from "react-router-dom";
import bha from "../imgs/bharatnatyam.jpg";
import NoOfStudents from "./NoOfOwner";
// import bharatnatyam from "../imgs/bharatnatyam.jpg"
function ProfileNavBar() {
  const sty = {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand logo" style={{ color: "white" }} href="#">
            LearnWithEase
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
                to="/NoOfStudents"
                className="nav-link active nav-txt"
                aria-current="page"
              >
                Students
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to=""
                className="nav-link active nav-txt"
                aria-current="page"
              >
                Courses
              </Link>
            </li>
            <li class="nav-item">
              <Link to="" className="nav-link active nav-txt">
                Teachers
              </Link>
            </li>

            {/* <li class="nav-item dropdown">
            <a
                class="nav-link dropdown-toggle nav-txt"
                data-bs-toggle="dropdown"
                href="#"
                role="button" aria-haspopup="true" aria-expanded="false">
                Login
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
              <Link to="" className="dropdown-item">Student</Link>
                </li>
                <li>
                  <Link to="" className="dropdown-item">Teacher</Link>
                </li>
              </ul>
            </li> */}
            {/* </li> */}

            {/* <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle nav-txt"
                data-bs-toggle="dropdown"
                href="#"
                role="button" aria-haspopup="true" aria-expanded="false">
                SignUp
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
              <Link to="" className="dropdown-item">Student</Link>
                </li>
                <li>
                  <Link to="" className="dropdown-item">Teacher</Link>
                </li>
              </ul>
            </li> */}
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
export default ProfileNavBar;

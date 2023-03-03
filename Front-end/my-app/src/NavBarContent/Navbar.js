import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand logo" style={{ color: "white" }} href="#">
           Housing Society 
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
            {/* <li class="nav-item">
              <Link to="/Location" className="nav-link active nav-txt" aria-current="page">Location</Link>
            </li> */}
            <li class="nav-item">
              <Link
                to="/Home"
                className="nav-link active nav-txt"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link active nav-txt">
                About
              </Link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle nav-txt"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Login
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link to="/Login" className="dropdown-item">
                    Owner
                  </Link>
                </li>
                <li>
                  <Link to="/SecurityLogin" className="dropdown-item">
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="/AdminLogin" className="dropdown-item">
                    Admin
                  </Link>
                </li>
              </ul>
            </li>
            {/* </li> */}

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle nav-txt"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                SignUp
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link to="/signup" className="dropdown-item">
                    Owner
                  </Link>
                </li>
                <li>
                  <Link to="/SecuritySignup" className="dropdown-item">
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="/AdminRegister" className="dropdown-item">
                    Admin
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

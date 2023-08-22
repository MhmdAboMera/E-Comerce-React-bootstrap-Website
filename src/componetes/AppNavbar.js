import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function AppNavbar() {
  return (
    <nav className="navbar navbar-expand-lg  sticky-top align-items-center">
      <div className="container">
        <div>
          <button
            onClick={() => {
              toogel();
            }}
            className="navbar-toggler top"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <Link className="navbar-brand text-light" to="/">
            Logo
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main"
          aria-controls="main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="main">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link className="nav-link active " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link p-lg-3" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link p-lg-3" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="search ps-3 pe-3 d-none d-lg-block">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <Link className="btn btn-primary rounded-pill" to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

const toogel = () => {
  document.getElementById("sidbar").classList.toggle("d-block");
  document.getElementById("sidbar").classList.toggle("d-none");
};
export default AppNavbar;

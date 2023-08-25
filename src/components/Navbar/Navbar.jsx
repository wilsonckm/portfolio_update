import { Link } from "react-scroll";
import Resume from "../../ScreenShots/Wilson_Chan_CS_Resume.pdf";

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          WC
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <Link
                className="nav-link active"
                aria-current="page"
                activeClass="active"
                smooth={true}
                spy={true}
                duration={200}
                delay={0}
                to="about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                smooth={true}
                spy={true}
                duration={200}
                delay={0}
                to="projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                smooth={true}
                spy={true}
                duration={200}
                delay={0}
                to="contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a href={Resume} className="nav-link">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

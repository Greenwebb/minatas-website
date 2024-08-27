import { NavLink, useLocation } from 'react-router-dom';

// internal
import Navbar from "./navbar";
import useSticky from "../../hooks/use-sticky";
import LoginModal from "../../components/common/login-modal";

const HeaderTwo = () => {
  const location = useLocation();

  // Define the logos with type annotations
  const defaultLogo = '/assets/images/logo/logo_01.svg';
  const aboutLogo = '/assets/images/logo/logo_02.svg';
 
  // Define the styles as strings
  const defaultStyles = `
    .theme-main-menu.white-vr .nav-item .nav-link {
      color: #fff;
    }
  `;

  const aboutNavStyles = `
    .theme-main-menu.white-vr .nav-item .nav-link {
      color: #0e6939;
    }
  `;

 

  const { sticky } = useSticky();

  // Determine the logo and nav styles based on the current page and sticky state
  const logo = location.pathname === '/about-us' 
    ? sticky
      ? defaultLogo 
      : aboutLogo 
    : defaultLogo;

  const navStyles = location.pathname === '/about-us' 
    ? sticky 
      ? defaultStyles
      : aboutNavStyles 
    : defaultStyles;

  return (
    <>
      <style>
        {navStyles}
      </style>
      <header className={`theme-main-menu menu-overlay menu-style-one white-vr sticky-menu ${sticky ? 'fixed' : ''}`}>
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <NavLink to="/" className="d-flex align-items-center">
                  <img src={logo} alt="logo" />
                </NavLink>
              </div>

              <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                <ul className="d-flex align-items-center style-none">
                  <li className="d-none d-md-block">
                    <NavLink to="/contact" className="btn-one tran3s">
                      Get in Touch
                    </NavLink>
                  </li>
                </ul>
              </div>
              <nav className="navbar navbar-expand-lg p0 order-lg-2">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  {/* header navbar start */}
                  <Navbar logo_white={true} />
                  {/* header navbar end */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* login modal start */}
      <LoginModal />
      {/* login modal end */}
    </>
  );
};

export default HeaderTwo;

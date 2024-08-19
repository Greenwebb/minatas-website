import { NavLink } from 'react-router-dom';
// internal
import FooterSocial from './footer-social';

const FooterOne = () => {
  return (
    <div className="footer-one">
      <div className="container">
        <div className="inner-wrapper">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-md-3 footer-intro mb-30">
              <div className="logo mb-15">
                <NavLink to="/" className="d-inline-block d-lg-none">
                  <img src="/assets/images/logo/logo_01.svg" alt="logo" />
                </NavLink>
              </div>
              <p className="text-white lh-sm mb-35">We are commited to advancing financial inclusion for individuals and businesses. <span className="opacity-50"> Success starts here,<br /> Apply today!</span></p>
              {/* social link */}
              <ul className="style-none d-flex align-items-center social-icon">
                <FooterSocial />
              </ul>
              {/* social link */}
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
              <h5 className="footer-title">Links</h5>
              <ul className="footer-nav-link style-none">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/pricing">Products</NavLink></li>
                <li><NavLink to="/about-us">About us</NavLink></li>
                <li><NavLink to="/service-v1">Our services</NavLink></li>
              </ul>
            </div>

            <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
              <h5 className="footer-title">Support</h5>
              <ul className="footer-nav-link style-none">
                <li><NavLink to="/contact">Terms of use</NavLink></li>
                <li><NavLink to="/contact">Terms & conditions</NavLink></li>
                <li><NavLink to="/contact">Privacy</NavLink></li>
                <li><NavLink to="/contact">Cookie policy</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-footer">
          <div className="row align-items-center">

            <div className="col-lg-7 order-lg-first mb-15">
              <NavLink to="/" className="d-none d-lg-inline-block mb-25">
                <img src="/assets/images/logo/logo_01.svg" alt="logo" />
              </NavLink>
              <div className="d-xl-flex align-items-center">
                
                <div className="copyright me-xl-4 lg-mt-10 order-lg-first">
                  Copyright @{new Date().getFullYear()} Minatas Resources.
                </div>
              </div>
            </div>
            <div className="col-lg-5 order-lg-last mb-15">
              <div className="d-xl-flex align-items-center">
                <div className="style-none bottom-nav d-flex flex-wrap justify-content-center justify-content-lg-start order-lg-last">
                </div>
                <ul className="style-none bottom-nav d-flex flex-wrap justify-content-center justify-content-lg-start order-lg-last">
                  <li><NavLink to="#">Privacy & Terms</NavLink></li>
                  <li><NavLink to="#">Cookies</NavLink></li>
                  <li><NavLink to="#">Contact Us</NavLink></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
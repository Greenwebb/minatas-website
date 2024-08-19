import { NavLink } from 'react-router-dom';
// internal
import FooterSocial from './footer-social';

const FooterFour = () => {
  return (
    <div className="footer-four">
    <div className="container">
      <div className="inner-wrapper">
        <div className="row justify-content-between">
          <div className="col-lg-4 footer-intro mb-40">
            <div className="logo mb-25">
              <NavLink to="/">
                <img src="/assets/images/logo/logo_01.svg" alt="logo"/>
              </NavLink>
            </div> 
            <p className="text-white lh-sm mb-35">We are commited to advancing financial inclusion for individuals and businesses. <span className="opacity-50"> Success starts here, <text className='span'>Apply today!</text> </span></p>
            <ul className="style-none">
              <li className="d-flex align-items-center">
                <img src="/assets/images/icon/icon_49.svg" alt="icon" className="lazy-img icon me-3"/>
                <a href="#">inquiries@minatasresources.com</a>
              </li>
              <li className="d-flex align-items-center">
                <img src="/assets/images/icon/icon_50.svg" alt="icon" className="lazy-img icon me-3"/>
                <a href="#">+260771873366</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-4 mb-20">
            <h5 className="footer-title">Links</h5>
            <ul className="footer-nav-link style-none">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/pricing">Products</NavLink></li>
                <li><NavLink to="/about-us">About us</NavLink></li>
                <li><NavLink to="/service-v1">Our services</NavLink></li>
              </ul>
          </div>
          <div className="col-lg-2 col-sm-4 mb-20">
            <h5 className="footer-title">Company</h5>
            <ul className="footer-nav-link style-none">
              <li><NavLink to="/about-us-2">About us</NavLink></li>
              <li><NavLink to="/faq">FAQ’s</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div className="col-xxl-2 col-lg-3 col-sm-4 mb-20">
            <h5 className="footer-title">Support</h5>
            <ul className="footer-nav-link style-none">               
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
        <div className="row">
          <div className="col-xl-4 col-lg-3 order-lg-3 mb-15">
            <ul className="style-none d-flex align-items-center justify-content-center justify-content-lg-end social-icon">
             <FooterSocial/>
            </ul>
          </div>
          <div className="col-xl-4 col-lg-6 order-lg-2 mb-15">
            <ul className="style-none bottom-nav d-flex justify-content-center order-lg-last">
              <li><NavLink to="/contact">Privacy & Terms</NavLink></li>
              <li><NavLink to="/contact">Cookies</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
          </div>
          <div className="col-xl-4 col-lg-3 order-lg-1 mb-15">
            <div className="copyright text-center text-lg-start order-lg-first">
              Copyright @{new Date().getFullYear()} Minatas Resources.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FooterFour;
import { NavLink } from "react-router-dom";
import LoanOriginator from '../Loan-forms/loanoriginator';

// internal
import PartnersSliderOne from "../partners/partners-slider-one";


const HeroBannerSix = () => {
  return (
    <div className="hero-banner-six pt-170 md-pt-110 position-relative">
      <div className="container position-relative">
        <div className="row justify-content-between">
          <div className="col-md-6 wow fadeInLeft">
            <div className="pt-20 pb-50">
            <h1 className="hero-heading fw-bold">
                Get loan your loan <text className="hero-heading fw-bold" style={{ color: "#b16b42" }}>today!</text>
              </h1>
              <p className="text-lg pt-35 lg-pt-30 pb-35 lg-pb-20">
                Take the first step towards achieving your goals – apply now.
              </p>
              <div className="d-flex flex-wrap">
                <NavLink to="/contact"
                  className="btn-eighteen tran3s me-4 mt-10"
                >
                  Let’s Get Started
                </NavLink>

              </div>
            </div>
          </div>
          <div className="col-lg-6 ms-auto d-md-flex wow fadeInRight">
           <LoanOriginator />
          </div>
         
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="partner-logo-one pt-60 md-pt-50">
              <p className="fw-500 text-dark mb-40">
                <span className="text-decoration-underline"></span>{" "}
               
              </p>
           
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/images/shape/shape_42.svg"
        alt="shape"
        className="lazy-img shapes shape_01"
      />
    </div>
  );
};

export default HeroBannerSix;

import { NavLink } from "react-router-dom";


const TextFeatureSix = () => {
  return (
    <div className="text-feature-six position-relative mt-140 lg-mt-120">
      <div className="container">
        <div className="position-relative pb-0 xl-pb-10 md-pb-0">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="title-two mb-30">
                <div className="upper-title">where to start?</div>
                <h2>Do you qualify for a loan?</h2>
              </div>
              <p className="text-lg mb-35 pe-xl-5 me-xl-4">
              We make life easy with fast, simple personal loans. Instantly see how much you qualify for and apply today.
              </p>
              <NavLink to="/contact" className="btn-thirteen tran3s me-5">
                Apply Now
              </NavLink>
            </div>
            <div className="col-lg-4 ms-auto">
              <div className="ps-xl-5 ms-xxl-2 md-mt-60">
              <div className="info-wrapper card-style-ten border-bottom mb-60 lg-mb-40">
                  <h3 className="fw-bold">Requirements</h3>
                  <p>
                    See the details below.
                  </p>
                  <ul className="style-none list-meta">
                      <li className="d-flex align-items-center">
                        <div className="icon">
                          <img src="/assets/images/icon/salary.svg" alt="" className="lazy-img" />
                        </div>
                        <div className="ps-4">
                          <div className="text1 fw-bold">You have a monthly salary</div>
                          
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="icon">
                          <img src="/assets/images/icon/payslip.svg" alt="icon" className="lazy-img" />
                        </div>
                        <div className="ps-4">
                          <div className="text1 fw-bold">You have your latest payslip</div>
                         
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="icon">
                          <img src="/assets/images/icon/bank.svg" alt="icon" className="lazy-img" />
                        </div>
                        <div className="ps-4">
                          <div className="text1 fw-bold">You have the latest 3 month's bank statement</div>
                       
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="icon">
                          <img src="/assets/images/icon/id.svg" alt="icon" className="lazy-img" />
                        </div>
                        <div className="ps-4">
                          <div className="text1 fw-bold">You have an original NRC</div>
                       
                        </div>
                      </li>
                    </ul>
                  <div className="main-count d-inline-block position-relative fw-bold">
                    <span className="counter">1.75</span>m
                  </div>
                  <div>Redefining credit in Zambia with outstanding benefits</div>
                </div>

              </div>
            </div>
          </div>
          <div className="media-wrapper">
            <img src="/assets/images/assets/tree.svg" alt="hand-img" className="position lazy-img w-100" />
            <img
              src="/assets/images/assets/girl.png"
              alt="screen-img"
              className="lazy-img shapes screen_01"
            />
          </div>
          <img
            src="/assets/images/shape/shape_15.png"
            alt="shape"
            className="lazy-img shapes shape_01"
          />
          <img
            src="/assets/images/shape/shape_16.svg"
            alt="shape"
            className="lazy-img shapes shape_02"
          />
        </div>
      </div>
    </div>
  );
};

export default TextFeatureSix;

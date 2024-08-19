import { NavLink } from 'react-router-dom';
// internal
import service_data from '../../data/service-data';
import FaqSectionOne from '../faq/faq-section-one';

// card item 
function CardItem({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div className="card-style-twelve mb-40 lg-mb-20">
      <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle">
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-20 mb-15">{title}</h4>
      <p>{subtitle}</p>
    </div>
  )
}

const ServiceOneArea = () => {
  const services = service_data.filter(s => s.page);
  return (
    <>
      {/* text feature start */}
      <div className="text-feature-one mt-150 lg-mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow fadeInLeft">
              <div className="title-one">
                <h2>Here to serve you!</h2>
              </div>
              <p className="text-lg mt-45 lg-mt-30 mb-60 lg-mb-30">Your success is our mission. As financial lending partners, we offer expert guidance, unlocking your potential for growth and profitability</p>
              <NavLink to="/contact" className="btn-three icon-link mt-15 md-mb-60">
                <span>Request a Callback</span>
                <img src="/assets/images/icon/icon_09.svg" alt="icon" className="lazy-img icon ms-1" />
              </NavLink>
            </div>
            <div className="col-lg-6 ms-auto">
              <div className="row">
                <div className="col-sm-6 d-flex wow fadeInUp">
                  <CardItem icon="/assets/images/icon/icon_55.svg" title='Expert Loan Advisors' subtitle='Our team of seasoned financial experts is here to guide you through every step of your loan process, ensuring you make informed decisions tailored to your needs.' />
                </div>
                <div className="col-sm-6 d-flex wow fadeInUp" data-wow-delay="0.1s">
                  <CardItem icon="/assets/images/icon/icon_56.svg" title='Effective Support' subtitle='Receive prompt and personalized assistance whenever you need it. Our dedicated support team is committed to resolving any issues swiftly and efficiently.' />
                </div>
                <div className="col-sm-6 d-flex wow fadeInUp" data-wow-delay="0.2s">
                  <CardItem icon="/assets/images/icon/icon_57.svg" title='Low Fees' subtitle='Enjoy competitive interest rates and minimal fees, making our loan solutions affordable and accessible to everyone.' />
                </div>
                <div className="col-sm-6 d-flex wow fadeInUp" data-wow-delay="0.3s">
                  <CardItem icon="/assets/images/icon/icon_58.svg" title='Loan Facility' subtitle='Access a range of flexible loan options designed to meet your financial needs, whether for personal or business purposes.' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* text feature end */}

      {/* block feature start */}
      <div className="block-feature-one position-relative light-bg-deep mt-100 lg-mt-60 pt-120 lg-pt-60 pb-130 lg-pb-60">
        <div className="container">
          <div className="position-relative">
            <div className="title-one text-center mb-40 lg-mb-10">
              <h2>Our Services</h2>
              <p className="text-lg mb-45 lg-mb-10">
            Financial lending solutions for you and more.
          </p>
            </div>
            <div className="row">
            {services.map((item, i) => (
              <div
                key={i}
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay={`0.${i + 1}s`}
              >
                <div className="card-style-eleven vstack tran3s w-100 mt-30">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="lazy-img icon me-auto"
                  />
                  <h4 className="fw-500 mt-30 mb-15">{item.title}</h4>
                  <p className="mb-25">
                    {item.desc}
                  </p>
                  <NavLink to="/service-details"
                    className="arrow-btn tran3s mt-auto stretched-link"
                  >
                    <img src="/assets/images/icon/icon_09.svg" alt="icon" className="lazy-img" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>

          </div>
        </div>
        <img src="/assets/images/shape/shape_05.svg" alt="shape" className="lazy-img shapes shape_01" />
        <img src="/assets/images/shape/shape_05.svg" alt="shape" className="lazy-img shapes shape_02" />
      </div>
      {/* block feature end */}


      {/* faq start */}
      <FaqSectionOne cls='mt-150 lg-mt-80 mb-150 lg-mb-80'/>
      {/* faq end */}
    </>
  );
};

export default ServiceOneArea;
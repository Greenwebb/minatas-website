import { NavLink } from 'react-router-dom';
import service_data from "../../data/service-data";

type IProps = {
  page_title: string;
  page_data: string;
  bg_img: string;
};


// ServiceNav
function ServiceNav({ icon, title, active, page }: { icon: string; title: string; active?: boolean, page: string }) {
  return (
    <li>
      <NavLink to={'?page=' + page} className={`d-flex align-items-center w-100 ${active ? 'active' : ''}`}>
        <img src={icon} alt="icon" className="lazy-img" />
        <span>{title}</span>
      </NavLink>
    </li>
  )
}
// CardItem
function CardItem({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div className="card-style-sixteen text-center mt-40">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-35 lg-mt-30 mb-15">{title}</h4>
      <p className="m0">{subtitle}</p>
    </div>
  )
}
const ServiceDetailsArea = ({
  page_title,
  bg_img,
  page_data,

}: IProps) => {
  return (
    <div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-lg-8 order-lg-last">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              <h2>{page_title}</h2>
              <p>{page_data}</p>
              <div className="img-meta mb-60 lg-mb-40">
                <img src={bg_img} alt="service_img" className="lazy-img w-100 rounded-4" />
              </div>
              <h3>Our Processing.</h3>
              <p>Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats and protecting a company’s operations and reputation.</p>
              <div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
                <div className="row">
                  <div className="col-md-4 wow fadeInUp">
                    <CardItem icon="/assets/images/icon/icon_81.svg" title='Collect Doc' subtitle='We collect the required documents & are sent for verification' />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                    <CardItem icon="/assets/images/icon/icon_82.svg" title='Check & Finalize' subtitle='loan application and documents are verified' />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                    <CardItem icon="/assets/images/icon/icon_83.svg" title='Approved' subtitle='After approval, your loan is disbursed.' />
                  </div>
                </div>
              </div>
              <div className="light-bg-deep quote-wrapper position-relative mb-60 lg-mb-40">
                <div className="d-xl-flex align-items-start">
                  <img src="/assets/images/icon/icon_84.svg" alt="icon" className="lazy-img icon" />
                  <div className="ps-xl-5">
                    <blockquote>Empower your future with the right loan—because financial freedom starts with the right choice.</blockquote>
                    <div><span className="fw-bold">Minatas Resources CEO</span> Zambia</div>
                  </div>
                </div>
                <img src="/assets/images/assets/ils_03.svg" alt="ils_icon" className="lazy-img shapes shape_01" />
              </div>
              <h3>Qualifications & Requirements</h3>
              <p>Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats and protecting a company’s operations and reputation. They can actually generate value and create opportunities. </p>
              <ul className="style-none list-item pb-20">
                <li>Need to be 18+</li>
                <li>Require valid passport, driving license or national ID.</li>
                <li>Need to be a job holder</li>
                <li>Must be citizen of republic of Zambia</li>
                <li>Latest 3 months bank statements.</li>
              </ul>
              <p>Our dedicated risk and compliance consulting team assists clients in transforming uncertainty into advantageous prospects.</p>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 order-lg-first">
            <aside className="md-mt-40">
              <div className="service-nav-item">
                <ul className="style-none">
                  {service_data.map((item, i) => (
                    <div key={item.id}
                      className="fadeInUp"
                      data-wow-delay={`0.${i}s`}>
                      <ServiceNav icon={item.icon} title={item.title} active={true} page={item.page} />

                    </div>
                  ))}
                </ul>
              </div>
              <div className="contact-banner text-center mt-40 lg-mt-20">
                <h3 className="mb-20">Any Questions? Let’s talk</h3>
                <NavLink to="/contact" className="tran3s fw-500">Let’s Talk</NavLink>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsArea;
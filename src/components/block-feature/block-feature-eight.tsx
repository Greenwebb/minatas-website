import { NavLink } from "react-router-dom";
// internal
import service_data from "../../data/service-data";


const BlockFeatureEight = () => {
  const services = service_data.filter((s) => s.page);
  return (
    <div style={{ marginTop: '-70px' }} className="block-feature-eight position-relative pt-130 lg-pt-80 pb-130 lg-pb-60">
      <div className="container">
        <div className="position-relative">
          <div className="title-two mb-20 lg-mb-10">
            <h2>Our products</h2>
          </div>
          <p className="text-lg mb-45 lg-mb-10">
            Financial lending solutions for you and more.
          </p>
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
                  <NavLink to={"/service-details?page=" + item.page}
                    className="arrow-btn tran3s mt-auto stretched-link"
                  >
                    <img src="/assets/images/icon/icon_09.svg" alt="icon" className="lazy-img" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>

          <div className="section-btn md-mt-40">
            <NavLink to="/service-v1" className="btn-thirteen tran3">
              Learn More
            </NavLink>
          </div>
        </div>
      </div>
      <img src="/assets/images/shape/shape_16.svg" alt="shape" className="lazy-img shapes shape_01" />
    </div>
  );
};

export default BlockFeatureEight;

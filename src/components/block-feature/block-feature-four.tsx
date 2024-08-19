import { NavLink } from "react-router-dom";

// card item
function BlockCardItem({
  icon,
  title,
  subtitle,
  isActive,
}: {
  icon: string;
  title: string;
  subtitle: string;
  isActive?: boolean;
}) {
  return (
    <div
      className={`card-style-six vstack tran3s w-100 mt-30 m-10 ${isActive ? "active" : ""}`}
    >
      <div className="icon d-flex align-items-center justify-content-center">
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-40 md-mt-30 mb-25">{title}</h4>
      <p className="mb-20">{subtitle}</p>
      
    </div>
  );
}

const BlockFeatureFour = () => {
  return (
    <div className="block-feature-four position-relative mt-150 lg-mt-80 pb-150 lg-pb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-9 m-auto wow fadeInUp">
            <div className="title-one text-center mb-50 lg-mb-20">
              <h2>Our <text className="text-style">Values</text> </h2>
            </div>
          </div>
        </div>
        <div className="row gx-xxl-5">
          <div className="col-lg-6 d-flex wow fadeInUp">
            <BlockCardItem
              icon="/assets/images/icon/mission.svg"
              title="Mission"
              subtitle="Dedicated to enhancing lives and fostering financial stability through sustainable finance solutions."
            />
          </div>
          <div className="col-lg-6 d-flex wow fadeInUp">
            <BlockCardItem
              icon="/assets/images/icon/vision.svg"
              title="Vision"
              subtitle="Committed to championing economic equality by promoting accessible financial services for everyone."
            />
          </div>

          <div className="col-lg-6 d-flex wow fadeInUp" data-wow-delay="0.2s">
            <BlockCardItem
              icon="/assets/images/icon/emp.svg"
              title="Empowerment"
              subtitle="Empowering dreams and aspirations by providing personalized financial support and guidance."
            />
          </div>
          <div className="col-lg-6 d-flex wow fadeInUp" data-wow-delay="0.2s">
            <BlockCardItem
              icon="/assets/images/icon/cola.svg"
              title="Collaboration"
              subtitle="Fostering partnerships and collaboration within our communities to drive collective prosperity and financial empowerment for all."
            />
          </div>
        </div>
      </div>
      <img src="/assets/images/shape/shape_05.svg" alt="shape" className="lazy-img shapes shape_01" />
      <img src="/assets/images/shape/shape_06.svg" alt="shape" className="lazy-img shapes shape_02" />
    </div>
  );
};

export default BlockFeatureFour;

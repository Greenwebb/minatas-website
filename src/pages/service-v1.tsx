import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import ServiceOneArea from "../components/services/service-v1-area";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import FooterFour from "../layout/footer/footer-four";

export default function ServiceV1Page() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Our Products" />
      {/* seo title */}
 
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo/>
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Our Services"
            subtitle="Offering solutions & services to address a spectrum of financial issues"
            page="Services"
            shape="/assets/images/shape/shape_26.svg"
            bg_img="/assets/images/media/family.webp"
            style_2={true}
            cls="me-xxl-4 me-lg-5"
          />
          {/* breadcrumb end */}

          {/* service v1 area start */}
          <ServiceOneArea />
          {/* service v1 area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}
        </main>

        {/* footer start */}
        <FooterFour/>
        {/* footer end */}
      </div>
     
    </Wrapper>
  );
}

import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two";
import TextFeatureThree from "../components/text-feature/text-feature-three";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import BlockFeatureFour from "../components/block-feature/block-feature-four";

import FancyBannerFive from "../components/fancy-banner/fancy-banner-five";
import FaqSectionOne from "../components/faq/faq-section-one";

import FooterOne from "../layout/footer/footer-one";

export default function AboutUsTwoPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="About us" />
      {/* seo title */}
    
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo/>
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbTwo
            title="About Us"
            subtitle="Navigating Your Financial Growth With Experience & Insightful Solutions."
            page="About us"
            style_4={true}
            col="col-xl-8 col-lg-9 m-auto"
          />
          {/* breadcrumb end */}

          {/* text feature three area start */}
          <TextFeatureThree cls="text-feature-seven mt-160 lg-mt-80 pb-200 lg-pb-120"/>
          {/* text feature three area end */}

    
          {/* block feature four start */}
          <BlockFeatureFour/>
          {/* block feature four end */}

        
          {/* fancy banner five start */}
          <FancyBannerFive/>
          {/* fancy banner five end */}

          {/* faq section start */}
          <FaqSectionOne/>
          {/* faq section end */}
         
          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}
        </main>

        {/* footer start */}
        <FooterOne/>
        {/* footer end */}
      </div>
    </Wrapper>
  );
}

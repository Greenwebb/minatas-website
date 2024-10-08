import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two";
import FaqArea from "../components/faq/faq-area";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import FooterTwo from "../layout/footer/footer-two";

export default function FaqPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Faq" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbTwo
            title="Questions & Answers"
            subtitle="Find out the all the question & answers you have about us"
            page="FAQ’s"
            style_4={true}
          />
          {/* breadcrumb end */}

          {/* faq area start */}
          <FaqArea />
          {/* faq area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}
        </main>

        {/* footer start */}
        <FooterTwo/>
        {/* footer end */}
      </div>
     
    </Wrapper>
  );
}

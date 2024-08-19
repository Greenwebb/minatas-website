import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import HeroBannerSix from "../components/hero-banner/hero-banner-six";
import BlockFeatureEleven from "../components/block-feature/block-feature-eleven";
import BlockFeatureTwelve from "../components/block-feature/block-feature-twelve";
import PortfolioTwo from "../components/portfolio/portfolio-two";
import TextFeatureEight from "../components/text-feature/text-feature-eight";
import FancyBannerFive from "../components/fancy-banner/fancy-banner-five";
import FeedbackSix from "../components/feedback/feedback-six";
import TeamSectionThree from "../components/team/team-section-three";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import FooterThree from "../layout/footer/footer-three";


import TextFeatureSix from "../components/text-feature/text-feature-six";
import BlockFeatureEight from "../components/block-feature/block-feature-eight";
import TextFeatureSeven from "../components/text-feature/text-feature-seven";

import TextFeatureNine from "../components/text-feature/text-feature-nine";
import FeedbackFour from "../components/feedback/feedback-four";
import HomeFourBlogs from "../components/blogs/home-4-blogs";
import FooterFour from "../layout/footer/footer-four";
import FooterOne from "../layout/footer/footer-one";
export default function HomePageSix() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Home" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <HeroBannerSix/>
          {/* hero banner end */}
          {/* text feature six start */}
          <TextFeatureSix/>
          {/* text feature six end */}

          {/* block feature seven start */}
          <BlockFeatureEight />
          {/* block feature seven end */}

          {/* text feature seven start */}
          <TextFeatureSeven />
          {/* text feature seven end */}


          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

        
        </main>
      </div>
      {/* footer start */}
      <FooterFour/>
      {/* footer end */}
    
    </Wrapper>
  );
}

import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import HeroBannerSix from "../components/hero-banner/hero-banner-six";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";


import TextFeatureSix from "../components/text-feature/text-feature-six";
import BlockFeatureEight from "../components/block-feature/block-feature-eight";
import TextFeatureSeven from "../components/text-feature/text-feature-seven";

import FooterFour from "../layout/footer/footer-four";

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

import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import FooterOne from "../layout/footer/footer-one";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import ContactArea from "../components/contact/contact-area";

export default function ContactPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Contact" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo/>
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Contact us for inquiries"
            subtitle="Get our all info and also you can message us directly from here"
            page="Contact"
            shape="/assets/images/shape/shape_33.svg"
          />
          {/* breadcrumb end */}

          {/* contact area start */}
          <ContactArea />
          {/* contact area end */}

        </main>

        {/* footer start */}
        <FooterOne/>
        {/* footer end */}
      </div>
    
    </Wrapper>
  );
}

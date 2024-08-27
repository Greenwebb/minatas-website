import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import ServiceDetailsArea from "../components/services/service-details-area";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import FooterOne from "../layout/footer/footer-one";
import service_data from "../data/service-data";
import { useLocation } from 'react-router-dom';



export default function ServiceDetailsPage() {

  const location = useLocation(); // Get the current location
  const queryParams = new URLSearchParams(location.search); // Extract the query parameters
  const page = queryParams.get('page');
  const pageData = service_data.find(service => service.page === page);
  // Check if the page exists in service_data
  if (pageData) {
    console.log("Title:", pageData.title);
    console.log("Description:", pageData.desc); // Note: changed from 'description' to 'desc'
    console.log("Features:");
    // Add code here to display the features or additional information
  } else {
    console.log("Service Not Found: Sorry, the service you are looking for does not exist.");
  }
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Service Details" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title={pageData ? pageData.title : 'Service Not Found'}
            subtitle="Offering solutions & services to address a spectrum of financial issues"
            page={pageData ? pageData.title : 'Service Not Found'}
            shape="/assets/images/shape/shape_27.svg"
            bg_img={pageData ? pageData.image : 'Service Not Found'}
            style_2={true}
            cls="me-xl-4"
          />
          {/* breadcrumb end */}

          {/* service details area start */}
          <ServiceDetailsArea page_title={pageData ? pageData.title : 'Service Not Found'} bg_img={pageData ? pageData.image : 'Service Not Found'} page_data={pageData ? pageData.long_dec: 'Service Not Found'} />
          {/* service details area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>

    </Wrapper>
  );
}

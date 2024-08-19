import ContactForm from "../forms/contact-form";

// address block item
function AddressBlock({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="address-block-one text-center mb-40 wow fadeInUp">
      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <h5 className="title">{title}</h5>
      <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
    </div>
  );
}

const ContactArea = () => {
  return (
    <div className="contact-us-section pt-150 lg-pt-80">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-12 m-auto">
              <div className="row">
                <div className="col-md-4">
                  <AddressBlock
                    icon="/assets/images/icon/icon_90.svg"
                    title="Our Address"
                    subtitle="Plot No-14,Wusikili Road, Northmead, Lusaka, Zambia."
                  />
                </div>
                <div className="col-md-4">
                  <AddressBlock
                    icon="/assets/images/icon/icon_91.svg"
                    title="Contact Info"
                    subtitle='Open a chat or give us call at <br/><a href="tel:+260771873366" className="call text-lg fw-500">+260771873366</a>'
                  />
                </div>
                <div className="col-md-4">
                  <AddressBlock
                    icon="/assets/images/icon/icon_92.svg"
                    title="Live Support"
                    subtitle='live chat service <br/><a href="#" className="webaddress">inquiries@minatasresources.com</a>'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-wrapper light-bg mt-80 lg-mt-40">
            <div className="row">
              <div className="col-lg-5">
                <div className="d-flex flex-column flex-lg-column-reverse">
                  <div className="row">
                    <div className="col-md-8 col-6 me-auto ms-auto">
                      <img
                        src="/assets/images/assets/ils_07.svg"
                        alt="icon"
                        className="lazy-img me-auto ms-auto"
                      />
                    </div>
                  </div>
                  <div className="title-one text-center text-lg-start md-mt-20 mb-70 md-mb-30">
                    <h2>Have inquiries? Reach out via message</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="form-style-one ps-xl-5">
                  {/* form start */}
                  <ContactForm />
                  {/* form end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-banner mt-120 lg-mt-80">
        <div className="gmap_canvas h-100 w-100">
          <iframe
            className="gmap_iframe h-100 w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.7544072675105!2d28.290735509767803!3d-15.403073416661616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f4ade36b320d%3A0x6008698762d5644d!2s14%20Wusikili%20Rd%2C%20Lusaka!5e1!3m2!1sen!2szm!4v1723974379852!5m2!1sen!2szm"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;

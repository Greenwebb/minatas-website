import { useState } from "react";
// internal
import VideoPopup from "../common/video-popup";

const FancyBannerFive = ({
  style_2 = false,
  style_3 = false,
}: {
  style_2?: boolean;
  style_3?: boolean;
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      {!style_2 && !style_3 && (
        <div className="fancy-banner-five text-center position-relative mt-150 lg-mt-80 pt-80 md-pt-60 pb-80 md-pb-60">
          <div className="container">
            <h2 className="text-white fw-bold">
            Your Financial Journey Starts Here
            </h2>
            <p className="text-white text-xl pt-30 md-pt-10 pb-45 lg-pb-30">
            we understand that financial decisions are deeply personal. That's why
            we're committed to offering more than just loans – we're here to provide support and guidance every step of the way.
            </p>
            
          </div>
        </div>
      )}

      {style_2 && (
        <div className="fancy-banner-five no-bg text-center position-relative mt-30 lg-mt-10">
          <div className="container">
            <div className="bg-wrapper pt-95 lg-pt-50 pb-95 lg-pb-50">
              <h2 className="text-white fw-bold mb-50 lg-mb-30">
                Explore Our Business Division here.
              </h2>
              <a
                className="fancybox rounded-circle video-icon tran5s text-center d-flex align-items-center justify-content-center m-auto cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <img
                  src="/assets/images/assets/sticker_02.png"
                  alt="sticker"
                  className="lazy-img"
                />
              </a>
            </div>
          </div>
        </div>
      )}

      {style_3 && (
        <div className="fancy-banner-five no-bg text-center position-relative mt-100 lg-mt-80">
          <div className="bg-wrapper pt-225 xl-pt-150 lg-pt-50 pb-225 xl-pb-150 lg-pb-50">
            <a
              className="fancybox rounded-circle video-icon tran5s text-center d-flex align-items-center justify-content-center m-auto cursor-pointer"
              onClick={() => setIsVideoOpen(true)}
            >
              <img
                src="/assets/images/assets/sticker_02.png"
                alt="sticker"
                className="lazy-img"
              />
            </a>
          </div>
        </div>
      )}

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"aXFSJTjVjw0"}
      />
      {/* video modal end */}
    </>
  );
};

export default FancyBannerFive;

import React from "react";
import OwlCarousel from "react-owl-carousel";
import { parseHtml } from "../../../Utils/utils";

const DemoVideos = ({ videoDetailData }) => {
  const demoVideoConfig = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 0,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      <OwlCarousel className="owl-theme MT-OwlDots" {...demoVideoConfig}>

        {videoDetailData &&
          videoDetailData.data &&
          videoDetailData.data.map((item, index) => (
            // <div className="item" key={index}>
            <div className="articles">
              <div className="article">
                <div className="thumbnail">
                  <a href={item && item.video_url} data-fancybox>
                    {/* <video src={item && item.video_url}></video> */}
                    <iframe
                      width="100%"
                      height="200"
                      src={item && item.video_url}
                      frameBorder="50"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                      style={{ borderRadius: "30px" }}
                    />
                  </a>
                </div>

                <div className="detail">
                  <h5>{item && item.title}</h5>
                  <div className="description">
                    <p>{item && parseHtml(item.description.substring(0, 300))}</p>
                  </div>
                  <div className="tag-link flex-none">
                    <div className="tag blue bg-light-blue">{item && item.standard_tag}</div>
                    {/* <div className="tag bg-light-orange">{item && item.title}</div> */}
                    <div className="tag bg-light-orange">{item && item.subject_tag}</div>
                  </div>
                </div>
              </div>
            </div>
            // </div>
          ))}
      </OwlCarousel>
    </>
  )
};


export default DemoVideos;

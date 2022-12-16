import React, { useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import VideoCard from "../Cards/VideoCard";
import OwlCarousel from "react-owl-carousel";
import { connect } from "react-redux";
import { demoVideoListApi, demoVideoDetailApi, defaultDemoVideoListApi } from "../../../redux/action/demoVideo";
import { parseHtml } from "../../../Utils/utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DemoVideos = ({ videoDetailData, readMoreModal }) => {

  const demoVideoConfig = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Slider className="owl-theme MT-OwlDots" {...demoVideoConfig}>

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
                    <p>{item && parseHtml(item.description.substring(0, 150))}</p>
                    {item && item.description.length > 150 ? (
                      <span
                        onClick={() => {
                          readMoreModal(item.title, item.description);
                        }}
                        role="button"
                      >
                        Read more...
                      </span>
                    ) : (
                      ""
                    )}
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
      </Slider>
    </>
  )
};

const mapStateToProps = (state) => {
  const { DemoVideoReducer } = state;
  const { demoListData, videoDetailData, defaultVideoDetailData } = DemoVideoReducer;
  return {
    demoListData: DemoVideoReducer.demoListData,
    videoDetailData: DemoVideoReducer.videoDetailData,
    defaultVideoDetailData: DemoVideoReducer.defaultVideoDetailData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    demoVideoListApi: () => dispatch(demoVideoListApi()),
    defaultDemoVideoListApi: () => dispatch(defaultDemoVideoListApi()),
    demoVideoDetailApi: (data) => dispatch(demoVideoDetailApi(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoVideos);

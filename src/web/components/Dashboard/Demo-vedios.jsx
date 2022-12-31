import React, { useState } from "react";
import VideoCard from "../Cards/VideoCard";
import { connect } from "react-redux";
import { demoVideoListApi, demoVideoDetailApi, defaultDemoVideoListApi } from "../../../redux/action/demoVideo";
import { parseHtml } from "../../../Utils/utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DemoVideos = ({ videoDetailData, readMoreModal }) => {
  const demoVideoConfig2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
      {
        breakpoint: 680,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...demoVideoConfig2} className="demoVideoConfig MT-SlickDots">
        {videoDetailData &&
          videoDetailData.data &&
          videoDetailData.data.map((item, index) => (
            <div className="articles" key={index}>
              <div className="article">
                <div className="thumbnail">
                  <a href={item && item.video_url} data-fancybox>
                    {/* <video src={item && item.video_url}></video> */}
                    <iframe width="100%" height="200" src={item && item.video_url} frameBorder="50" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Embedded youtube" style={{ borderRadius: "30px" }} />
                  </a>
                </div>

                <div className="detail">
                  <h5>{item && item.title}</h5>
                  <div className="description">
                    <p>
                      {item && parseHtml(item.description.substring(0, 150))}
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
                    </p>
                  </div>
                  <div className="tag-link flex-none">
                    <div className="tag blue bg-light-blue">{item && item.standard_tag}</div>
                    {/* <div className="tag bg-light-orange">{item && item.title}</div> */}
                    <div className="tag bg-light-orange">{item && item.subject_tag}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </>
  );
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

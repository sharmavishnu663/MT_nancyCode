import React, { useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import VideoCard from "../Cards/VideoCard";
import OwlCarousel from "react-owl-carousel";
import { connect } from "react-redux";
import { demoVideoListApi, demoVideoDetailApi, defaultDemoVideoListApi } from "../../../redux/action/demoVideo";
import { parseHtml } from "../../../Utils/utils";

const DemoVideos = ({ demoVideoListApi, demoListData, demoVideoDetailApi, videoDetailData, defaultVideoDetailData, defaultDemoVideoListApi }) => {
  const [activeTab, setActiveTab] = useState(demoListData && demoListData.data && demoListData.data[0] && demoListData.data[0].id);
  const [activeTabDetail, setActiveTabDetail] = useState();
  // console.log(videoDetailData);
  useEffect(() => {
    demoVideoListApi();
    defaultDemoVideoListApi();
  }, []);
  useEffect(() => {
    // console.log(demoListData && demoListData.data && demoListData.data[0] && demoListData.data[0].id);
    demoVideoDetailApi(demoListData && demoListData.data && demoListData.data[0] && demoListData.data[0].id);
  }, [demoListData]);
  useEffect(() => {
    demoVideoDetailApi(activeTabDetail);
  }, [activeTabDetail]);

  const demoVideoConfig = {
    loop: false,
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

  const apiHit = () => {
    demoVideoDetailApi(activeTabDetail);
  };

  // console.log(defaultVideoDetailData);

  return (
    <>
      <section className="cards" id="demo-videos">
        <div className="container">
          <div className="row">
            <div className="col-md-12 box-radius">
              <h3 className="headline text-center mb-3">
                Watch our <span className="text-blue">Demo Videos</span>
              </h3>
              <p className="sub-headline text-center">Take a look at some of our demo sessions to get an idea for what we stand for in educating our student.</p>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12 pills">
                  <ul className="nav nav-tabs MT_Tab" id="MT_Tab" role="tablist">
                    {demoListData &&
                      demoListData.data &&
                      demoListData.data.map((item, index) => (
                        <li className="nav-item" role="presentation" key={index}>
                          <button
                            className={`${(item && item.id == activeTab) || index === 0 ? "nav-link active" : `nav-link`}`}
                            id={`Edu-tab-${activeTab}`}
                            data-bs-toggle="tab"
                            data-bs-target={`#MT-tabPane-${activeTab}`}
                            type="button"
                            role="tab"
                            aria-controls={`MT-tabPane-${activeTab}`}
                            aria-selected="true"
                            onClick={() => {
                              setActiveTab(item && item.id);
                              setActiveTabDetail(item && item.class_id);
                              apiHit();
                            }}
                          >
                            {item && item.class_category && item.class_category.name}
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="tab-content " id="MT_TabContent">
                  {activeTab ? (
                    <div className="tab-pane fade show active" id={`MT-tabPane-${activeTab}`} role="tabpanel" aria-labelledby={`Edu-tab-${activeTab}`} tabIndex="0">
                      {/* <!-- explore-lakshya --> */}

                      <OwlCarousel className="owl-theme MT-OwlDots" {...demoVideoConfig}>
                        {videoDetailData &&
                          videoDetailData.data &&
                          videoDetailData.data.map((item, index) => (
                            <div className="item" key={index}>
                              <div className="articles">
                                <div className="article">
                                  <div className="thumbnail">
                                    <a href={item && item.video_url} data-fancybox>
                                      <video src={item && item.video_url}></video>
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
                            </div>
                          ))}
                      </OwlCarousel>
                    </div>
                  ) : (
                    <div className="tab-pane fade show active" id={`MT-tabPane-${activeTab}`} role="tabpanel" aria-labelledby={`Edu-tab-${activeTab}`} tabIndex="0">
                      {/* <!-- explore-lakshya --> */}

                      <OwlCarousel className="owl-theme MT-OwlDots" {...demoVideoConfig}>
                        {defaultVideoDetailData &&
                          defaultVideoDetailData.data &&
                          defaultVideoDetailData.data.map((item, index) => (
                            <div className="item" key={index}>
                              <div className="articles">
                                <div className="article">
                                  <div className="thumbnail">
                                    <a href={item && item.video_url} data-fancybox>
                                      <video src={item && item.video_url}></video>
                                    </a>
                                  </div>

                                  <div className="detail">
                                    <h5>{item && item.title}</h5>
                                    <div className="description">
                                      <p>{item && parseHtml(item.description.substring(0, 300))}</p>
                                    </div>
                                    <div className="tag-link flex-none">
                                      <div className="tag blue bg-light-blue">{item && item.subject_tag}</div>
                                      <div className="tag bg-light-orange">{item && item.standard_tag}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </OwlCarousel>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../Cards/CourseCard";
import DemoVideos from "../Dashboard/Demo-vedios";
import Feedback from "../Dashboard/Feedback";
import TopperDetails from "../Dashboard/Toppers";
import { connect } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import { demoVideoListApi, demoVideoDetailApi, defaultDemoVideoListApi } from "../../../redux/action/demoVideo";
import { useEffect } from "react";
import { topperListAPI, achivementListAPI, categoryBaodStandardsListAPI, cityListAPI, AreaListAPI, studentHearApi } from "../../../redux/action/home";
import { categoryListApi, categoryDetailsApi, courseSearchDetailAPI } from "../../../redux/action/category";
import Connect from "../Dashboard/Connect";
import { parseHtml } from "../../../Utils/utils";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import Modal from "react-bootstrap/Modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const College = ({ categoryListApi, categoryDetailsApi, categoryDetailsData, demoVideoListApi, demoListData, topperListAPI, toppersData, achivementListAPI, categoryData, cityListAPI, courseSearchDetailAPI, courseSearchDetailsData, studentHearApi, studentHearData, demoVideoDetailApi, defaultDemoVideoListApi, defaultVideoDetailData, videoDetailData }) => {
  const [categoryActive, setCategoryActive] = useState(localStorage.getItem("categorySelectedId"));
  const [courseSearch, setCourseSearch] = useState();
  const [search, setSearch] = useState();
  const [indexData, setIndexData] = useState(0);
  const [demoVideoCheck, setDemoVideoCheck] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    defaultDemoVideoListApi();
    demoVideoListApi();
    topperListAPI();
    achivementListAPI();
    categoryListApi();
    cityListAPI();
    studentHearApi();
    categoryDetailsApi(localStorage.getItem("categorySelectedId"));
  }, []);

  const handleCategoryId = (id) => {
    setCategoryActive(id);
    localStorage.setItem("categorySelectedId", id);
    categoryDetailsApi(id);
  };

  const handleSearch = (e) => {
    const data = { search: e };
    if (e) {
      courseSearchDetailAPI(data);
      setCourseSearch([data]);
    } else {
      setCourseSearch([]);
    }
  };

  const [show, setShow] = useState(false);
  const [ReadMoreCWETitle, setReadMoreCWETitle] = useState("");
  const [ReadMoreCWEDescription, setReadMoreCWEDescription] = useState("");
  const readMoreModal = (title, description) => {
    setShow(true);
    setReadMoreCWETitle(title);
    setReadMoreCWEDescription(description);
  };

  const CoursesWeOfferConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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

  const demoVideoConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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

  const searchData = {
    loop: true,
    autoplay: false,
    margin: 40,
    dots: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };
  const apiHit = (detailID) => {
    setDemoVideoCheck(false);
    demoVideoDetailApi(detailID);
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} centered size="md">
        <Modal.Body>
          <div className="articles our-courses p-0">
            <div className="article border-0">
              <div className="detail p-2">
                <h5>{ReadMoreCWETitle}</h5>
                <div className="description">
                  <p>{parseHtml(ReadMoreCWEDescription)}</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <section className="cards" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-light-blue box-radius">
              <h3 className="headline text-center mb-3">
                <span className="text-blue">Courses</span> we offer
              </h3>
              <p className="sub-headline text-center">Discover our expansive range of courses with world class curriculum and teaching faculty, here at MT Educare.</p>

              <div className="article-header with-search">
                <ul className="nav nav-tabs MT_Tab" id="MT_Tab" role="tablist">
                  {categoryData &&
                    categoryData.data &&
                    categoryData.data.map((item, index) => (
                      <li className="nav-item" role="presentation" key={index}>
                        <button
                          className={`${item && item.id == categoryActive ? "nav-link active" : "nav-link"}`}
                          id={`Edu-tab-${categoryActive}`}
                          data-bs-toggle="tab"
                          data-bs-target={`#MT-tabPane-${categoryActive}`}
                          type="button"
                          role="tab"
                          aria-controls={`MT-tabPane-${categoryActive}`}
                          aria-selected="true"
                          onClick={(e) => {
                            handleCategoryId(item && item.id);
                            setIndexData(index);
                          }}
                        >
                          {item && item.name}
                        </button>
                      </li>
                    ))}
                </ul>
                <form action="">
                  <input type="text" className="search" placeholder="Search Course" value={search} onChange={(e) => handleSearch(e.target.value)} />
                </form>
              </div>

              <div className="tab-content MT_TabContent" id="MT_TabContent">
                <div className="tab-pane fade show active" id="MT-tabPane-1" role="tabpanel" aria-labelledby="Edu-tab-1" tabIndex="0">
                  {indexData == 0 || indexData === undefined ? (
                    <div className="explore-lakshya bg-light-orange">
                      <div>
                        <img src="../assets/imgs/lakshya-logo.png" alt="lakshya-logo" />
                        <p>Lakshay is our partner which provides the higher secondary education science courses for competitive exams.</p>
                      </div>
                      <a href="https://www.lakshyainstitute.com/" className="btn btn-lg" target="_blank">
                        Explore Lakshya
                      </a>
                    </div>
                  ) : null}
                  {indexData && indexData == 2 ? (
                    <div className="explore-lakshya bg-light-orange">
                      <div>
                        <img src="../assets/imgs/mahesh-tutorials-school.png" alt="lakshya-logo" />
                        <p>For over three decades, Mahesh tutorials has been mentoring students for success, in academics and in life. </p>
                      </div>
                      <a href="https://www.lakshyainstitute.com/" className="btn btn-lg" target="_blank">
                        Explore School
                      </a>
                    </div>
                  ) : null}
                  {indexData && indexData == 1 ? (
                    <div className="explore-lakshya bg-light-orange">
                      <div>
                        <img src="../assets/imgs/mahesh-tutorials.png" alt="lakshya-logo" />
                      </div>
                      <div>
                        <a href="https://commerce.maheshtutorials.com/" className="btn btn-lg mr-3" style={{ marginRight: "22px" }} target="_blank">
                          Explore Commerce
                        </a>
                        <a href="http://science.maheshtutorials.com/" className="btn btn-lg" target="_blank">
                          Explore Science
                        </a>
                      </div>
                    </div>
                  ) : null}
                  {/* <!-- explore-lakshya --> */}
                  {courseSearch && courseSearch.length > 0 && courseSearchDetailsData.data ? (
                    // <OwlCarousel className="MT-SlickDots owl-theme MT-OwlDots" {...searchData}>
                    <>
                      <div className="row">
                        {courseSearchDetailsData &&
                          courseSearchDetailsData.data &&
                          courseSearchDetailsData.data.map((item, index) => (
                            <div className="col-lg-4" key={index}>
                              <div className="articles our-courses">
                                <div className="article">
                                  <div className="thumbnail">
                                    <img src={item && IMAGE_BASE_URL + "/" + item.image} alt="thumbnail" />
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
                                    <div className="tag-link">
                                      <div className="tag">{item.tag_name}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </>
                  ) : (
                    // </OwlCarousel>
                    <>
                      <Slider {...CoursesWeOfferConfig} className="CoursesWeOfferConfig MT-SlickDots owl-theme MT-OwlDots">
                        {categoryDetailsData &&
                          categoryDetailsData.data &&
                          categoryDetailsData.data.map((item, index) => (
                            <div className="item" key={index}>
                              <div className="articles our-courses">
                                <div className="article">
                                  <div className="thumbnail">
                                    <img src={item && IMAGE_BASE_URL + "/" + item.image} alt="thumbnail" />
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
                                    <div className="tag-link">
                                      <div className="tag">{item.tag_name}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </Slider>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cards provisions">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="headline text-center mb-3">
                Our <span className="text-blue">provisions</span>
              </h3>
              <p className="sub-headline text-center">Our top-class facilities available for students at all times to ensure easy accessibility and outstanding results.</p>

              <div className="provision-list">
                <ul>
                  <li>
                    <img src="../assets/imgs/icon-hostel.svg" alt="icon" />
                    <span>Hostel Facilities</span>
                  </li>
                  <li>
                    <img src="../assets/imgs/icon-transport.svg" alt="icon" />
                    <span>Transportation Services</span>
                  </li>
                  <li>
                    <img src="../assets/imgs/icon-assignments.svg" alt="icon" />
                    <span>Daily Assignments</span>
                  </li>
                  <li>
                    <img src="../assets/imgs/icon-book.svg" alt="icon" />
                    <span>Revision Booklets</span>
                  </li>
                  <li>
                    <img src="../assets/imgs/icon-result.svg" alt="icon" />
                    <span>Result Analysis</span>
                  </li>
                </ul>
              </div>
              <div className="shadow"></div>
            </div>
          </div>
        </div>
      </section>
      {/* ===================== DEMO VIDEO SECTION STARTS ==================== */}
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
              <div className="pills">
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
                            //   setActiveTab(item && item.id);
                            //   setActiveTabDetail(item && item.class_id);
                            apiHit(item && item.class_id);
                          }}
                        >
                          {item && item.class_category && item.class_category.name}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="tab-content " id="MT_TabContent">
                <div className="tab-pane fade show active" id={`MT-tabPane-1`} role="tabpanel" aria-labelledby={`Edu-tab-1`} tabIndex="0">
                  {demoVideoCheck ? (
                    <Slider {...demoVideoConfig} className="demoVideoConfig">
                      {defaultVideoDetailData &&
                        defaultVideoDetailData.data &&
                        defaultVideoDetailData.data.map((item, index) => (
                          <div className="articles" key={index}>
                            <div className="article">
                              <div className="thumbnail">
                                <iframe width="100%" height="200" src={item && item.video_url} frameBorder="50" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Embedded youtube" style={{ borderRadius: "30px" }} />
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
                                  <div className="tag bg-light-orange">{item && item.subject_tag}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </Slider>
                  ) : (
                    <DemoVideos videoDetailData={videoDetailData} readMoreModal={readMoreModal} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== DEMO VIDEO SECTION ENDS =================*/}

      {/* ======================== OUR TOPPERS STARTS =================== */}
      <TopperDetails toppersData={toppersData} />
      {/* ================ OUR TOPPERS ENDS ======================= */}

      <Feedback studentHearData={studentHearData} />

      {/* =========================== CONNECT SECTION STARTS HERE =============*/}
      {/* =========================== CONNECT SECTION ENDS HERE ================ */}
      <Connect />
    </>
  );
};

const mapStateToProps = (state) => {
  const { DemoVideoReducer, HomeReducer, CategoryReducer } = state;
  const { demoListData, videoDetailData } = DemoVideoReducer;
  const { toppersData, achivementsData, cityData, areaData } = HomeReducer;
  const { categoryData, categoryDetailsData, courseSearchDetailsData } = CategoryReducer;
  return {
    demoListData: DemoVideoReducer.demoListData,
    videoDetailData: DemoVideoReducer.videoDetailData,
    toppersData: HomeReducer.toppersData,
    achivementsData: HomeReducer.achivementsData,
    boardStandardsData: HomeReducer.boardStandardsData,
    cityData: HomeReducer.cityData,
    areaData: HomeReducer.areaData,
    categoryData: CategoryReducer.categoryData,
    studentHearData: HomeReducer.studentHearData,
    categoryDetailsData: CategoryReducer.categoryDetailsData,
    courseSearchDetailsData: CategoryReducer.courseSearchDetailsData,
    demoListData: DemoVideoReducer.demoListData,
    defaultVideoDetailData: DemoVideoReducer.defaultVideoDetailData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    defaultDemoVideoListApi: () => dispatch(defaultDemoVideoListApi()),
    demoVideoListApi: () => dispatch(demoVideoListApi()),
    demoVideoDetailApi: (data) => dispatch(demoVideoDetailApi(data)),
    topperListAPI: () => dispatch(topperListAPI()),
    achivementListAPI: () => dispatch(achivementListAPI()),
    demoVideoDetailApi: (data) => dispatch(demoVideoDetailApi(data)),
    categoryBaodStandardsListAPI: (data) => dispatch(categoryBaodStandardsListAPI(data)),
    categoryListApi: () => dispatch(categoryListApi()),
    cityListAPI: () => dispatch(cityListAPI()),
    studentHearApi: () => dispatch(studentHearApi()),
    AreaListAPI: (data) => dispatch(AreaListAPI(data)),
    categoryDetailsApi: (data) => dispatch(categoryDetailsApi(data)),
    courseSearchDetailAPI: (data) => dispatch(courseSearchDetailAPI(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(College);

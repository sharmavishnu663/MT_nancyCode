import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Connect from "./Connect";
// import Courses from "./Courses";
import Modal from "react-bootstrap/Modal";

import DemoVideos from "./Demo-vedios";
import Feedback from "./Feedback";
import Offerings from "./Offerings";
import TopperDetails from "./Toppers";
import WhyMtEducare from "./WhyMTEducare";
import OwlCarousel from "react-owl-carousel";
import Slider from "react-slick";
import { Form, Input, Select } from "antd";
import { connect } from "react-redux";
import { topperListAPI, achivementListAPI, categoryBaodStandardsListAPI, cityListAPI, AreaListAPI, studentHearApi, weOfferApi } from "../../../redux/action/home";
import { categoryListApi, categoryDetailsApi, defaultCategoryListApi } from "../../../redux/action/category";
import { WebRoutes } from "../../../routes";
import { parseHtml } from "../../../Utils/utils";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import { defaultDemoVideoListApi, demoVideoListApi, demoVideoDetailApi } from "../../../redux/action/demoVideo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Dashboard = ({ defaultDemoVideoListApi, defaultCategoryListApi, categoryDetailsApi, topperListAPI, toppersData, achivementListAPI, achivementsData, categoryBaodStandardsListAPI, boardStandardsData, categoryData, cityListAPI, AreaListAPI, cityData, areaData, categoryDetailsData, defaultCategoryDetailsData, studentHearApi, studentHearData, weOfferApi, weOfferData, defaultVideoDetailData, demoVideoListApi, demoListData, demoVideoDetailApi, videoDetailData }) => {
  // console.log(categoryData && categoryData.data && categoryData.data[0].id);
  const [categoryActive, setCategoryActive] = useState(0);
  const [demoVideoCheck, setDemoVideoCheck] = useState(true);

  const heroToppersConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    cssEase: "linear",
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
          cssEase: "linear",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
          cssEase: "linear",
        },
      },
    ],
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
        breakpoint: 540,
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
        breakpoint: 940,
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

  // const homeHeroCarousel = {
  //   loop: false,
  //   items: 1,
  //   animateIn: "animate__zoomIn",
  //   animateOut: "animate__zoomOut",
  //   autoplayTimeout: 5000,
  //   autoplay: true,
  // };

  const demoVideoConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: false,
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

  const [category, setCategory] = useState();
  const [boards, setBoards] = useState();
  const [standards, setStandards] = useState();
  const [city, setCity] = useState();
  const [area, setArea] = useState();
  const [indexData, setIndexData] = useState();
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    topperListAPI();
    achivementListAPI();
    defaultCategoryListApi();
    studentHearApi();
    cityListAPI();
    weOfferApi();
    defaultDemoVideoListApi();
    demoVideoListApi();
  }, []);

  const [show, setShow] = useState(false);
  const [ReadMoreCWETitle, setReadMoreCWETitle] = useState("");
  const [ReadMoreCWEDescription, setReadMoreCWEDescription] = useState("");
  const readMoreModal = (title, description) => {
    setShow(true);
    setReadMoreCWETitle(title);
    setReadMoreCWEDescription(description);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    AreaListAPI(e.target.value);
  };

  const onFinish = (event) => {
    const data = {
      city: city,
      area: area,
    };
    localStorage.setItem("centersearch", data);
  };

  const handleCategoryId = (id) => {
    setCategoryActive(id);
    categoryDetailsApi(id);
  };

  const boardfilter = boardStandardsData && boardStandardsData.data && [...new Set(boardStandardsData.data.map((q) => q.board_name))];
  const standardfilter = boardStandardsData && boardStandardsData.data && [...new Set(boardStandardsData.data.map((q) => q.name))];

  const apiHit = (detailID) => {
    setDemoVideoCheck(false);
    demoVideoDetailApi(detailID);
  };

  const handleBoardStandars = (e) => {
    setCategory(e.target.value);
    categoryBaodStandardsListAPI(e.target.value);
  };

  return (
    <>
      {/* BANNER  */}
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

      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="banner-main" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                {/* <div className="carousel-indicators">
                  <button type="button" data-bs-target="#banner-main" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#banner-main" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#banner-main" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}

                <div className="carousel-inner">
                  {toppersData &&
                    toppersData.data &&
                    toppersData.data.map((item, index) => (
                      <div className="carousel-item banner bg-light-orange active" data-bs-interval="10000" key={index}>
                        <div className="row">
                          <div className="col-md-7 col-sm-12">
                            <div className="caption">
                              <h2>
                                <span className="text-orange">30+ Years</span> of legacy with Sterling Results
                              </h2>
                              <p className="mt-3">Will you be the next star of MT Educare? Accomplish greatness and be a part of our legacy. Find your course now.</p>
                            </div>
                          </div>

                          <div className="col-md-5 col-sm-12 sub-slider">
                            <Slider className="MT-SlickDots top-students top-students-a" {...heroToppersConfig}>
                              {toppersData &&
                                toppersData.data &&
                                toppersData.data.slice(0, 5).map((item1, index) => (
                                  <div className="item" key={index}>
                                    <div className="students">
                                      <div className="detail">
                                        <div className="student text-center">
                                          {/* <img src="../assets/imgs/photo-student-a.png" alt="student" className="photograph" /> */}
                                          <img src={item1 && IMAGE_BASE_URL + "/" + item1.image} alt="student" className="photograph" />
                                          <h3 className="percentage text-blue mt-3">{item1 && item1.percentage}</h3>
                                          <p className="name mb-2">{item1 && item1.name}</p>
                                          <p className="rank-year">{item1 && parseHtml(item1.description.substring(0, 100))}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </Slider>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              {/* -- banner ends here -- */}

              <Form
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
              >
                <div className="floating-form in-banner">
                  <div className="form-controls">
                    <Form.Item label="Category" name="category" className="form-label">
                      <select name="course" className="form-controls w-100" id="course" value={category} onChange={(e) => handleBoardStandars(e)}>
                        <option selected>Select Category</option>
                        {categoryData &&
                          categoryData.data &&
                          categoryData.data.map((item, index) => (
                            <option value={item.id} key={index}>
                              {item.name}
                            </option>
                          ))}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Baord" name="board" className="form-label">
                      <select name="boards" className="form-controls w-100" id="boards" value={boards} onChange={(e) => setBoards(e.target.value)}>
                        <option selected>Select Board</option>
                        {boardfilter &&
                          boardfilter.map((item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Standards" name="standards" className="form-label">
                      <select name="standards" id="standards" className="form-controls w-100" value={standards} onChange={(e) => setStandards(e.target.value)}>
                        <option selected>Select Standard</option>
                        {standardfilter &&
                          standardfilter.map((item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="City" name="city" className="form-label">
                      <select name="standards" id="standards" value={city} onChange={(e) => handleCityChange(e)} className="form-controls w-100">
                        <option selected>Select City</option>
                        {cityData &&
                          cityData.data &&
                          cityData.data.map((item, index) => (
                            <option value={item.id} key={index}>
                              {item.name}
                            </option>
                          ))}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Area" name="area" className="form-label">
                      <select name="area" id="area" className="form-controls w-100" value={area} onChange={(e) => setArea(e.target.value)}>
                        <option selected>Select Area</option>
                        {areaData &&
                          areaData.data &&
                          areaData.data.map((item, index) => (
                            <option value={item.id} key={index}>
                              {item.area}
                            </option>
                          ))}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Link to={WebRoutes.CENTERS}>
                      <button className="btn btn-primary btn-submit" type="button" onClick={(e) => onFinish()}>
                        Submit
                      </button>
                    </Link>
                  </div>
                </div>
                {/* -- floating-form -- */}
                <div className="shadow"></div>
              </Form>
            </div>
          </div>
        </div>
      </header>

      {/* ACHIEVEMENTS  */}
      <section>
        <div className="container records">
          <div className="row">
            <div className="col-md-5 col-lg-4">
              <h3 className="achivements">
                Our <br />
                <span className="text-orange">30+ years</span> of achievements
              </h3>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="record-grid">
                <div className="students row-span bg-g-orange">
                  <span className="record">{achivementsData && achivementsData.data && achivementsData.data.student_ratio}+</span>
                  <span className="label">Students</span>
                </div>

                <div className="faculties bg-light-blue">
                  <span className="record text-g-blue">{achivementsData && achivementsData.data && achivementsData.data.faculty_ratio}+</span>
                  <span className="label text-g-blue">Faculties</span>
                </div>

                <div className="schools bg-light-orange">
                  <span className="record text-g-orange">{achivementsData && achivementsData.data && achivementsData.data.school_ratio}+</span>
                  <span className="label text-g-orange">Schools</span>
                </div>

                <div className="institutes bg-light-blue">
                  <span className="record text-g-blue">{achivementsData && achivementsData.data && achivementsData.data.institute_ratio}+</span>
                  <span className="label text-g-blue">Institutes</span>
                </div>

                {/* <div className="colleges bg-light-orange">
                  <span className="record text-g-orange">{achivementsData && achivementsData.data && achivementsData.data.college_ratio}+</span>
                  <span className="label text-g-orange">Colleges</span>
                </div> */}
              </div>
              {/* RECORDS ENDS HERE */}
            </div>

            {/* APP LINK TO DOWNLOAD */}
            <div className="col-md-6 mx-md-auto col-lg-4">
              <h4>Robomate+ is now Available Download it for Free</h4>
              <div className="download-app">
                <a href="https://apps.apple.com/in/app/robomate-std-8-12-iit-neet-ca/id1133076165" target="_blank">
                  <img src="../assets/imgs/app-store.svg" alt="App Store" />
                </a>

                <a href="https://play.google.com/store/apps/details?id=com.mteducare.mtrobomateplus" target="_blank">
                  <img src="../assets/imgs/google-play.svg" alt="Google Play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="cards" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-light-blue box-radius">
              <h3 className="headline text-center mb-3">
                <span className="text-blue">Courses</span> we offer
              </h3>
              <p className="sub-headline text-center">Our world class teaching techniques combined with a heterogeneity of top most courses all in one place. Register with MT Educare now.</p>

              <div className="article-header">
                <ul className="nav nav-tabs MT_Tab" id="MT_Tab" role="tablist">
                  {categoryData &&
                    categoryData.data &&
                    categoryData.data.map((item, index) => (
                      <li className="nav-item" role="presentation" key={index}>
                        <button
                          key={index}
                          className={`${(item && item.id == categoryActive) || index === 0 ? "nav-link active" : `nav-link`}`}
                          id={`Edu-tab-${categoryActive}`}
                          data-bs-toggle="tab"
                          data-bs-target={`#MT-tabPane-${categoryActive}`}
                          type="button"
                          role="tab"
                          aria-controls={`MT-tabPane-${categoryActive}`}
                          aria-selected="true"
                          onClick={(e) => {
                            handleCategoryId(item && item.id);
                            setIndexData(item && item.name);
                          }}
                        >
                          {item && item.name}
                        </button>
                      </li>
                    ))}
                </ul>
                <div className="view-all">
                  <Link to={WebRoutes.COLLEGE}>View All</Link>
                </div>
              </div>

              <div className="tab-content MT_TabContent" id="MT_TabContent">
                {categoryActive ? (
                  <div className="tab-pane fade show active" id={`MT-tabPane-${categoryActive}`} role="tabpanel" aria-labelledby={`Edu-tab-${categoryActive}`} tabIndex="0">
                    {indexData == "Competitive Exams" ? (
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

                    {indexData && indexData == "School" ? (
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

                    {indexData && indexData == "Science" ? (
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
                  </div>
                ) : (
                  <div className="tab-pane fade show active" id="MT-tabPane-0" role="tabpanel" aria-labelledby="Edu-tab-0" tabIndex="0">
                    <div className="explore-lakshya bg-light-orange">
                      <div>
                        <img src="../assets/imgs/lakshya-logo.png" alt="lakshya-logo" />
                        <p>Lakshay is our partner which provides the higher secondary education science courses for competitive exams.</p>
                      </div>
                      <a href="https://www.lakshyainstitute.com/" className="btn btn-lg" target="_blank">
                        Explore Lakshya
                      </a>
                    </div>
                    {/* <!-- explore-lakshya --> */}

                    <Slider {...CoursesWeOfferConfig} className="CoursesWeOfferConfig MT-SlickDots owl-theme MT-OwlDots">
                      {defaultCategoryDetailsData &&
                        defaultCategoryDetailsData.data &&
                        defaultCategoryDetailsData.data.map((item, index) => (
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
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOPPER DETAILS */}
      <TopperDetails toppersData={toppersData} />

      {/* WHY MT EDUCARE? */}
      <WhyMtEducare />

      {/* DEMO VIDEOS */}

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
                    <Slider {...demoVideoConfig} className="demoVideoConfig MT-SlickDots">
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
                                        &nbsp;Read more...
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
      {/* <DemoVideos /> */}

      {/* OFFERINGS */}
      <Offerings weOfferData={weOfferData} />

      {/* FEEDBACK */}
      <Feedback studentHearData={studentHearData} />

      {/* CONNECT */}
      <Connect />
    </>
  );
};

const mapStateToProps = (state) => {
  const { DemoVideoReducer, HomeReducer, CategoryReducer } = state;
  const { toppersData, achivementsData, cityData, areaData } = HomeReducer;
  const { categoryData, categoryDetailsData, defaultCategoryDetailsData } = CategoryReducer;
  return {
    toppersData: HomeReducer.toppersData,
    achivementsData: HomeReducer.achivementsData,
    boardStandardsData: HomeReducer.boardStandardsData,
    cityData: HomeReducer.cityData,
    studentHearData: HomeReducer.studentHearData,
    areaData: HomeReducer.areaData,
    weOfferData: HomeReducer.weOfferData,
    categoryData: CategoryReducer.categoryData,
    categoryDetailsData: CategoryReducer.categoryDetailsData,
    defaultCategoryDetailsData: CategoryReducer.defaultCategoryDetailsData,
    defaultVideoDetailData: DemoVideoReducer.defaultVideoDetailData,
    demoListData: DemoVideoReducer.demoListData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    topperListAPI: () => dispatch(topperListAPI()),
    achivementListAPI: () => dispatch(achivementListAPI()),
    categoryBaodStandardsListAPI: (data) => dispatch(categoryBaodStandardsListAPI(data)),
    categoryListApi: () => dispatch(categoryListApi()),
    cityListAPI: () => dispatch(cityListAPI()),
    studentHearApi: () => dispatch(studentHearApi()),
    weOfferApi: () => dispatch(weOfferApi()),
    defaultCategoryListApi: () => dispatch(defaultCategoryListApi()),
    AreaListAPI: (data) => dispatch(AreaListAPI(data)),
    categoryDetailsApi: (data) => dispatch(categoryDetailsApi(data)),
    defaultDemoVideoListApi: () => dispatch(defaultDemoVideoListApi()),
    demoVideoListApi: () => dispatch(demoVideoListApi()),
    demoVideoDetailApi: (data) => dispatch(demoVideoDetailApi(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

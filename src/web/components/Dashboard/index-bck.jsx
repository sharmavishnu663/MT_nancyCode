import React, { useState } from "react";
import { Link } from "react-router-dom";
import Connect from "./Connect";
import Courses from "./Courses";
import DemoVideos from "./Demo-vedios";
import Feedback from "./Feedback";
import Offerings from "./Offerings";
import TopperDetails from "./Toppers";
import WhyMtEducare from "./WhyMTEducare";
import OwlCarousel from "react-owl-carousel";
import Slider from "react-slick";
import { Form, Input, Select } from "antd";
import { connect } from "react-redux";
import { demoVideoListApi, demoVideoDetailApi } from "../../../redux/action/demoVideo";
import { useEffect } from "react";
import { topperListAPI, achivementListAPI, categoryBaodStandardsListAPI, cityListAPI, AreaListAPI } from "../../../redux/action/home";
import { categoryListApi } from "../../../redux/action/category";
import { WebRoutes } from "../../../routes";

const Dashboard = ({ categoryListApi, demoVideoListApi, demoVideoDetailApi, demoListData, videoDetailData, topperListAPI, toppersData, achivementListAPI, achivementsData, categoryBaodStandardsListAPI, boardStandardsData, categoryData, cityListAPI, AreaListAPI, cityData, areaData }) => {
  const homeHeroCarousel = {
    loop: true,
    items: 1,
    animateIn: "animate__zoomIn",
    animateOut: "animate__zoomOut",
    autoplayTimeout: 5000,
    autoplay: true,
  };

  const demoVideoConfig = {
    loop: true,
    autoplay: false,
    margin: 0,
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
        items: 3,
      },
    },
  };

  const [category, setCategory] = useState();
  const [boards, setBoards] = useState();
  const [standards, setStandards] = useState();
  const [city, setCity] = useState();
  const [area, setArea] = useState();

  useEffect(() => {
    demoVideoListApi();
    topperListAPI();
    achivementListAPI();
    categoryListApi();
    cityListAPI();
  }, []);

  useEffect(() => {
    categoryBaodStandardsListAPI(category);
  }, [category]);

  useEffect(() => {
    if (city) {
      console.log(localStorage.getItem("cityId"));
      AreaListAPI(localStorage.getItem("cityId"));
    }
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
    localStorage.setItem("cityId", city);
  };

  const onFinish = (event) => {
    const data = {
      city: city,
      area: area,
    };
    localStorage.setItem("centersearch", data);
  };
  return (
    <>
      {/* BANNER  */}
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="banner-main" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#banner-main" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#banner-main" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#banner-main" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                  <div className="carousel-item banner bg-light-orange active" data-bs-interval="10000">
                    <div className="row">
                      <div className="col-md-7 col-sm-12">
                        <div className="caption">
                          <h2>
                            <span className="text-orange">30+ Years</span> of legacy with Sterling Results
                          </h2>
                          <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat montes, pharetra cras odio nec scelerisque viverra.</p>
                        </div>
                      </div>

                      <div className="col-md-5 col-sm-12 sub-slider">
                        <Slider className="top-students top-students-a">
                          <div className="students">
                            <div className="detail">
                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-a.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                <p className="name mb-2">Priyanka Shah</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>

                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-b.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                <p className="name mb-2">Nayan Kumar</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>
                            </div>
                          </div>

                          <div className="students">
                            <div className="detail">
                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-b.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                <p className="name mb-2">Nayan Kumar</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>

                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-a.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                <p className="name mb-2">Priyanka Shah</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>
                            </div>
                          </div>

                          <div className="students">
                            <div className="detail">
                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-a.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                <p className="name mb-2">Priyanka Shah</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>

                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-b.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                <p className="name mb-2">Nayan Kumar</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item banner bg-light-blue" data-bs-interval="10000">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="caption">
                          <h2>
                            <span className="text-orange">30+ Years</span> of legacy with Sterling Results
                          </h2>
                          <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat montes, pharetra cras odio nec scelerisque viverra.</p>
                        </div>
                      </div>

                      <div className="col-md-5 sub-slider">
                        <Slider className="top-students top-students-a">
                          <div className="students">
                            <div className="detail">
                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-a.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                <p className="name mb-2">Priyanka Shah</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>

                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-b.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                <p className="name mb-2">Nayan Kumar</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>
                            </div>
                          </div>

                          <div className="students">
                            <div className="detail">
                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-b.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                <p className="name mb-2">Nayan Kumar</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>

                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-a.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                <p className="name mb-2">Priyanka Shah</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>
                            </div>
                          </div>

                          <div className="students">
                            <div className="detail">
                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-a.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                <p className="name mb-2">Priyanka Shah</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>

                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-b.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                <p className="name mb-2">Nayan Kumar</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>
                            </div>
                          </div>
                        </Slider>
                        {/* --- top-students ---- */}
                      </div>
                    </div>
                    {/* -- sub-slider -- */}
                  </div>

                  <div className="carousel-item banner bg-light-orange" data-bs-interval="10000">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="caption">
                          <h2>
                            <span className="text-orange">30+ Years</span> of legacy with Sterling Results
                          </h2>
                          <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat montes, pharetra cras odio nec scelerisque viverra.</p>
                        </div>
                      </div>

                      <div className="col-md-5 sub-slider">
                        <Slider className="top-students top-students-a">
                          <div className="students">
                            <div className="detail">
                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-a.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                <p className="name mb-2">Priyanka Shah</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>

                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-b.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                <p className="name mb-2">Nayan Kumar</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>
                            </div>
                          </div>

                          <div className="students">
                            <div className="detail">
                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-b.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                <p className="name mb-2">Nayan Kumar</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>

                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-a.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                <p className="name mb-2">Priyanka Shah</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>
                            </div>
                          </div>

                          <div className="students">
                            <div className="detail">
                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-a.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                <p className="name mb-2">Priyanka Shah</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>

                              <div className="student text-center">
                                <img src="../assets/imgs/photo-student-b.png" alt="student" className="photograph" />
                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                <p className="name mb-2">Nayan Kumar</p>
                                <p className="rank-year">All India Topper - CBSE 2021</p>
                              </div>
                            </div>
                          </div>
                        </Slider>
                        {/* -- top-students -- */}
                      </div>
                    </div>
                    {/* -- sub-slider -- */}
                  </div>
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
                    <Form.Item label="Category" name="category" className="form-label" rules={[{ required: true, message: "Please select your category!" }]}>
                      <select name="course" className="form-controls" id="course" value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option disabled defaultValue>
                          Please select category
                        </option>
                        {categoryData && categoryData.data && categoryData.data.map((item) => <option value={item.id}>{item.name}</option>)}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Baord" name="board" className="form-label" rules={[{ required: true, message: "Please select your board!" }]}>
                      <select name="boards" className="form-controls" id="boards" value={boards} onChange={(e) => setBoards(e.target.value)} required>
                        <option disabled defaultValue>
                          Please select board
                        </option>
                        {boardStandardsData && boardStandardsData.data && boardStandardsData.data.map((item) => <option value={item.board_name}>{item.board_name}</option>)}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Standards" name="standards" className="form-label" rules={[{ required: true, message: "Please select your standard!" }]}>
                      <select name="standards" id="standards" value={standards} onChange={(e) => setStandards(e.target.value)} required>
                        <option disabled defaultValue>
                          Please select Standards
                        </option>
                        {boardStandardsData && boardStandardsData.data && boardStandardsData.data.map((item) => <option value={item.id}>{item.name}</option>)}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="City" name="city" className="form-label" rules={[{ required: true, message: "Please select your city!" }]}>
                      <select name="standards" id="standards" value={city} onChange={(e) => handleCityChange(e)} className="form-controls" required>
                        <option disabled defaultValue>
                          Please select city
                        </option>
                        {cityData && cityData.data && cityData.data.map((item) => <option value={item.id}>{item.name}</option>)}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Area" name="area" className="form-label" rules={[{ required: true, message: "Please select your area!" }]}>
                      <select name="area" id="area" className="form-controls" value={area} onChange={(e) => setArea(e.target.value)} required>
                        <option disabled defaultValue>
                          Please select city
                        </option>
                        {areaData && areaData.data && areaData.data.map((item) => <option value={item.id}>{item.name}</option>)}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Link to={WebRoutes.CENTERS}>
                      {" "}
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
            <div className="col-md-4">
              <h3 className="achivements">
                Our <br />
                <span className="text-orange">30+ years</span> of achievements
              </h3>
            </div>

            <div className="col-md-4">
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

                <div className="colleges bg-light-orange">
                  <span className="record text-g-orange">{achivementsData && achivementsData.data && achivementsData.data.college_ratio}+</span>
                  <span className="label text-g-orange">Colleges</span>
                </div>
              </div>
              {/* RECORDS ENDS HERE */}
            </div>

            {/* APP LINK TO DOWNLOAD */}
            <div className="col-md-4">
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
        {/* APP LINK ends here */}
      </section>

      {/* COURSES */}
      <section className="cards" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-light-blue box-radius">
              <h3 className="headline text-center mb-3">
                <span className="text-blue">Courses</span> we offer
              </h3>
              <p className="sub-headline text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat montes, pharetra cras odio nec scelerisque viverra.</p>

              <div className="article-header">
                <ul className="nav nav-tabs MT_Tab" id="MT_Tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="Edu-tab-1" data-bs-toggle="tab" data-bs-target="#MT-tabPane-1" type="button" role="tab" aria-controls="MT-tabPane-1" aria-selected="true">
                      Competative Exams
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="Edu-tab-2" data-bs-toggle="tab" data-bs-target="#MT-tabPane-2" type="button" role="tab" aria-controls="MT-tabPane-2" aria-selected="false">
                      Colleges
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="Edu-tab-3" data-bs-toggle="tab" data-bs-target="#MT-tabPane-3" type="button" role="tab" aria-controls="MT-tabPane-3" aria-selected="false">
                      School
                    </button>
                  </li>
                </ul>
                <div className="view-all">
                  <a href="#">View All</a>
                </div>
              </div>

              <div className="tab-content MT_TabContent" id="MT_TabContent">
                <div className="tab-pane fade show active" id="MT-tabPane-1" role="tabpanel" aria-labelledby="Edu-tab-1" tabindex="0">
                  <div className="explore-lakshya bg-light-orange">
                    <div>
                      <img src="../assets/imgs/lakshya-logo.png" alt="lakshya-logo" />
                      <p>Lakshay is our partner which provides the higher secondary education science courses for competitive exams.</p>
                    </div>
                    <a href="#" className="btn btn-lg">
                      Explore Lakshya
                    </a>
                  </div>
                  {/* <!-- explore-lakshya --> */}

                  <OwlCarousel>
                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article1.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Best IIT JEE Coaching</h5>
                            <div className="description">
                              <p>Lakshya offers unparalleled IIT JEE coaching in India which results in producing top rankers in entrance exams who go on to become world-class engineers and technologists.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">IIT JEE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article2.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Top NEET Coaching</h5>
                            <div className="description">
                              <p>NEET is the most important exam for medical aspirants, as it is required for them to join the best medical college in the country.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NEET</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article3.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>NTSE Coaching</h5>
                            <div className="description">
                              <p>National Talent Search Examination is one of the most recognized examinations in India which is conducted by NCERT.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NTSE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article1.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Best IIT JEE Coaching</h5>
                            <div className="description">
                              <p>Lakshya offers unparalleled IIT JEE coaching in India which results in producing top rankers in entrance exams who go on to become world-class engineers and technologists.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">IIT JEE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article2.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Top NEET Coaching</h5>
                            <div className="description">
                              <p>NEET is the most important exam for medical aspirants, as it is required for them to join the best medical college in the country.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NEET</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article3.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>NTSE Coaching</h5>
                            <div className="description">
                              <p>National Talent Search Examination is one of the most recognized examinations in India which is conducted by NCERT.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NTSE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article1.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Best IIT JEE Coaching</h5>
                            <div className="description">
                              <p>Lakshya offers unparalleled IIT JEE coaching in India which results in producing top rankers in entrance exams who go on to become world-class engineers and technologists.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">IIT JEE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article2.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Top NEET Coaching</h5>
                            <div className="description">
                              <p>NEET is the most important exam for medical aspirants, as it is required for them to join the best medical college in the country.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NEET</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article3.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>NTSE Coaching</h5>
                            <div className="description">
                              <p>National Talent Search Examination is one of the most recognized examinations in India which is conducted by NCERT.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NTSE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
                <div className="tab-pane fade" id="MT-tabPane-2" role="tabpanel" aria-labelledby="Edu-tab-2" tabindex="0">
                  <div className="explore-lakshya bg-light-orange">
                    <div>
                      <img src="../assets/imgs/mahesh-tutorials.png" alt="mahesh-tutorials-logo" />
                    </div>
                    <div>
                      <a href="#" className="btn btn-lg me-3">
                        Explore Commerce
                      </a>
                      <a href="#" className="btn btn-lg">
                        Explore Science
                      </a>
                    </div>
                  </div>
                  {/* <!-- explore-lakshya --> */}

                  <OwlCarousel>
                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article1.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Best IIT JEE Coaching</h5>
                            <div className="description">
                              <p>Lakshya offers unparalleled IIT JEE coaching in India which results in producing top rankers in entrance exams who go on to become world-class engineers and technologists.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">IIT JEE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article2.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Top NEET Coaching</h5>
                            <div className="description">
                              <p>NEET is the most important exam for medical aspirants, as it is required for them to join the best medical college in the country.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NEET</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article3.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>NTSE Coaching</h5>
                            <div className="description">
                              <p>National Talent Search Examination is one of the most recognized examinations in India which is conducted by NCERT.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NTSE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article1.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Best IIT JEE Coaching</h5>
                            <div className="description">
                              <p>Lakshya offers unparalleled IIT JEE coaching in India which results in producing top rankers in entrance exams who go on to become world-class engineers and technologists.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">IIT JEE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article2.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Top NEET Coaching</h5>
                            <div className="description">
                              <p>NEET is the most important exam for medical aspirants, as it is required for them to join the best medical college in the country.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NEET</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article3.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>NTSE Coaching</h5>
                            <div className="description">
                              <p>National Talent Search Examination is one of the most recognized examinations in India which is conducted by NCERT.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NTSE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article1.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Best IIT JEE Coaching</h5>
                            <div className="description">
                              <p>Lakshya offers unparalleled IIT JEE coaching in India which results in producing top rankers in entrance exams who go on to become world-class engineers and technologists.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">IIT JEE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article2.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Top NEET Coaching</h5>
                            <div className="description">
                              <p>NEET is the most important exam for medical aspirants, as it is required for them to join the best medical college in the country.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NEET</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article3.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>NTSE Coaching</h5>
                            <div className="description">
                              <p>National Talent Search Examination is one of the most recognized examinations in India which is conducted by NCERT.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NTSE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
                <div className="tab-pane fade" id="MT-tabPane-3" role="tabpanel" aria-labelledby="Edu-tab-3" tabindex="0">
                  <div className="explore-lakshya bg-light-orange">
                    <div>
                      <img src="../assets/imgs/mahesh-tutorials-school.png" alt="lakshya-logo" />
                      <p>For over three decades, Mahesh tutorials has been mentoring students for success, in academics and in life. </p>
                    </div>
                    <a href="#" className="btn btn-lg">
                      Explore School
                    </a>
                  </div>
                  {/* <!-- explore-lakshya --> */}

                  <OwlCarousel>
                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article1.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Best IIT JEE Coaching</h5>
                            <div className="description">
                              <p>Lakshya offers unparalleled IIT JEE coaching in India which results in producing top rankers in entrance exams who go on to become world-class engineers and technologists.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">IIT JEE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article2.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Top NEET Coaching</h5>
                            <div className="description">
                              <p>NEET is the most important exam for medical aspirants, as it is required for them to join the best medical college in the country.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NEET</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article3.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>NTSE Coaching</h5>
                            <div className="description">
                              <p>National Talent Search Examination is one of the most recognized examinations in India which is conducted by NCERT.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NTSE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article1.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Best IIT JEE Coaching</h5>
                            <div className="description">
                              <p>Lakshya offers unparalleled IIT JEE coaching in India which results in producing top rankers in entrance exams who go on to become world-class engineers and technologists.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">IIT JEE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article2.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Top NEET Coaching</h5>
                            <div className="description">
                              <p>NEET is the most important exam for medical aspirants, as it is required for them to join the best medical college in the country.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NEET</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article3.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>NTSE Coaching</h5>
                            <div className="description">
                              <p>National Talent Search Examination is one of the most recognized examinations in India which is conducted by NCERT.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NTSE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article1.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Best IIT JEE Coaching</h5>
                            <div className="description">
                              <p>Lakshya offers unparalleled IIT JEE coaching in India which results in producing top rankers in entrance exams who go on to become world-class engineers and technologists.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">IIT JEE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article2.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>Top NEET Coaching</h5>
                            <div className="description">
                              <p>NEET is the most important exam for medical aspirants, as it is required for them to join the best medical college in the country.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NEET</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="articles our-courses">
                        <div className="article">
                          <div className="thumbnail">
                            <img src="../assets/imgs/article3.png" alt="thumbnail" />
                          </div>

                          <div className="detail">
                            <h5>NTSE Coaching</h5>
                            <div className="description">
                              <p>National Talent Search Examination is one of the most recognized examinations in India which is conducted by NCERT.</p>
                            </div>
                            <div className="tag-link">
                              <div className="tag">NTSE</div>
                              <a href="#" className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
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
      <DemoVideos demoListData={demoListData} demoVideoDetailApi={demoVideoDetailApi} videoDetailData={videoDetailData} />

      {/* OFFERINGS */}
      <Offerings />

      {/* FEEDBACK */}
      <Feedback />

      {/* CONNECT */}
      <Connect />
    </>
  );
};
const mapStateToProps = (state) => {
  const { DemoVideoReducer, HomeReducer, CategoryReducer } = state;
  const { demoListData, videoDetailData } = DemoVideoReducer;
  const { toppersData, achivementsData, cityData, areaData } = HomeReducer;
  const { categoryData } = CategoryReducer;
  return {
    demoListData: DemoVideoReducer.demoListData,
    videoDetailData: DemoVideoReducer.videoDetailData,
    toppersData: HomeReducer.toppersData,
    achivementsData: HomeReducer.achivementsData,
    boardStandardsData: HomeReducer.boardStandardsData,
    cityData: HomeReducer.cityData,
    areaData: HomeReducer.areaData,
    categoryData: CategoryReducer.categoryData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    demoVideoListApi: () => dispatch(demoVideoListApi()),
    topperListAPI: () => dispatch(topperListAPI()),
    achivementListAPI: () => dispatch(achivementListAPI()),
    demoVideoDetailApi: (data) => dispatch(demoVideoDetailApi(data)),
    categoryBaodStandardsListAPI: (data) => dispatch(categoryBaodStandardsListAPI(data)),
    categoryListApi: () => dispatch(categoryListApi()),
    cityListAPI: () => dispatch(cityListAPI()),
    AreaListAPI: (data) => dispatch(AreaListAPI(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { introListAPI, introDataAPI } from "../../../redux/action/aboutUs";
import { defaultIntroApi } from "../../../redux/action/home";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import { parseHtml } from "../../../Utils/utils";
import Intro from "./intro";
// import OwlCarousel from "react-owl-carousel";


const About = ({ introListAPI, introData, defaultIntroApi, defaultIntroData, introDataAPI, introDataDetailData }) => {
  const [defaultData, setDefaultData] = useState(true);
  useEffect(() => {
    introListAPI();
    defaultIntroApi();
  }, []);

  const [activeYear, setActiveYear] = useState(introData && introData.first_id ? introData.first_id : 0);

  const handleStepPrev = (prevYear) => {
    setDefaultData(false);
    if (prevYear >= introData.first_id) {
      setActiveYear(prevYear - 1);
      introDataAPI(prevYear - 1);
    } else {
      setActiveYear(undefined);
    }

  };

  const handleStepNext = (nextYear) => {
    setDefaultData(false);
    if (nextYear == 0) {
      setActiveYear(introData.first_id + 1);
      introDataAPI(introData.first_id + 1);
    } else {
      setActiveYear(nextYear + 1);
      introDataAPI(nextYear + 1);
    }
  };

  const handleStepClick = (selectYear) => {
    setActiveYear(selectYear);
    setDefaultData(false);
    introDataAPI(selectYear);
  };

  return (
    <>
      <section className="cards terms" id="privacy-policy">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <img src="../assets/imgs/icon-back.svg" alt="icon" /> Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>

              <h4>About Us</h4>
            </div>
          </div>
        </div>
      </section>
      {/* =========== ABOUT US  ================== */}
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="timeline">
                <ul>
                  {introData && introData.data
                    ? introData.data.map((item, index) => (
                      <li key={item.id} className={`${item.id < activeYear || item.id === activeYear || index === 0 ? "active" : ""}`}>
                        <Link to="" onClick={() => handleStepClick(item.id)}>
                          {item.year}
                        </Link>
                      </li>
                    ))
                    : null}
                </ul>
              </div>

              <div className="timeline-card">
                <div className="content">
                  {defaultData ?
                    <div className="row align-items-center">
                      <div className="item col-md-6">
                        <h2 className="mb-4">
                          <span className="text-orange">{defaultIntroData && defaultIntroData.data && defaultIntroData.data.title}</span>
                        </h2>
                        <p>{defaultIntroData && defaultIntroData.data && parseHtml(defaultIntroData.data.description)} </p>
                        {defaultIntroData && defaultIntroData.data && JSON.parse(defaultIntroData.data.key_highlights).center && (
                          <>
                            <p className="big">Key Highlights</p>

                            <ul className="highlights">
                              <li>
                                <span>Number of centers </span>
                                <span>: {defaultIntroData && defaultIntroData.data && JSON.parse(defaultIntroData.data.key_highlights).center}</span>
                              </li>
                              <li>
                                <span>Revenue</span>
                                <span>: Rs.{defaultIntroData && defaultIntroData.data && JSON.parse(defaultIntroData.data.key_highlights).revenue} Crores</span>
                              </li>
                              <li>
                                <span>Number of students</span>
                                <span>: {JSON.parse(defaultIntroData && defaultIntroData.data && defaultIntroData.data.key_highlights).students}+</span>
                              </li>
                            </ul>
                          </>
                        )}
                      </div>

                      <div className="col-md-6 text-center">
                        <img src={defaultIntroData && defaultIntroData.data && IMAGE_BASE_URL + "/" + defaultIntroData.data.image} alt="illustration" />
                      </div>
                    </div>
                    :
                    <Intro activeYear={activeYear} introDataDetailData={introDataDetailData} />

                  }



                  {/* <Intro introData={introData} activeYear={activeYear} /> */}
                  <div className="btn-wrapper text-right">
                    {introData && introData.first_id < activeYear && introData.first_id != activeYear ?
                      <Link to="#" className="btn btn-sm flip" title="prev" onClick={(e) => handleStepPrev(activeYear)}>
                        <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                      </Link>
                      : null
                    }
                    {activeYear !== undefined ?
                      introData && introData.last_id > activeYear && introData.last_id != activeYear ?
                        <Link to="#" className="btn btn-sm" title="next" onClick={(e) => handleStepNext(activeYear)}>
                          <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                        </Link>
                        :
                        null
                      :
                      <Link to="#" className="btn btn-sm" title="next" onClick={(e) => handleStepNext(activeYear)}>
                        <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                      </Link>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========== ABout US ends here ============ */}

      {/* =========== MANAGEMENT =============== */}

      {/* =================== Management ends here ==================== */}
    </>
  );
};

const mapStateToProps = (state) => {
  const { AboutReducer, HomeReducer } = state;
  const { introDataDetailData } = AboutReducer;
  return {
    introData: AboutReducer.introData,
    defaultIntroData: HomeReducer.defaultIntroData,
    introDataDetailData: AboutReducer.introDataDetailData,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    introListAPI: () => dispatch(introListAPI()),
    defaultIntroApi: () => dispatch(defaultIntroApi()),
    introDataAPI: (data) => dispatch(introDataAPI(data)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);

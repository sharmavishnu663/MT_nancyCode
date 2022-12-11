import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { introListAPI, boardDirectorAPI, boardCommitteeAPI, keyManagementAPI, boardDetailsAPI } from "../../../redux/action/aboutUs";
import { IMAGE_BASE_URL } from "../../../redux/constants";
// import { parseHtml } from "../../../Utils/utils";
import Intro from "./intro";
// import OwlCarousel from "react-owl-carousel";

const About = ({ introListAPI, introData, boardCommitteeAPI, commitesData, boardDirectorAPI, directorsData, keyManagementAPI, keyManagementData, boardDetailsAPI, boardDetailData }) => {
  const [visionSet, setVisionSet] = useState();
  useEffect(() => {
    introListAPI();

    // setActiveYear(introData.data && introData.data && introData.data[0].id)
    setTimeout(() => {
      setActiveYear(introData.data[0].id);
    }, 2000);
  }, []);

  // setTimeout(() => {
  //   console.log(introData.data[0].id);
  //   setActiveYear(introData.data[0].id);
  // }, 2000);
  // console.log(activeYear);
  const [activeYear, setActiveYear] = useState(introData && introData.first_id ? introData.first_id : 0);

  const handleStepPrev = (prevYear) => {
    console.log(`Prev Step:  (${prevYear})`);
    if (prevYear >= introData.first_id) {
      setActiveYear(prevYear - 1);
    } else {
      setActiveYear(undefined);
    }
    console.log(`Prev Step:  (${activeYear})`);
    console.log("=========================================");
  };

  const handleStepNext = (nextYear) => {
    console.log(`Next Step:  (${nextYear})`);
    if (nextYear == 0) {
      setActiveYear(introData.first_id + 1);
    } else {
      setActiveYear(nextYear + 1);
    }
    console.log(`Next Step:  (${activeYear})`);
    console.log("=========================================");
  };

  const handleStepClick = (selectYear) => {
    console.log(`Step Clicked:  (${selectYear})`);
    setActiveYear(selectYear);
    console.log(`Step Clicked:  (${activeYear})`);
    console.log("=========================================");
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
                  <Intro introData={introData} activeYear={activeYear} />
                  <div className="btn-wrapper text-right">
                    {console.log('firstID' + introData.first_id + 'active' + activeYear)}
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
  const { AboutReducer } = state;
  const { introData, commitesData, directorsData, keyManagementData } = AboutReducer;
  return {
    introData: AboutReducer.introData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    introListAPI: () => dispatch(introListAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);

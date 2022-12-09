import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { introListAPI, boardDirectorAPI, boardCommitteeAPI, keyManagementAPI, boardDetailsAPI } from "../../../redux/action/aboutUs";
import { IMAGE_BASE_URL } from "../../../redux/constants";
// import { parseHtml } from "../../../Utils/utils";
import Intro from "./intro";
// import OwlCarousel from "react-owl-carousel";

const About = ({ introListAPI, introData, boardCommitteeAPI, commitesData, boardDirectorAPI, directorsData, keyManagementAPI, keyManagementData, boardDetailsAPI, boardDetailData }) => {
  const [activeYear, setActiveYear] = useState(introData && introData.data ? introData.data[0].id : 0);
  const [visionSet, setVisionSet] = useState();
  useEffect(() => {
    introListAPI();
    boardCommitteeAPI();
    boardDirectorAPI();
    keyManagementAPI();
    boardDetailsAPI();
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

  const handleStepPrev = (activeYear) => {
    console.log(`Prev Step:  (${activeYear})`);
    setActiveYear(activeYear - 1);
    console.log(`Prev Step:  (${activeYear})`);
    console.log("=========================================");
  };

  const handleStepNext = (activeYear) => {
    console.log(`Next Step:  (${activeYear})`);
    setActiveYear(activeYear + 1);
    console.log(`Next Step:  (${activeYear})`);
    console.log("=========================================");
  };

  const handleStepClick = (activeYear) => {
    console.log(`Step Clicked:  (${activeYear})`);
    setActiveYear(activeYear);
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

                    <Link to="#" className="btn btn-sm flip" title="prev" onClick={(e) => handleStepPrev(activeYear)}>
                      <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                    </Link>
                    <Link to="#" className="btn btn-sm" title="next" onClick={(e) => handleStepNext(activeYear)}>
                      <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========== ABout US ends here ============ */}
      <section className="management">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="headline">
                Our <span className="text-blue">Management</span>
              </h3>
              <p className="sub-headline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat montes, pharetra cras odio nec scelerisque viverra.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 pills">
              <ul className="nav nav-tabs MT_Tab" id="MT_Tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className={`nav-link ${(localStorage.getItem("vision") && localStorage.getItem("vision") == "management") || !localStorage.getItem("vision") ? "active" : ""}`} id="Edu-tab-1" data-bs-toggle="tab" data-bs-target="#MT-tabPane-1" type="button" role="tab" aria-controls="MT-tabPane-1" aria-selected="true">
                    Key Management
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={`nav-link ${localStorage.getItem("vision") == "Directors" ? "active" : ""}`} id="Edu-tab-2" data-bs-toggle="tab" data-bs-target="#MT-tabPane-2" type="button" role="tab" aria-controls="MT-tabPane-2" aria-selected="false">
                    Board of Directors
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={`nav-link ${localStorage.getItem("vision") == "committe" ? "active" : ""}`} id="Edu-tab-3" data-bs-toggle="tab" data-bs-target="#MT-tabPane-3" type="button" role="tab" aria-controls="MT-tabPane-3" aria-selected="false">
                    Board Committees
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content " id="MT_TabContent">
              <div className="tab-pane fade show active" id="MT-tabPane-1" role="tabpanel" aria-labelledby="Edu-tab-1" tabIndex="0">
                {/* <!-- explore-lakshya --> */}

                <div className="row g-4">
                  {boardDetailData.data &&
                    boardDetailData.data.map((item, index) => (
                      <div className="col-md-4" key={index}>
                        <div className="member">
                          {item && item.image ?
                            <div className="member-img">
                              <div className="bg"></div>
                              <img src={IMAGE_BASE_URL + "/" + item.image} alt="board_directors" />
                            </div>
                            : null
                          }
                          <p className="name">{item.name}</p>
                          <p className="designation">{item.designation}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="tab-pane fade" id="MT-tabPane-2" role="tabpanel" aria-labelledby="Edu-tab-2" tabIndex="0">
                {/* <!-- explore-lakshya --> */}

                <div className="row">
                  {directorsData.data &&
                    directorsData.data.map((item, index) => (
                      <div className="col-md-4" key={index}>
                        <div className="member">
                          <div className="member-img">
                            <div className="bg"></div>
                            <img src={IMAGE_BASE_URL + "/" + item.image} alt="board_directors" />
                          </div>
                          <p className="name">{item.name}</p>
                          <p className="designation">{item.designation}</p>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="row g-4">
                  {keyManagementData.data &&
                    keyManagementData.data.map((item, index) => (
                      <div className="col-md-4" key={index}>
                        <div className="card-address">
                          <h5>{item.title}</h5>
                          <div className="detail">
                            <p>
                              {item.address},<br />
                              {item.address1},<br />
                              Tel: {item.mobile}
                              <br />
                              Fax: {item.fax}
                              <br />
                              Email: {item.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="tab-pane fade" id="MT-tabPane-3" role="tabpanel" aria-labelledby="Edu-tab-3" tabIndex="0">
                {/* <!-- explore-lakshya --> */}

                <div className="row">
                  {commitesData.data &&
                    commitesData.data.map((item, index) => (


                      <div className="col-md-4" key={index}>
                        <div className="card-address">
                          <h5>{item && item[index] && item[index].title}</h5>
                          <div className="detail">
                            <ul>
                              {item && item.map((record) => <li>
                                <span>{record.name}</span>
                                <span>{record.designation}</span>
                              </li>)}

                            </ul>
                          </div>
                        </div>
                      </div>


                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    commitesData: AboutReducer.commitesData,
    directorsData: AboutReducer.directorsData,
    keyManagementData: AboutReducer.keyManagementData,
    boardDetailData: AboutReducer.boardDetailData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    introListAPI: () => dispatch(introListAPI()),
    boardCommitteeAPI: () => dispatch(boardCommitteeAPI()),
    boardDirectorAPI: () => dispatch(boardDirectorAPI()),
    boardDetailsAPI: () => dispatch(boardDetailsAPI()),
    keyManagementAPI: () => dispatch(keyManagementAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);

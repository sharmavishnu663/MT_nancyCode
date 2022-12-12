import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { boardDirectorAPI, boardCommitteeAPI, keyManagementAPI, boardDetailsAPI } from "../../../redux/action/aboutUs";
import { WebRoutes } from "../../../routes";
import { parseHtml } from "../../../Utils/utils";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import About from "./About";

const BoardOfDirectors = ({ boardCommitteeAPI, commitesData, boardDirectorAPI, directorsData, keyManagementAPI, keyManagementData, boardDetailsAPI, boardDetailData }) => {
  useEffect(() => {
    boardCommitteeAPI();
    boardDirectorAPI();
    keyManagementAPI();
    boardDetailsAPI();
  }, []);
  return (
    <>
      <About />
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
                  <button className={`nav-link`} id="Edu-tab-1" data-bs-toggle="tab" data-bs-target="#MT-tabPane-1" type="button" role="tab" aria-controls="MT-tabPane-1" aria-selected="true">
                    Key Management
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={`nav-link active`} id="Edu-tab-2" data-bs-toggle="tab" data-bs-target="#MT-tabPane-2" type="button" role="tab" aria-controls="MT-tabPane-2" aria-selected="false">
                    Board of Directors
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={`nav-link`} id="Edu-tab-3" data-bs-toggle="tab" data-bs-target="#MT-tabPane-3" type="button" role="tab" aria-controls="MT-tabPane-3" aria-selected="false">
                    Board Committees
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content " id="MT_TabContent">
              <div className="tab-pane fade" id="MT-tabPane-1" role="tabpanel" aria-labelledby="Edu-tab-1" tabIndex="0">
                {/* <!-- explore-lakshya --> */}

                <div className="row g-4">
                  {boardDetailData.data &&
                    boardDetailData.data.map((item, index) => (
                      <div className="col-md-4" key={index}>
                        <div className="member">
                          {item && item.image ? (
                            <div className="member-img">
                              <div className="bg"></div>
                              <img src={IMAGE_BASE_URL + "/" + item.image} alt="board_directors" />
                            </div>
                          ) : null}
                          <p className="name">{item.name}</p>
                          <p className="designation">{item.designation}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="tab-pane fade show active" id="MT-tabPane-2" role="tabpanel" aria-labelledby="Edu-tab-2" tabIndex="0">
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

                <div className="row g-4">
                  {commitesData.data &&
                    commitesData.data.map((item, index) => (
                      <div className="col-md-4" key={index}>
                        <div className="card-address">
                          <h5>{item && item[index] && item[index].title}</h5>
                          <div className="detail">
                            <ul>
                              {item &&
                                item.map((record) => (
                                  <li>
                                    <span>{record.name}</span>
                                    <span>{record.designation}</span>
                                  </li>
                                ))}
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
    </>
  );
};

const mapStateToProps = (state) => {
  const { AboutReducer } = state;
  const { introData, commitesData, directorsData, keyManagementData } = AboutReducer;
  return {
    commitesData: AboutReducer.commitesData,
    directorsData: AboutReducer.directorsData,
    keyManagementData: AboutReducer.keyManagementData,
    boardDetailData: AboutReducer.boardDetailData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boardCommitteeAPI: () => dispatch(boardCommitteeAPI()),
    boardDirectorAPI: () => dispatch(boardDirectorAPI()),
    boardDetailsAPI: () => dispatch(boardDetailsAPI()),
    keyManagementAPI: () => dispatch(keyManagementAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardOfDirectors);

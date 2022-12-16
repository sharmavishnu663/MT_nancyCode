import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { releaseDataAPI } from "../../../redux/action/investor";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import { WebRoutes } from "../../../routes";

const PostalBallot = ({ releaseDataAPI, releaseData }) => {
  useEffect(() => {
    releaseDataAPI(2);
  }, []);
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
                    Releases
                  </li>
                </ol>
              </nav>

              <h4>Postal Ballot</h4>

              <div className="pills">
                <Link to={WebRoutes.PRESS_RELEASE}>Press Releases</Link>
                <Link to={WebRoutes.POSTAL_BALLOT} className="active">
                  Postal Ballot
                </Link>
                <Link to={WebRoutes.STATUTORY_COMMUNICATION}>Statutory Communication</Link>
                <Link to={WebRoutes.SHAREHOLDING_PATTERN}>Shareholding Pattern</Link>
              </div>
            </div>
          </div>

          <div className="row stories">
            {releaseData &&
              releaseData.data &&
              releaseData.data.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="story">
                    <div className="download">
                      <div className="file-type">
                        <img src="../assets/imgs/icon-pdf.svg" alt="icon" />
                      </div>

                      <div className="file-link">
                        <a href={IMAGE_BASE_URL + "/" + item.file_name} download={IMAGE_BASE_URL + "/" + item.file_name} target="_blank">
                          <img src="../assets/imgs/icon-download.svg" alt="icon" />
                        </a>
                      </div>
                    </div>

                    <h5>
                      {item.file_title} & {item.date}
                    </h5>

                    <p>
                      {item.file_title} & {item.invest_quater}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  const { InvestorReducer } = state;
  const { releaseData } = InvestorReducer;
  return {
    releaseData: InvestorReducer.releaseData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    releaseDataAPI: (data) => dispatch(releaseDataAPI(2)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostalBallot);

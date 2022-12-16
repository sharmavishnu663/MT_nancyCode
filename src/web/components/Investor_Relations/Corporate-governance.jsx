import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CorporateDataAPI } from "../../../redux/action/investor";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import { parseHtml } from "../../../Utils/utils";

const CorporateGovernance = ({ CorporateDataAPI, corporateData }) => {
  useEffect(() => {
    CorporateDataAPI();
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
                    Corporate Governance
                  </li>
                </ol>
              </nav>

              <h4>Corporate Governance</h4>

              <div className="jumbotron bg-light-orange">
                <div className="row">
                  <div className="col-md-6">
                    <h2>
                      <span className="text-orange">Corporate </span>
                      <br />
                      Governance
                    </h2>
                    <p>The Company is committed to maintain the highest standards of Corporate. Governance and adhere to the Corporate Governance requirements as set out in the Listing Agreement. The Company has also implemented several best Corporate Governance practices as prevalent globally</p>
                  </div>

                  <div className="col-md-6">
                    <div className="img-wrapper">
                      <img src="../assets/imgs/governance.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row stories reports">
            {corporateData.data &&
              corporateData.data.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="story report">
                    <div className="download">
                      <div className="file-type">
                        <img src="../assets/imgs/icon-pdf.svg" alt="icon" />
                      </div>

                      <div className="file-link">
                        <a href={IMAGE_BASE_URL + "/" + item.filename} download={IMAGE_BASE_URL + "/" + item.filename} target="_blank">
                          <img src="../assets/imgs/icon-download.svg" alt="icon" />
                        </a>
                      </div>
                    </div>

                    <h5>{item.file_title}</h5>

                    <p>{item.filename}</p>
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
  const { corporateData } = InvestorReducer;
  return {
    corporateData: InvestorReducer.corporateData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    CorporateDataAPI: () => dispatch(CorporateDataAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CorporateGovernance);

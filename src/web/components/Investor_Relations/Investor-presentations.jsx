import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { investorDataAPI, investorSearchApi } from "../../../redux/action/investor";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import { parseHtml } from "../../../Utils/utils";

const InvestorPresentations = ({ investorDataAPI, investorData, investorSearchApi, investorSearchData }) => {
  const [yearSearch, setYearSearch] = useState("All");
  useEffect(() => {
    investorDataAPI();
  }, []);

  const years = investorData.data && [...new Set(investorData.data.map((q) => q.invest_year))];

  const handlesearch = (event) => {
    if (event !== 'Select year all') {
      setYearSearch(event);
      investorSearchApi({ year: event });
    }
    else {
      setYearSearch('All');
      window.location.reload();
    }
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
                    Investor Presentations
                  </li>
                </ol>
              </nav>

              <h4>Investor Presentations</h4>

              <div className="jumbotron bg-light-orange">
                <div className="row">
                  <div className="col-md-6">
                    <h2>
                      <span className="text-orange">Capturing the entire </span>Value Chain
                    </h2>
                    <p>MT Educare has diversified product offering catering to students right from Std. V to students appearing for engineering and medical entrance exams (Including IIT Entrance) exams for CA course and MBA aspirants. We have an experienced managament team consisting of senior professionals having strong background in academic and rich experience.</p>
                  </div>

                  <div className="col-md-6">
                    <div className="img-wrapper">
                      <img src="../assets/imgs/investor.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-8">
                  <h4 className="m-0">Investor Presentations For The Year {yearSearch}</h4>
                </div>

                <div className="col-md-4">
                  <div className="filter-dropdown">
                    <label >Year</label>
                    <select name="year" id="dropdown" value={yearSearch} onChange={(e) => handlesearch(e.target.value)}>
                      <option selected>
                        Select year all
                      </option>
                      {years && years.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row stories reports">
            {investorSearchData && investorSearchData.data ? (
              <>
                {investorSearchData &&
                  investorSearchData.data.map((item, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="story report">
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

                        <h5>{item.quarter_name}</h5>

                        <p>{item.quarter_code}</p>
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <>
                {investorData.data &&
                  investorData.data.map((item, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="story report">
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

                        <h5>{item.quarter_name}</h5>

                        <p>{item.quarter_code}</p>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  const { InvestorReducer } = state;
  const { investorData, investorSearchData } = InvestorReducer;
  return {
    investorData: InvestorReducer.investorData,
    investorSearchData: InvestorReducer.investorSearchData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    investorDataAPI: () => dispatch(investorDataAPI()),
    investorSearchApi: (data) => dispatch(investorSearchApi(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InvestorPresentations);

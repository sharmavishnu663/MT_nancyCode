import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { termsListAPI } from "../../../redux/action/policy";
import { parseHtml } from "../../../Utils/utils";

const TermService = ({ termsListAPI, termsData }) => {
  useEffect(() => {
    termsListAPI();
  }, []);
  return (
    <>
      <section className="cards terms" id="terms-of-service">
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
                    Terms of Service
                  </li>
                </ol>
              </nav>

              <h4>Terms of Service</h4>
            </div>

            <div className="col-md-12 bg-light-orange box-radius service">
              <p>{termsData.data ? parseHtml(termsData.data.description) : ""}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  const { PolicyReducer } = state;
  const { termsData } = PolicyReducer;
  return {
    termsData: PolicyReducer.termsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    termsListAPI: () => dispatch(termsListAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TermService);

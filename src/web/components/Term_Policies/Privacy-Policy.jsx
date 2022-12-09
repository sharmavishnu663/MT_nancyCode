import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { policyListAPI } from "../../../redux/action/policy";
import { parseHtml } from "../../../Utils/utils";

const PrivacyPolicy = ({ policyListAPI, policyData }) => {
  useEffect(() => {
    policyListAPI();
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
                    Privacy Policy
                  </li>
                </ol>
              </nav>

              <h4>Privacy Policy</h4>
            </div>

            <div className="col-md-12 bg-light-orange box-radius service">
              <p>{policyData.data ? parseHtml(policyData.data.description) : ""}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  const { PolicyReducer } = state;
  const { policyData } = PolicyReducer;
  return {
    policyData: PolicyReducer.policyData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    policyListAPI: () => dispatch(policyListAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy);

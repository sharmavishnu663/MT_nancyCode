import React, { useEffect } from "react";
import { connect } from "react-redux";
import { parseHtml } from "../../../Utils/utils";
import { disclaimerListAPI } from "../../../redux/action/policy";
import { Link } from "react-router-dom";

const Disclaimer = ({ disclaimerListAPI, disclaimerData }) => {
  useEffect(() => {
    disclaimerListAPI();
  }, []);
  return (
    <>
      <section class="cards terms" id="privacy-policy">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">
                      <img src="../assets/imgs/icon-back.svg" alt="icon" /> Home
                    </Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Disclaimer
                  </li>
                </ol>
              </nav>

              <h4>Disclaimer</h4>
            </div>

            <div class="col-md-12 bg-light-orange box-radius service">
              <p>{disclaimerData.data ? parseHtml(disclaimerData.data.description) : ""} </p>
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
    disclaimerData: PolicyReducer.disclaimerData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    disclaimerListAPI: () => dispatch(disclaimerListAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Disclaimer);

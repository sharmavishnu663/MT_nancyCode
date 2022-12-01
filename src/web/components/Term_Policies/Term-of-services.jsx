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
      <section class="cards terms" id="terms-of-service">
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
                    Terms of Service
                  </li>
                </ol>
              </nav>

              <h4>Terms of Service</h4>
            </div>

            <div class="col-md-12 bg-light-orange box-radius service">
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

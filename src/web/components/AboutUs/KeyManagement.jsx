import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { keyManagementAPI } from "../../../redux/action/aboutUs";
import { WebRoutes } from "../../../routes";
import { parseHtml } from "../../../Utils/utils";
import About from "./About";

const KeyManagement = ({ keyManagementAPI, keyManagementData }) => {
  useEffect(() => {
    keyManagementAPI();
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
              <p className="sub-headline">Focused, Experienced and the very dynamic pillars of our organization. They, who made us happen.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 pills">
              <Link to={WebRoutes.KEY_MANAGEMENT} className="active">
                Key Management
              </Link>
              <Link to={WebRoutes.BOARD_DIRECTORS}>Board of Directors</Link>
              <Link to={WebRoutes.BOARD_COMMITTEE}>Board Committees</Link>
            </div>
          </div>

          <div className="row">
            {keyManagementData.data &&
              keyManagementData.data.map((item) => (
                <div className="col-md-4">
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
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  const { AboutReducer } = state;
  const { keyManagementData } = AboutReducer;
  return {
    keyManagementData: AboutReducer.keyManagementData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    keyManagementAPI: () => dispatch(keyManagementAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyManagement);

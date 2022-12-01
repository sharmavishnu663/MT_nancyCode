import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { boardDirectorAPI } from "../../../redux/action/aboutUs";
import { WebRoutes } from "../../../routes";
import { parseHtml } from "../../../Utils/utils";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import About from "./About";

const BoardOfDirectors = ({ boardDirectorAPI, directorsData }) => {
  useEffect(() => {
    boardDirectorAPI();
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
              <Link to={WebRoutes.KEY_MANAGEMENT}>Key Management</Link>
              <Link to={WebRoutes.BOARD_DIRECTORS} className="active">
                Board of Directors
              </Link>
              <Link to={WebRoutes.BOARD_COMMITTEE}>Board Committees</Link>
            </div>
          </div>
          <div className="row">
            {directorsData.data &&
              directorsData.data[0].map((item) => (
                <div className="col-md-4">
                  <div className="member">
                    <div className="member-img">
                      <div className="bg"></div>
                      <img src={IMAGE_BASE_URL + "/" + item.v} alt="board_directors" />
                    </div>
                    <p className="name">{item.name}</p>
                    <p className="designation">{item.designation}</p>
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
  const { directorsData } = AboutReducer;
  return {
    directorsData: AboutReducer.directorsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boardDirectorAPI: () => dispatch(boardDirectorAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardOfDirectors);

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { awardsDetailAPI } from "../../../redux/action/aboutUs";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import { WebRoutes } from "../../../routes";
import { parseHtml } from "../../../Utils/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AwardDetails = ({ awardsDetailAPI, awardsDetails }) => {
  const awardId = localStorage.getItem("awardId");
  useEffect(() => {
    awardsDetailAPI(awardId);
  }, []);
  const heroToppersConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const imagesData = awardsDetails.data && awardsDetails.data.image;
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
                  <li className="breadcrumb-item" aria-current="page">
                    <Link to={WebRoutes.AWARD_RECOGNITION}>  Awards and Recognition </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {awardsDetails.data && awardsDetails.data.title}
                  </li>
                </ol>
              </nav>
              <div className="jumbotron bg-light-orange img-slides mb-0">
                <div className="row">
                  <div className="col-md-6">
                    <h2>{awardsDetails.data && awardsDetails.data.title}</h2>
                  </div>

                  <div className="col-md-6 shape-wrapper">
                    <div className="img-wrapper img-slider">
                      <Slider className="owl-theme top-students top-students-a MT-OwlDots" {...heroToppersConfig}>
                        {imagesData &&
                          JSON.parse(imagesData).map((item) => (
                            <div className="item">
                              <a href={item && IMAGE_BASE_URL + "/awards/" + item} data-fancybox="gallery" data-caption="Optional caption">
                                <img src={item && IMAGE_BASE_URL + "/awards/" + item} alt="award-data" />
                              </a>
                              {/* <img src={IMAGE_BASE_URL + "/awards/" + item} alt="image" /> */}
                            </div>
                          ))}
                      </Slider>
                    </div>

                    <div className="shapes">
                      <img src="../../assets/imgs/shapes.svg" alt="illustration" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row stories reports">
            <div className="col-md-12">
              <p>{awardsDetails.data && parseHtml(awardsDetails.data.description)}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  const { AboutReducer } = state;
  const { awardsDetails } = AboutReducer;
  return {
    awardsDetails: AboutReducer.awardsDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    awardsDetailAPI: (data) => dispatch(awardsDetailAPI(localStorage.getItem("awardId"))),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AwardDetails);

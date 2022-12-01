import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { awardsDetailAPI } from "../../../redux/action/aboutUs";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import { WebRoutes } from "../../../routes";
import { parseHtml } from "../../../Utils/utils";
import OwlCarousel from "react-owl-carousel";

const AwardDetails = ({ awardsDetailAPI, awardsDetails }) => {
  const awardId = localStorage.getItem("awardId");
  useEffect(() => {
    awardsDetailAPI(awardId);
  }, []);
  const heroToppersConfig = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    // autoplaySpeed: 2000,
    margin: 0,
    dots: true,
    responsive: {
      0: {
        items: 1,
      }
    },
  };
  const imagesData = awardsDetails.data && awardsDetails.data.image;
  return (
    <>
      <section class="cards terms" id="privacy-policy">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="jumbotron bg-light-orange img-slides mb-0">
                <div class="row">
                  <div class="col-md-6">
                    <h2>{awardsDetails.data && awardsDetails.data.title}</h2>
                  </div>

                  <div class="col-md-6 shape-wrapper">
                    <div class="img-wrapper img-slider">
                      <OwlCarousel className="owl-theme top-students top-students-a MT-OwlDots" {...heroToppersConfig}>

                        {imagesData && JSON.parse(imagesData).map((item) =>
                          <div className="item">
                            <img src={IMAGE_BASE_URL + "/awards/" + item} alt="image" />
                          </div>
                        )}

                      </OwlCarousel>
                    </div>

                    <div class="shapes">
                      <img src="../../assets/imgs/shapes.svg" alt="illustration" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row stories reports">
            <div class="col-md-12">
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

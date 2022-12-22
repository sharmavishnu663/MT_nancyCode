import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { CSRAPI } from "../../../redux/action/gallery";
import { WebRoutes } from "../../../routes";
import { parseHtml } from "../../../Utils/utils";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Csr = ({ CSRAPI, CSRData }) => {
  useEffect(() => {
    CSRAPI();
  }, []);
  const toppersConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
  };

  // console.log('vishnu Csr' + CSRData);
  return (
    <>
      {/* Header  */}
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
                    CSR
                  </li>
                </ol>
              </nav>

              <h4>CSR</h4>
            </div>
          </div>
        </div>
      </section>
      {/* Header ends here */}

      {/* CSR Card starts here */}
      <section className="about-us csr">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="csr-wrapper">
                <Slider {...toppersConfig} className="MT-SlickDots">
                  {CSRData &&
                    CSRData.data &&
                    CSRData.data.map((item, index) => (
                      <div className="item px-2" key={index}>
                        <div className="timeline-card csr-card pb-5">
                          <div className="content">
                            <div className="row">
                              <div className="col-md-12">
                                <img src={IMAGE_BASE_URL + "/" + item.image} alt="illustration" />
                                <h2 className="mb-4"> {parseHtml(item.title)} </h2>
                                {parseHtml(item.description)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CSR Card ends here */}
    </>
  );
};

const mapStateToProps = (state) => {
  const { GalleryReducer } = state;
  const { CSRData } = GalleryReducer;
  return {
    CSRData: GalleryReducer.CSRData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    CSRAPI: () => dispatch(CSRAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Csr);

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { CSRAPI } from "../../../redux/action/gallery";
import { WebRoutes } from "../../../routes";
import { parseHtml } from "../../../Utils/utils";
import OwlCarousel from "react-owl-carousel";
import { IMAGE_BASE_URL } from "../../../redux/constants";

const Csr = ({ CSRAPI, CSRData }) => {
  useEffect(() => {
    CSRAPI();
  }, []);
  const toppersConfig = {
    loop: true,
    autoplay: true,
    margin: 40,
    dots: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
    },
  };
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
                <OwlCarousel className="owl-theme MT-OwlDots" {...toppersConfig}>
                  {CSRData &&
                    CSRData.data &&
                    CSRData.data.map((item) => (
                      <div className="item">
                        <div className="timeline-card csr-card">
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
                </OwlCarousel>
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

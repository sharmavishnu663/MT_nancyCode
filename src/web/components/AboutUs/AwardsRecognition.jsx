import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { awardsAPI } from "../../../redux/action/aboutUs";
import { WebRoutes } from "../../../routes";
import { parseHtml } from "../../../Utils/utils";
import Awards from "../Cards/Awards";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import OwlCarousel from "react-owl-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AwardsRecognition = ({ awardsAPI, awardsData }) => {
  const [imageData, setImageData] = useState();
  useEffect(() => {
    awardsAPI();
  }, []);
  const hanldeAwardDetail = (id) => {
    localStorage.setItem("awardId", id);
  };
  const toppersConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  const imagesData = awardsData.data && awardsData.data[0] && awardsData.data[0].image;
  return (
    <>
      {/* ======== Header =============== */}
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
                    Awards and Recognition
                  </li>
                </ol>
              </nav>

              <h4>Awards and Recognition</h4>
            </div>
          </div>
        </div>
      </section>
      {/* ========== Header ends here ==========*/}

      {/* =========== AWARDS STARTS HERE ========= */}
      <section className="cards" id="offerings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 box-radius pt-0 awards">
              <div className="articles our-offerings mt-0">
                <Slider className="owl-theme MT-OwlDots toppersCarousel" {...toppersConfig}>
                  {awardsData.data &&
                    awardsData.data.map((item) => (
                      <div className="item px-3 pb-5">
                        <div className="article">
                          <div className="thumbnail">
                            {imagesData &&
                              JSON.parse(imagesData)
                                .slice(0, 1)
                                .map((item1) => <img src={IMAGE_BASE_URL + "/awards/" + item1} alt="image" />)}
                          </div>

                          <div className="detail">
                            <h5>{item.title}</h5>
                            <div className="description">
                              <p>{parseHtml(item.description.substring(0, 100))}</p>
                            </div>
                            <div className="tag-link justify-content-end">
                              <Link to={WebRoutes.AWARD_DETAIL} onClick={(e) => hanldeAwardDetail(item.id)} className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </Link>
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

      {/* ======== AWARDS ENDS HERE =============*/}
    </>
  );
};

const mapStateToProps = (state) => {
  const { AboutReducer } = state;
  const { awardsData } = AboutReducer;
  return {
    awardsData: AboutReducer.awardsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    awardsAPI: () => dispatch(awardsAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AwardsRecognition);

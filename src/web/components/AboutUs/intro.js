import React, { useEffect } from "react";
import { connect } from "react-redux";
import { parseHtml } from "../../../Utils/utils";
import OwlCarousel from "react-owl-carousel";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import { introDataAPI } from "../../../redux/action/aboutUs";

const keyValue = "";
const Intro = ({ introData, activeYear, introDataAPI, introDataDetailData }) => {
  console.log(activeYear);
  useEffect(() => {
    if (activeYear) {
      introDataAPI(activeYear);
    }
  }, [activeYear]);
  const aboutUs =
    introData.data &&
    introData.data.filter((item) => {
      return activeYear !== undefined ? item.id == activeYear : introData.data[0];
    });

  const toppersConfig = {
    loop: true,
    autoplay: false,
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
      {introDataDetailData && introDataDetailData.data ? (
        <OwlCarousel {...toppersConfig}>
          {introDataDetailData && (
            // introDataDetailData.map((item) => (
            <>
              <div className="row align-items-center">
                <div className="item col-md-6">
                  <h2 className="mb-4">
                    <span className="text-orange">{introDataDetailData && introDataDetailData.data && introDataDetailData.data.title} this ss</span>
                  </h2>
                  <p>{introDataDetailData && introDataDetailData.data && parseHtml(introDataDetailData.data.description)} </p>
                  {introDataDetailData && introDataDetailData.data && JSON.parse(introDataDetailData.data.key_highlights).center && (
                    <>
                      <p className="big">Key Highlights</p>

                      <ul className="highlights">
                        <li>
                          <span>Number of centers </span>
                          <span>: {introDataDetailData && introDataDetailData.data && JSON.parse(introDataDetailData.data.key_highlights).center}</span>
                        </li>
                        <li>
                          <span>Revenue</span>
                          <span>: Rs.{introDataDetailData && introDataDetailData.data && JSON.parse(introDataDetailData.data.key_highlights).revenue} Crores</span>
                        </li>
                        <li>
                          <span>Number of students</span>
                          <span>: {introDataDetailData && introDataDetailData.data && JSON.parse(introDataDetailData.data.key_highlights).students}+</span>
                        </li>
                      </ul>
                    </>
                  )}
                </div>

                <div className="col-md-6 text-center">
                  <img src={introDataDetailData && introDataDetailData.data && IMAGE_BASE_URL + "/" + introDataDetailData.data.image} alt="illustration" />
                </div>
              </div>
            </>
          )}
        </OwlCarousel>
      ) : (
        <OwlCarousel {...toppersConfig}>
          {aboutUs &&
            aboutUs.map((item) => (
              <>
                <div className="row align-items-center">
                  <div className="item col-md-6">
                    <h2 className="mb-4">
                      <span className="text-orange">{item.title} this sdf</span>
                    </h2>
                    <p>{parseHtml(item.description)} </p>
                    {JSON.parse(item.key_highlights).center && (
                      <>
                        <p className="big">Key Highlights</p>

                        <ul className="highlights">
                          <li>
                            <span>Number of centers </span>
                            <span>: {JSON.parse(item.key_highlights).center}</span>
                          </li>
                          <li>
                            <span>Revenue</span>
                            <span>: Rs.{JSON.parse(item.key_highlights).revenue} Crores</span>
                          </li>
                          <li>
                            <span>Number of students</span>
                            <span>: {JSON.parse(item.key_highlights).students}+</span>
                          </li>
                        </ul>
                      </>
                    )}
                  </div>

                  <div className="col-md-6 text-center">
                    <img src={IMAGE_BASE_URL + "/" + item.image} alt="illustration" />
                  </div>
                </div>
              </>
            ))}
        </OwlCarousel>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { AboutReducer } = state;
  const { introDataDetailData } = AboutReducer;
  return {
    introDataDetailData: AboutReducer.introDataDetailData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    introDataAPI: (data) => dispatch(introDataAPI(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);

import React from "react";
import OwlCarousel from "react-owl-carousel";
import { IMAGE_BASE_URL } from "../../../redux/constants";

const TopperDetails = ({ toppersData }) => {
  const toppersConfig = {
    loop: true,
    autoplay: true,
    margin: 40,
    dots: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  };
  return (
    <>
      <section className="our-toppers">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>
                Meet our <span>toppers</span>
              </h3>
              <p>Meet these shining stars who made it at the top and are proud to be called toppers of there exams.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9 mx-auto">
              <OwlCarousel className="owl-theme MT-OwlDots toppersCarousel" {...toppersConfig}>
                {toppersData &&
                  toppersData.data &&
                  toppersData.data.map((item, index) => (
                    <div className="item" key={index}>
                      <div className="toppers">
                        <div className="student-card">
                          <div className="detail">
                            <h4 className="text-orange">{item.percentage}</h4>
                            <p className="name">{item.name}</p>
                            <p className="rank">{item.description}</p>
                          </div>

                          <img src={IMAGE_BASE_URL + "/" + item.image} alt="topper" />
                        </div>
                      </div>
                    </div>
                  ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopperDetails;

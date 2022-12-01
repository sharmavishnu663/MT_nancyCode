import React from "react";
import OwlCarousel from "react-owl-carousel";
import { IMAGE_BASE_URL } from "../../../redux/constants";

const TopperDetails = ({ toppersData }) => {
  const toppersConfig = {
    loop: false,
    autoplay: false,
    margin: 40,
    dots: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  return (
    <>
      <section class="our-toppers">
        <div class="container">
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
                  toppersData.data.map((item) => (
                    <div className="item">
                      <div class="toppers">
                        <div class="student-card">
                          <div class="detail">
                            <h4 class="text-orange">{item.percentage}</h4>
                            <p class="name">{item.name}</p>
                            <p class="rank">{item.description}</p>
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

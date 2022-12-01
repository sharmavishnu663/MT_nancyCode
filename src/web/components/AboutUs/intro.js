import React from "react";
import { parseHtml } from "../../../Utils/utils";
import OwlCarousel from "react-owl-carousel";
import { IMAGE_BASE_URL } from "../../../redux/constants";

const keyValue = "";
const Intro = ({ introData, activeYear }) => {
  const aboutUs =
    introData.data &&
    introData.data.filter((item) => {
      return activeYear ? item.id == activeYear : introData.data[0];
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

      <OwlCarousel {...toppersConfig}>
        {aboutUs &&
          aboutUs.map((item) => (
            <>
              <div class="row align-items-center">
                <div className="item col-md-6">
                  <h2 className="mb-4">
                    <span className="text-orange">{item.title}</span>
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
    </>
  );
};

export default Intro;

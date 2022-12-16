import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import Modal from "react-bootstrap/Modal";
import { parseHtml } from "../../../Utils/utils";

const Offerings = ({ weOfferData }) => {
  const OfferingsConfig = {
    loop: false,
    autoplay: false,
    margin: 0,
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
        items: 3,
      },
    },
  };

  const [show, setShow] = useState(false);
  const [ReadMoreCWETitle, setReadMoreCWETitle] = useState("");
  const [ReadMoreCWEDescription, setReadMoreCWEDescription] = useState("");
  const readMoreModal = (title, description) => {
    setShow(true);
    setReadMoreCWETitle(title);
    setReadMoreCWEDescription(description);
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} centered size="md">
        <Modal.Body>
          <div className="articles our-courses p-0">
            <div className="article border-0">
              <div className="detail p-2">
                <h5>{ReadMoreCWETitle}</h5>
                <div className="description">
                  <p>{ReadMoreCWEDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <section className="cards" id="offerings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 box-radius">
              <h3 className="headline text-center mb-3">
                Our <span className="text-orange">Offerings</span>
              </h3>
              <p className="sub-headline text-center full">MT Educare is truly a national player with multi-city presence and a diverse product portfolio, standing a class apart due to technology enabled business processes, digital content delivery and 24 x 7 online support for the courses offered.</p>
              <br />
              <OwlCarousel {...OfferingsConfig} className="owl-theme MT-OwlDots">
                {weOfferData &&
                  weOfferData.data &&
                  weOfferData.data.map((item, index) => (
                    <div className="item" key={index}>
                      <div className="articles">
                        <div className="article">
                          <div className="thumbnail">
                            <a href={item && item.link_url} target="_blank">
                              <img src={item && IMAGE_BASE_URL + "" + item.image} alt="image" />
                            </a>
                          </div>

                          <div className="detail">
                            <h5>{item && item.title}</h5>
                            <div className="description">
                              <p>{item && parseHtml(item.description.substring(0, 150))}</p>
                              {item && item.description.length > 150 ? (
                                <span
                                  onClick={() => {
                                    readMoreModal(item.title, item.description);
                                  }}
                                  role="button"
                                >
                                  Read more...
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                            <div className="tag-link justify-content-end">
                              <a href={item && item.link_url} className="btn btn-sm" target="_blank">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </a>
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
      </section>
    </>
  );
};

export default Offerings;

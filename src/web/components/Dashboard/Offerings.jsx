import React from "react";
import OwlCarousel from "react-owl-carousel";

function Offerings() {
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
  return (
    <>
      <section className="cards" id="offerings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 box-radius">
              <h3 className="headline text-center mb-3">
                Our <span className="text-orange">Offerings</span>
              </h3>
              <p className="sub-headline text-center full">MT Educare is truly a national player with multi-city presence and a diverse product portfolio, standing a class apart due to technology enabled business processes, digital content delivery and 24 x 7 online support for the courses offered.</p>

              <OwlCarousel {...OfferingsConfig} className="owl-theme MT-OwlDots">
                <div className="item">
                  <div className="articles">
                    <div className="article">
                      <div className="thumbnail">
                        <a href="https://roboestore.com/" target="_blank">
                          <img src="../assets/imgs/offer1.png" alt="image" />
                        </a>
                      </div>

                      <div className="detail">
                        <h5>Robomate+</h5>
                        <div className="description">
                          <p>Get experts advise & start referring to the question papers of previous yrs.</p>
                        </div>
                        <div className="tag-link justify-content-end">
                          <a href="https://roboestore.com/" className="btn btn-sm" target="_blank">
                            <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="articles">
                    <div className="article">
                      <div className="thumbnail">
                        <a href="https://www.lakshyainstitute.com/" target="_blank">
                          <img src="../assets/imgs/offer2.png" alt="image" />
                        </a>
                      </div>

                      <div className="detail">
                        <h5>Mahesh Tutorial School Section</h5>
                        <div className="description">
                          <p>Get experts advise & start referring to the question papers of previous yrs.</p>
                        </div>
                        <div className="tag-link justify-content-end">
                          <a href="https://www.lakshyainstitute.com/" className="btn btn-sm" target="_blank">
                            <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="articles">
                    <div className="article">
                      <div className="thumbnail">
                        <a href="https://www.lakshyainstitute.com/" target="_blank">
                          <img src="../assets/imgs/offer3.png" alt="image" />
                        </a>
                      </div>

                      <div className="detail">
                        <h5>Lakshya Forum for Competitions</h5>
                        <div className="description">
                          <p>Get experts advise & start referring to the question papers of previous yrs.</p>
                        </div>
                        <div className="tag-link justify-content-end">
                          <a href="https://www.lakshyainstitute.com/" className="btn btn-sm" target="_blank">
                            <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="articles">
                    <div className="article">
                      <div className="thumbnail">
                        <a href="https://www.lakshyainstitute.com/" target="_blank">
                          <img src="../assets/imgs/offer2.png" alt="image" />
                        </a>
                      </div>

                      <div className="detail">
                        <h5>Mahesh Tutorial School Section</h5>
                        <div className="description">
                          <p>Get experts advise & start referring to the question papers of previous yrs.</p>
                        </div>
                        <div className="tag-link justify-content-end">
                          <a href="https://www.lakshyainstitute.com/" className="btn btn-sm" target="_blank">
                            <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Offerings;

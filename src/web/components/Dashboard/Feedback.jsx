// import FeedbackCard from "../Cards/FeedbackCard";
import OwlCarousel from "react-owl-carousel";

function Feedback() {
  const OfferingsConfig = {
    loop: true,
    autoplay: false,
    autoplayTimeout: 2000,
    margin: 0,
    dots: true,
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
      <section className="cards" id="feedbacks">
        <div className="container">
          <div className="row">
            <div className="col-md-12 box-radius">
              <h3 className="headline text-center mb-3 full">
                Hear it from our <span className="text-blue">students & parents</span>
              </h3>
              <p className="sub-headline text-center">Our alumni and their parents appreciate what we at MT Educare have to offer. Want to join the league? Signup now.</p>
              <OwlCarousel className="owl-theme MT-OwlDots" {...OfferingsConfig}>
                <div className="item">
                  <div className="articles">
                    <div className="article">
                      <div className="detail">
                        <div className="description">
                          <p>"This Course is amazing with the current version, I can’t imagine it, how cool will it be when you finish the all. This Course is amazing with the current version, I can’t imagine it.</p>
                        </div>

                        <div className="profile">
                          <img src="../assets/imgs/img-profile-placeholder.png" alt="placeholder" />

                          <div className="user">
                            <p className="name">Jeremy Bieber</p>
                            <p className="role">Architect</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="articles">
                    <div className="article">
                      <div className="detail">
                        <div className="description">
                          <p>"This Course is amazing with the current version, I can’t imagine it, how cool will it be when you finish the all. This Course is amazing with the current version, I can’t imagine it.</p>
                        </div>

                        <div className="profile">
                          <img src="../assets/imgs/img-profile-placeholder.png" alt="placeholder" />

                          <div className="user">
                            <p className="name">Jeremy Bieber</p>
                            <p className="role">Architect</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="articles">
                    <div className="article">
                      <div className="detail">
                        <div className="description">
                          <p>"This Course is amazing with the current version, I can’t imagine it, how cool will it be when you finish the all. This Course is amazing with the current version, I can’t imagine it.</p>
                        </div>

                        <div className="profile">
                          <img src="../assets/imgs/img-profile-placeholder.png" alt="placeholder" />

                          <div className="user">
                            <p className="name">Jeremy Bieber</p>
                            <p className="role">Architect</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="articles">
                    <div className="article">
                      <div className="detail">
                        <div className="description">
                          <p>"This Course is amazing with the current version, I can’t imagine it, how cool will it be when you finish the all. This Course is amazing with the current version, I can’t imagine it.</p>
                        </div>

                        <div className="profile">
                          <img src="../assets/imgs/img-profile-placeholder.png" alt="placeholder" />

                          <div className="user">
                            <p className="name">Jeremy Bieber</p>
                            <p className="role">Architect</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="articles">
                    <div className="article">
                      <div className="detail">
                        <div className="description">
                          <p>"This Course is amazing with the current version, I can’t imagine it, how cool will it be when you finish the all. This Course is amazing with the current version, I can’t imagine it.</p>
                        </div>

                        <div className="profile">
                          <img src="../assets/imgs/img-profile-placeholder.png" alt="placeholder" />

                          <div className="user">
                            <p className="name">Jeremy Bieber</p>
                            <p className="role">Architect</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="articles">
                    <div className="article">
                      <div className="detail">
                        <div className="description">
                          <p>"This Course is amazing with the current version, I can’t imagine it, how cool will it be when you finish the all. This Course is amazing with the current version, I can’t imagine it.</p>
                        </div>

                        <div className="profile">
                          <img src="../assets/imgs/img-profile-placeholder.png" alt="placeholder" />

                          <div className="user">
                            <p className="name">Jeremy Bieber</p>
                            <p className="role">Architect</p>
                          </div>
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

export default Feedback;

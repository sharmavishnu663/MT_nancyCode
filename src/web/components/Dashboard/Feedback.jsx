// import FeedbackCard from "../Cards/FeedbackCard";
import OwlCarousel from "react-owl-carousel";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import { parseHtml } from "../../../Utils/utils";

const Feedback = ({ studentHearData }) => {
  const OfferingsConfig = {
    loop: false,
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
              <br />
              <OwlCarousel className="owl-theme MT-OwlDots" {...OfferingsConfig}>
                {studentHearData &&
                  studentHearData.data &&
                  studentHearData.data.map((item) => (
                    <div className="item">
                      <div className="articles">
                        <div className="article">
                          <div className="detail">
                            <div className="description">
                              <p>{item && parseHtml(item.description)}</p>
                            </div>

                            <div className="profile">
                              <img src={item && IMAGE_BASE_URL + "" + item.image} alt="placeholder" />

                              <div className="user">
                                <p className="name">{item && item.name}</p>
                                <p className="role">{item && item.designation}</p>
                              </div>
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

export default Feedback;

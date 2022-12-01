import React from "react";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <>
      {/* ====================== COURSES Starts here ======================= */}
      <section className="cards" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-light-blue box-radius">
              <h3 className="headline text-center mb-3">
                <span className="text-blue">Courses</span> we offer
              </h3>
              <p className="sub-headline text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat montes, pharetra cras odio nec scelerisque viverra.</p>
              <div className="carousel carousel-dark slide carousel-fade">
                <div className="article-header">
                  <div className="pills">
                    <Link to="/courses/competativeExams" className="active">
                      Competative Exams
                    </Link>
                    <Link to="/courses/college">College</Link>
                    <Link to="/courses/school">School</Link>
                  </div>

                  <div className="view-all">
                    <a href="#">View All</a>
                  </div>
                </div>
              </div>

              <div className="explore-lakshya bg-light-orange">
                <div>
                  <img src="../assets/imgs/lakshya-logo.png" alt="lakshya-logo" />
                  <p>Lakshay is our partner which provides the higher secondary education science courses for competitive exams.</p>
                </div>
                <a href="https://www.lakshyainstitute.com/" className="btn btn-lg">
                  Explore Lakshya
                </a>
              </div>

              <div className="articles">
                <div className="article">
                  <div className="thumbnail">
                    <img src="../assets/imgs/article1.png" alt="image" />
                  </div>

                  <div className="detail">
                    <h5>Best IIT JEE Coaching</h5>
                    <div className="description">
                      <p>Lakshya offers unparalleled IIT JEE coaching in India which results in producing top rankers in entrance exams who go on to become world-className engineers and technologists.</p>
                    </div>
                    <div className="tag-link">
                      <div className="tag">IIT JEE</div>
                      <a href="#" className="btn btn-sm">
                        <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="article">
                  <div className="thumbnail">
                    <img src="../assets/imgs/article2.png" alt="image" />
                  </div>

                  <div className="detail">
                    <h5>Top NEET Coaching</h5>
                    <div className="description">
                      <p>NEET is the most important exam for medical aspirants, as it is required for them to join the best medical college in the country.</p>
                    </div>
                    <div className="tag-link">
                      <div className="tag">NEET</div>
                      <a href="#" className="btn btn-sm">
                        <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="article">
                  <div className="thumbnail">
                    <img src="../assets/imgs/article3.png" alt="image" />
                  </div>

                  <div className="detail">
                    <h5>NTSE Coaching</h5>
                    <div className="description">
                      <p>National Talent Search Examination is one of the most recognized examinations in India which is conducted by NCERT.</p>
                    </div>
                    <div className="tag-link">
                      <div className="tag">NTSE</div>
                      <a href="#" className="btn btn-sm">
                        <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* COURSES Ends here */}
    </>
  );
}

export default Courses;
